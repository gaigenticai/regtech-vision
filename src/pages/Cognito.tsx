// Header is rendered globally from App.tsx
import CognitoSandbox from "@/components/cognito/CognitoSandbox";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const stages = [
  {
    index: "01",
    name: "Connectors",
    detail:
      "Connect to host and acquired systems: create connectors, discover schemas, and pick the scope for each engagement.",
    mono: "create connector · discover schema · pick scope",
  },
  {
    index: "02",
    name: "Schema snapshots",
    detail:
      "Capture schema snapshots and persist them as immutable artifacts per run — the ground truth every mapping decision refers back to.",
    mono: "immutable artifacts · per run",
  },
  {
    index: "03",
    name: "Explainable matching",
    detail:
      "Generate alignment candidates with confidence scoring, a 'why' breakdown (name/token/table/type), and ranked alternatives for reviewers. Uploaded data dictionaries and docs become searchable evidence excerpts attached to candidate mappings.",
    mono: "confidence · reasons · alternatives · evidence excerpts",
  },
  {
    index: "04",
    name: "Workbench triage",
    detail:
      "Fast triage for unmapped and low-confidence fields with bulk accept/flag actions, no-match decisions, and per-field notes for decision defensibility.",
    mono: "bulk actions · review flags · notes",
  },
  {
    index: "05",
    name: "Approvals",
    detail:
      "A draft → review → approved lifecycle for reviewer decisions. Drafts stay editable until sign-off; approved versions become the export contract.",
    mono: "draft → in_review → approved",
  },
  {
    index: "06",
    name: "Versioned exports",
    detail:
      "Immutable version snapshots of reports + overrides for change control, with diff vs approved and export to JSON/CSV.",
    mono: "immutable snapshots · diff vs approved · JSON/CSV",
  },
];

const capabilities = [
  {
    title: "Project-scoped engagements",
    detail:
      "Separate connectors, evidence, runs, and reports per acquisition program for clean enterprise governance and a clear audit trail.",
  },
  {
    title: "Evidence + rationale",
    detail:
      "Every suggested match is paired with evidence and an explainability breakdown reviewers can trust.",
  },
  {
    title: "Temporal-orchestrated runs",
    detail:
      "Repeatable workflows for discovery, alignment, and reporting — every run is persisted and traceable, with history for enterprise programs.",
  },
  {
    title: "Operational visibility",
    detail:
      "Run status, errors, and history are visible in the UI with a direct link to Temporal for deep inspection.",
  },
  {
    title: "Versioned approvals",
    detail:
      "Approved versions become the export contract; drafts stay editable until sign-off. Immutable snapshots support change control.",
  },
  {
    title: "Enterprise governance",
    detail:
      "Evidence-backed mapping decisions, audit events, and exportable outputs designed for enterprise sign-off processes.",
  },
];

