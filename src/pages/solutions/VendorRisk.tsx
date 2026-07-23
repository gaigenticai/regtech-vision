import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const challenges = [
  "Fragmented vendor evidence across email, drives, and ticketing tools",
  "Renewals driven by calendars instead of risk tier and evidence expiry",
  "Inconsistent questionnaires and manual follow-ups slow onboarding and re-assessments",
  "Limited auditability: hard to answer who changed what, when, and why",
  "Third-party concentration risk and sub-processor exposure not tracked consistently",
];

const capabilities = [
  {
    index: "01",
    name: "Vendor inventory & tiering",
    detail:
      "Central vendor register with tier, owner, and renewal cadence · criticality tagging and concentration risk views · sub-processor tracking and data residency attributes · renewal schedule aligned to risk tier.",
  },
  {
    index: "02",
    name: "Questionnaires",
    detail:
      "Template-driven assessments (SIG Lite, CAIQ-style, custom) · per-question citations and evidence requirements · review workflow with approvals and audit trail · exportable artifacts for auditors and procurement.",
  },
  {
    index: "03",
    name: "Evidence library",
    detail:
      "Evidence catalog with owners and expirations (SOC 2, ISO, pen tests, BCP, DPIA) · reuse across assessments with citations · gap detection for missing or stale artifacts · expiry alerts and renewal preparation.",
  },
  {
    index: "04",
    name: "Auto-answer agent",
    detail:
      "Auto-answer suggestions grounded in approved evidence · confidence scoring and gaps surfaced for reviewers · audit-ready outputs with citations · policy-aligned responses using your internal standards.",
  },
];

const frameworks = [
  {
    ref: "OCC 2013-29",
    detail: "Third-party risk management guidance for banks.",
  },
  {
    ref: "EBA OUTSOURCING",
    detail: "EU outsourcing governance and oversight requirements.",
  },
  {
    ref: "ISO 27001",
    detail: "Information security controls and supplier relationships.",
  },
  {
    ref: "SOC 2",
    detail: "Assurance reporting for service providers (trust services criteria).",
  },
];

const VendorRisk = () => {
  return (
    <div className="bg-ink min-h-screen pt-16">
      {/* Hero: paper */}
      <section className="px-3 md:px-5 pt-3 md:pt-5">
        <div className="bg-paper rounded-2xl md:rounded-3xl">
          <div className="max-w-[1400px] mx-auto px-5 md:px-12 py-12 md:py-16">
            <div className="flex items-center justify-between">
              <span className="eyebrow text-ink-faint">Regulens · vendor risk / TPRM</span>
              <Link
                to="/solutions/regulens"
                className="font-mono text-xs text-ink-faint hover:text-ink transition-colors hidden sm:block"
              >
                all twelve areas
              </Link>
            </div>
            <h1 className="mt-6 font-sans font-expanded font-extrabold text-ink tracking-tight leading-[1.0] text-5xl md:text-7xl max-w-4xl">
              Vendor risk with evidence that is{" "}
              <span className="text-ledger">audit-ready</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-ink-soft leading-relaxed max-w-2xl">
              Centralize evidence, automate risk-tiered renewals, and generate audit-ready
              questionnaire responses grounded in approved artifacts, with citations and an
              immutable event history behind every output.
            </p>
          </div>
        </div>
      </section>

      {/* Challenge: dark */}
      <section className="max-w-[1400px] mx-auto px-5 md:px-12 py-14 md:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20">
          <div>
            <div className="eyebrow text-paper/45 mb-6">The challenge</div>
            <h2 className="font-sans font-expanded font-extrabold text-paper tracking-tight leading-tight text-4xl md:text-5xl">
              TPRM breaks down when evidence isn't system-driven.
            </h2>
          </div>
          <ul className="border-t border-paper/10 max-w-xl">
            {challenges.map((challenge) => (
              <li
                key={challenge}
                className="py-4 border-b border-paper/10 text-paper/65 leading-relaxed"
              >
                {challenge}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Hatch divider */}
      <div className="max-w-[1400px] mx-auto px-5 md:px-12">
        <div className="h-10 hatch-band rounded-sm" aria-hidden />
      </div>

      {/* Capabilities: dark index rows */}
      <section className="max-w-[1400px] mx-auto px-5 md:px-12 py-14 md:py-20">
        <div className="eyebrow text-paper/45 mb-8">Capabilities</div>
        <div className="border-t border-paper/10">
          {capabilities.map((cap) => (
            <div
              key={cap.index}
              className="grid md:grid-cols-[56px_220px_1fr] gap-4 md:gap-6 py-8 border-b border-paper/10"
            >
              <span className="font-mono text-xs text-paper/35 pt-1.5">{cap.index}</span>
              <h3 className="font-sans font-expanded font-bold text-2xl text-paper tracking-tight">
                {cap.name}
              </h3>
              <p className="text-paper/60 leading-relaxed max-w-2xl">{cap.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Frameworks: paper sheet */}
      <section className="px-3 md:px-5">
        <div className="bg-paper rounded-2xl md:rounded-3xl">
          <div className="max-w-[1400px] mx-auto px-5 md:px-12 py-14 md:py-20">
            <div className="eyebrow text-ink-faint mb-8">
              Built for third-party oversight, audits, and outsourcing controls
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {frameworks.map((fw) => (
                <div key={fw.ref} className="border-t-2 border-ink pt-5">
                  <div className="font-mono text-xs text-ledger mb-2">{fw.ref}</div>
                  <p className="text-ink-soft text-[15px] leading-relaxed">{fw.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-3 md:px-5 py-3 md:py-5">
        <div className="bg-ledger-deep rounded-2xl md:rounded-3xl">
          <div className="max-w-[1400px] mx-auto px-5 md:px-12 py-14 md:py-20 text-center">
            <h2 className="font-sans font-expanded font-extrabold text-paper tracking-tight leading-tight text-4xl md:text-5xl">
              Make renewals risk-driven, not calendar-driven.
            </h2>
            <p className="mt-5 text-paper/65 leading-relaxed text-lg max-w-xl mx-auto">
              Governed vendor risk workflows with centralized evidence, expiry-driven controls,
              and an audit trail for every change.
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

export default VendorRisk;
