import { useEffect, useMemo, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Copy, Play, RefreshCw, Terminal, Link as LinkIcon } from "lucide-react";
import { SENTINEL_SANDBOX_EXAMPLES, type SandboxExample, type HttpMethod } from "./sandboxExamples";
import { clearLocalSentinelData, handleLocalSentinel } from "@/lib/sentinel/local";

const BODY_PLACEHOLDER = '{\n  "scope": "tenant:acme",\n  ...\n}';

function joinUrl(baseUrl: string, path: string) {
  const base = baseUrl.replace(/\/+$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}

function safeJsonParse(s: string) {
  try {
    return { ok: true as const, value: JSON.parse(s) };
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return { ok: false as const, error: message };
  }
}

function formatJson(x: unknown) {
  return JSON.stringify(x, null, 2);
}

function buildCurl(opts: {
  url: string;
  method: HttpMethod;
  headers: Record<string, string>;
  body: string | null;
}) {
  const headerFlags = Object.entries(opts.headers)
    .filter(([, v]) => v.trim().length > 0)
    .map(([k, v]) => `-H ${JSON.stringify(`${k}: ${v}`)}`)
    .join(" ");
  const bodyFlag = opts.body ? `--data ${JSON.stringify(opts.body)}` : "";
  return `curl -s -X ${opts.method} ${JSON.stringify(opts.url)} ${headerFlags} ${bodyFlag}`.trim();
}

async function copyToClipboard(text: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }
  const el = document.createElement("textarea");
  el.value = text;
  el.style.position = "fixed";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
}

type SandboxResponse =
  | {
      status: "idle";
    }
  | {
      status: "running";
      startedAt: number;
    }
  | {
      status: "done";
      ok: boolean;
      httpStatus: number | null;
      durationMs: number;
      responseHeaders: Record<string, string>;
      bodyText: string;
      bodyJson?: unknown;
      error?: string;
    };

export type SentinelApiSandboxProps = {
  defaultBaseUrl?: string;
  defaultScope?: string;
  defaultApiKey?: string;
  defaultActor?: string;
};

