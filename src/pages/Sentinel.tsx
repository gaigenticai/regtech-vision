// Header is rendered globally from App.tsx
import SentinelApiSandbox from "@/components/sentinel/SentinelApiSandbox";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const capabilities = [
  {
    index: "01",
    name: "Memory + knowledge base",
    detail:
      "Postgres-backed memory, KB ingestion + chunking, and hybrid retrieval (lexical + semantic) via pgvector.",
    tags: ["Postgres", "pgvector", "Hybrid search"],
  },
  {
    index: "02",
    name: "Durable orchestration",
    detail:
      "Workflow execution, scheduling, cancellations, run logs, and evidence export using a durable job queue.",
    tags: ["pg-boss", "Runs", "Scheduling"],
  },
  {
    index: "03",
    name: "Connectors + ingestion",
    detail:
      "HTTP polling + webhooks to ingest external data into generic artifacts, with cursoring and redaction.",
    tags: ["ETag/Last-Modified", "Webhooks", "Artifacts"],
  },
  {
    index: "04",
    name: "Tool gateway (API-first)",
    detail:
      "Register tools + operations and execute them through Sentinel with auditing, redaction, PII scanning, and evidence artifacts.",
    tags: ["Tool registry", "Evidence", "API gateway"],
  },
  {
    index: "05",
    name: "Policy + safety",
    detail:
      "OPA (WASM) authorization for HTTP + workflows, plus redaction rules and encrypted secrets at rest.",
    tags: ["OPA", "Redaction", "Secrets"],
  },
  {
    index: "06",
    name: "Observability + governance",
    detail:
      "Prometheus metrics, OpenTelemetry tracing (optional), audit events, and evaluation harness for regression checks.",
    tags: ["Prometheus", "OpenTelemetry", "Eval harness"],
  },
  {
    index: "07",
    name: "Quotas + cost controls",
    detail:
      "Per-scope quota limits with enforced usage tracking for HTTP, embeddings, tool invocations, and orchestration.",
    tags: ["Rate limits", "Budgets", "Multi-tenant"],
  },
  {
    index: "08",
    name: "Provenance + lineage",
    detail:
      "Attach citations to runs/artifacts/sessions/tool invocations and generate lineage graphs for explainability.",
    tags: ["Citations", "Lineage", "Explainability"],
  },
  {
    index: "09",
    name: "PII + prompt store",
    detail:
      "PII detection findings, versioned prompt templates, safe prompt rendering, and retention policies with legal holds.",
    tags: ["PII findings", "Prompt versioning", "Retention"],
  },
];

const apiSurface = [
  {
    title: "Memory + KB",
    endpoints: ["PUT /v1/memory", "POST /v1/memory/search", "POST /v1/kb/search", "POST /v1/artifacts/search"],
    note: "Hybrid search combines lexical + semantic retrieval without vendor lock-in.",
  },
  {
    title: "Sessions",
    endpoints: ["POST /v1/sessions", "POST /v1/sessions/:id/messages", "POST /v1/sessions/search"],
    note: "Conversation state + tool calls stored as durable, searchable records.",
  },
  {
    title: "Orchestration",
    endpoints: ["POST /v1/orchestrator/runs", "GET /v1/orchestrator/runs/:runId", "GET /v1/orchestrator/runs/:runId/evidence"],
    note: "Durable workflows with logs, artifacts, and policy decisions bundled as evidence.",
  },
  {
    title: "Tools",
    endpoints: ["POST /v1/tools", "POST /v1/tools/execute"],
    note: "Every tool execution is audited and produces evidence artifacts.",
  },
  {
    title: "Policy",
    endpoints: ["POST /v1/policy/evaluate", "GET /v1/policy/bundles"],
    note: "OPA-backed authorization for HTTP requests and workflow steps.",
  },
  {
    title: "Events + webhooks",
    endpoints: ["POST /v1/webhooks", "GET /v1/events"],
    note: "Ingest external events and subscribe to Sentinel's audit stream.",
  },
];

