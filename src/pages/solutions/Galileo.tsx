import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const agents = [
  {
    index: "01",
    name: "Detective",
    role: "Data & fraud hunter",
    detail:
      "Autonomous verification across Secretary of State lookups, SBA eligibility screening with NAICS code validation, fraud detection, digital footprint analysis, and document forensics, including PDF manipulation detection and circular transaction detection.",
    supervisor: false,
  },
  {
    index: "02",
    name: "Analyst",
    role: "Financial intelligence",
    detail:
      "Auto-spreads tax returns (1120S, 1065, Schedule C), analyzes and categorizes bank statements, performs dual-ledger verification comparing accounting against banking data, and runs dynamic DSCR stress testing at -10%, -20%, and -30%, flagging discrepancies exceeding 10%.",
    supervisor: false,
  },
  {
    index: "03",
    name: "Judge",
    role: "Decision & structuring",
    detail:
      "Applies credit policy rules, validates against SBA SOP 50 10 7.1 requirements, assigns risk ratings with a full reasoning chain, structures deals, auto-populates SBA Forms 1919 and 159, and generates adverse action letters designed for ECOA compliance (max 4 reasons).",
    supervisor: false,
  },
  {
    index: "04",
    name: "Supervisor",
    role: "Quality assurance",
    detail:
      "Detects hallucinations, verifies cross-agent consistency, validates that every claim traces back to source documents, scores each agent's output, and triggers automatic human escalation when confidence falls below configurable thresholds.",
    supervisor: true,
  },
];

const integrations = [
  "Plaid",
  "Codat",
  "Experian",
  "Middesk",
  "DocuSign",
  "Core banking systems",
];

const loanTypes = [
  "SBA 7(a) loans",
  "SBA 504 loans",
  "Term loans",
  "Lines of credit",
  "Equipment financing",
];

