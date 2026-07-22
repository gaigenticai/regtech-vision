import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const products = [
  {
    index: "01",
    name: "Sentinel",
    href: "/infrastructure/sentinel",
    tagline: "API-first infrastructure for agentic systems",
    description:
      "A reusable backend for durable sessions, memory and knowledge base, tool execution, policy enforcement, and evidence-first auditing.",
    tags: ["Tool gateway + audit", "Hybrid retrieval", "Policy + safety"],
  },
  {
    index: "02",
    name: "Cognito",
    href: "/infrastructure/cognito",
    tagline: "Enterprise intake & alignment",
    description:
      "Temporal-orchestrated schema alignment for host vs acquired systems: connectors, evidence ingestion, mapping workbench, approvals, and versioned export contracts.",
    tags: ["Temporal runs + history", "Evidence-backed mappings", "Approval + versioning"],
  },
];

const Infrastructure = () => {
  return (
    <div className="bg-ink min-h-screen pt-16">
      {/* Hero — paper */}
      <section className="px-3 md:px-5 pt-3 md:pt-5">
        <div className="bg-paper rounded-2xl md:rounded-3xl">
          <div className="max-w-[1400px] mx-auto px-5 md:px-12 py-12 md:py-16">
            <span className="eyebrow text-ink-faint">Infrastructure</span>
            <h1 className="mt-6 font-sans font-expanded font-extrabold text-ink tracking-tight leading-[1.0] text-5xl md:text-7xl max-w-4xl">
              Core building blocks for <span className="text-ledger">enterprise-grade AI</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-ink-soft leading-relaxed max-w-2xl">
              The infrastructure underneath our products — and available on its own. Built to make
              regulated systems safe, observable, and repeatable.
            </p>
          </div>
        </div>
      </section>

      {/* Product index — dark */}
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
                  <span className="font-sans font-expanded font-bold text-2xl md:text-3xl text-paper tracking-tight">
                    {product.name}
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

export default Infrastructure;
