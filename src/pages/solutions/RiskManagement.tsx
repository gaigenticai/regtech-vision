import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const challenges = [
  "Manual policy updates take weeks to implement across the organization, creating compliance gaps",
  "Reactive approach to regulatory changes results in penalties and audit findings",
  "Siloed risk management systems provide incomplete visibility into enterprise-wide risks",
  "Time-consuming audit preparation processes strain resources and delay business operations",
  "Difficulty in quantifying and predicting operational and compliance risks",
];

const capabilities = [
  {
    index: "01",
    name: "Regulatory intelligence",
    detail:
      "AI-powered regulatory change detection · natural language processing for rule interpretation · global regulatory database integration · impact assessment and prioritization algorithms.",
  },
  {
    index: "02",
    name: "Policy automation",
    detail:
      "Automated policy generation and updates · version control and change management · workflow automation for approvals · multi-language policy translation.",
  },
  {
    index: "03",
    name: "Risk analytics",
    detail:
      "Predictive risk modeling and simulation · Monte Carlo risk analysis · scenario planning and stress testing · real-time risk dashboard and reporting.",
  },
  {
    index: "04",
    name: "Audit & controls",
    detail:
      "Automated control testing and validation · evidence collection and documentation · audit trail generation and maintenance · compliance reporting and attestation.",
  },
];

const frameworks = [
  {
    ref: "FINANCIAL CONTROLS",
    detail:
      "Internal controls, financial reporting, management assessment, external auditor attestation.",
  },
  {
    ref: "RISK FRAMEWORKS",
    detail:
      "Control environment, risk assessment, control activities, information and communication.",
  },
  {
    ref: "INFORMATION SECURITY",
    detail:
      "Information security policy, risk assessment, security controls, continuous improvement.",
  },
  {
    ref: "CAPITAL STANDARDS",
    detail:
      "Capital conservation, liquidity coverage, operational risk, stress testing.",
  },
];

const RiskManagement = () => {
  return (
    <div className="bg-ink min-h-screen pt-16">
      {/* Hero: paper */}
      <section className="px-3 md:px-5 pt-3 md:pt-5">
        <div className="bg-paper rounded-2xl md:rounded-3xl">
          <div className="max-w-[1400px] mx-auto px-5 md:px-12 py-12 md:py-16">
            <div className="flex items-center justify-between">
              <span className="eyebrow text-ink-faint">Regulens · risk &amp; compliance</span>
              <Link
                to="/solutions/regulens"
                className="font-mono text-xs text-ink-faint hover:text-ink transition-colors hidden sm:block"
              >
                all twelve areas
              </Link>
            </div>
            <h1 className="mt-6 font-sans font-expanded font-extrabold text-ink tracking-tight leading-[1.0] text-5xl md:text-7xl max-w-4xl">
              Risk management that is{" "}
              <span className="text-ledger">proactive, not reactive</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-ink-soft leading-relaxed max-w-2xl">
              Governed agentic risk workflows, with human oversight built in, that proactively
              manage enterprise risk, reduce manual compliance effort, and help you stay
              audit-ready across regulatory frameworks.
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
              Reactive compliance is expensive.
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
            <div className="eyebrow text-ink-faint mb-8">Built against the rules you answer to</div>
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
              Stay ahead of the rulebook.
            </h2>
            <p className="mt-5 text-paper/65 leading-relaxed text-lg max-w-xl mx-auto">
              Governed, AI-assisted risk and compliance management for your operations, designed
              to support continuous compliance and audit readiness.
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

export default RiskManagement;
