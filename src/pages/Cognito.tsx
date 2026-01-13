// Header is rendered globally from App.tsx
import CTASection from "@/components/shared/CTASection";
import { type Feature, FeaturesSection } from "@/components/shared/FeatureCard";
import CognitoSandbox from "@/components/cognito/CognitoSandbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2, Database, FileSearch, Gauge, GitBranch, Layers, ShieldCheck, Table2, Timer, WandSparkles, Workflow } from "lucide-react";
import { Link } from "react-router-dom";

const Cognito = () => {
  const features: Feature[] = [
    {
      icon: Layers,
      title: "Project-scoped engagements",
      description: "Separate connectors, evidence, runs, and reports per acquisition program for clean enterprise governance.",
      tags: ["Projects", "Engagement boundary", "Audit trail"],
    },
    {
      icon: Database,
      title: "Connectors + schema snapshots",
      description: "Connect to host and acquired systems, capture schema snapshots, and persist them as immutable artifacts per run.",
      tags: ["Postgres", "Snapshots", "Artifacts"],
    },
    {
      icon: FileSearch,
      title: "Evidence library",
      description: "Upload data dictionaries and docs; the matcher attaches searchable evidence excerpts to candidate mappings.",
      tags: ["Docs", "Data dictionary", "Citations"],
    },
    {
      icon: WandSparkles,
      title: "Explainable matching",
      description: "Confidence scoring with a ‘why’ breakdown (name/token/table/type) and ranked alternatives for reviewers.",
      tags: ["Confidence", "Reasons", "Alternatives"],
    },
    {
      icon: Table2,
      title: "Workbench triage",
      description: "Fast triage for unmapped/low-confidence fields with bulk actions and per-field notes for decision defensibility.",
      tags: ["Bulk actions", "Review flags", "Notes"],
    },
    {
      icon: GitBranch,
      title: "Versioned export contracts",
      description: "Draft → review → approved lifecycle with immutable version snapshots of reports + overrides for change control.",
      tags: ["Approval", "Versioning", "Contract"],
    },
    {
      icon: Workflow,
      title: "Temporal-orchestrated runs",
      description: "Repeatable workflows for discovery, alignment, and reporting—every run is persisted and traceable.",
      tags: ["Temporal", "History", "Repeatable"],
    },
    {
      icon: Gauge,
      title: "Operational visibility",
      description: "Run status, errors, and history are visible in the UI with a direct link to Temporal for deep inspection.",
      tags: ["Ops", "Diagnostics", "Traceability"],
    },
    {
      icon: ShieldCheck,
      title: "Enterprise-ready governance (product)",
      description: "Evidence-backed mapping decisions, audit events, and exportable outputs designed for enterprise sign-off processes.",
      tags: ["Governance", "Audit", "Export"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <main className="pt-28">
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full mix-blend-multiply filter blur-xl animate-float" />
            <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-indigo-400/20 to-cyan-400/20 rounded-full mix-blend-multiply filter blur-xl animate-float delay-1000" />
            <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full mix-blend-multiply filter blur-xl animate-float delay-2000" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px]" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
                  <span className="bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent font-semibold text-sm">
                    Cognito — enterprise intake & alignment
                  </span>
                </div>

                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in-up delay-200">
                  Align host vs acquired systems with
                  <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                    {" "}
                    evidence and governance
                  </span>
                </h1>

                <p className="text-xl text-gray-600 mb-8 leading-relaxed animate-fade-in-up delay-400">
                  Cognito is a Temporal-orchestrated workflow and UI for schema discovery, field-level alignment, reviewer decisions, and
                  versioned export contracts—built for enterprise M&A integration teams.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up delay-600">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Book a Demo <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <a
                    href="#sandbox"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl border border-gray-200 hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Try the Sandbox <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>

              <div className="relative animate-fade-in-up delay-1000">
                <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">Workflow spine</h3>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full" />
                      <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                      <div className="w-3 h-3 bg-green-400 rounded-full" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      { icon: Database, title: "Connect host", detail: "Create connector • discover schema • pick scope", tone: "border-blue-200 bg-blue-50 hover:bg-blue-100" },
                      { icon: FileSearch, title: "Attach evidence", detail: "Upload dictionaries • extract text • cite excerpts", tone: "border-indigo-200 bg-indigo-50 hover:bg-indigo-100" },
                      { icon: Table2, title: "Generate alignment", detail: "Candidates + confidence • alternatives • reasons", tone: "border-cyan-200 bg-cyan-50 hover:bg-cyan-100" },
                      { icon: WandSparkles, title: "Workbench triage", detail: "Bulk accept/flag • no-match decisions • notes", tone: "border-emerald-200 bg-emerald-50 hover:bg-emerald-100" },
                      { icon: GitBranch, title: "Approve & export", detail: "Draft → review → approved • versioned contract", tone: "border-amber-200 bg-amber-50 hover:bg-amber-100" },
                      { icon: Timer, title: "Run history", detail: "Every run persisted • link to Temporal UI", tone: "border-slate-200 bg-slate-50 hover:bg-slate-100" },
                    ].map((row) => (
                      <div key={row.title} className={`flex items-center p-4 rounded-lg border-2 ${row.tone} transition-colors duration-300`}>
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
                      { label: "Runs", value: "Temporal", icon: Workflow },
                      { label: "Decisions", value: "versioned", icon: GitBranch },
                      { label: "Evidence", value: "cited", icon: ShieldCheck },
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
          title="What Cognito Includes"
          subtitle="A complete, user-friendly system for enterprise alignment programs—built on durable workflows and evidence-backed decisions."
          features={features}
          variant="detailed"
          columns={3}
          backgroundVariant="gray"
        />

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="bg-white/70 backdrop-blur border-slate-200 px-4 py-2 text-sm font-semibold">
                <CheckCircle2 className="h-4 w-4 mr-2" />
                Enterprise workflow
              </Badge>
              <h2 className="mt-6 text-4xl font-bold mb-4 text-gray-900">Make decisions that survive audit</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Cognito is built for the real enterprise loop: evidence → proposal → human decision → approval → immutable export contract.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="border border-gray-200 shadow-xl rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileSearch className="h-5 w-5 text-primary" />
                    Evidence + rationale
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-600 space-y-2">
                  <div className="font-mono text-xs bg-muted rounded-md p-3">
                    evidence excerpts{"\n"}why breakdown{"\n"}alternatives ranked
                  </div>
                  <p>Every suggested match is paired with evidence and an explainability breakdown reviewers can trust.</p>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 shadow-xl rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GitBranch className="h-5 w-5 text-primary" />
                    Versioned approvals
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-600 space-y-2">
                  <div className="font-mono text-xs bg-muted rounded-md p-3">
                    draft → in_review → approved{"\n"}immutable snapshots{"\n"}diff vs approved
                  </div>
                  <p>Approved versions become the export contract; drafts stay editable until sign-off.</p>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 shadow-xl rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Timer className="h-5 w-5 text-primary" />
                    Repeatable runs
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-600 space-y-2">
                  <div className="font-mono text-xs bg-muted rounded-md p-3">
                    Temporal workflow runs{"\n"}history + errors{"\n"}export JSON/CSV
                  </div>
                  <p>Every alignment run is persisted and traceable, with history for enterprise programs.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="sandbox" className="py-20 bg-neutral-light">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Cognito Sandbox</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Play with Cognito’s core workflow: select host scope, generate alignment, triage in the workbench, and approve a versioned export
                contract.
              </p>
            </div>
            <CognitoSandbox />
          </div>
        </section>

        <CTASection
          title="Ship integration programs faster with Cognito"
          subtitle="Bring order to schema alignment: durable workflows, evidence, triage, approvals, and export contracts—without spreadsheet chaos."
          buttons={[
            { text: "Book a Demo", variant: "primary", icon: ArrowRight, href: "/contact" },
            { text: "Talk to an Architect", variant: "secondary", icon: ArrowRight, href: "/contact" },
          ]}
          benefits={[
            { text: "Temporal-orchestrated execution + history" },
            { text: "Evidence-backed decisions and approvals" },
            { text: "Versioned export contracts for change control" },
          ]}
          backgroundVariant="gray"
          size="md"
        />
      </main>
    </div>
  );
};

export default Cognito;
