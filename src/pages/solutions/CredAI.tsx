import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const dataSources = [
  {
    ref: "SOURCE · E-COMMERCE",
    name: "E-commerce",
    detail: "Marketplace and storefront transaction history folded into the borrower's activity coverage.",
  },
  {
    ref: "SOURCE · PAYMENTS",
    name: "Payments",
    detail: "Payment-rail transactions with chargeback rates and payment source diversity analysis.",
  },
  {
    ref: "SOURCE · FINTECH",
    name: "Fintech",
    detail: "Fintech platform activity normalized into the unified Borrower 360 profile.",
  },
  {
    ref: "SOURCE · TELCO",
    name: "Telco",
    detail: "Telco metrics: tenure, bill punctuality, and top-up behavior as stability signals.",
  },
  {
    ref: "SOURCE · BANK",
    name: "Bank",
    detail: "Cashflow metrics — inflow, outflow, and net flow — over a 90-day rolling window.",
  },
  {
    ref: "SOURCE · CARD",
    name: "Card",
    detail: "Card transaction data feeding volatility scoring and the stability index.",
  },
];

const agents = [
  {
    index: "01",
    name: "Copilot Chat",
    detail:
      "An AI assistant with persistent sessions, grounded in borrower data — ask questions about a borrower, a decision, or the portfolio and get answers tied to the underlying records.",
  },
  {
    index: "02",
    name: "Portfolio Watchdog",
    detail:
      "Automated anomaly detection across the portfolio — surfacing patterns that manual monitoring misses before they become losses.",
  },
  {
    index: "03",
    name: "Document Ingestion",
    detail:
      "Bank statement extraction and verification, turning uploaded documents into structured features the decisioning engine can use.",
  },
  {
    index: "04",
    name: "Policy Simulator",
    detail:
      "Natural language what-if analysis for policy changes — simulate a policy's impact on decisions before activating it.",
  },
  {
    index: "05",
    name: "Compliance",
    detail:
      "Adverse action notices, designed for compliance and based on specific decision reasons, plus group-based fair lending analysis to detect disparate impact and regulatory flags.",
  },
  {
    index: "06",
    name: "Collection",
    detail:
      "Risk scoring and outreach strategy generation feeding a priority-based collection queue — recovery effort where it matters most.",
  },
];

