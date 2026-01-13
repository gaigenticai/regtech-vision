// Header is rendered globally from App.tsx
import CTASection from "@/components/shared/CTASection";
import { type Feature, FeaturesSection } from "@/components/shared/FeatureCard";
import SentinelApiSandbox from "@/components/sentinel/SentinelApiSandbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Database,
  Brain,
  Workflow,
  Plug,
  Wrench,
  Activity,
  Scale,
  FileSearch,
  MessageSquare,
  ScrollText,
  Timer,
  ArrowRight,
  Code,
  Shield,
  GitBranch,
  Lock,
  Webhook
} from "lucide-react";

const Sentinel = () => {
  const features: Feature[] = [
    {
      icon: Database,
      title: "Memory + Knowledge Base",
      description: "Postgres-backed memory, KB ingestion + chunking, and hybrid retrieval (lexical + semantic) via pgvector.",
      tags: ["Postgres", "pgvector", "Hybrid Search"]
    },
    {
      icon: Workflow,
      title: "Durable Orchestration",
      description: "Workflow execution, scheduling, cancellations, run logs, and evidence export using a durable job queue.",
      tags: ["pg-boss", "Runs", "Scheduling"]
    },
    {
      icon: Plug,
      title: "Connectors + Ingestion",
      description: "HTTP polling + webhooks to ingest external data into generic artifacts, with cursoring and redaction.",
      tags: ["ETag/Last-Modified", "Webhooks", "Artifacts"]
    },
    {
      icon: Wrench,
      title: "Tool Gateway (API-first)",
      description: "Register tools + operations and execute them through Sentinel with auditing, redaction, PII scanning, and evidence artifacts.",
      tags: ["Tool Registry", "Evidence", "API Gateway"]
    },
    {
      icon: ShieldCheck,
      title: "Policy + Safety",
      description: "OPA (WASM) authorization for HTTP + workflows, plus redaction rules and encrypted secrets at rest.",
      tags: ["OPA", "Redaction", "Secrets"]
    },
    {
      icon: Activity,
      title: "Observability + Governance",
      description: "Prometheus metrics, OpenTelemetry tracing (optional), audit events, and evaluation harness for regression checks.",
      tags: ["Prometheus", "OpenTelemetry", "Eval Harness"]
    },
    {
      icon: Scale,
      title: "Quotas + Cost Controls",
      description: "Per-scope quota limits with enforced usage tracking for HTTP, embeddings, tool invocations, and orchestration.",
      tags: ["Rate Limits", "Budgets", "Multi-tenant"]
    },
    {
      icon: ScrollText,
      title: "Provenance + Lineage",
      description: "Attach citations to runs/artifacts/sessions/tool invocations and generate lineage graphs for explainability.",
      tags: ["Citations", "Lineage", "Explainability"]
    },
    {
      icon: Brain,
      title: "PII + Prompt Store",
      description: "PII detection findings, versioned prompt templates, safe prompt rendering, and retention policies with legal holds.",
      tags: ["PII Findings", "Prompt Versioning", "Retention"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <main className="pt-28">
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full mix-blend-multiply filter blur-xl animate-float delay-1000"></div>
            <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full mix-blend-multiply filter blur-xl animate-float delay-2000"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-blue-100 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-semibold text-sm">
                    Sentinel — API-first infrastructure for agentic systems
                  </span>
                </div>

                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in-up delay-200">
                  Build agents with
                  <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    {" "}
                    memory, knowledge, orchestration
                  </span>
                  {" "}
                  and governance
                </h1>

                <p className="text-xl text-gray-600 mb-8 max-w-2xl animate-fade-in-up delay-400">
                  Sentinel is Gaigentic’s reusable backend for durable sessions, hybrid retrieval, connectors, tool execution, policy enforcement,
                  and evidence-first audit trails — designed to plug into existing stacks without disruption.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-fade-in-up delay-600">
                  <Link to="/contact">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-2 border-gray-300 hover:bg-blue-400 hover:text-white hover:border-blue-400 font-semibold px-8 py-4 rounded-xl transition-all duration-300"
                    >
                      Request Demo
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <a href="#sandbox">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-2 border-gray-300 hover:bg-purple-600 hover:text-white hover:border-purple-600 font-semibold px-8 py-4 rounded-xl transition-all duration-300"
                    >
                      Try API Sandbox
                      <Code className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 animate-fade-in-up delay-800">
                  {[
                    { value: "Postgres", label: "Durable state + pgvector", color: "from-purple-600 to-fuchsia-600" },
                    { value: "OPA", label: "Policy enforcement", color: "from-blue-600 to-cyan-600" },
                    { value: "Evidence", label: "Provenance + lineage", color: "from-indigo-600 to-purple-600" }
                  ].map((chip) => (
                    <div key={chip.label} className="text-center group">
                      <div
                        className={`text-xl font-bold text-white mb-2 group-hover:scale-105 transition-transform duration-300 inline-block rounded-full px-4 py-1 bg-gradient-to-r ${chip.color}`}
                      >
                        {chip.value}
                      </div>
                      <p className="text-sm text-gray-600">{chip.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative animate-fade-in-up delay-1000">
                <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">Core API Surface</h3>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      {
                        icon: Database,
                        title: "Memory + KB",
                        detail: "PUT /v1/memory • POST /v1/kb/search",
                        tone: "border-purple-200 bg-purple-50 hover:bg-purple-100"
                      },
                      {
                        icon: MessageSquare,
                        title: "Sessions",
                        detail: "POST /v1/sessions • POST /v1/sessions/:id/messages",
                        tone: "border-blue-200 bg-blue-50 hover:bg-blue-100"
                      },
                      {
                        icon: Workflow,
                        title: "Orchestration",
                        detail: "POST /v1/orchestrator/runs • GET /v1/orchestrator/runs/:id",
                        tone: "border-indigo-200 bg-indigo-50 hover:bg-indigo-100"
                      },
                      {
                        icon: Wrench,
                        title: "Tools",
                        detail: "POST /v1/tools • POST /v1/tools/execute",
                        tone: "border-emerald-200 bg-emerald-50 hover:bg-emerald-100"
                      },
                      {
                        icon: Shield,
                        title: "Policy",
                        detail: "POST /v1/policy/evaluate • GET /v1/policy/bundles",
                        tone: "border-amber-200 bg-amber-50 hover:bg-amber-100"
                      },
                      {
                        icon: Webhook,
                        title: "Events + Webhooks",
                        detail: "POST /v1/webhooks • GET /v1/events",
                        tone: "border-slate-200 bg-slate-50 hover:bg-slate-100"
                      }
                    ].map((row) => (
                      <div
                        key={row.title}
                        className={`flex items-center p-4 rounded-lg border-2 ${row.tone} transition-colors duration-300`}
                      >
                        <div className="w-10 h-10 rounded-full flex items-center justify-center mr-4 bg-white border border-gray-200">
                          <row.icon className="w-5 h-5 text-gray-900" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-gray-900">{row.title}</div>
                          <div className="text-xs text-gray-700 font-mono break-all">{row.detail}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { icon: Lock, label: "Secrets", value: "encrypted" },
                      { icon: GitBranch, label: "Prompts", value: "versioned" },
                      { icon: ShieldCheck, label: "Audit", value: "evidence-first" }
                    ].map((item) => (
                      <div key={item.label} className="rounded-xl border border-gray-200 bg-white p-3 text-center">
                        <item.icon className="h-4 w-4 mx-auto text-gray-900" />
                        <div className="mt-2 text-xs font-semibold text-gray-900">{item.value}</div>
                        <div className="text-[11px] text-gray-600">{item.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FeaturesSection
          title="What Sentinel Includes"
          subtitle="Reusable building blocks you can embed into any agent or product, across any industry."
          features={features}
          variant="detailed"
          columns={3}
          backgroundVariant="gray"
        />

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-blue-100 rounded-full px-6 py-3 mb-6">
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-semibold">
                  Developer-first, evidence-first
                </span>
              </div>
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Real APIs, Real Evidence</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Sentinel is API-first: every memory, retrieval, tool call, workflow, and decision becomes evidence you can audit, search, and cite.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="border border-gray-200 shadow-xl rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileSearch className="h-5 w-5 text-primary" />
                    Retrieval
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-600 space-y-2">
                  <div className="font-mono text-xs bg-muted rounded-md p-3">
                    POST /v1/memory/search{"\n"}POST /v1/kb/search{"\n"}POST /v1/artifacts/search
                  </div>
                  <p>Hybrid search combines lexical + semantic retrieval without vendor lock-in.</p>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 shadow-xl rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    Sessions
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-600 space-y-2">
                  <div className="font-mono text-xs bg-muted rounded-md p-3">
                    POST /v1/sessions{"\n"}POST /v1/sessions/:id/messages{"\n"}POST /v1/sessions/search
                  </div>
                  <p>Conversation state + tool calls stored as durable, searchable records.</p>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 shadow-xl rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Timer className="h-5 w-5 text-primary" />
                    Orchestration
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-600 space-y-2">
                  <div className="font-mono text-xs bg-muted rounded-md p-3">
                    POST /v1/orchestrator/runs{"\n"}GET /v1/orchestrator/runs/:runId{"\n"}GET /v1/orchestrator/runs/:runId/evidence
                  </div>
                  <p>Durable workflows with logs, artifacts, and policy decisions bundled as evidence.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="sandbox" className="py-20 bg-neutral-light">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-blue-100 rounded-full px-6 py-3 mb-6">
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-semibold">
                  Self-contained, in-browser demo
                </span>
              </div>
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Sentinel API Sandbox</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore Sentinel APIs instantly: the default mode runs locally in your browser (IndexedDB + retrieval). You can also point it at your own Sentinel deployment.
              </p>
            </div>
            <SentinelApiSandbox defaultBaseUrl={import.meta.env.VITE_SENTINEL_API_BASE_URL as string | undefined} />
          </div>
        </section>

        <CTASection
          title="Deploy Sentinel with your agents"
          subtitle="Plug Sentinel into your existing stack to add memory, retrieval, orchestration, tools, and governance without rewriting your systems."
          buttons={[
            { text: "Book a Demo", variant: "primary", icon: ArrowRight, href: "/contact" },
            { text: "Talk to an Architect", variant: "secondary", icon: ArrowRight, href: "/contact" }
          ]}
          benefits={[
            { text: "API-first + evidence-first design" },
            { text: "Open-source foundations" },
            { text: "Multi-tenant scope isolation" }
          ]}
          backgroundVariant="gray"
          size="md"
        />
      </main>
    </div>
  );
};

export default Sentinel;
