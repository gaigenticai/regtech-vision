import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const pillars = [
  {
    index: "01",
    name: "Deployment",
    detail:
      "Runs where your risk appetite says it should: your cloud (AWS, Azure, GCP) or fully on-premises, with EU data residency respected. On-prem or hosted LLMs: your call, switchable per workload.",
  },
  {
    index: "02",
    name: "Security",
    detail:
      "Encryption in transit and at rest, role-based access, zero-trust posture, and secrets kept in your infrastructure. SOC 2-aligned controls, with certification in preparation. Security practices are documented and open to your review.",
  },
  {
    index: "03",
    name: "Integration",
    detail:
      "API-first, read-only where possible. Designed to integrate with core banking platforms (e.g. Temenos, Finastra), ERPs, CRMs, and custom systems without requiring changes to your existing stack.",
  },
  {
    index: "04",
    name: "Observability",
    detail:
      "Every agent run is traced end-to-end: inputs, tool calls, decisions, outputs. Immutable logs, replayable runs, and evidence exports designed around supervisory expectations in the EU (DNB, AFM, EBA frameworks).",
  },
];

const rollout = [
  {
    phase: "POC",
    weeks: "WEEKS 1–4",
    detail: "Read-only shadow deployment against one real workflow. Success criteria agreed up front with your compliance team.",
  },
  {
    phase: "Pilot",
    weeks: "WEEKS 5–12",
    detail: "Scoped production use with human approval gates. SLO targets agreed per deployment; evidence pack reviewed with your oversight function.",
  },
  {
    phase: "Production",
    weeks: "ONGOING",
    detail: "Gated autonomy where your policy allows it. Quarterly model and policy review, change management, and standing supervisory evidence.",
  },
];

const Platform = () => {
  return (
    <div className="bg-ink min-h-screen pt-16">
      {/* Hero - paper */}
      <section className="px-3 md:px-5 pt-3 md:pt-5">
        <div className="bg-paper rounded-2xl md:rounded-3xl">
          <div className="max-w-[1400px] mx-auto px-5 md:px-12 py-12 md:py-16">
            <span className="eyebrow text-ink-faint">Platform</span>
            <h1 className="mt-6 font-sans font-expanded font-extrabold text-ink tracking-tight leading-[1.0] text-5xl md:text-7xl max-w-4xl">
              Built for institutions that <span className="text-ledger">answer to supervisors</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-ink-soft leading-relaxed max-w-2xl">
              One platform underneath Verify and our workflow products: secure deployment in your
              environment, read-only integration with your stack, and observability designed for
              audit, not retrofitted for it.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars - dark index rows */}
      <section className="max-w-[1400px] mx-auto px-5 md:px-12 py-14 md:py-20">
        <div className="eyebrow text-paper/45 mb-8">Four pillars</div>
        <div className="border-t border-paper/10">
          {pillars.map((pillar) => (
            <div
              key={pillar.index}
              className="grid md:grid-cols-[56px_220px_1fr] gap-4 md:gap-6 py-8 border-b border-paper/10"
            >
              <span className="font-mono text-xs text-paper/35 pt-1.5">{pillar.index}</span>
              <h3 className="font-sans font-expanded font-bold text-2xl text-paper tracking-tight">
                {pillar.name}
              </h3>
              <p className="text-paper/60 leading-relaxed max-w-2xl">{pillar.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Hatch divider */}
      <div className="max-w-[1400px] mx-auto px-5 md:px-12">
        <div className="h-10 hatch-band rounded-sm" aria-hidden />
      </div>

      {/* Rollout - dark */}
      <section className="max-w-[1400px] mx-auto px-5 md:px-12 py-14 md:py-20">
        <div className="flex items-baseline justify-between mb-10">
          <span className="eyebrow text-paper/45">How rollout works</span>
          <span className="font-mono text-xs text-paper/35 hidden sm:block">shadow first · gates always</span>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-paper/10 border border-paper/10 rounded-2xl overflow-hidden">
          {rollout.map((step) => (
            <div key={step.phase} className="bg-ink p-7 md:p-9">
              <div className="font-mono text-xs text-amber mb-4">{step.weeks}</div>
              <h3 className="font-sans font-expanded font-bold text-2xl text-paper tracking-tight mb-4">
                {step.phase}
              </h3>
              <p className="text-paper/60 leading-relaxed text-[15px]">{step.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-3 md:px-5 pb-3 md:pb-5">
        <div className="bg-ledger-deep rounded-2xl md:rounded-3xl">
          <div className="max-w-[1400px] mx-auto px-5 md:px-12 py-14 md:py-20 text-center">
            <h2 className="font-sans font-expanded font-extrabold text-paper tracking-tight leading-tight text-4xl md:text-5xl">
              See it in your environment.
            </h2>
            <p className="mt-5 text-paper/65 leading-relaxed text-lg max-w-xl mx-auto">
              A proof of concept runs read-only against one real workflow, in your infrastructure,
              with success criteria your compliance team signs off on.
            </p>
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

export default Platform;
