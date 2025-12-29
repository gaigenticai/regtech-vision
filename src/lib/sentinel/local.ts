import { z } from "zod";

export type LocalHttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export type LocalRequest = {
  method: LocalHttpMethod;
  path: string;
  headers: Record<string, string>;
  bodyText: string | null;
};

export type LocalResponse = {
  status: number;
  headers: Record<string, string>;
  body: unknown;
};

const DB_NAME = "sentinel_sandbox_db";
const DB_VERSION = 1;

type StoreName =
  | "memory_records"
  | "kb_documents"
  | "kb_chunks"
  | "sessions"
  | "session_messages"
  | "tools"
  | "tool_ops"
  | "audit_events";

type MemoryRecord = {
  id: string;
  scope: string;
  type: string;
  content: string;
  tags: string[];
  metadata: Record<string, unknown>;
  createdAt: string;
  embedding: Float32Array | null;
};

type KbDocument = {
  id: string;
  scope: string;
  source: string;
  title: string | null;
  metadata: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
};

type KbChunk = {
  id: string;
  scope: string;
  documentId: string;
  chunkIndex: number;
  content: string;
  createdAt: string;
  embedding: Float32Array;
};

type Session = {
  id: string;
  scope: string;
  title: string | null;
  state: Record<string, unknown> | null;
  metadata: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
};

type SessionMessage = {
  id: string;
  scope: string;
  sessionId: string;
  role: "system" | "user" | "assistant" | "tool";
  content: string;
  createdAt: string;
  embedding: Float32Array | null;
};

type Tool = {
  id: string;
  scope: string;
  name: string;
  kind: "http";
  baseUrl: string;
  enabled: boolean;
  timeoutMs: number;
  config: { headers: Record<string, string> };
  createdAt: string;
  updatedAt: string;
};

type ToolOperation = {
  id: string;
  scope: string;
  toolId: string;
  name: string;
  method: LocalHttpMethod;
  path: string;
  enabled: boolean;
  headers: Record<string, string>;
  createdAt: string;
};

type AuditEvent = {
  id: string;
  scope: string;
  actor: string;
  eventType: string;
  payload: Record<string, unknown>;
  createdAt: string;
};

const nowIso = () => new Date().toISOString();
const uuid = () => crypto.randomUUID();

let dbPromise: Promise<IDBDatabase> | null = null;

function openDb(): Promise<IDBDatabase> {
  if (dbPromise) return dbPromise;
  dbPromise = new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onerror = () => reject(req.error ?? new Error("Failed to open IndexedDB"));
    req.onupgradeneeded = () => {
      const db = req.result;
      const ensureStore = (name: StoreName, opts: IDBObjectStoreParameters) => {
        if (!db.objectStoreNames.contains(name)) db.createObjectStore(name, opts);
      };

      ensureStore("memory_records", { keyPath: "id" });
      ensureStore("kb_documents", { keyPath: "id" });
      ensureStore("kb_chunks", { keyPath: "id" });
      ensureStore("sessions", { keyPath: "id" });
      ensureStore("session_messages", { keyPath: "id" });
      ensureStore("tools", { keyPath: "id" });
      ensureStore("tool_ops", { keyPath: "id" });
      ensureStore("audit_events", { keyPath: "id" });

      const makeIndexes = () => {
        const tx = req.transaction;
        if (!tx) return;
        const addIndex = (store: IDBObjectStore, name: string, keyPath: string | string[], options?: IDBIndexParameters) => {
          if (!store.indexNames.contains(name)) store.createIndex(name, keyPath, options);
        };

        addIndex(tx.objectStore("memory_records"), "by_scope", "scope");
        addIndex(tx.objectStore("kb_documents"), "by_scope", "scope");
        addIndex(tx.objectStore("kb_chunks"), "by_scope", "scope");
        addIndex(tx.objectStore("kb_chunks"), "by_scope_doc", ["scope", "documentId"]);
        addIndex(tx.objectStore("sessions"), "by_scope", "scope");
        addIndex(tx.objectStore("session_messages"), "by_scope", "scope");
        addIndex(tx.objectStore("session_messages"), "by_session", "sessionId");
        addIndex(tx.objectStore("tools"), "by_scope", "scope");
        addIndex(tx.objectStore("tool_ops"), "by_scope_tool", ["scope", "toolId"]);
        addIndex(tx.objectStore("audit_events"), "by_scope", "scope");
      };

      makeIndexes();
    };
    req.onsuccess = () => resolve(req.result);
  });
  return dbPromise;
}

