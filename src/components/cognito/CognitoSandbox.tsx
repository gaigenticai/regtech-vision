import { useEffect, useMemo, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, GitBranch, RefreshCw, Table2, Timer, WandSparkles } from "lucide-react";
import { ACQUIRED_EVIDENCE_TEXT, ACQUIRED_SCHEMAS, HOST_EVIDENCE_TEXT, HOST_SCHEMAS, type Column, type Schema, type Table } from "./sandboxData";

type Reasons = { name: number; token: number; table: number; type: number; id_bonus: number; total: number };
type Candidate = { table: string; column: string; confidence: number; reasons: Reasons; evidence?: string[] };
type HostField = { table: string; column: string; type: string; nullable: boolean; evidence?: string[] };

type Decision = "suggested" | "match" | "review" | "no_match";

type ReportRow = {
  host: HostField;
  best_match: Candidate | null;
  alternatives: Candidate[];
};

type Override = {
  decision: Exclude<Decision, "suggested">;
  selected?: { table: string; column: string } | null;
  note?: string | null;
  updatedAt: number;
};

type RunSnapshot = {
  id: string;
  createdAt: number;
  hostBaseTable: string;
  hostScopeTables: string[];
  acquiredLabel: string;
  reportRows: ReportRow[];
  overrides: Record<string, Override>;
  approvedVersion?: {
    version: number;
    createdAt: number;
    note?: string | null;
    reportRows: ReportRow[];
    overrides: Record<string, Override>;
  } | null;
  versions: Array<{
    version: number;
    createdAt: number;
    note?: string | null;
    reportRows: ReportRow[];
    overrides: Record<string, Override>;
  }>;
};

const STORAGE_KEY = "gaigentic_cognito_sandbox_runs_v1";

function randomId(prefix: string) {
  return `${prefix}_${Math.random().toString(16).slice(2, 10)}_${Date.now().toString(16)}`;
}

function keyForHost(table: string, column: string) {
  return `${table}||${column}`;
}

