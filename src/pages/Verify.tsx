import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import VerificationRegister from "@/components/VerificationRegister";

const layers = [
  {
    index: "01",
    name: "Connect",
    detail:
      "Read-only connectors into your source systems (core banking, ERP, general ledger) and into any vendor's finance-AI agents. No write access, no stack changes. Vendor-agnostic is the point: we verify anyone's agents, including the ones you built yourself.",
  },
  {
    index: "02",
    name: "Verify",
    detail:
      "Three checks in descending order of certainty. Deterministic re-computation: every figure tied back to source. Policy conformance: every decision tested against your documented thresholds. Challenge-model sampling: an independent model re-scores decisions, with particular attention to the \"no alert\" ones.",
  },
  {
    index: "03",
    name: "Evidence",
    detail:
      "Every check lands in a tamper-evident register, mapped field-by-field to DNB SAFEST principles and EU AI Act Articles 12 and 14. The output is a standing evidence pack your compliance officer exports when the supervisor asks.",
  },
  {
    index: "04",
    name: "Oversee",
    detail:
      "Flagged outputs escalate to a review queue with sign-off tracking. This is not a dashboard bolted on: the queue is the human oversight the AI Act requires, productized.",
  },
];

const workflows = [
  {
    ref: "AVAILABLE FIRST",
    name: "AML transaction monitoring",
    detail:
      "Independent verification of AI-driven monitoring: sample re-screening, threshold and coverage checks, false-negative probes, and drift detection, plus the evidence file that shows your monitoring is supervised.",
    accent: "text-tick",
  },
  {
    ref: "ROADMAP",
    name: "Reconciliations & close",
    detail:
      "Re-verification of agent-matched reconciliations and close entries: independent re-matching, exception re-testing, and lineage from every closed number back to source.",
    accent: "text-amber",
  },
  {
    ref: "ROADMAP",
    name: "Regulatory filings",
    detail:
      "Every AI-generated figure in a filing recomputed from the ledger before it reaches the regulator, with a versioned record of what was checked and how.",
    accent: "text-amber",
  },
];