function tx<T>(db: IDBDatabase, storeNames: StoreName[], mode: IDBTransactionMode, fn: (stores: Record<StoreName, IDBObjectStore>) => Promise<T>) {
  const transaction = db.transaction(storeNames, mode);
  const stores = Object.fromEntries(
    storeNames.map((n) => [n, transaction.objectStore(n)])
  ) as Record<StoreName, IDBObjectStore>;

  const done = new Promise<void>((resolve, reject) => {
    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error ?? new Error("IndexedDB transaction error"));
    transaction.onabort = () => reject(transaction.error ?? new Error("IndexedDB transaction aborted"));
  });

  const run = fn(stores);
  return Promise.all([run, done]).then(([result]) => result);
}

function idbGet<T>(store: IDBObjectStore, key: IDBValidKey): Promise<T | undefined> {
  return new Promise((resolve, reject) => {
    const req = store.get(key);
    req.onerror = () => reject(req.error ?? new Error("IndexedDB get failed"));
    req.onsuccess = () => resolve(req.result as T | undefined);
  });
}

function idbPut(store: IDBObjectStore, value: unknown): Promise<void> {
  return new Promise((resolve, reject) => {
    const req = store.put(value);
    req.onerror = () => reject(req.error ?? new Error("IndexedDB put failed"));
    req.onsuccess = () => resolve();
  });
}

function idbDelete(store: IDBObjectStore, key: IDBValidKey): Promise<void> {
  return new Promise((resolve, reject) => {
    const req = store.delete(key);
    req.onerror = () => reject(req.error ?? new Error("IndexedDB delete failed"));
    req.onsuccess = () => resolve();
  });
}

function idbClear(store: IDBObjectStore): Promise<void> {
  return new Promise((resolve, reject) => {
    const req = store.clear();
    req.onerror = () => reject(req.error ?? new Error("IndexedDB clear failed"));
    req.onsuccess = () => resolve();
  });
}

function idbCount(store: IDBObjectStore): Promise<number> {
  return new Promise((resolve, reject) => {
    const req = store.count();
    req.onerror = () => reject(req.error ?? new Error("IndexedDB count failed"));
    req.onsuccess = () => resolve(req.result);
  });
}

async function idbGetAllByIndex<T>(store: IDBObjectStore, indexName: string, key: IDBValidKey): Promise<T[]> {
  const index = store.index(indexName);
  return new Promise((resolve, reject) => {
    const items: T[] = [];
    const req = index.openCursor(IDBKeyRange.only(key));
    req.onerror = () => reject(req.error ?? new Error("IndexedDB cursor failed"));
    req.onsuccess = () => {
      const cursor = req.result;
      if (!cursor) {
        resolve(items);
        return;
      }
      items.push(cursor.value as T);
      cursor.continue();
    };
  });
}

function normalizeHeaderMap(headers: Record<string, string>) {
  const out: Record<string, string> = {};
  for (const [k, v] of Object.entries(headers)) out[k.toLowerCase()] = v;
  return out;
}

function parsePathAndQuery(path: string) {
  const u = new URL(path.startsWith("http") ? path : `http://local${path}`);
  return {
    pathname: u.pathname,
    query: Object.fromEntries(u.searchParams.entries())
  };
}

const textToTokens = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .split(/\s+/)
    .filter((t) => t.length > 1);

function murmur3_32(str: string, seed = 0) {
  let h = seed >>> 0;
  let k = 0;
  for (let i = 0, n = str.length; i < n; i++) {
    k = str.charCodeAt(i);
    k = Math.imul(k, 0xcc9e2d51);
    k = (k << 15) | (k >>> 17);
    k = Math.imul(k, 0x1b873593);
    h ^= k;
    h = (h << 13) | (h >>> 19);
    h = (Math.imul(h, 5) + 0xe6546b64) >>> 0;
  }
  h ^= str.length;
  h ^= h >>> 16;
  h = Math.imul(h, 0x85ebca6b);
  h ^= h >>> 13;
  h = Math.imul(h, 0xc2b2ae35);
  h ^= h >>> 16;
  return h >>> 0;
}