const Cognito = () => {
  return (
    <div className="bg-ink min-h-screen pt-16">
      {/* Hero — paper */}
      <section className="px-3 md:px-5 pt-3 md:pt-5">
        <div className="bg-paper rounded-2xl md:rounded-3xl">
          <div className="max-w-[1400px] mx-auto px-5 md:px-12 py-12 md:py-16">
            <span className="eyebrow text-ink-faint">Infrastructure · Cognito</span>
            <h1 className="mt-6 font-sans font-expanded font-extrabold text-ink tracking-tight leading-[1.0] text-5xl md:text-7xl max-w-4xl">
              Align host and acquired systems with <span className="text-ledger">evidence and governance</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-ink-soft leading-relaxed max-w-2xl">
              Cognito is a Temporal-orchestrated workflow and UI for schema discovery, field-level
              alignment, reviewer decisions, and versioned export contracts — built for enterprise
              M&amp;A integration teams.
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
                Try the sandbox
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow stages — dark index rows */}
      <section className="max-w-[1400px] mx-auto px-5 md:px-12 py-14 md:py-20">
        <div className="flex items-baseline justify-between mb-8">
          <span className="eyebrow text-paper/45">The workflow spine</span>
          <span className="font-mono text-xs text-paper/35 hidden sm:block">
            evidence → proposal → human decision → approval → export contract
          </span>
        </div>
        <div className="border-t border-paper/10">
          {stages.map((stage) => (
            <div
              key={stage.index}
              className="grid md:grid-cols-[56px_220px_1fr] gap-4 md:gap-6 py-8 border-b border-paper/10"
            >
              <span className="font-mono text-xs text-paper/35 pt-1.5">{stage.index}</span>
              <h3 className="font-sans font-expanded font-bold text-2xl text-paper tracking-tight">
                {stage.name}
              </h3>
              <div>
                <p className="text-paper/60 leading-relaxed max-w-2xl">{stage.detail}</p>
                <div className="mt-3 font-mono text-xs text-paper/45">{stage.mono}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hatch divider */}
      <div className="max-w-[1400px] mx-auto px-5 md:px-12">
        <div className="h-10 hatch-band rounded-sm" aria-hidden />
      </div>

      {/* Capabilities — dark grid */}
      <section className="max-w-[1400px] mx-auto px-5 md:px-12 py-14 md:py-20">
        <div className="flex items-baseline justify-between mb-4">
          <span className="eyebrow text-paper/45">Decisions that survive audit</span>
          <span className="font-mono text-xs text-paper/35 hidden sm:block">runs Temporal · decisions versioned · evidence cited</span>
        </div>
        <p className="text-paper/60 leading-relaxed max-w-2xl mb-10">
          Cognito is built for the real enterprise loop: durable workflows, evidence-backed
          decisions, triage, approvals, and export contracts — without spreadsheet chaos.
        </p>
        <div className="grid md:grid-cols-3 gap-px bg-paper/10 border border-paper/10 rounded-2xl overflow-hidden">
          {capabilities.map((capability) => (
            <div key={capability.title} className="bg-ink p-7 md:p-9">
              <h3 className="font-sans font-expanded font-bold text-xl text-paper tracking-tight mb-4">
                {capability.title}
              </h3>
              <p className="text-paper/60 leading-relaxed text-[15px]">{capability.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sandbox — dark card, interactive */}
      <section id="sandbox" className="max-w-[1400px] mx-auto px-5 md:px-12 py-14 md:py-20">
        <div className="flex items-baseline justify-between mb-4">
          <span className="eyebrow text-paper/45">Cognito sandbox</span>
          <span className="font-mono text-xs text-paper/35 hidden sm:block">self-contained · in-browser</span>
        </div>
        <p className="text-paper/60 leading-relaxed max-w-2xl mb-10">
          Play with Cognito&rsquo;s core workflow: select host scope, generate alignment, triage in
          the workbench, and approve a versioned export contract.
        </p>
        <div className="bg-ink border border-paper/10 rounded-2xl p-3 md:p-6">
          <CognitoSandbox />
        </div>
      </section>

      {/* CTA */}
      <section className="px-3 md:px-5 pb-3 md:pb-5">
        <div className="bg-ledger-deep rounded-2xl md:rounded-3xl">
          <div className="max-w-[1400px] mx-auto px-5 md:px-12 py-14 md:py-20 text-center">
            <h2 className="font-sans font-expanded font-extrabold text-paper tracking-tight leading-tight text-4xl md:text-5xl">
              Ship integration programs faster.
            </h2>
            <p className="mt-5 text-paper/65 leading-relaxed text-lg max-w-xl mx-auto">
              Bring order to schema alignment: durable workflows, evidence, triage, approvals, and
              export contracts — without spreadsheet chaos.
            </p>
            <div className="mt-7 font-mono text-xs text-paper/45">
              Temporal-orchestrated execution + history · evidence-backed approvals · versioned export contracts
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

export default Cognito;
