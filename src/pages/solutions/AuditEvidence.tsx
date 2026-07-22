import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const challenges = [
  "Fragmented audit trails, manual evidence collection, and compliance gaps in model governance",
  "Time-consuming manual audit preparation processes",
  "Difficulty maintaining complete audit trails across systems",
  "Lack of model explainability for regulatory requirements",
  "Inconsistent evidence collection and documentation standards",
];

const capabilities = [
  {
    index: "01",
    name: "Evidence collection",
    detail:
      "Automated evidence gathering · multi-source data integration · evidence validation and verification · continuous monitoring.",
  },
  {
    index: "02",
    name: "Audit trails",
    detail:
      "Immutable audit logs · complete activity tracking · timestamp and user attribution · tamper-proof documentation.",
  },
  {
    index: "03",
    name: "Model governance",
    detail:
      "Model explainability · model validation and testing · performance monitoring · regulatory compliance tracking.",
  },
  {
    index: "04",
    name: "Reporting",
    detail:
      "Automated regulatory reporting · custom report generation · compliance dashboards · evidence package creation.",
  },
];

const frameworks = [
  {
    ref: "MODEL RISK · SR 11-7",
    detail: "SR 11-7 compliance, model validation, model governance frameworks.",
  },
  {
    ref: "GDPR",
    detail: "Data protection, right to explanation, audit trail requirements.",
  },
  {
    ref: "CCPA",
    detail: "California Consumer Privacy Act, data audit requirements.",
  },
  {
    ref: "SOX",
    detail: "Sarbanes-Oxley Act, financial reporting controls, audit requirements.",
  },
];

const AuditEvidence = () => {
  return (
    <div className="bg-ink min-h-screen pt-16">
      {/* Hero — paper */}
      <section className="px-3 md:px-5 pt-3 md:pt-5">
        <div className="bg-paper rounded-2xl md:rounded-3xl">
          <div className="max-w-[1400px] mx-auto px-5 md:px-12 py-12 md:py-16">
            <div className="flex items-center justify-between">
              <span className="eyebrow text-ink-faint">Regulens · audit &amp; evidence</span>
              <Link
                to="/solutions/regulens"
                className="font-mono text-xs text-ink-faint hover:text-ink transition-colors hidden sm:block"
              >
                all twelve areas
              </Link>
            </div>
            <h1 className="mt-6 font-sans font-expanded font-extrabold text-ink tracking-tight leading-[1.0] text-5xl md:text-7xl max-w-4xl">
              Audit trails that are{" "}
              <span className="text-ledger">complete by construction</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-ink-soft leading-relaxed max-w-2xl">
              Model governance, immutable audit trails, and automated evidence collection for
              regulatory compliance — designed for full audit coverage with continuous, 24/7
              monitoring.
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
              Evidence shouldn't be an afterthought.
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
              Be audit-ready, continuously.
            </h2>
            <p className="mt-5 text-paper/65 leading-relaxed text-lg max-w-xl mx-auto">
              Governed, evidence-backed audit automation for your compliance processes — designed
              for continuous audit readiness.
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

export default AuditEvidence;