function normalize(s: string) {
  return (s || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function tokenize(s: string) {
  const n = normalize(s);
  if (!n) return [];
  return n.split(" ").filter(Boolean);
}

function diceCoefficient(a: string, b: string) {
  const x = normalize(a);
  const y = normalize(b);
  if (!x || !y) return 0;
  if (x === y) return 1;
  const bigrams = (t: string) => {
    const out: string[] = [];
    for (let i = 0; i < t.length - 1; i++) out.push(t.slice(i, i + 2));
    return out;
  };
  const ax = bigrams(x);
  const by = bigrams(y);
  const counts = new Map<string, number>();
  for (const g of ax) counts.set(g, (counts.get(g) ?? 0) + 1);
  let overlap = 0;
  for (const g of by) {
    const c = counts.get(g) ?? 0;
    if (c > 0) {
      overlap += 1;
      counts.set(g, c - 1);
    }
  }
  return (2 * overlap) / (ax.length + by.length);
}

function jaccard(a: string[], b: string[]) {
  const A = new Set(a);
  const B = new Set(b);
  if (A.size === 0 && B.size === 0) return 1;
  let inter = 0;
  for (const t of A) if (B.has(t)) inter += 1;
  const union = A.size + B.size - inter;
  return union ? inter / union : 0;
}

function typeGroup(t: string) {
  const s = (t || "").toLowerCase();
  if (s.includes("uuid") || s.endsWith("id")) return "id";
  if (s.includes("int") || s.includes("numeric") || s.includes("decimal") || s.includes("float")) return "number";
  if (s.includes("date") || s.includes("time")) return "date";
  if (s.includes("bool")) return "bool";
  return "text";
}

function typeCompatibility(a: string, b: string) {
  const ga = typeGroup(a);
  const gb = typeGroup(b);
  if (ga === gb) return 1;
  if ((ga === "id" && gb === "text") || (ga === "text" && gb === "id")) return 0.55;
  if ((ga === "number" && gb === "text") || (ga === "text" && gb === "number")) return 0.55;
  return 0.25;
}

function scoreCandidate(host: HostField, acquired: { table: string; column: Column }) {
  const nameScore = diceCoefficient(host.column, acquired.column.name);
  const tokenScore = jaccard(tokenize(host.column), tokenize(acquired.column.name));
  const tableScore = diceCoefficient(host.table, acquired.table);
  const typeScore = typeCompatibility(host.type, acquired.column.type);
  const idBonus = tokenize(host.column).includes("id") && tokenize(acquired.column.name).includes("id") ? 1 : 0;

  const total = Math.max(0, Math.min(1, 0.52 * nameScore + 0.22 * tokenScore + 0.16 * tableScore + 0.08 * typeScore + 0.02 * idBonus));
  const reasons: Reasons = {
    name: Number(nameScore.toFixed(3)),
    token: Number(tokenScore.toFixed(3)),
    table: Number(tableScore.toFixed(3)),
    type: Number(typeScore.toFixed(3)),
    id_bonus: Number(idBonus.toFixed(3)),
    total: Number(total.toFixed(3)),
  };
  return { confidence: Number(total.toFixed(3)), reasons };
}

function evidenceForTerm(evidenceText: string, term: string, max = 2) {
  const needle = (term || "").trim().toLowerCase();
  if (!needle) return [];
  const lines = evidenceText.split(/\r?\n/).filter(Boolean);
  const out: string[] = [];
  for (const line of lines) {
    if (line.toLowerCase().includes(needle)) out.push(line);
    if (out.length >= max) break;
  }
  return out;
}

function computeFinal(row: ReportRow, ov: Override | null): { decision: Decision; match: Candidate | null; note: string | null } {
  if (!ov) return { decision: "suggested", match: row.best_match, note: null };
  if (ov.decision === "no_match") return { decision: "no_match", match: null, note: ov.note ?? null };
  if (ov.decision === "review") return { decision: "review", match: row.best_match, note: ov.note ?? null };
  if (ov.decision === "match" && ov.selected?.table && ov.selected?.column) {
    const pick =
      row.alternatives.find((a) => a.table === ov.selected!.table && a.column === ov.selected!.column) ??
      (row.best_match && row.best_match.table === ov.selected.table && row.best_match.column === ov.selected.column ? row.best_match : null);
    return { decision: "match", match: pick ?? { table: ov.selected.table, column: ov.selected.column, confidence: 0, reasons: row.best_match?.reasons ?? ({ name: 0, token: 0, table: 0, type: 0, id_bonus: 0, total: 0 } as Reasons) }, note: ov.note ?? null };
  }
  return { decision: "review", match: row.best_match, note: ov.note ?? null };
}

function diffSummary(approved: RunSnapshot["approvedVersion"], working: Pick<RunSnapshot, "reportRows" | "overrides">) {
  if (!approved) return { changed: 0, total: 0 };
  let changed = 0;
  const rows = working.reportRows;
  for (const r of rows) {
    const k = keyForHost(r.host.table, r.host.column);
    const a = computeFinal(
      approved.reportRows.find((x) => keyForHost(x.host.table, x.host.column) === k) ?? r,
      approved.overrides[k] ?? null
    );
    const w = computeFinal(r, working.overrides[k] ?? null);
    const aKey = a.match ? `${a.match.table}.${a.match.column}` : "";
    const wKey = w.match ? `${w.match.table}.${w.match.column}` : "";
    if (a.decision !== w.decision || aKey !== wKey || (a.note ?? "") !== (w.note ?? "")) changed += 1;
  }
  return { changed, total: rows.length };
}

function loadRuns(): RunSnapshot[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed as RunSnapshot[];
  } catch {
    return [];
  }
}

function saveRuns(runs: RunSnapshot[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(runs.slice(0, 25)));
}

function flattenTables(schema: Schema) {
  const out: Array<{ table: string; column: Column }> = [];
  for (const t of schema.tables) {
    for (const c of t.columns) out.push({ table: t.name, column: c });
  }
  return out;
}

export default function CognitoSandbox() {
  const [tab, setTab] = useState<"wizard" | "workbench" | "versions">("wizard");

  const [hostSchemaId, setHostSchemaId] = useState(HOST_SCHEMAS[0]?.label ?? "host");
  const [acquiredSchemaId, setAcquiredSchemaId] = useState(ACQUIRED_SCHEMAS[0]?.label ?? "acquired");

  const hostSchema = useMemo(() => HOST_SCHEMAS.find((s) => s.label === hostSchemaId) ?? HOST_SCHEMAS[0], [hostSchemaId]);
  const acquiredSchema = useMemo(() => ACQUIRED_SCHEMAS.find((s) => s.label === acquiredSchemaId) ?? ACQUIRED_SCHEMAS[0], [acquiredSchemaId]);

  const allHostTables = hostSchema?.tables ?? [];
  const [hostBaseTable, setHostBaseTable] = useState<string>(allHostTables[0]?.name ?? "");
  const [hostScopeTables, setHostScopeTables] = useState<string[]>(() => (allHostTables[0]?.name ? [allHostTables[0].name] : []));

  const [threshold, setThreshold] = useState("0.700");
  const thresholdValue = Math.max(0, Math.min(1, Number(threshold || 0.7) || 0.7));

  const [runs, setRuns] = useState<RunSnapshot[]>([]);
  const [activeRunId, setActiveRunId] = useState<string>("");
  const activeRun = runs.find((r) => r.id === activeRunId) ?? null;

  useEffect(() => {
    const loaded = loadRuns();
    setRuns(loaded);
    setActiveRunId(loaded[0]?.id ?? "");
  }, []);

  useEffect(() => {
    saveRuns(runs);
  }, [runs]);

  useEffect(() => {
    const t0 = allHostTables[0]?.name ?? "";
    setHostBaseTable((prev) => (allHostTables.some((t) => t.name === prev) ? prev : t0));
    setHostScopeTables((prev) => {
      const filtered = prev.filter((x) => allHostTables.some((t) => t.name === x));
      if (filtered.length) return filtered;
      return t0 ? [t0] : [];
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hostSchemaId]);

  const createRun = () => {
    if (!hostBaseTable) return;
    const scope = Array.from(new Set([hostBaseTable, ...hostScopeTables])).filter(Boolean);
    const reportRows = generateReport({
      hostSchema,
      acquiredSchema,
      hostScopeTables: scope,
      hostEvidence: HOST_EVIDENCE_TEXT,
      acquiredEvidence: ACQUIRED_EVIDENCE_TEXT,
    });

    const run: RunSnapshot = {
      id: randomId("run"),
      createdAt: Date.now(),
      hostBaseTable,
      hostScopeTables: scope,
      acquiredLabel: acquiredSchema.label,
      reportRows,
      overrides: {},
      approvedVersion: null,
      versions: [],
    };

    setRuns((prev) => [run, ...prev].slice(0, 25));
    setActiveRunId(run.id);
    setTab("workbench");
  };

  const resetSandbox = () => {
    localStorage.removeItem(STORAGE_KEY);
    setRuns([]);
    setActiveRunId("");
    setTab("wizard");
  };

  const updateRun = (id: string, updater: (r: RunSnapshot) => RunSnapshot) => {
    setRuns((prev) => prev.map((r) => (r.id === id ? updater(r) : r)));
  };

  const upsertOverride = (hostTable: string, hostColumn: string, ov: Override | null) => {
    if (!activeRun) return;
    const k = keyForHost(hostTable, hostColumn);
    updateRun(activeRun.id, (r) => {
      const next = { ...r, overrides: { ...r.overrides } };
      if (!ov) delete next.overrides[k];
      else next.overrides[k] = ov;
      return next;
    });
  };

  const bulkAcceptHigh = () => {
    if (!activeRun) return;
    updateRun(activeRun.id, (r) => {
      const next = { ...r, overrides: { ...r.overrides } };
      for (const row of r.reportRows) {
        const k = keyForHost(row.host.table, row.host.column);
        if (next.overrides[k]) continue;
        if (!row.best_match) continue;
        if (row.best_match.confidence < thresholdValue) continue;
        next.overrides[k] = { decision: "match", selected: { table: row.best_match.table, column: row.best_match.column }, note: null, updatedAt: Date.now() };
      }
      return next;
    });
  };

  const bulkFlagLow = () => {
    if (!activeRun) return;
    updateRun(activeRun.id, (r) => {
      const next = { ...r, overrides: { ...r.overrides } };
      for (const row of r.reportRows) {
        const k = keyForHost(row.host.table, row.host.column);
        if (next.overrides[k]) continue;
        if (!row.best_match) continue;
        if (row.best_match.confidence >= thresholdValue) continue;
        next.overrides[k] = {
          decision: "review",
          selected: null,
          note: `Auto-flagged: low confidence (${row.best_match.confidence.toFixed(3)} < ${thresholdValue.toFixed(3)}).`,
          updatedAt: Date.now(),
        };
      }
      return next;
    });
  };

  const bulkNoMatchUnmapped = () => {
    if (!activeRun) return;
    updateRun(activeRun.id, (r) => {
      const next = { ...r, overrides: { ...r.overrides } };
      for (const row of r.reportRows) {
        const k = keyForHost(row.host.table, row.host.column);
        if (next.overrides[k]) continue;
        if (row.best_match) continue;
        next.overrides[k] = { decision: "no_match", selected: null, note: "Auto-marked: no candidate found.", updatedAt: Date.now() };
      }
      return next;
    });
  };

  const clearReviewFlags = () => {
    if (!activeRun) return;
    updateRun(activeRun.id, (r) => {
      const next = { ...r, overrides: { ...r.overrides } };
      for (const [k, ov] of Object.entries(next.overrides)) {
        if (ov.decision === "review") delete next.overrides[k];
      }
      return next;
    });
  };

  const approve = (note: string) => {
    if (!activeRun) return;
    updateRun(activeRun.id, (r) => {
      const nextVer = (r.versions[0]?.version ?? 0) + 1;
      const snapshot = { version: nextVer, createdAt: Date.now(), note: note.trim() || null, reportRows: r.reportRows, overrides: r.overrides };
      return { ...r, approvedVersion: snapshot, versions: [snapshot, ...r.versions] };
    });
    setTab("versions");
  };

  const filters = useMemo(() => {
    if (!activeRun) return { total: 0, unmapped: 0, low: 0, review: 0, noMatch: 0 };
    let unmapped = 0;
    let low = 0;
    let review = 0;
    let noMatch = 0;
    for (const row of activeRun.reportRows) {
      const k = keyForHost(row.host.table, row.host.column);
      const ov = activeRun.overrides[k] ?? null;
      const final = computeFinal(row, ov);
      if (final.decision === "review") review += 1;
      if (final.decision === "no_match") noMatch += 1;
      if (!final.match) unmapped += 1;
      if (final.match && final.match.confidence < thresholdValue && final.decision !== "match") low += 1;
    }
    return { total: activeRun.reportRows.length, unmapped, low, review, noMatch };
  }, [activeRun, thresholdValue]);

  const diff = useMemo(() => {
    if (!activeRun?.approvedVersion) return null;
    return diffSummary(activeRun.approvedVersion, { reportRows: activeRun.reportRows, overrides: activeRun.overrides });
  }, [activeRun]);

  const SUGGESTED_VALUE = "__SUGGESTED__";
  const REVIEW_VALUE = "__REVIEW__";
  const NO_MATCH_VALUE = "__NO_MATCH__";

  return (
    <Card className="border border-gray-200 shadow-2xl rounded-2xl">
      <CardHeader>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <CardTitle className="flex items-center gap-2">
              <WandSparkles className="h-5 w-5 text-primary" />
              Cognito Sandbox
            </CardTitle>
            <CardDescription className="mt-2">
              An interactive sandbox for Cognito’s wizard → workbench → approvals workflow. No backend required.
            </CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={resetSandbox}>
              <RefreshCw className="h-4 w-4 mr-2" />
              Reset
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <Tabs
          value={tab}
          onValueChange={(v) => {
            if (v === "wizard" || v === "workbench" || v === "versions") setTab(v);
          }}
        >
          <TabsList className="grid grid-cols-1 sm:grid-cols-3 w-full">
            <TabsTrigger value="wizard">Wizard</TabsTrigger>
            <TabsTrigger value="workbench" disabled={!activeRun}>
              Workbench
            </TabsTrigger>
            <TabsTrigger value="versions" disabled={!activeRun}>
              Versions
            </TabsTrigger>
          </TabsList>

          <TabsContent value="wizard" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="border border-gray-200 rounded-2xl shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Table2 className="h-5 w-5 text-primary" />
                    1) Host scope
                  </CardTitle>
                  <CardDescription>Select a base table and scope. This simulates schema discovery.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-2">
                    <Label>Host dataset</Label>
                    <Select value={hostSchemaId} onValueChange={setHostSchemaId}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {HOST_SCHEMAS.map((s) => (
                          <SelectItem key={s.label} value={s.label}>
                            {s.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-2">
                    <Label>Base table</Label>
                    <Select value={hostBaseTable} onValueChange={setHostBaseTable}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select base table" />
                      </SelectTrigger>
                      <SelectContent>
                        {allHostTables.map((t) => (
                          <SelectItem key={t.name} value={t.name}>
                            {t.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-2">
                    <Label>Scope tables (optional)</Label>
                    <div className="rounded-xl border border-gray-200 bg-white p-3 max-h-44 overflow-auto space-y-2">
                      {allHostTables.map((t) => {
                        const checked = hostScopeTables.includes(t.name);
                        return (
                          <div key={t.name} className="flex items-start gap-3">
                            <Checkbox
                              checked={checked}
                              onCheckedChange={(v) => {
                                setHostScopeTables((prev) => {
                                  const next = new Set(prev);
                                  if (v === true) next.add(t.name);
                                  else next.delete(t.name);
                                  return Array.from(next);
                                });
                              }}
                            />
                            <div className="min-w-0">
                              <div className="text-sm font-semibold text-gray-900 truncate">{t.name}</div>
                              <div className="text-xs text-gray-600">{t.columns.length} columns</div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="text-xs text-gray-500">Tip: include 1–3 related tables to mimic real enterprise alignment scope.</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 rounded-2xl shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Timer className="h-5 w-5 text-primary" />
                    2) Acquired + run
                  </CardTitle>
                  <CardDescription>Pick the acquired system, then generate an alignment report.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-2">
                    <Label>Acquired dataset</Label>
                    <Select value={acquiredSchemaId} onValueChange={setAcquiredSchemaId}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {ACQUIRED_SCHEMAS.map((s) => (
                          <SelectItem key={s.label} value={s.label}>
                            {s.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-2">
                    <Label>Low-confidence threshold</Label>
                    <Input value={threshold} onChange={(e) => setThreshold(e.target.value)} placeholder="0.700" />
                    <div className="text-xs text-gray-500">Used for workbench “low confidence” views and bulk actions.</div>
                  </div>

                  <Button className="w-full" onClick={createRun} disabled={!hostBaseTable}>
                    Generate alignment report
                  </Button>

                  {runs.length ? (
                    <Alert>
                      <AlertTitle>Recent runs</AlertTitle>
                      <AlertDescription>
                        Choose a run to open its workbench and versions.
                        <div className="mt-3 grid gap-2">
                          {runs.slice(0, 3).map((r) => (
                            <button
                              key={r.id}
                              className={`w-full text-left rounded-xl border px-3 py-2 transition ${
                                r.id === activeRunId ? "border-primary bg-primary/5" : "border-gray-200 hover:bg-gray-50"
                              }`}
                              onClick={() => {
                                setActiveRunId(r.id);
                                setTab("workbench");
                              }}
                            >
                              <div className="flex items-center justify-between gap-3">
                                <div className="text-sm font-semibold text-gray-900 truncate">{r.hostBaseTable}</div>
                                <div className="text-xs text-gray-600">{new Date(r.createdAt).toLocaleString()}</div>
                              </div>
                              <div className="mt-1 text-xs text-gray-600">
                                scope {r.hostScopeTables.length} • {r.acquiredLabel}
                              </div>
                            </button>
                          ))}
                        </div>
                      </AlertDescription>
                    </Alert>
                  ) : null}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="workbench" className="space-y-6">
            {!activeRun ? (
              <Alert>
                <AlertTitle>No run selected</AlertTitle>
                <AlertDescription>Create a run in the Wizard tab first.</AlertDescription>
              </Alert>
            ) : (
              <>
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Run {activeRun.id.slice(0, 8)}</div>
                    <div className="mt-1 text-xs text-gray-600">
                      base {activeRun.hostBaseTable} • scope {activeRun.hostScopeTables.length} • {activeRun.acquiredLabel}
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="bg-white">
                      unmapped {filters.unmapped}
                    </Badge>
                    <Badge variant="outline" className="bg-white">
                      low {filters.low}
                    </Badge>
                    <Badge variant="outline" className="bg-white">
                      review {filters.review}
                    </Badge>
                    <Badge variant="outline" className="bg-white">
                      no-match {filters.noMatch}
                    </Badge>
                  </div>
                </div>

                <Card className="border border-gray-200 rounded-2xl shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <WandSparkles className="h-5 w-5 text-primary" />
                      Bulk actions
                    </CardTitle>
                    <CardDescription>Apply consistent policy at scale, then spot-check exceptions.</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm" onClick={bulkAcceptHigh}>
                      Accept ≥ {thresholdValue.toFixed(3)}
                    </Button>
                    <Button variant="outline" size="sm" onClick={bulkFlagLow}>
                      Flag &lt; {thresholdValue.toFixed(3)}
                    </Button>
                    <Button variant="outline" size="sm" onClick={bulkNoMatchUnmapped}>
                      No-match unmapped
                    </Button>
                    <Button variant="outline" size="sm" onClick={clearReviewFlags}>
                      Clear review flags
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border border-gray-200 rounded-2xl shadow-lg">
                  <CardHeader>
                    <CardTitle>Fields</CardTitle>
                    <CardDescription>Quick decisions with explainability (“why”) and evidence snippets.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
                      <table className="w-full text-left text-sm">
                        <thead className="bg-gray-50 text-xs font-semibold uppercase tracking-wide text-gray-600">
                          <tr>
                            <th className="px-4 py-3">Host</th>
                            <th className="px-4 py-3">Suggestion</th>
                            <th className="px-4 py-3">Decision</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {activeRun.reportRows.slice(0, 60).map((row) => {
                            const k = keyForHost(row.host.table, row.host.column);
                            const ov = activeRun.overrides[k] ?? null;
                            const final = computeFinal(row, ov);
                            const options = row.alternatives.length ? row.alternatives : row.best_match ? [row.best_match] : [];
                            const selectedKey =
                              !ov
                                ? SUGGESTED_VALUE
                                : ov.decision === "review"
                                  ? REVIEW_VALUE
                                  : ov.decision === "no_match"
                                    ? NO_MATCH_VALUE
                                    : ov.selected?.table && ov.selected?.column
                                      ? `${ov.selected.table}||${ov.selected.column}`
                                      : SUGGESTED_VALUE;

                            return (
                              <tr key={k} className="align-top hover:bg-gray-50/60">
                                <td className="px-4 py-3">
                                  <div className="font-semibold text-gray-900">{row.host.column}</div>
                                  <div className="mt-1 text-xs text-gray-600">{row.host.table}</div>
                                  <div className="mt-2 text-xs text-gray-500">
                                    {row.host.type}
                                    {row.host.nullable ? "" : " • not null"}
                                  </div>
                                  {row.host.evidence?.length ? (
                                    <div className="mt-2 text-[11px] text-gray-600">
                                      <span className="font-semibold">Evidence:</span> {row.host.evidence[0]}
                                    </div>
                                  ) : null}
                                </td>

                                <td className="px-4 py-3">
                                  {row.best_match ? (
                                    <>
                                      <div className="font-semibold text-gray-900">{row.best_match.column}</div>
                                      <div className="mt-1 text-xs text-gray-600">{row.best_match.table}</div>
                                      <div className="mt-2 text-xs text-gray-600">conf {row.best_match.confidence.toFixed(3)}</div>
                                      <div className="mt-1 text-[11px] text-gray-600">
                                        why name:{row.best_match.reasons.name.toFixed(3)} · token:{row.best_match.reasons.token.toFixed(3)} · table:
                                        {row.best_match.reasons.table.toFixed(3)} · type:{row.best_match.reasons.type.toFixed(3)}
                                      </div>
                                      {row.best_match.evidence?.length ? (
                                        <div className="mt-2 text-[11px] text-gray-600">
                                          <span className="font-semibold">Evidence:</span> {row.best_match.evidence[0]}
                                        </div>
                                      ) : null}
                                    </>
                                  ) : (
                                    <div className="text-gray-600">No candidate found</div>
                                  )}
                                </td>

                                <td className="px-4 py-3">
                                  <div className="flex items-center gap-2">
                                    <Badge variant="outline" className="bg-white">
                                      {final.decision}
                                    </Badge>
                                    {final.match ? (
                                      <span className="text-xs text-gray-600">
                                        {final.match.table}.{final.match.column}
                                      </span>
                                    ) : (
                                      <span className="text-xs text-gray-400">no match</span>
                                    )}
                                  </div>

                                  <div className="mt-3 grid gap-2">
                                    <Select
                                      value={selectedKey}
                                      onValueChange={(v) => {
                                        if (v === SUGGESTED_VALUE) {
                                          upsertOverride(row.host.table, row.host.column, null);
                                          return;
                                        }
                                        if (v === REVIEW_VALUE) {
                                          upsertOverride(row.host.table, row.host.column, { decision: "review", selected: null, note: "Flagged for review.", updatedAt: Date.now() });
                                          return;
                                        }
                                        if (v === NO_MATCH_VALUE) {
                                          upsertOverride(row.host.table, row.host.column, { decision: "no_match", selected: null, note: "Explicit no-match.", updatedAt: Date.now() });
                                          return;
                                        }
                                        const [table, column] = v.split("||", 2);
                                        if (!table || !column) return;
                                        upsertOverride(row.host.table, row.host.column, { decision: "match", selected: { table, column }, note: null, updatedAt: Date.now() });
                                      }}
                                    >
                                      <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Choose decision" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value={SUGGESTED_VALUE}>Use system suggestion</SelectItem>
                                        <SelectItem value={REVIEW_VALUE}>Flag for review</SelectItem>
                                        <SelectItem value={NO_MATCH_VALUE}>No match</SelectItem>
                                        {options.map((o) => (
                                          <SelectItem key={`${o.table}||${o.column}`} value={`${o.table}||${o.column}`}>
                                            {o.table}.{o.column} (conf {o.confidence.toFixed(3)})
                                          </SelectItem>
                                        ))}
                                      </SelectContent>
                                    </Select>

                                    <Textarea
                                      value={ov?.note ?? ""}
                                      onChange={(e) => {
                                        const note = e.target.value;
                                        if (!ov) {
                                          upsertOverride(row.host.table, row.host.column, { decision: "review", selected: null, note: note || null, updatedAt: Date.now() });
                                        } else {
                                          upsertOverride(row.host.table, row.host.column, { ...ov, note: note || null, updatedAt: Date.now() });
                                        }
                                      }}
                                      placeholder="Note (optional)"
                                      className="min-h-16"
                                    />
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                    <div className="mt-3 text-xs text-gray-500">Showing first 60 rows for performance.</div>
                  </CardContent>
                </Card>
              </>
            )}
          </TabsContent>

          <TabsContent value="versions" className="space-y-6">
            {!activeRun ? (
              <Alert>
                <AlertTitle>No run selected</AlertTitle>
                <AlertDescription>Create a run in the Wizard tab first.</AlertDescription>
              </Alert>
            ) : (
              <>
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Versioned export contract</div>
                    <div className="mt-1 text-xs text-gray-600">Approve a snapshot; it becomes the immutable contract.</div>
                  </div>
                  {activeRun.approvedVersion ? (
                    <Badge variant="outline" className="bg-white">
                      approved v{activeRun.approvedVersion.version}
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="bg-white">
                      no approved version
                    </Badge>
                  )}
                </div>

                {activeRun.approvedVersion && diff ? (
                  <Alert>
                    <AlertTitle>Working vs approved</AlertTitle>
                    <AlertDescription>
                      {diff.changed} of {diff.total} fields differ from the approved contract.
                    </AlertDescription>
                  </Alert>
                ) : null}

                <Card className="border border-gray-200 rounded-2xl shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <GitBranch className="h-5 w-5 text-primary" />
                      Approve snapshot
                    </CardTitle>
                    <CardDescription>Creates an immutable version (simulated locally).</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="grid gap-2">
                      <Label>Approval note (optional)</Label>
                      <Input
                        placeholder="e.g., Reviewed with data governance; ready for export"
                        onKeyDown={(e) => {
                          if (e.key !== "Enter") return;
                          const value = (e.currentTarget as HTMLInputElement).value;
                          approve(value);
                          (e.currentTarget as HTMLInputElement).value = "";
                        }}
                      />
                    </div>
                    <Button onClick={() => approve("")} className="w-full">
                      <CheckCircle2 className="h-4 w-4 mr-2" />
                      Approve
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border border-gray-200 rounded-2xl shadow-lg">
                  <CardHeader>
                    <CardTitle>History</CardTitle>
                    <CardDescription>All approved versions for this run (stored in localStorage).</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {activeRun.versions.length === 0 ? (
                      <div className="text-sm text-gray-600">No versions yet.</div>
                    ) : (
                      <div className="space-y-2">
                        {activeRun.versions.slice(0, 8).map((v) => (
                          <div key={v.version} className="rounded-xl border border-gray-200 bg-white px-4 py-3">
                            <div className="flex flex-wrap items-center justify-between gap-3">
                              <div className="font-semibold text-gray-900">v{v.version} approved</div>
                              <div className="text-xs text-gray-600">{new Date(v.createdAt).toLocaleString()}</div>
                            </div>
                            {v.note ? <div className="mt-1 text-xs text-gray-600">note: {v.note}</div> : null}
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}

function generateReport(opts: {
  hostSchema: Schema;
  acquiredSchema: Schema;
  hostScopeTables: string[];
  hostEvidence: string;
  acquiredEvidence: string;
}): ReportRow[] {
  const hostTablesByName = new Map<string, Table>(opts.hostSchema.tables.map((t) => [t.name, t]));
  const acquiredFields = flattenTables(opts.acquiredSchema);

  const rows: ReportRow[] = [];
  for (const tName of opts.hostScopeTables) {
    const t = hostTablesByName.get(tName);
    if (!t) continue;
    for (const c of t.columns) {
      const host: HostField = {
        table: t.name,
        column: c.name,
        type: c.type,
        nullable: c.nullable,
        evidence: evidenceForTerm(opts.hostEvidence, c.name, 1),
      };
      const candidates = acquiredFields
        .map((af) => {
          const s = scoreCandidate(host, af);
          return {
            table: af.table,
            column: af.column.name,
            confidence: s.confidence,
            reasons: s.reasons,
            evidence: evidenceForTerm(opts.acquiredEvidence, af.column.name, 1),
          } satisfies Candidate;
        })
        .sort((a, b) => b.confidence - a.confidence)
        .slice(0, 5);

      const best = candidates[0] ?? null;
      rows.push({
        host,
        best_match: best && best.confidence >= 0.35 ? best : null,
        alternatives: candidates,
      });
    }
  }

  return rows;
}
