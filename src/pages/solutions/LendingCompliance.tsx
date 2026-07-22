import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const challenges = [
  "Across the industry, manual underwriting commonly takes weeks, causing customer frustration and lost opportunities",
  "High default rates due to inadequate risk assessment and limited data sources",
  "Complex regulatory requirements across multiple jurisdictions creating compliance gaps",
  "Inability to scale lending operations without proportional increase in operational costs",
  "Difficulty in detecting fraudulent applications and synthetic identity fraud",
];

const capabilities = [
  {
    index: "01",
    name: "Credit scoring models",
    detail:
      "Advanced ML models drawing on a broad set of borrower variables · alternative data integration and analysis · real-time credit bureau API connections · behavioral pattern recognition systems.",
  },
  {
    index: "02",
    name: "Risk assessment",
    detail:
      "Multi-layered fraud detection algorithms · synthetic identity detection systems · income and employment verification · debt-to-income ratio optimization.",
  },
  {
    index: "03",
    name: "Data processing",
    detail:
      "Real-time data aggregation from 100+ sources · bank statement analysis and categorization · digital footprint analysis · open banking API integrations.",
  },
  {
    index: "04",
    name: "Compliance engine",
    detail:
      "Automated regulatory rule enforcement · fair lending compliance monitoring · audit trail generation and reporting · regulatory change management system.",
  },
];

const frameworks = [
  {
    ref: "CAPITAL STANDARDS",
    detail:
      "Capital conservation buffer, liquidity coverage ratio, credit risk assessment, operational risk management.",
  },
  {
    ref: "FCRA",
    detail:
      "Permissible purpose verification, adverse action notices, consumer rights notification, data accuracy.",
  },
  {
    ref: "ECOA",
    detail:
      "Prohibited basis monitoring, disparate impact analysis, fair lending testing, corrective actions.",
  },
  {
    ref: "FAIR LENDING",
    detail:
      "Interest rate cap enforcement, licensing verification, state-specific disclosures, consumer protection.",
  },
];

const LendingCompliance = () => {
  return (
    <div className="bg-ink min-h-screen pt-16">
      {/* Hero — paper */}
      <section className="px-3 md:px-5 pt-3 md:pt-5">
        <div className="bg-paper rounded-2xl md:rounded-3xl">
          <div className="max-w-[1400px] mx-auto px-5 md:px-12 py-12 md:py-16">
            <div className="flex items-center justify-between">
              <span className="eyebrow text-ink-faint">Regulens · lending compliance</span>
              <Link
                to="/solutions/regulens"
                className="font-mono text-xs text-ink-faint hover:text-ink transition-colors hidden sm:block"
              >
                all twelve areas
              </Link>
            </div>
            <h1 className="mt-6 font-sans font-expanded font-extrabold text-ink tracking-tight leading-[1.0] text-5xl md:text-7xl max-w-4xl">
              Credit decisions that are fast{" "}
              <span className="text-ledger">and well-documented</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-ink-soft leading-relaxed max-w-2xl">
              Governed agentic lending workflows — with human oversight built in — that support
              faster, well-documented credit decisions, sharper risk assessment, and scalable loan
              volume, and help you evidence regulatory compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Challenge — dark */}
      <section className="max-w-[1400px] mx-auto px-5 md:px-12 py-14 md:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20">
          <div>
            <div className="eyebrow text-paper/45 mb-6">The challenge</div>
            <h2 className="font-sans font-expanded font-extrabold text-paper tracking-tight leading-tight text-4xl md:text-5xl">
              Manual underwriting can't keep up.
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

      {/* Capabilities — dark index rows */}
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

      {/* Frameworks — paper sheet */}
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
              Scale lending without scaling risk.
            </h2>
            <p className="mt-5 text-paper/65 leading-relaxed text-lg max-w-xl mx-auto">
              Governed, well-documented credit decisioning for your lending operations — starting
              with a personalized assessment of your current processes.
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

export default LendingCompliance;
