import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const products = [
  {
    index: "01",
    name: "Verify",
    href: "/verify",
    dot: "bg-tick",
    tagline: "The independent verification layer",
    description:
      "Continuous, independent verification of the outputs your finance-AI agents produce — AML monitoring decisions, reconciliations, filings — with tamper-evident evidence mapped to DNB SAFEST and EU AI Act Articles 12 & 14.",
    tags: ["Independent by design", "Continuous", "Regulator-ready evidence", "Vendor-agnostic"],
  },
  {
    index: "02",
    name: "Regulens",
    href: "/solutions/regulens",
    dot: "bg-amber",
    tagline: "Governed agentic workflows for compliance",
    description:
      "A suite of intelligent AI agents that works alongside teams across onboarding, monitoring, investigations, and reporting — with security and auditability built in.",
    tags: ["End-to-end agent suite", "Audit-ready operations", "Works with your stack"],
  },
  {
    index: "03",
    name: "CollectEye",
    href: "/solutions/collecteye",
    dot: "bg-amber",
    tagline: "Shadow-mode collections orchestration",
    description:
      "A policy-gated collections system built for safe adoption: read-only ingestion, governed communications, and an evidence trail from recommendations to outcomes.",
    tags: ["Read-only ingestion", "Policy-gated comms", "Decision ledger"],
  },
  {
    index: "04",
    name: "Galileo",
    href: "/solutions/galileo",
    dot: "bg-amber",
    tagline: "Agentic AI loan origination",
    description:
      "Underwriting powered by four AI agents — Detective, Analyst, Judge, and Supervisor — designed for fair, explainable credit decisions in seconds, with a supervisor agent checking the others' work.",
    tags: ["Rapid decisions", "ECOA-aligned", "Explainable AI"],
  },
  {
    index: "05",
    name: "CredAI",
    href: "/solutions/credai",
    dot: "bg-amber",
    tagline: "API-first credit decisioning",
    description:
      "Borrower 360 with instant decisioning — evaluate consumer and SME borrowers using alternative data sources, with a full decisioning console for operations.",
    tags: ["Instant decisioning", "Alternative data", "Policy engine"],
  },
  {
    index: "06",
    name: "CardOS",
    href: "/solutions/cardos",
    dot: "bg-amber",
    tagline: "Payments compliance & acquirer cost assurance",
    description:
      "Card scheme rule updates turned into briefed, assigned workstreams — and every acquirer invoice line reconciled against the contract, with an acquirer-ready inquiry document for discrepancies.",
    tags: ["Scheme compliance", "Invoice reconciliation", "Traceable findings"],
  },
];

const Solutions = () => {
  return (
    <div className="bg-ink min-h-screen pt-16">
      {/* Hero strip — paper */}
      <section className="px-3 md:px-5 pt-3 md:pt-5">
        <div className="bg-paper rounded-2xl md:rounded-3xl">
          <div className="max-w-[1400px] mx-auto px-5 md:px-12 py-12 md:py-16">
            <span className="eyebrow text-ink-faint">Products</span>
            <h1 className="mt-6 font-sans font-expanded font-extrabold text-ink tracking-tight leading-[1.0] text-5xl md:text-7xl max-w-4xl">
              Verification first.
              <br />
              <span className="text-ledger">Workflows that earn it.</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-ink-soft leading-relaxed max-w-2xl">
              Our flagship, Verify, independently checks what finance AI produces — anyone's
              finance AI. Our workflow products are built to the same standard we verify against:
              governed, auditable, integrated with your existing stack.
            </p>
          </div>
        </div>
      </section>

      {/* Product index — dark, expanded rows */}
      <section className="max-w-[1400px] mx-auto px-5 md:px-12 py-14 md:py-20">
        <div className="border-t border-paper/10">
          {products.map((product) => (
            <Link
              key={product.index}
              to={product.href}
              className="group block py-8 md:py-10 border-b border-paper/10 hover:bg-paper/[0.03] transition-colors px-2 -mx-2 rounded-sm"
            >
              <div className="grid md:grid-cols-[56px_260px_1fr_auto] gap-4 md:gap-8 items-start">
                <span className="font-mono text-xs text-paper/35 pt-2">{product.index}</span>
                <div>
                  <span className="flex items-center gap-2.5">
                    <span className={`inline-block w-1.5 h-1.5 rounded-full ${product.dot}`} aria-hidden />
                    <span className="font-sans font-expanded font-bold text-2xl md:text-3xl text-paper tracking-tight">
                      {product.name}
                    </span>
                  </span>
                  <div className="eyebrow text-paper/40 mt-2.5">{product.tagline}</div>
                </div>
                <div>
                  <p className="text-paper/60 leading-relaxed max-w-2xl">{product.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[11px] uppercase tracking-[0.14em] text-paper/45 border border-paper/15 rounded-full px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-paper/35 group-hover:text-paper transition-colors justify-self-end mt-2 hidden md:block" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Solutions;
