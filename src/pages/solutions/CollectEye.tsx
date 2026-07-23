import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const capabilities = [
  {
    index: "01",
    name: "Read-only ingestion",
    detail:
      "CollectEye ingests portfolio data in shadow mode (read-only) while keeping your core systems untouched, so you can evaluate outcomes before changing operations. Read-only sync from your source system (e.g., Postgres) into a separate ops layer, with portfolio changes tracked over time for consistent case context. Designed to minimize integration effort and data egress.",
  },
  {
    index: "02",
    name: "Workflow layer",
    detail:
      "A dedicated ops layer to manage assignments, case holds, queues, and work items, supported by agent recommendations and supervisor controls. Queue views, prioritization, and workload balancing across collectors; exception handling and approval gates where needed; playbooks and repeatable workflows to drive consistency.",
  },
  {
    index: "03",
    name: "Policy-gated comms",
    detail:
      "Outbound and inbound communications are routed through policy controls, approvals, and logging, so every message is governed and reviewable. Human-in-loop or autonomous modes, configurable per policy. Inbound handling for STOP/opt-out, disputes, and complaints. A Template Studio manages scripts by channel, stage, product, and region.",
  },
  {
    index: "04",
    name: "Evidence ledger",
    detail:
      "A full trail of recommendations and actions, including context, approvals, and outcomes, built for oversight and investigations. Decision Ledger for key actions with attribution, searchable audit logs and trace views to reproduce runs and decisions, and exportable evidence packs to support audits and incident response.",
  },
];

const rolloutStages = [
  {
    ref: "STAGE 1 · SHADOW",
    name: "Observe",
    detail:
      "Start read-only. CollectEye ingests portfolio data and produces recommendations without touching your source systems or sending anything.",
  },
  {
    ref: "STAGE 2 · GATED",
    name: "Validate",
    detail:
      "Enable gated actions behind approval gates. Compare recommendations against real outcomes while every step stays human-approved.",
  },
  {
    ref: "STAGE 3 · AUTONOMOUS",
    name: "Scale",
    detail:
      "Scale autonomy where policy allows, bounded by the same policy controls, with the evidence ledger recording every action.",
  },
];

const roles = [
  {
    ref: "ADMIN",
    name: "Admin",
    detail: "Configures ingestion, autonomy, providers, and operational policies.",
  },
  {
    ref: "SUPERVISOR · LCS",
    name: "Supervisor",
    detail: "Manages queues, approvals, coaching, performance, and governance.",
  },
  {
    ref: "COLLECTOR · LC",
    name: "Collector",
    detail: "Executes prioritized work with guided recommendations and templates.",
  },
];