const Verify = () => {
  return (
    <div className="bg-ink min-h-screen pt-16">
      {/* ============ HERO - paper sheet ============ */}
      <section className="px-3 md:px-5 pt-3 md:pt-5">
        <div className="bg-paper rounded-2xl md:rounded-3xl">
          <div className="max-w-[1400px] mx-auto px-5 md:px-12 pt-12 md:pt-16 pb-14 md:pb-20">
            <div className="flex items-center justify-between mb-14 md:mb-20">
              <span className="eyebrow text-ink-faint flex items-center gap-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-tick" aria-hidden />
                Gaigentic Verify
              </span>
              <span className="font-mono text-xs text-ink-faint hidden sm:block">flagship product</span>
            </div>

            <h1 className="font-sans font-expanded font-extrabold text-ink tracking-tight leading-[1.0] text-5xl md:text-7xl max-w-4xl">
              The independent verification layer for{" "}
              <span className="text-ledger">AI-driven finance</span>
            </h1>

            <div className="mt-10 grid md:grid-cols-2 gap-8 md:gap-16 items-end">
              <p className="text-lg md:text-xl text-ink-soft leading-relaxed max-w-xl">
                Your AI agents monitor transactions, reconcile accounts, and draft filings. You
                remain accountable for every one of those outputs. Verify sits outside the systems
                doing the work, continuously re-verifies what they produce, and turns every check
                into evidence built for supervisory review.
              </p>
              <div className="md:justify-self-end">
                <Link
                  to="/contact"
                  className="eyebrow inline-flex items-center gap-2 bg-ink text-paper rounded-full px-6 py-3.5 hover:bg-ink-soft transition-colors"
                >
                  Become a design partner
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            <div className="mt-14 md:mt-20 pt-5 border-t border-rule">
              <span className="eyebrow text-ink-faint">Independent · continuous · evidenced</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ THE QUESTION - dark ============ */}
      <section className="max-w-[1400px] mx-auto px-5 md:px-12 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20">
          <div>
            <div className="eyebrow text-paper/45 mb-6">Why it exists</div>
            <h2 className="font-sans font-expanded font-extrabold text-paper tracking-tight leading-tight text-4xl md:text-5xl">
              Self-audit isn't audit.
            </h2>
          </div>
          <div className="space-y-5 text-paper/65 leading-relaxed text-lg max-w-xl">
            <p>
              At most institutions, the evidence that finance-AI works is the vendor's own
              dashboard. An audit trail written by the system being audited proves what that system{" "}
              <em className="text-paper">says</em> it did.
            </p>
            <p>
              Ask your external auditor whether they'd accept a company's self-audit. Independence
              is not a feature an agent vendor can add. It is structural, and it is the property
              Verify is built on.
            </p>
          </div>
        </div>
      </section>

      {/* Hatch divider */}
      <div className="max-w-[1400px] mx-auto px-5 md:px-12">
        <div className="h-10 hatch-band rounded-sm" aria-hidden />
      </div>

      {/* ============ OFFICE OF THE CFO - dark ============ */}
      <section className="max-w-[1400px] mx-auto px-5 md:px-12 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20">
          <div>
            <div className="eyebrow text-paper/45 mb-6">Where it lives</div>
            <h2 className="font-sans font-expanded font-extrabold text-paper tracking-tight leading-tight text-4xl md:text-5xl">
              One trust layer for the office of the CFO.
            </h2>
          </div>
          <div className="space-y-5 text-paper/65 leading-relaxed text-lg max-w-xl">
            <p>
              The finance function is adopting AI workflow by workflow (AP and AR, monitoring,
              reconciliation and close, reporting, treasury), usually from different vendors, each
              with its own dashboard. What the CFO signs is the sum of all of them.
            </p>
            <p>
              Verify is built to be the one verification layer across that stack: every agent's
              outputs checked the same three ways, every check landing in the same register,
              one evidence pack for the whole finance function. Add an agent; the layer already
              covers it.
            </p>
          </div>
        </div>
      </section>

      {/* Hatch divider */}
      <div className="max-w-[1400px] mx-auto px-5 md:px-12">
        <div className="h-10 hatch-band rounded-sm" aria-hidden />
      </div>

      {/* ============ FOUR LAYERS - dark index rows ============ */}
      <section className="max-w-[1400px] mx-auto px-5 md:px-12 py-16 md:py-24">
        <div className="eyebrow text-paper/45 mb-8">How Verify works</div>
        <div className="border-t border-paper/10">
          {layers.map((layer) => (
            <div
              key={layer.index}
              className="grid md:grid-cols-[56px_220px_1fr] gap-4 md:gap-6 py-8 border-b border-paper/10"
            >
              <span className="font-mono text-xs text-paper/35 pt-1.5">{layer.index}</span>
              <h3 className="font-sans font-expanded font-bold text-2xl text-paper tracking-tight">
                {layer.name}
              </h3>
              <p className="text-paper/60 leading-relaxed max-w-2xl">{layer.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ REGISTER - dark ============ */}
      <section className="max-w-[1400px] mx-auto px-5 md:px-12 pb-16 md:pb-24">
        <div className="bg-ink border border-paper/10 rounded-2xl p-5 md:p-8">
          <VerificationRegister />
        </div>
      </section>

      {/* ============ WORKFLOWS - paper sheet ============ */}
      <section className="px-3 md:px-5">
        <div className="bg-paper rounded-2xl md:rounded-3xl">
          <div className="max-w-[1400px] mx-auto px-5 md:px-12 py-14 md:py-20">
            <div className="flex items-baseline justify-between mb-10 md:mb-14">
              <span className="eyebrow text-ink-faint">What Verify covers</span>
              <span className="font-mono text-xs text-ink-faint hidden sm:block">
                starting where supervisory scrutiny is highest
              </span>
            </div>

            <div className="grid md:grid-cols-3 gap-px bg-rule rounded-xl overflow-hidden border border-rule">
              {workflows.map((wf) => (
                <div key={wf.name} className="bg-paper-bright p-7 md:p-9">
                  <div className={`font-mono text-xs mb-4 ${wf.accent}`}>{wf.ref}</div>
                  <h3 className="font-sans font-bold text-xl text-ink mb-4 tracking-tight">{wf.name}</h3>
                  <p className="text-ink-soft leading-relaxed text-[15px]">{wf.detail}</p>
                </div>
              ))}
            </div>

            {/* Regulatory mapping */}
            <div className="mt-14 md:mt-20">
              <div className="eyebrow text-ink-faint mb-8">Built against the rules you answer to</div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="border-t-2 border-ink pt-5">
                  <div className="font-mono text-xs text-ledger mb-2">DNB · SAFEST</div>
                  <p className="text-ink-soft text-[15px] leading-relaxed">
                    The Dutch central bank's principles for AI in finance set supervisory
                    expectations. Verify's checks and evidence packs are structured to help you
                    demonstrate adherence.
                  </p>
                </div>
                <div className="border-t-2 border-ink pt-5">
                  <div className="font-mono text-xs text-ledger mb-2">EU AI ACT · ART. 12 &amp; 14</div>
                  <p className="text-ink-soft text-[15px] leading-relaxed">
                    Automatic logging and effective human oversight for high-risk AI. The register
                    addresses the logging expectation; the review queue operationalizes oversight.
                  </p>
                </div>
                <div className="border-t-2 border-ink pt-5">
                  <div className="font-mono text-xs text-ledger mb-2">INDEPENDENCE</div>
                  <p className="text-ink-soft text-[15px] leading-relaxed">
                    Verify doesn't certify models or write policy documents. It produces operational
                    evidence that your AI-assisted workflows are checked by a system that is never
                    the one being checked.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="px-3 md:px-5 py-3 md:py-5">
        <div className="bg-ledger-deep rounded-2xl md:rounded-3xl">
          <div className="max-w-[1400px] mx-auto px-5 md:px-12 py-16 md:py-24 text-center">
            <div className="eyebrow text-paper/50 mb-6">Design partner program</div>
            <h2 className="font-sans font-expanded font-extrabold text-paper tracking-tight leading-tight text-4xl md:text-6xl max-w-3xl mx-auto">
              Shape the checks against your real workflows.
            </h2>
            <p className="mt-6 text-paper/65 leading-relaxed text-lg max-w-xl mx-auto">
              We're onboarding a small number of banks and insurers in the Netherlands and wider
              EU deploying AI in monitoring and finance workflows.
            </p>
            <Link
              to="/contact"
              className="eyebrow inline-flex items-center gap-2 bg-paper text-ink rounded-full px-7 py-4 mt-10 hover:bg-paper-bright transition-colors"
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

export default Verify;