const CredAI = () => {
  return (
    <div className="bg-ink min-h-screen pt-16">
      {/* ============ HERO — paper sheet ============ */}
      <section className="px-3 md:px-5 pt-3 md:pt-5">
        <div className="bg-paper rounded-2xl md:rounded-3xl">
          <div className="max-w-[1400px] mx-auto px-5 md:px-12 pt-12 md:pt-16 pb-14 md:pb-20">
            <div className="flex items-center justify-between mb-14 md:mb-20">
              <span className="eyebrow text-ink-faint flex items-center gap-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber" aria-hidden />
                CredAI
              </span>
              <span className="font-mono text-xs text-ink-faint hidden sm:block">
                API-first credit decisioning
              </span>
            </div>

            <h1 className="font-sans font-expanded font-extrabold text-ink tracking-tight leading-[1.0] text-5xl md:text-7xl max-w-4xl">
              Borrower 360 with <span className="text-ledger">instant decisioning</span>
            </h1>

            <div className="mt-10 grid md:grid-cols-2 gap-8 md:gap-16 items-end">
              <p className="text-lg md:text-xl text-ink-soft leading-relaxed max-w-xl">
                API-first credit decisioning middleware that evaluates consumer and SME borrowers
                using six alternative data sources, designed to return a scored decision in under
                3 seconds — with a full decisioning console for operations.
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

            {/* Product screenshot — paper-bright card, hairline border */}
            <div className="mt-14 md:mt-20 bg-paper-bright border border-rule rounded-xl overflow-hidden">
              <div className="px-5 py-3 border-b border-rule flex items-baseline justify-between">
                <span className="eyebrow text-ink-faint">Borrower 360 console</span>
                <span className="font-mono text-xs text-ink-faint hidden sm:block">
                  data sources · cashflow · decision · key signals
                </span>
              </div>
              <img
                src="/assets/credai-dashboard.png"
                alt="CredAI Borrower 360 showing alternative data sources, credit score, cashflow analysis, and instant decision with key signals"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHY — dark ============ */}
      <section className="max-w-[1400px] mx-auto px-5 md:px-12 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20">
          <div>
            <div className="eyebrow text-paper/45 mb-6">Why alternative data</div>
            <h2 className="font-sans font-expanded font-extrabold text-paper tracking-tight leading-tight text-4xl md:text-5xl">
              Bureau scores end where most borrowers begin.
            </h2>
          </div>
          <div className="space-y-5 text-paper/65 leading-relaxed text-lg max-w-xl">
            <p>
              Traditional credit scoring relies on limited bureau data, excluding thin-file and
              emerging-market borrowers. CredAI ingests and normalizes transaction data from six
              alternative sources into a unified Borrower 360 profile, with automated feature
              engineering from raw transactions and a feature snapshot stored with each decision
              for auditability.
            </p>
            <p>
              Every decision resolves to one of three outcomes — APPROVE, DECLINE, or REVIEW —
              with full reasoning: a credit score (0–1000) with confidence level, key signals
              categorized as positive, negative, or neutral, APR suggestions, and next-best-action
              recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* Hatch divider */}
      <div className="max-w-[1400px] mx-auto px-5 md:px-12">
        <div className="h-10 hatch-band rounded-sm" aria-hidden />
      </div>

      {/* ============ SIX AGENTS — dark index rows ============ */}
      <section className="max-w-[1400px] mx-auto px-5 md:px-12 py-16 md:py-24">
        <div className="eyebrow text-paper/45 mb-8">Six AI agents</div>
        <div className="border-t border-paper/10">
          {agents.map((agent) => (
            <div
              key={agent.index}
              className="grid md:grid-cols-[56px_220px_1fr] gap-4 md:gap-6 py-8 border-b border-paper/10"
            >
              <span className="font-mono text-xs text-paper/35 pt-1.5">{agent.index}</span>
              <h3 className="font-sans font-expanded font-bold text-2xl text-paper tracking-tight">
                {agent.name}
              </h3>
              <p className="text-paper/60 leading-relaxed max-w-2xl">{agent.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ DATA SOURCES + GOVERNANCE — paper sheet ============ */}
      <section className="px-3 md:px-5">
        <div className="bg-paper rounded-2xl md:rounded-3xl">
          <div className="max-w-[1400px] mx-auto px-5 md:px-12 py-14 md:py-20">
            <div className="flex items-baseline justify-between mb-10 md:mb-14">
              <span className="eyebrow text-ink-faint">Six data sources, one borrower view</span>
              <span className="font-mono text-xs text-ink-faint hidden sm:block">
                unified · normalized · snapshot per decision
              </span>
            </div>

            <div className="grid md:grid-cols-3 gap-px bg-rule rounded-xl overflow-hidden border border-rule">
              {dataSources.map((source) => (
                <div key={source.name} className="bg-paper-bright p-7 md:p-9">
                  <div className="font-mono text-xs text-ledger mb-4">{source.ref}</div>
                  <h3 className="font-sans font-bold text-xl text-ink mb-4 tracking-tight">
                    {source.name}
                  </h3>
                  <p className="text-ink-soft leading-relaxed text-[15px]">{source.detail}</p>
                </div>
              ))}
            </div>

            {/* Policy & governance */}
            <div className="mt-14 md:mt-20">
              <div className="eyebrow text-ink-faint mb-8">Governed by design</div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="border-t-2 border-ink pt-5">
                  <div className="font-mono text-xs text-ledger mb-2">POLICY ENGINE</div>
                  <p className="text-ink-soft text-[15px] leading-relaxed">
                    Version-controlled rules with configurable parameters — amount caps, score
                    thresholds, chargeback limits, transaction counts, telco requirements — with
                    separate Consumer and SME configurations, active/inactive toggling, instant
                    rollback, and an audit trail of every change.
                  </p>
                </div>
                <div className="border-t-2 border-ink pt-5">
                  <div className="font-mono text-xs text-ledger mb-2">FAIR LENDING</div>
                  <p className="text-ink-soft text-[15px] leading-relaxed">
                    Group-based fairness testing to detect disparate impact and bias, with
                    regulatory flag identification and automated adverse action notices designed
                    for compliance, based on specific decision reasons.
                  </p>
                </div>
                <div className="border-t-2 border-ink pt-5">
                  <div className="font-mono text-xs text-ledger mb-2">OPERATIONS CONSOLE</div>
                  <p className="text-ink-soft text-[15px] leading-relaxed">
                    Portfolio overview with real-time metrics — borrowers, approval rates,
                    decision scores, transaction volumes by source — plus decision history,
                    borrower search, policy management, and a priority-based collection queue.
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
            <div className="eyebrow text-paper/50 mb-6">Next step</div>
            <h2 className="font-sans font-expanded font-extrabold text-paper tracking-tight leading-tight text-4xl md:text-6xl max-w-3xl mx-auto">
              See a borrower scored end to end.
            </h2>
            <p className="mt-6 text-paper/65 leading-relaxed text-lg max-w-xl mx-auto">
              Schedule a demo to explore Borrower 360 profiles, instant credit decisioning, and
              the full AI agent suite — tailored to your lending workflow.
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

export default CredAI;