function embedTextFeatureHash(text: string, dims = 384): Float32Array {
  const v = new Float32Array(dims);
  const tokens = textToTokens(text);
  for (const t of tokens) {
    const h = murmur3_32(t);
    const idx = h % dims;
    v[idx] += 1;
  }
  let norm = 0;
  for (let i = 0; i < v.length; i++) norm += v[i] * v[i];
  norm = Math.sqrt(norm) || 1;
  for (let i = 0; i < v.length; i++) v[i] /= norm;
  return v;
}

function cosineSim(a: Float32Array, b: Float32Array) {
  const n = Math.min(a.length, b.length);
  let dot = 0;
  for (let i = 0; i < n; i++) dot += a[i] * b[i];
  return dot;
}

function bm25Scores(docs: { id: string; text: string }[], query: string) {
  const k1 = 1.2;
  const b = 0.75;
  const qTokens = textToTokens(query);
  const N = docs.length || 1;

  const docTokens = docs.map((d) => ({ id: d.id, tokens: textToTokens(d.text) }));
  const dl = docTokens.map((d) => d.tokens.length);
  const avgdl = dl.reduce((a, x) => a + x, 0) / (dl.length || 1);

  const df = new Map<string, number>();
  for (const t of qTokens) df.set(t, 0);
  for (const d of docTokens) {
    const seen = new Set(d.tokens);
    for (const t of qTokens) {
      if (seen.has(t)) df.set(t, (df.get(t) ?? 0) + 1);
    }
  }

  const idf = new Map<string, number>();
  for (const t of qTokens) {
    const n = df.get(t) ?? 0;
    idf.set(t, Math.log(1 + (N - n + 0.5) / (n + 0.5)));
  }

  const scoreById = new Map<string, number>();
  for (let i = 0; i < docTokens.length; i++) {
    const { id, tokens } = docTokens[i];
    const freq = new Map<string, number>();
    for (const t of tokens) freq.set(t, (freq.get(t) ?? 0) + 1);
    let score = 0;
    const docLen = dl[i] || 0;
    for (const t of qTokens) {
      const f = freq.get(t) ?? 0;
      if (f === 0) continue;
      const denom = f + k1 * (1 - b + b * (docLen / (avgdl || 1)));
      score += (idf.get(t) ?? 0) * (f * (k1 + 1)) / denom;
    }
    scoreById.set(id, score);
  }
  return scoreById;
}

function chunkText(content: string, maxChars = 700) {
  const clean = content.replace(/\r\n/g, "\n").trim();
  if (!clean) return [];
  const parts = clean
    .split(/\n{2,}/)
    .flatMap((p) => p.split(/(?<=[.!?])\s+/g))
    .map((s) => s.trim())
    .filter(Boolean);

  const chunks: string[] = [];
  let buf = "";
  for (const p of parts) {
    if (!buf) {
      buf = p;
      continue;
    }
    if (buf.length + 1 + p.length <= maxChars) {
      buf = `${buf} ${p}`;
      continue;
    }
    chunks.push(buf);
    buf = p;
  }
  if (buf) chunks.push(buf);
  return chunks;
}

async function audit(db: IDBDatabase, evt: Omit<AuditEvent, "id" | "createdAt">) {
  const record: AuditEvent = { id: uuid(), createdAt: nowIso(), ...evt };
  await tx(db, ["audit_events"], "readwrite", async ({ audit_events }) => {
    await idbPut(audit_events, record);
  });
}

const zScope = z.string().min(1).max(200);

const zMemoryUpsert = z.object({
  scope: zScope,
  type: z.string().min(1).max(80).optional().default("fact"),
  content: z.string().min(1).max(20000),
  tags: z.array(z.string().min(1).max(50)).optional().default([]),
  metadata: z.record(z.unknown()).optional().default({}),
  embed: z.boolean().optional().default(false)
});

