import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const challenges = [
  "Rising fraud losses, delayed detection, and high false positive rates overwhelming teams",
  "Difficulty detecting sophisticated fraud patterns and schemes",
  "High false positive rates requiring extensive manual review",
  "Lack of real-time fraud detection capabilities",
  "Inability to adapt to evolving fraud techniques",
];

const capabilities = [
  {
    index: "01",
    name: "Machine learning",
    detail:
      "Deep learning models · behavioral biometrics · adaptive ML algorithms · ensemble model approaches.",
  },
  {
    index: "02",
    name: "Real-time analysis",
    detail:
      "Real-time scoring · stream processing · low-latency detection · instant alert generation.",
  },
  {
    index: "03",
    name: "Network analysis",
    detail:
      "Graph database analysis · relationship mapping · pattern recognition · anomaly detection.",
  },
  {
    index: "04",
    name: "Response automation",
    detail:
      "Automated blocking · workflow orchestration · case creation · investigation automation.",
  },
];

const frameworks = [
  {
    ref: "PCI-DSS",
    detail: "Payment Card Industry Data Security Standard, fraud prevention requirements.",
  },
  {
    ref: "REGULATION E",
    detail: "Electronic Fund Transfer Act, fraud protection standards.",
  },
  {
    ref: "PSD2",
    detail: "Payment Services Directive, strong customer authentication.",
  },
  {
    ref: "FRAUD PREVENTION",
    detail: "Industry best practices, fraud detection standards.",
  },
];

const FraudDetection = () => {
  return (
    <div className="bg-ink min-h-screen pt-16">
      {/* Hero: paper */}
      <section className="px-3 md:px-5 pt-3 md:pt-5">
        <div className="bg-paper rounded-2xl md:rounded-3xl">
          <div className="max-w-[1400px] mx-auto px-5 md:px-12 py-12 md:py-16">
            <div className="flex items-center justify-between">
              <span className="eyebrow text-ink-faint">Regulens · fraud detection</span>
              <Link
                to="/solutions/regulens"
                className="font-mono text-xs text-ink-faint hover:text-ink transition-colors hidden sm:block"
              >
                all twelve areas
              </Link>
            </div>
            <h1 className="mt-6 font-sans font-expanded font-extrabold text-ink tracking-tight leading-[1.0] text-5xl md:text-7xl max-w-4xl">
              Detection that adapts{" "}
              <span className="text-ledger">as fast as fraud does</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-ink-soft leading-relaxed max-w-2xl">
              ML-powered fraud detection with behavioral analysis and anomaly detection: real-time
              analysis, adaptive models, and fewer false positives, with human review of
              high-impact decisions.
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
              Fraud adapts faster than rules.
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
              Catch it in real time.
            </h2>
            <p className="mt-5 text-paper/65 leading-relaxed text-lg max-w-xl mx-auto">
              Governed, adaptive fraud detection for your prevention program, with human review
              of high-impact decisions.
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

export default FraudDetection;