const Sentinel = () => {
  return (
    <div className="bg-ink min-h-screen pt-16">
      {/* Hero: paper */}
      <section className="px-3 md:px-5 pt-3 md:pt-5">
        <div className="bg-paper rounded-2xl md:rounded-3xl">
          <div className="max-w-[1400px] mx-auto px-5 md:px-12 py-12 md:py-16">
            <span className="eyebrow text-ink-faint">Infrastructure · Sentinel</span>
            <h1 className="mt-6 font-sans font-expanded font-extrabold text-ink tracking-tight leading-[1.0] text-5xl md:text-7xl max-w-4xl">
              Build agents with <span className="text-ledger">memory, knowledge, orchestration</span> and governance
            </h1>
            <p className="mt-8 text-lg md:text-xl text-ink-soft leading-relaxed max-w-2xl">
              Sentinel is Gaigentic&rsquo;s reusable backend for durable sessions, hybrid retrieval,
              connectors, tool execution, policy enforcement, and evidence-first audit trails,
              designed to plug into existing stacks without disruption.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="eyebrow inline-flex items-center gap-2 bg-ink text-paper rounded-full px-6 py-3.5 hover:bg-ink-soft transition-colors"
              >
                Talk to us
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <a
                href="#sandbox"
                className="eyebrow inline-flex items-center gap-2 border border-ink/25 text-ink rounded-full px-6 py-3.5 hover:border-ink/50 transition-colors"
              >
                Try the API sandbox
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities: dark index rows */}
      <section className="max-w-[1400px] mx-auto px-5 md:px-12 py-14 md:py-20">
        <div className="flex items-baseline justify-between mb-8">
          <span className="eyebrow text-paper/45">What Sentinel includes</span>
          <span className="font-mono text-xs text-paper/35 hidden sm:block">reusable building blocks · any industry</span>
        </div>
        <div className="border-t border-paper/10">
          {capabilities.map((capability) => (
            <div
              key={capability.index}
              className="grid md:grid-cols-[56px_220px_1fr] gap-4 md:gap-6 py-8 border-b border-paper/10"
            >
              <span className="font-mono text-xs text-paper/35 pt-1.5">{capability.index}</span>
              <h3 className="font-sans font-expanded font-bold text-2xl text-paper tracking-tight">
                {capability.name}
              </h3>
              <div>
                <p className="text-paper/60 leading-relaxed max-w-2xl">{capability.detail}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {capability.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[11px] uppercase tracking-[0.14em] text-paper/45 border border-paper/15 rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hatch divider */}
      <div className="max-w-[1400px] mx-auto px-5 md:px-12">
        <div className="h-10 hatch-band rounded-sm" aria-hidden />
      </div>

      {/* API surface: dark grid */}
      <section className="max-w-[1400px] mx-auto px-5 md:px-12 py-14 md:py-20">
        <div className="flex items-baseline justify-between mb-4">
          <span className="eyebrow text-paper/45">Core API surface</span>
          <span className="font-mono text-xs text-paper/35 hidden sm:block">
            secrets encrypted · prompts versioned · audit evidence-first
          </span>
        </div>
        <p className="text-paper/60 leading-relaxed max-w-2xl mb-10">
          Sentinel is API-first: every memory, retrieval, tool call, workflow, and decision becomes
          evidence you can audit, search, and cite.
        </p>
        <div className="grid md:grid-cols-3 gap-px bg-paper/10 border border-paper/10 rounded-2xl overflow-hidden">
          {apiSurface.map((area) => (
            <div key={area.title} className="bg-ink p-7 md:p-9">
              <h3 className="font-sans font-expanded font-bold text-xl text-paper tracking-tight mb-4">
                {area.title}
              </h3>
              <div className="font-mono text-xs text-paper/60 leading-relaxed space-y-1 mb-4">
                {area.endpoints.map((endpoint) => (
                  <div key={endpoint} className="break-all">{endpoint}</div>
                ))}
              </div>
              <p className="text-paper/60 leading-relaxed text-[15px]">{area.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sandbox: dark card, interactive */}
      <section id="sandbox" className="max-w-[1400px] mx-auto px-5 md:px-12 py-14 md:py-20">
        <div className="flex items-baseline justify-between mb-4">
          <span className="eyebrow text-paper/45">API sandbox</span>
          <span className="font-mono text-xs text-paper/35 hidden sm:block">self-contained · in-browser</span>
        </div>
        <p className="text-paper/60 leading-relaxed max-w-2xl mb-10">
          Explore Sentinel APIs instantly: the default mode runs locally in your browser (IndexedDB
          + retrieval). You can also point it at your own Sentinel deployment.
        </p>
        <div className="bg-ink border border-paper/10 rounded-2xl p-3 md:p-6">
          <SentinelApiSandbox defaultBaseUrl={import.meta.env.VITE_SENTINEL_API_BASE_URL as string | undefined} />
        </div>
      </section>

      {/* CTA */}
      <section className="px-3 md:px-5 pb-3 md:pb-5">
        <div className="bg-ledger-deep rounded-2xl md:rounded-3xl">
          <div className="max-w-[1400px] mx-auto px-5 md:px-12 py-14 md:py-20 text-center">
            <h2 className="font-sans font-expanded font-extrabold text-paper tracking-tight leading-tight text-4xl md:text-5xl">
              Deploy Sentinel with your agents.
            </h2>
            <p className="mt-5 text-paper/65 leading-relaxed text-lg max-w-xl mx-auto">
              Plug Sentinel into your existing stack to add memory, retrieval, orchestration, tools,
              and governance without rewriting your systems.
            </p>
            <div className="mt-7 font-mono text-xs text-paper/45">
              API-first + evidence-first design · open-source foundations · multi-tenant scope isolation
            </div>
            <Link
              to="/contact"
              className="eyebrow inline-flex items-center gap-2 bg-paper text-ink rounded-full px-7 py-4 mt-9 hover:bg-paper-bright transition-colors"
            >
              Talk to us
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sentinel;