export default function SentinelApiSandbox(props: SentinelApiSandboxProps) {
  const [mode, setMode] = useState<"local" | "remote">(props.defaultBaseUrl?.trim() ? "remote" : "local");
  const [baseUrl, setBaseUrl] = useState(props.defaultBaseUrl ?? "");
  const [scope, setScope] = useState(props.defaultScope ?? "tenant:acme");
  const [apiKey, setApiKey] = useState(props.defaultApiKey ?? "");
  const [actor, setActor] = useState(props.defaultActor ?? "website:sandbox");

  const examples = useMemo(() => SENTINEL_SANDBOX_EXAMPLES, []);
  const [exampleId, setExampleId] = useState(examples[0]?.id ?? "health");

  const selected: SandboxExample | undefined = useMemo(
    () => examples.find((e) => e.id === exampleId),
    [examples, exampleId]
  );

  const [method, setMethod] = useState<HttpMethod>(selected?.method ?? "GET");
  const [path, setPath] = useState<string>(selected?.path ?? "/health");
  const [body, setBody] = useState<string>(selected?.body ? formatJson(selected.body) : "");

  const abortRef = useRef<AbortController | null>(null);
  const [resp, setResp] = useState<SandboxResponse>({ status: "idle" });

  useEffect(() => {
    if (!selected) return;
    setMethod(selected.method);
    setPath(selected.path);
    setBody(selected.body ? formatJson(selected.body) : "");
    setResp({ status: "idle" });
  }, [selected?.id]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (mode === "remote") return;
    setBaseUrl("");
  }, [mode]);

  const requestUrl = useMemo(() => {
    if (mode === "local") return `local://sentinel${path.trim().startsWith("/") ? path.trim() : `/${path.trim()}`}`;
    if (!baseUrl.trim()) return "";
    return joinUrl(baseUrl.trim(), path.trim());
  }, [mode, baseUrl, path]);

  const headers = useMemo(() => {
    const h: Record<string, string> = {};
    if (scope.trim()) h["x-infra-scope"] = scope.trim();
    if (apiKey.trim()) h["x-infra-key"] = apiKey.trim();
    if (actor.trim()) h["x-infra-actor"] = actor.trim();
    return h;
  }, [scope, apiKey, actor]);

  const curl = useMemo(() => {
    const bodyStr = method === "GET" || method === "DELETE" ? null : (body.trim() ? body.trim() : null);
    if (!requestUrl) return "";
    if (mode === "local") return "";
    return buildCurl({ url: requestUrl, method, headers: { "content-type": "application/json", ...headers }, body: bodyStr });
  }, [mode, requestUrl, method, headers, body]);

  const canSend = Boolean(requestUrl) && Boolean(path.trim());

  const send = async () => {
    if (!canSend) return;
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    const startedAt = Date.now();
    setResp({ status: "running", startedAt });

    const bodyStr = method === "GET" || method === "DELETE" ? null : (body.trim() ? body.trim() : null);
    if (bodyStr) {
      const parsed = safeJsonParse(bodyStr);
      if (!parsed.ok) {
        setResp({
          status: "done",
          ok: false,
          httpStatus: null,
          durationMs: Date.now() - startedAt,
          responseHeaders: {},
          bodyText: "",
          error: `Invalid JSON body: ${parsed.error}`
        });
        return;
      }
    }

    try {
      if (mode === "local") {
        const local = await handleLocalSentinel({
          method,
          path,
          headers,
          bodyText: bodyStr
        });

        setResp({
          status: "done",
          ok: local.status >= 200 && local.status < 300,
          httpStatus: local.status,
          durationMs: Date.now() - startedAt,
          responseHeaders: local.headers,
          bodyText: formatJson(local.body),
          bodyJson: local.body,
          ...(local.status >= 400 ? { error: `HTTP ${local.status}` } : {})
        });
        return;
      }

      const res = await fetch(requestUrl, {
        method,
        headers: {
          ...(bodyStr ? { "content-type": "application/json" } : {}),
          ...headers
        },
        ...(bodyStr ? { body: bodyStr } : {}),
        signal: controller.signal
      });

      const responseHeaders: Record<string, string> = {};
      res.headers.forEach((v, k) => {
        responseHeaders[k] = v;
      });

      const bodyText = await res.text().catch(() => "");
      const parsed = bodyText ? safeJsonParse(bodyText) : { ok: true as const, value: null };

      setResp({
        status: "done",
        ok: res.ok,
        httpStatus: res.status,
        durationMs: Date.now() - startedAt,
        responseHeaders,
        bodyText,
        ...(parsed.ok ? { bodyJson: parsed.value } : {}),
        ...(!res.ok ? { error: `HTTP ${res.status}` } : {})
      });
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      setResp({
        status: "done",
        ok: false,
        httpStatus: null,
        durationMs: Date.now() - startedAt,
        responseHeaders: {},
        bodyText: "",
        error: message
      });
    }
  };

  const resetToExample = () => {
    if (!selected) return;
    setMethod(selected.method);
    setPath(selected.path);
    setBody(selected.body ? formatJson(selected.body) : "");
    setResp({ status: "idle" });
  };

  const resetDemoData = async () => {
    await clearLocalSentinelData();
    setResp({ status: "idle" });
  };

  return (
    <Card className="border border-gray-200 shadow-2xl rounded-2xl">
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Terminal className="h-5 w-5 text-primary" />
              API Sandbox
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-2">
              Point this sandbox at any Sentinel deployment and run real requests from your browser.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 justify-start sm:justify-end">
            <Select value={mode} onValueChange={(v) => setMode(v as "local" | "remote")}>
              <SelectTrigger className="w-full sm:w-[160px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="local">Local demo</SelectItem>
                <SelectItem value="remote">Your deployment</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="sm" onClick={resetToExample}>
              <RefreshCw className="h-4 w-4 mr-2" />
              Reset
            </Button>
            {mode === "local" && (
              <Button variant="outline" size="sm" onClick={resetDemoData}>
                <RefreshCw className="h-4 w-4 mr-2" />
                Clear demo data
              </Button>
            )}
            <Button size="sm" onClick={send} disabled={!canSend || resp.status === "running"}>
              {resp.status === "running" ? (
                <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
              ) : (
                <Play className="h-4 w-4 mr-2" />
              )}
              Send
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <Alert className="bg-white">
          <AlertTitle className="flex items-center gap-2">
            <LinkIcon className="h-4 w-4" />
            Works out-of-the-box
          </AlertTitle>
          <AlertDescription>
            Local demo stores data in your browser (IndexedDB) and executes the Sentinel endpoints directly in this page. Switch to “Your deployment” to call a real Sentinel API base URL.
          </AlertDescription>
        </Alert>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 space-y-3">
            <label className="text-sm font-medium">Sentinel Base URL</label>
            {mode === "remote" ? (
              <Input
                value={baseUrl}
                onChange={(e) => setBaseUrl(e.target.value)}
                placeholder="https://your-sentinel.example.com"
                inputMode="url"
              />
            ) : (
              <div className="rounded-md border bg-muted px-3 py-2 text-sm">
                Local demo (in-browser)
              </div>
            )}
          </div>
          <div className="space-y-3">
            <label className="text-sm font-medium">Scope</label>
            <Input value={scope} onChange={(e) => setScope(e.target.value)} placeholder="tenant:acme" />
          </div>
          <div className="space-y-3">
            <label className="text-sm font-medium">API Key (optional)</label>
            <Input value={apiKey} onChange={(e) => setApiKey(e.target.value)} placeholder="x-infra-key" />
          </div>
          <div className="space-y-3">
            <label className="text-sm font-medium">Actor (optional)</label>
            <Input value={actor} onChange={(e) => setActor(e.target.value)} placeholder="x-infra-actor" />
          </div>
          <div className="space-y-3">
            <label className="text-sm font-medium">Example</label>
            <Select value={exampleId} onValueChange={setExampleId}>
              <SelectTrigger>
                <SelectValue placeholder="Select example" />
              </SelectTrigger>
              <SelectContent>
                {examples.map((e) => (
                  <SelectItem key={e.id} value={e.id}>
                    {e.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {selected && (
              <div className="text-xs text-muted-foreground">{selected.description}</div>
            )}
          </div>
          <div className="space-y-3">
            <label className="text-sm font-medium">Method</label>
            <Select value={method} onValueChange={(v) => setMethod(v as HttpMethod)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {(["GET", "POST", "PUT", "PATCH", "DELETE"] as const).map((m) => (
                  <SelectItem key={m} value={m}>
                    {m}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 space-y-3">
            <label className="text-sm font-medium">Path</label>
            <Input value={path} onChange={(e) => setPath(e.target.value)} placeholder="/v1/memory/search" />
          </div>
          <div className="space-y-3">
            <label className="text-sm font-medium">Request URL</label>
            <div className="rounded-md border bg-muted px-3 py-2 text-xs break-all">
              {requestUrl || <span className="text-muted-foreground">Set a base URL</span>}
            </div>
          </div>
        </div>

        <Tabs defaultValue="body">
          <TabsList className="grid grid-cols-1 sm:grid-cols-3 w-full">
            <TabsTrigger value="body">Body</TabsTrigger>
            <TabsTrigger value="curl">curl</TabsTrigger>
            <TabsTrigger value="headers">Headers</TabsTrigger>
          </TabsList>

          <TabsContent value="body" className="mt-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">JSON Body</label>
                <Badge variant="secondary">{method === "GET" || method === "DELETE" ? "ignored" : "sent"}</Badge>
              </div>
              <Textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder={BODY_PLACEHOLDER}
                className="min-h-[180px] font-mono text-xs"
              />
            </div>
          </TabsContent>

          <TabsContent value="curl" className="mt-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">curl</label>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyToClipboard(curl)}
                  disabled={!curl}
                >
                  <Copy className="h-4 w-4 mr-2" />
                  Copy
                </Button>
              </div>
              <div className="rounded-md border bg-muted p-3 font-mono text-xs whitespace-pre-wrap">
                {mode === "local" ? "curl is available when calling a real Sentinel deployment." : (curl || "Set a base URL to generate a request.")}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="headers" className="mt-4">
            <div className="space-y-2 text-sm">
              {Object.entries(headers).length === 0 ? (
                <div className="text-muted-foreground">No headers set.</div>
              ) : (
                Object.entries(headers).map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between rounded-md border bg-white px-3 py-2">
                    <span className="font-mono text-xs">{k}</span>
                    <span className="font-mono text-xs text-muted-foreground break-all">{v}</span>
                  </div>
                ))
              )}
            </div>
          </TabsContent>
        </Tabs>

        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium">Response</h3>
            {resp.status === "done" && (
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span>{resp.httpStatus !== null ? `HTTP ${resp.httpStatus}` : "no HTTP status"}</span>
                <span>{resp.durationMs}ms</span>
              </div>
            )}
          </div>

          {resp.status === "idle" && (
            <div className="rounded-md border bg-muted p-4 text-sm text-muted-foreground">
              Select an example, set a base URL, and click Send.
            </div>
          )}

          {resp.status === "running" && (
            <div className="rounded-md border bg-muted p-4 text-sm text-muted-foreground flex items-center gap-2">
              <RefreshCw className="h-4 w-4 animate-spin" />
              Sending request…
            </div>
          )}

          {resp.status === "done" && (
            <div className="space-y-3">
              {resp.error && (
                <Alert variant="destructive">
                  <AlertTitle>Request failed</AlertTitle>
                  <AlertDescription className="break-words">{resp.error}</AlertDescription>
                </Alert>
              )}

              <div className="rounded-md border bg-black text-white p-4 font-mono text-xs whitespace-pre-wrap overflow-auto max-h-[320px]">
                {resp.bodyJson !== undefined ? formatJson(resp.bodyJson) : resp.bodyText || "(empty body)"}
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyToClipboard(resp.bodyJson !== undefined ? formatJson(resp.bodyJson) : resp.bodyText)}
                >
                  <Copy className="h-4 w-4 mr-2" />
                  Copy Response
                </Button>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
