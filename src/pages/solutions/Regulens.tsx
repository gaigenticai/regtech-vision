import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const areas = [
  {
    index: "01",
    name: "KYC & identity verification",
    detail: "Real-time identity verification with human-reviewed, auditable decisions.",
    to: "/solutions/regulens/kyc-automation",
  },
  {
    index: "02",
    name: "Transaction monitoring & AML",
    detail: "Materially fewer false positives with governed detection workflows.",
    to: "/solutions/regulens/transaction-monitoring",
  },
  {
    index: "03",
    name: "Lending compliance",
    detail: "Faster, well-documented credit decisions with built-in compliance checks.",
    to: "/solutions/regulens/lending-compliance",
  },
  {
    index: "04",
    name: "Risk & compliance management",
    detail: "Proactive risk management designed for continuous audit readiness.",
    to: "/solutions/regulens/risk-management",
  },
  {
    index: "05",
    name: "Sanctions screening",
    detail: "High-precision screening across 50+ global databases in real time.",
    to: "/solutions/regulens/sanctions-screening",
  },
  {
    index: "06",
    name: "Case management",
    detail: "Streamlined investigations with assisted SAR drafting and workflow orchestration.",
    to: "/solutions/regulens/case-management",
  },
  {
    index: "07",
    name: "Audit & evidence",
    detail: "Model governance, immutable audit trails, and automated evidence collection.",
    to: "/solutions/regulens/audit-evidence",
  },
  {
    index: "08",
    name: "Policy governance",
    detail: "Broad policy coverage with automated updates and structured framework mapping.",
    to: "/solutions/regulens/policy-governance",
  },
  {
    index: "09",
    name: "Regulatory intelligence",
    detail: "Real-time monitoring across 50+ regulatory sources with impact analysis.",
    to: "/solutions/regulens/regulatory-intelligence",
  },
  {
    index: "10",
    name: "Vendor risk / TPRM",
    detail: "Audit-ready assessments with centralized evidence and renewal control.",
    to: "/solutions/regulens/vendor-risk",
  },
  {
    index: "11",
    name: "Fraud detection",
    detail: "Real-time fraud detection with adaptive, behavior-aware models.",
    to: "/solutions/regulens/fraud-detection",
  },
  {
    index: "12",
    name: "Document intelligence",
    detail: "Accurate extraction across 180+ document formats, faster than manual review.",
    to: "/solutions/regulens/document-intelligence",
  },
];

const Regulens = () => {
  return (
    <div className="bg-ink min-h-screen pt-16">
      {/* ============ HERO: paper sheet ============ */}
      <section className="px-3 md:px-5 pt-3 md:pt-5">
        <div className="bg-paper rounded-2xl md:rounded-3xl">
          <div className="max-w-[1400px] mx-auto px-5 md:px-12 pt-12 md:pt-16 pb-14 md:pb-20">
            <div className="flex items-center justify-between mb-14 md:mb-20">
              <span className="eyebrow text-ink-faint flex items-center gap-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber" aria-hidden />
                Regulens
              </span>
              <span className="font-mono text-xs text-ink-faint hidden sm:block">
                twelve solution areas
              </span>
            </div>

            <h1 className="font-sans font-expanded font-extrabold text-ink tracking-tight leading-[1.0] text-5xl md:text-7xl max-w-4xl">
              Governed agentic workflows for{" "}
              <span className="text-ledger">financial compliance</span>
            </h1>

            <div className="mt-10 grid md:grid-cols-2 gap-8 md:gap-16 items-end">
              <p className="text-lg md:text-xl text-ink-soft leading-relaxed max-w-xl">
                End-to-end governed agentic workflows, with human oversight built in, that reduce
                manual effort, lower compliance costs, and help you evidence regulatory adherence
                across all BFSI operations. Each solution works independently or as part of an
                integrated compliance ecosystem.
              </p>
              <div className="md:justify-self-end">
                <Link
                  to="/contact"
                  className="eyebrow inline-flex items-center gap-2 bg-ink text-paper rounded-full px-6 py-3.5 hover:bg-ink-soft transition-colors"
                >
                  Schedule a demo
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            <div className="mt-14 md:mt-20 pt-5 border-t border-rule">
              <span className="eyebrow text-ink-faint">Governed · human-overseen · evidenced</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TWELVE AREAS: dark index rows ============ */}
      <section className="max-w-[1400px] mx-auto px-5 md:px-12 py-16 md:py-24">
        <div className="flex items-baseline justify-between mb-8">
          <span className="eyebrow text-paper/45">The twelve areas</span>
          <span className="font-mono text-xs text-paper/35 hidden sm:block">
            deploy one, or the suite
          </span>
        </div>
        <div className="border-t border-paper/10">
          {areas.map((area) => (
            <Link
              key={area.index}
              to={area.to}
              className="group grid md:grid-cols-[56px_320px_1fr_auto] gap-4 md:gap-6 py-7 border-b border-paper/10 items-baseline hover:bg-paper/5 transition-colors"
            >
              <span className="font-mono text-xs text-paper/35">{area.index}</span>
              <h3 className="font-sans font-expanded font-bold text-2xl text-paper tracking-tight group-hover:text-paper/90">
                {area.name}
              </h3>
              <p className="text-paper/60 leading-relaxed max-w-2xl">{area.detail}</p>
              <ArrowRight className="h-4 w-4 text-paper/35 group-hover:text-paper self-center hidden md:block transition-colors" />
            </Link>
          ))}
        </div>
      </section>

      {/* Hatch divider */}
      <div className="max-w-[1400px] mx-auto px-5 md:px-12 pb-16 md:pb-24">
        <div className="h-10 hatch-band rounded-sm" aria-hidden />
      </div>

      {/* ============ VERIFY NOTE: paper sheet ============ */}
      <section className="px-3 md:px-5">
        <div className="bg-paper rounded-2xl md:rounded-3xl">
          <div className="max-w-[1400px] mx-auto px-5 md:px-12 py-14 md:py-20">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-20">
              <div>
                <div className="eyebrow text-ink-faint mb-6">Independently verified</div>
                <h2 className="font-sans font-expanded font-extrabold text-ink tracking-tight leading-tight text-4xl md:text-5xl">
                  Checked by a system that isn't doing the work.
                </h2>
              </div>
              <div className="space-y-5 text-ink-soft leading-relaxed text-lg max-w-xl">
                <p>
                  Every Regulens workflow can be independently and continuously re-verified by{" "}
                  <Link to="/verify" className="text-ledger font-semibold hover:underline">
                    Gaigentic Verify
                  </Link>
                  , our verification layer that checks what finance-AI agents produce, so your
                  team can review, trust, and evidence the results.
                </p>
                <div className="pt-2 border-t border-rule">
                  <span className="font-mono text-xs text-ledger">
                    REGULENS DOES THE WORK · VERIFY CHECKS IT
                  </span>
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
            <div className="eyebrow text-paper/50 mb-6">Get started</div>
            <h2 className="font-sans font-expanded font-extrabold text-paper tracking-tight leading-tight text-4xl md:text-6xl max-w-3xl mx-auto">
              See Regulens against your real workflows.
            </h2>
            <p className="mt-6 text-paper/65 leading-relaxed text-lg max-w-xl mx-auto">
              A tailored, solution-specific demonstration, scoped to the compliance areas that
              matter to you, with human oversight built in from day one.
            </p>
            <Link
              to="/contact"
              className="eyebrow inline-flex items-center gap-2 bg-paper text-ink rounded-full px-7 py-4 mt-10 hover:bg-paper-bright transition-colors"
            >
              Schedule a demo
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Regulens;