const Galileo = () => {
  return (
    <div className="bg-ink min-h-screen pt-16">
      {/* ============ HERO: paper sheet ============ */}
      <section className="px-3 md:px-5 pt-3 md:pt-5">
        <div className="bg-paper rounded-2xl md:rounded-3xl">
          <div className="max-w-[1400px] mx-auto px-5 md:px-12 pt-12 md:pt-16 pb-14 md:pb-20">
            <div className="flex items-center justify-between mb-14 md:mb-20">
              <span className="eyebrow text-ink-faint flex items-center gap-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber" aria-hidden />
                Galileo
              </span>
              <span className="font-mono text-xs text-ink-faint hidden sm:block">
                agentic AI loan origination
              </span>
            </div>

            <h1 className="font-sans font-expanded font-extrabold text-ink tracking-tight leading-[1.0] text-5xl md:text-7xl max-w-4xl">
              Loan origination run by <span className="text-ledger">four agents</span>
            </h1>

            <div className="mt-10 grid md:grid-cols-2 gap-8 md:gap-16 items-end">
              <p className="text-lg md:text-xl text-ink-soft leading-relaxed max-w-xl">
                Four autonomous underwriting agents (Detective, Analyst, Judge, and Supervisor)
                work together, designed to deliver fair, compliant, and explainable credit
                decisions in under 30 seconds, with a complete chain-of-thought audit trail and
                automatic escalation to a human when confidence falls below 90%.
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

            {/* Product screenshot: paper-bright card, hairline border */}
            <div className="mt-14 md:mt-20 bg-paper-bright border border-rule rounded-xl overflow-hidden">
              <div className="px-5 py-3 border-b border-rule flex items-baseline justify-between">
                <span className="eyebrow text-ink-faint">AI operations center</span>
                <span className="font-mono text-xs text-ink-faint hidden sm:block">
                  decisions · confidence scores · live activity
                </span>
              </div>
              <img
                src="/assets/galileo-dashboard.png"
                alt="Galileo AI Operations Center showing real-time underwriting decisions, agent confidence scores, and live activity feed"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHY: dark ============ */}
      <section className="max-w-[1400px] mx-auto px-5 md:px-12 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20">
          <div>
            <div className="eyebrow text-paper/45 mb-6">Why agents</div>
            <h2 className="font-sans font-expanded font-extrabold text-paper tracking-tight leading-tight text-4xl md:text-5xl">
              Underwriting is a pipeline. So is Galileo.
            </h2>
          </div>
          <div className="space-y-5 text-paper/65 leading-relaxed text-lg max-w-xl">
            <p>
              Manual KYB/KYC checks take days, tax return spreading is error-prone, and adverse
              action letters risk compliance violations. Each Galileo agent specializes in one
              stage of the underwriting process, and together they produce a complete, auditable
              credit decision.
            </p>
            <p>
              Galileo ships as a portable, API-first agentic engine that works on top of any
              existing LOS with no system migration, plus a standalone LOS reference implementation
              for full-stack deployment.
            </p>
          </div>
        </div>
      </section>

      {/* Hatch divider */}
      <div className="max-w-[1400px] mx-auto px-5 md:px-12">
        <div className="h-10 hatch-band rounded-sm" aria-hidden />
      </div>

      {/* ============ FOUR AGENTS: dark index rows ============ */}
      <section className="max-w-[1400px] mx-auto px-5 md:px-12 py-16 md:py-24">
        <div className="eyebrow text-paper/45 mb-8">The four agents</div>
        <div className="border-t border-paper/10">
          {agents.map((agent) => (
            <div
              key={agent.index}
              className="grid md:grid-cols-[56px_220px_1fr] gap-4 md:gap-6 py-8 border-b border-paper/10"
            >
              <span className="font-mono text-xs text-paper/35 pt-1.5">{agent.index}</span>
              <div>
                <h3 className="font-sans font-expanded font-bold text-2xl text-paper tracking-tight flex items-center gap-2.5">
                  {agent.supervisor && (
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-tick" aria-hidden />
                  )}
                  {agent.name}
                </h3>
                <div className="eyebrow text-paper/40 mt-2">{agent.role}</div>
              </div>
              <div className="max-w-2xl">
                <p className="text-paper/60 leading-relaxed">{agent.detail}</p>
                {agent.supervisor && (
                  <p className="text-paper/60 leading-relaxed mt-3">
                    Independent verification of AI outputs is the core thesis behind our flagship,{" "}
                    <Link
                      to="/verify"
                      className="text-paper underline underline-offset-2 hover:text-paper/80 transition-colors"
                    >
                      Gaigentic Verify
                    </Link>
                    : the same principle applied as a standalone layer across any finance-AI system.
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ COMPLIANCE ALIGNMENT + INTEGRATIONS: paper sheet ============ */}
      <section className="px-3 md:px-5">
        <div className="bg-paper rounded-2xl md:rounded-3xl">
          <div className="max-w-[1400px] mx-auto px-5 md:px-12 py-14 md:py-20">
            <div className="flex items-baseline justify-between mb-10 md:mb-14">
              <span className="eyebrow text-ink-faint">Built for regulated lending</span>
              <span className="font-mono text-xs text-ink-faint hidden sm:block">
                compliance designed into every decision
              </span>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="border-t-2 border-ink pt-5">
                <div className="font-mono text-xs text-ledger mb-2">ECOA · REGULATION B</div>
                <p className="text-ink-soft text-[15px] leading-relaxed">
                  Designed for ECOA/Regulation B compliance: specific, evidenced adverse action
                  reasons (max 4 per decision) with a full audit trail.
                </p>
              </div>
              <div className="border-t-2 border-ink pt-5">
                <div className="font-mono text-xs text-ledger mb-2">SBA · SOP 50 10 7.1</div>
                <p className="text-ink-soft text-[15px] leading-relaxed">
                  SBA loan compliance validation built into the Judge agent's decisioning engine,
                  with auto-populated SBA Forms 1919 and 159.
                </p>
              </div>
              <div className="border-t-2 border-ink pt-5">
                <div className="font-mono text-xs text-ledger mb-2">FDIC · AI GUIDANCE</div>
                <p className="text-ink-soft text-[15px] leading-relaxed">
                  Model risk management, explainability, and human oversight designed to meet
                  regulatory expectations, with source document highlighting.
                </p>
              </div>
              <div className="border-t-2 border-ink pt-5">
                <div className="font-mono text-xs text-ledger mb-2">SOC 2 · IN PREPARATION</div>
                <p className="text-ink-soft text-[15px] leading-relaxed">
                  SOC 2-aligned controls (certification in preparation): AES-256 encryption,
                  role-based access control, and comprehensive security controls.
                </p>
              </div>
            </div>

            {/* Integrations */}
            <div className="mt-14 md:mt-20 pt-8 border-t border-rule">
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <div className="eyebrow text-ink-faint mb-5">Designed to integrate with</div>
                  <div className="flex flex-wrap gap-2">
                    {integrations.map((name) => (
                      <span
                        key={name}
                        className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft border border-rule-dark rounded-full px-3 py-1"
                      >
                        {name}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="eyebrow text-ink-faint mb-5">Supported loan types</div>
                  <div className="flex flex-wrap gap-2">
                    {loanTypes.map((name) => (
                      <span
                        key={name}
                        className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft border border-rule-dark rounded-full px-3 py-1"
                      >
                        {name}
                      </span>
                    ))}
                  </div>
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
            <div className="eyebrow text-paper/50 mb-6">Next step</div>
            <h2 className="font-sans font-expanded font-extrabold text-paper tracking-tight leading-tight text-4xl md:text-6xl max-w-3xl mx-auto">
              Watch a credit decision reason itself out.
            </h2>
            <p className="mt-6 text-paper/65 leading-relaxed text-lg max-w-xl mx-auto">
              Schedule a demo to see autonomous underwriting, from application intake through a
              fully reasoned credit decision, designed for ECOA compliance and sub-30-second
              turnaround.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="eyebrow inline-flex items-center gap-2 bg-paper text-ink rounded-full px-7 py-4 hover:bg-paper-bright transition-colors"
              >
                Contact us
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                to="/solutions"
                className="eyebrow inline-flex items-center gap-2 border border-paper/25 text-paper rounded-full px-7 py-4 hover:border-paper/50 transition-colors"
              >
                Back to products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Galileo;