const zMemorySearch = z.object({
  scope: zScope,
  query: z.string().min(1).max(2000),
  mode: z.enum(["lexical", "semantic", "hybrid"]).optional().default("hybrid"),
  limit: z.number().int().min(1).max(50).optional().default(5)
});

const zKbUpsert = z.object({
  scope: zScope,
  source: z.string().min(1).max(80).optional().default("upload"),
  title: z.string().min(1).max(200).optional().nullable().default(null),
  content: z.string().min(1).max(200000),
  metadata: z.record(z.unknown()).optional().default({})
});

const zKbSearch = z.object({
  scope: zScope,
  query: z.string().min(1).max(2000),
  mode: z.enum(["lexical", "semantic", "hybrid"]).optional().default("hybrid"),
  limit: z.number().int().min(1).max(50).optional().default(5)
});

const zSessionCreate = z.object({
  id: z.string().min(1).max(200).optional(),
  scope: zScope,
  title: z.string().min(1).max(200).optional().nullable().default(null),
  state: z.record(z.unknown()).optional().nullable().default(null),
  metadata: z.record(z.unknown()).optional().default({})
});

const zSessionMessage = z.object({
  role: z.enum(["system", "user", "assistant", "tool"]),
  content: z.string().min(1).max(20000),
  embed: z.boolean().optional().default(false)
});

const zToolUpsert = z.object({
  id: z.string().min(1).max(200),
  scope: zScope,
  name: z.string().min(1).max(200),
  kind: z.literal("http").default("http"),
  baseUrl: z.string().url(),
  enabled: z.boolean().optional().default(true),
  timeoutMs: z.number().int().min(1000).max(120000).optional().default(30000),
  config: z
    .object({
      headers: z.record(z.string()).optional().default({})
    })
    .optional()
    .default({ headers: {} })
});

const zToolOpUpsert = z.object({
  id: z.string().min(1).max(200).optional(),
  name: z.string().min(1).max(200),
  method: z.enum(["GET", "POST", "PUT", "PATCH", "DELETE"]),
  path: z.string().min(1).max(2000),
  enabled: z.boolean().optional().default(true),
  headers: z.record(z.string()).optional().default({})
});

const zToolExecute = z.object({
  scope: zScope,
  toolId: z.string().min(1).max(200),
  operation: z.string().min(1).max(200),
  input: z
    .object({
      query: z.record(z.union([z.string(), z.number(), z.boolean()])).optional(),
      headers: z.record(z.string()).optional(),
      body: z.unknown().optional()
    })
    .optional()
    .default({})
});

function jsonResponse(status: number, body: unknown): LocalResponse {
  return { status, headers: { "content-type": "application/json" }, body };
}

function requireJson(bodyText: string | null) {
  if (bodyText === null || bodyText.trim().length === 0) return { ok: true as const, value: null };
  try {
    return { ok: true as const, value: JSON.parse(bodyText) as unknown };
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return { ok: false as const, error: message };
  }
}

async function countAll(db: IDBDatabase) {
  return tx(
    db,
    ["memory_records", "kb_documents", "kb_chunks", "sessions", "session_messages", "tools", "tool_ops", "audit_events"],
    "readonly",
    async (s) => {
      const counts = await Promise.all([
        idbCount(s.memory_records),
        idbCount(s.kb_documents),
        idbCount(s.kb_chunks),
        idbCount(s.sessions),
        idbCount(s.session_messages),
        idbCount(s.tools),
        idbCount(s.tool_ops),
        idbCount(s.audit_events)
      ]);
      return {
        memoryRecords: counts[0],
        kbDocuments: counts[1],
        kbChunks: counts[2],
        sessions: counts[3],
        sessionMessages: counts[4],
        tools: counts[5],
        toolOperations: counts[6],
        auditEvents: counts[7]
      };
    }
  );
}