const CollectEye = () => {
  return (
    <div className="bg-ink min-h-screen pt-16">
      {/* ============ HERO: paper sheet ============ */}
      <section className="px-3 md:px-5 pt-3 md:pt-5">
        <div className="bg-paper rounded-2xl md:rounded-3xl">
          <div className="max-w-[1400px] mx-auto px-5 md:px-12 pt-12 md:pt-16 pb-14 md:pb-20">
            <div className="flex items-center justify-between mb-14 md:mb-20">
              <span className="eyebrow text-ink-faint flex items-center gap-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber" aria-hidden />
                CollectEye
              </span>
              <span className="font-mono text-xs text-ink-faint hidden sm:block">
                shadow-mode collections orchestration
              </span>
            </div>

            <h1 className="font-sans font-expanded font-extrabold text-ink tracking-tight leading-[1.0] text-5xl md:text-7xl max-w-4xl">
              Agentic collections, adopted in <span className="text-ledger">shadow mode</span>
            </h1>

            <div className="mt-10 grid md:grid-cols-2 gap-8 md:gap-16 items-end">
              <p className="text-lg md:text-xl text-ink-soft leading-relaxed max-w-xl">
                A policy-gated collections system that ingests portfolio data in a read-only shadow
                layer and orchestrates assignments, communications, and evidence, without
                requiring changes to your existing stack.
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
              <span className="eyebrow text-ink-faint">
                Read-only ingestion · policy-gated comms · audit-ready evidence
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHY SHADOW MODE: dark ============ */}
      <section className="max-w-[1400px] mx-auto px-5 md:px-12 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20">
          <div>
            <div className="eyebrow text-paper/45 mb-6">Why shadow mode</div>
            <h2 className="font-sans font-expanded font-extrabold text-paper tracking-tight leading-tight text-4xl md:text-5xl">
              Prove it before you switch it on.
            </h2>
          </div>
          <div className="space-y-5 text-paper/65 leading-relaxed text-lg max-w-xl">
            <p>
              New collections tooling usually means risky integrations, big-bang cutovers, and
              opaque automation. CollectEye is built for the opposite: connect read-only, keep your
              core systems untouched, and validate outcomes in shadow mode before enabling any
              gated action.
            </p>
            <p>
              Autonomy is earned in stages: shadow, then gated, then autonomous. It stays
              bounded by policy at every stage, with an evidence trail from recommendations to
              outcomes.
            </p>
          </div>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {rolloutStages.map((stage) => (
            <div key={stage.ref} className="border-t border-paper/15 pt-5">
              <div className="font-mono text-xs text-amber mb-2">{stage.ref}</div>
              <h3 className="font-sans font-expanded font-bold text-xl text-paper tracking-tight mb-3">
                {stage.name}
              </h3>
              <p className="text-paper/60 leading-relaxed text-[15px]">{stage.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Hatch divider */}
      <div className="max-w-[1400px] mx-auto px-5 md:px-12">
        <div className="h-10 hatch-band rounded-sm" aria-hidden />
      </div>

      {/* ============ CORE CAPABILITIES: dark index rows ============ */}
      <section className="max-w-[1400px] mx-auto px-5 md:px-12 py-16 md:py-24">
        <div className="eyebrow text-paper/45 mb-8">Core capabilities</div>
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

      {/* ============ ROLES: paper sheet ============ */}
      <section className="px-3 md:px-5">
        <div className="bg-paper rounded-2xl md:rounded-3xl">
          <div className="max-w-[1400px] mx-auto px-5 md:px-12 py-14 md:py-20">
            <div className="flex items-baseline justify-between mb-10 md:mb-14">
              <span className="eyebrow text-ink-faint">Built for real teams</span>
              <span className="font-mono text-xs text-ink-faint hidden sm:block">
                clear responsibilities and access controls
              </span>
            </div>

            <div className="grid md:grid-cols-3 gap-px bg-rule rounded-xl overflow-hidden border border-rule">
              {roles.map((role) => (
                <div key={role.name} className="bg-paper-bright p-7 md:p-9">
                  <div className="font-mono text-xs text-ledger mb-4">{role.ref}</div>
                  <h3 className="font-sans font-bold text-xl text-ink mb-4 tracking-tight">
                    {role.name}
                  </h3>
                  <p className="text-ink-soft leading-relaxed text-[15px]">{role.detail}</p>
                </div>
              ))}
            </div>

            {/* Governance framing */}
            <div className="mt-14 md:mt-20">
              <div className="eyebrow text-ink-faint mb-8">Governance &amp; auditability</div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="border-t-2 border-ink pt-5">
                  <div className="font-mono text-xs text-ledger mb-2">POLICY CONTROLS</div>
                  <p className="text-ink-soft text-[15px] leading-relaxed">
                    Guardrails for sensitive steps, thresholds, and redaction, with human-in-loop
                    gates for high-impact steps and exceptions, configurable by role.
                  </p>
                </div>
                <div className="border-t-2 border-ink pt-5">
                  <div className="font-mono text-xs text-ledger mb-2">INBOUND HANDLING</div>
                  <p className="text-ink-soft text-[15px] leading-relaxed">
                    STOP/opt-out, disputes, and complaints captured and routed into workflows with
                    audit trails. Inbound is governed the same way outbound is.
                  </p>
                </div>
                <div className="border-t-2 border-ink pt-5">
                  <div className="font-mono text-xs text-ledger mb-2">EVIDENCE EXPORT</div>
                  <p className="text-ink-soft text-[15px] leading-relaxed">
                    Decision ledger, searchable logs, and trace views for replay and review, with
                    exportable evidence packs for audits and incident response.
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
              See CollectEye against your collections workflow.
            </h2>
            <p className="mt-6 text-paper/65 leading-relaxed text-lg max-w-xl mx-auto">
              Schedule a demo to explore shadow-mode rollout, policy gating, and end-to-end
              auditability, tailored to your portfolio.
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

export default CollectEye;