export async function clearLocalSentinelData() {
  const db = await openDb();
  await tx(
    db,
    ["memory_records", "kb_documents", "kb_chunks", "sessions", "session_messages", "tools", "tool_ops", "audit_events"],
    "readwrite",
    async (s) => {
      await Promise.all([
        idbClear(s.memory_records),
        idbClear(s.kb_documents),
        idbClear(s.kb_chunks),
        idbClear(s.sessions),
        idbClear(s.session_messages),
        idbClear(s.tools),
        idbClear(s.tool_ops),
        idbClear(s.audit_events)
      ]);
    }
  );
}

export async function handleLocalSentinel(req: LocalRequest): Promise<LocalResponse> {
  const db = await openDb();
  const headers = normalizeHeaderMap(req.headers);
  const actor = headers["x-infra-actor"]?.trim() || "website:sandbox";
  const headerScope = headers["x-infra-scope"]?.trim();
  const { pathname, query } = parsePathAndQuery(req.path);

  if (req.method === "GET" && pathname === "/health") {
    const counts = await countAll(db);
    return jsonResponse(200, {
      ok: true,
      mode: "local",
      storage: { type: "indexeddb", name: DB_NAME, version: DB_VERSION },
      embeddings: { type: "feature-hashing", dims: 384 },
      counts,
      time: nowIso()
    });
  }

  const parsedBody = requireJson(req.bodyText);
  if (!parsedBody.ok) return jsonResponse(400, { ok: false, error: `Invalid JSON: ${parsedBody.error}` });
  const body = parsedBody.value;

  if (req.method === "POST" && pathname === "/v1/memory/records") {
    const input = zMemoryUpsert.safeParse(body);
    if (!input.success) return jsonResponse(400, { ok: false, error: input.error.flatten() });

    const rec: MemoryRecord = {
      id: uuid(),
      scope: input.data.scope,
      type: input.data.type,
      content: input.data.content,
      tags: input.data.tags,
      metadata: input.data.metadata,
      createdAt: nowIso(),
      embedding: input.data.embed ? embedTextFeatureHash(input.data.content) : null
    };

    await tx(db, ["memory_records"], "readwrite", async ({ memory_records }) => {
      await idbPut(memory_records, rec);
    });
    await audit(db, { scope: rec.scope, actor, eventType: "memory.upsert", payload: { id: rec.id, type: rec.type } });
    return jsonResponse(200, { ok: true, record: { id: rec.id, scope: rec.scope, createdAt: rec.createdAt } });
  }

  if (req.method === "POST" && pathname === "/v1/memory/search") {
    const input = zMemorySearch.safeParse(body);
    if (!input.success) return jsonResponse(400, { ok: false, error: input.error.flatten() });

    const items = await tx(db, ["memory_records"], "readwrite", async ({ memory_records }) => {
      const records = await idbGetAllByIndex<MemoryRecord>(memory_records, "by_scope", input.data.scope);
      const docs = records.map((r) => ({ id: r.id, text: r.content }));
      const bm = input.data.mode === "semantic" ? new Map<string, number>() : bm25Scores(docs, input.data.query);
      const qv = input.data.mode === "lexical" ? null : embedTextFeatureHash(input.data.query);

      const scored: Array<{ record: MemoryRecord; score: number; bm25: number; cosine: number }> = [];
      for (const r of records) {
        const bm25 = bm.get(r.id) ?? 0;
        let cosine = 0;
        if (qv) {
          if (!r.embedding) {
            r.embedding = embedTextFeatureHash(r.content);
            await idbPut(memory_records, r);
          }
          cosine = r.embedding ? cosineSim(qv, r.embedding) : 0;
        }
        const score =
          input.data.mode === "lexical"
            ? bm25
            : input.data.mode === "semantic"
              ? cosine
              : bm25 + cosine;
        if (score > 0) scored.push({ record: r, score, bm25, cosine });
      }

      scored.sort((a, b) => b.score - a.score);
      return scored.slice(0, input.data.limit).map((s) => ({
        id: s.record.id,
        score: s.score,
        breakdown: { bm25: s.bm25, cosine: s.cosine },
        type: s.record.type,
        content: s.record.content,
        tags: s.record.tags,
        metadata: s.record.metadata,
        createdAt: s.record.createdAt
      }));
    });

    await audit(db, { scope: input.data.scope, actor, eventType: "memory.search", payload: { query: input.data.query, mode: input.data.mode } });
    return jsonResponse(200, { ok: true, items });
  }

  if (req.method === "POST" && pathname === "/v1/kb/documents") {
    const input = zKbUpsert.safeParse(body);
    if (!input.success) return jsonResponse(400, { ok: false, error: input.error.flatten() });

    const doc: KbDocument = {
      id: uuid(),
      scope: input.data.scope,
      source: input.data.source,
      title: input.data.title ?? null,
      metadata: input.data.metadata,
      createdAt: nowIso(),
      updatedAt: nowIso()
    };

    const chunksText = chunkText(input.data.content);
    const chunks: KbChunk[] = chunksText.map((text, i) => ({
      id: uuid(),
      scope: doc.scope,
      documentId: doc.id,
      chunkIndex: i,
      content: text,
      createdAt: nowIso(),
      embedding: embedTextFeatureHash(text)
    }));

    await tx(db, ["kb_documents", "kb_chunks"], "readwrite", async ({ kb_documents, kb_chunks }) => {
      await idbPut(kb_documents, doc);
      for (const c of chunks) await idbPut(kb_chunks, c);
    });

    await audit(db, { scope: doc.scope, actor, eventType: "kb.upsert", payload: { documentId: doc.id, chunks: chunks.length } });
    return jsonResponse(200, { ok: true, document: { id: doc.id, scope: doc.scope, chunks: chunks.length } });
  }

  if (req.method === "POST" && pathname === "/v1/kb/search") {
    const input = zKbSearch.safeParse(body);
    if (!input.success) return jsonResponse(400, { ok: false, error: input.error.flatten() });

    const results = await tx(db, ["kb_chunks", "kb_documents"], "readonly", async ({ kb_chunks, kb_documents }) => {
      const chunks = await idbGetAllByIndex<KbChunk>(kb_chunks, "by_scope", input.data.scope);
      const docs = await idbGetAllByIndex<KbDocument>(kb_documents, "by_scope", input.data.scope);
      const docById = new Map(docs.map((d) => [d.id, d]));

      const bm = input.data.mode === "semantic" ? new Map<string, number>() : bm25Scores(chunks.map((c) => ({ id: c.id, text: c.content })), input.data.query);
      const qv = input.data.mode === "lexical" ? null : embedTextFeatureHash(input.data.query);

      const scored: Array<{ chunk: KbChunk; score: number; bm25: number; cosine: number }> = [];
      for (const c of chunks) {
        const bm25 = bm.get(c.id) ?? 0;
        const cosine = qv ? cosineSim(qv, c.embedding) : 0;
        const score =
          input.data.mode === "lexical"
            ? bm25
            : input.data.mode === "semantic"
              ? cosine
              : bm25 + cosine;
        if (score > 0) scored.push({ chunk: c, score, bm25, cosine });
      }
      scored.sort((a, b) => b.score - a.score);

      return scored.slice(0, input.data.limit).map((s) => {
        const doc = docById.get(s.chunk.documentId) ?? null;
        return {
          score: s.score,
          breakdown: { bm25: s.bm25, cosine: s.cosine },
          document: doc ? { id: doc.id, title: doc.title, source: doc.source, metadata: doc.metadata } : null,
          chunk: { id: s.chunk.id, index: s.chunk.chunkIndex, content: s.chunk.content }
        };
      });
    });

    await audit(db, { scope: input.data.scope, actor, eventType: "kb.search", payload: { query: input.data.query, mode: input.data.mode } });
    return jsonResponse(200, { ok: true, items: results });
  }

  if (req.method === "POST" && pathname === "/v1/sessions") {
    const input = zSessionCreate.safeParse(body);
    if (!input.success) return jsonResponse(400, { ok: false, error: input.error.flatten() });

    const id = input.data.id ?? uuid();
    const session: Session = {
      id,
      scope: input.data.scope,
      title: input.data.title ?? null,
      state: input.data.state ?? null,
      metadata: input.data.metadata,
      createdAt: nowIso(),
      updatedAt: nowIso()
    };

    await tx(db, ["sessions"], "readwrite", async ({ sessions }) => {
      const existing = await idbGet<Session>(sessions, id);
      if (existing) {
        existing.title = session.title;
        existing.state = session.state;
        existing.metadata = session.metadata;
        existing.updatedAt = nowIso();
        await idbPut(sessions, existing);
      } else {
        await idbPut(sessions, session);
      }
    });

    await audit(db, { scope: session.scope, actor, eventType: "sessions.upsert", payload: { id } });
    return jsonResponse(200, { ok: true, session: { id, scope: session.scope } });
  }

  const sessionMsgMatch = pathname.match(/^\/v1\/sessions\/([^/]+)\/messages$/);
  if (req.method === "POST" && sessionMsgMatch) {
    const sessionId = decodeURIComponent(sessionMsgMatch[1]);
    const input = zSessionMessage.safeParse(body);
    if (!input.success) return jsonResponse(400, { ok: false, error: input.error.flatten() });

    const createdAt = nowIso();
    const message: SessionMessage = {
      id: uuid(),
      scope: headerScope || "",
      sessionId,
      role: input.data.role,
      content: input.data.content,
      createdAt,
      embedding: input.data.embed ? embedTextFeatureHash(input.data.content) : null
    };

    try {
      await tx(db, ["sessions", "session_messages"], "readwrite", async ({ sessions, session_messages }) => {
        const s = await idbGet<Session>(sessions, sessionId);
        if (!s) throw new Error(`Session not found: ${sessionId}`);
        message.scope = headerScope || s.scope;
        await idbPut(session_messages, message);
        s.updatedAt = nowIso();
        await idbPut(sessions, s);
      });
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      return jsonResponse(404, { ok: false, error: message });
    }

    await audit(db, {
      scope: message.scope,
      actor,
      eventType: "sessions.message",
      payload: { sessionId, id: message.id, role: message.role }
    });
    return jsonResponse(200, { ok: true, message: { id: message.id, sessionId, createdAt } });
  }

  if (req.method === "POST" && pathname === "/v1/tools") {
    const input = zToolUpsert.safeParse(body);
    if (!input.success) return jsonResponse(400, { ok: false, error: input.error.flatten() });

    const tool: Tool = {
      id: input.data.id,
      scope: input.data.scope,
      name: input.data.name,
      kind: "http",
      baseUrl: input.data.baseUrl.replace(/\/+$/, ""),
      enabled: input.data.enabled,
      timeoutMs: input.data.timeoutMs,
      config: { headers: input.data.config.headers },
      createdAt: nowIso(),
      updatedAt: nowIso()
    };

    await tx(db, ["tools"], "readwrite", async ({ tools }) => {
      const existing = await idbGet<Tool>(tools, tool.id);
      if (existing) {
        existing.name = tool.name;
        existing.baseUrl = tool.baseUrl;
        existing.enabled = tool.enabled;
        existing.timeoutMs = tool.timeoutMs;
        existing.config = tool.config;
        existing.updatedAt = nowIso();
        await idbPut(tools, existing);
      } else {
        await idbPut(tools, tool);
      }
    });

    await audit(db, { scope: tool.scope, actor, eventType: "tools.upsert", payload: { id: tool.id, name: tool.name } });
    return jsonResponse(200, { ok: true, tool: { id: tool.id, scope: tool.scope } });
  }

  const toolOpsMatch = pathname.match(/^\/v1\/tools\/([^/]+)\/operations$/);
  if (req.method === "POST" && toolOpsMatch) {
    const toolId = decodeURIComponent(toolOpsMatch[1]);
    const scope = query.scope || headerScope;
    if (!scope) return jsonResponse(400, { ok: false, error: "Missing scope (x-infra-scope header or ?scope=...)" });
    const input = zToolOpUpsert.safeParse(body);
    if (!input.success) return jsonResponse(400, { ok: false, error: input.error.flatten() });

    const op: ToolOperation = {
      id: input.data.id ?? uuid(),
      scope,
      toolId,
      name: input.data.name,
      method: input.data.method,
      path: input.data.path.startsWith("/") ? input.data.path : `/${input.data.path}`,
      enabled: input.data.enabled,
      headers: input.data.headers,
      createdAt: nowIso()
    };

    await tx(db, ["tools", "tool_ops"], "readwrite", async ({ tools, tool_ops }) => {
      const tool = await idbGet<Tool>(tools, toolId);
      if (!tool) throw new Error(`Tool not found: ${toolId}`);
      if (tool.scope !== scope) throw new Error("Scope mismatch for tool");

      await idbPut(tool_ops, op);
    }).catch((err) => {
      const message = err instanceof Error ? err.message : String(err);
      return jsonResponse(404, { ok: false, error: message });
    });

    await audit(db, { scope, actor, eventType: "tools.operation.upsert", payload: { toolId, name: op.name } });
    return jsonResponse(200, { ok: true, operation: { id: op.id, toolId, name: op.name } });
  }

  if (req.method === "POST" && pathname === "/v1/tools/execute") {
    const input = zToolExecute.safeParse(body);
    if (!input.success) return jsonResponse(400, { ok: false, error: input.error.flatten() });

    let tool: Tool;
    let op: ToolOperation;
    try {
      const found = await tx(db, ["tools", "tool_ops"], "readonly", async ({ tools, tool_ops }) => {
        const t = await idbGet<Tool>(tools, input.data.toolId);
        if (!t) throw new Error(`Tool not found: ${input.data.toolId}`);
        if (t.scope !== input.data.scope) throw new Error("Scope mismatch for tool");

        const ops = await idbGetAllByIndex<ToolOperation>(tool_ops, "by_scope_tool", [input.data.scope, input.data.toolId]);
        const match = ops.find((x) => x.name === input.data.operation);
        if (!match) throw new Error(`Operation not found: ${input.data.operation}`);
        return { tool: t, op: match };
      });
      tool = found.tool;
      op = found.op;
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      return jsonResponse(404, { ok: false, error: message });
    }

    const base = tool.baseUrl.replace(/\/+$/, "");
    const url = new URL(`${base}${op.path}`);
    for (const [k, v] of Object.entries(input.data.input.query ?? {})) url.searchParams.set(k, String(v));

    const mergedHeaders: Record<string, string> = {
      ...tool.config.headers,
      ...op.headers,
      ...(input.data.input.headers ?? {})
    };

    let resStatus = 0;
    let resHeaders: Record<string, string> = {};
    let resText = "";
    let resJson: unknown = undefined;

    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(new Error("Timeout")), tool.timeoutMs);
      const bodyForFetch =
        op.method === "GET" || op.method === "DELETE"
          ? undefined
          : input.data.input.body !== undefined
            ? JSON.stringify(input.data.input.body)
            : undefined;

      let res: Response;
      try {
        res = await fetch(url.toString(), {
          method: op.method,
          headers: {
            ...(bodyForFetch ? { "content-type": "application/json" } : {}),
            ...mergedHeaders
          },
          body: bodyForFetch,
          signal: controller.signal
        });
      } finally {
        clearTimeout(timeout);
      }

      resStatus = res.status;
      res.headers.forEach((v, k) => {
        resHeaders[k] = v;
      });
      resText = await res.text();
      try {
        resJson = resText ? JSON.parse(resText) : null;
      } catch {
        resJson = undefined;
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      await audit(db, {
        scope: input.data.scope,
        actor,
        eventType: "tools.execute.error",
        payload: { toolId: tool.id, operation: op.name, url: url.toString(), error: message }
      });
      return jsonResponse(502, { ok: false, error: message, toolId: tool.id, operation: op.name, url: url.toString() });
    }

    await audit(db, {
      scope: input.data.scope,
      actor,
      eventType: "tools.execute",
      payload: { toolId: tool.id, operation: op.name, url: url.toString(), status: resStatus }
    });

    return jsonResponse(200, {
      ok: true,
      tool: { id: tool.id, name: tool.name },
      operation: { name: op.name, method: op.method, path: op.path },
      request: { url: url.toString() },
      response: {
        status: resStatus,
        headers: resHeaders,
        bodyText: resText,
        ...(resJson !== undefined ? { bodyJson: resJson } : {})
      }
    });
  }

  return jsonResponse(404, { ok: false, error: `Not found: ${req.method} ${pathname}` });
}
