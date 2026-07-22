import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const workflows = [
  {
    index: "01",
    name: "Scheme compliance",
    detail:
      "Ingests card scheme rulebooks (Visa Core Rules) and the periodic update bulletins, generates executive briefs, cross-references each update to the exact rules it affects, and spins up trackable sub-workflows that assign actions to the right functions. Rule changes stop arriving as 400-page PDFs nobody owns.",
  },
  {
    index: "02",
    name: "Invoice analysis",
    detail:
      "Extracts the rate card from your acquirer contract, parses each monthly invoice — text or scanned — and reconciles every fee line against what the contract says, combining deterministic SQL checks with LLM reasoning. Discrepancies become a downloadable, acquirer-ready inquiry document.",
  },
];

const capabilities = [
  {
    name: "Document intelligence",
    detail:
      "Layout-aware parsing for contracts, rulebooks, bulletins, and invoices — including OCR for scanned documents.",
  },
  {
    name: "Hybrid retrieval",
    detail:
      "Keyword and vector search over the full rulebook corpus, so every brief and cross-reference is grounded in the actual rule text.",
  },
  {
    name: "Deterministic + LLM reconciliation",
    detail:
      "Fee lines are checked with SQL where the math is exact, and with LLM reasoning where contract language needs interpretation — each finding traceable to its source clause.",
  },
  {
    name: "Action tracking",
    detail:
      "Scheme updates become assigned, trackable workstreams per function — evidence of who handled what, when.",
  },
];

const CardOS = () => {
  return (
    <div className="bg-ink min-h-screen pt-16">
      {/* Hero — paper */}
      <section className="px-3 md:px-5 pt-3 md:pt-5">
        <div className="bg-paper rounded-2xl md:rounded-3xl">
          <div className="max-w-[1400px] mx-auto px-5 md:px-12 py-12 md:py-16">
            <div className="flex items-center justify-between">
              <span className="eyebrow text-ink-faint flex items-center gap-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber" aria-hidden />
                CardOS
              </span>
              <span className="font-mono text-xs text-ink-faint hidden sm:block">
                payments compliance · acquirer cost assurance
              </span>
            </div>
            <h1 className="mt-6 font-sans font-expanded font-extrabold text-ink tracking-tight leading-[1.0] text-5xl md:text-7xl max-w-4xl">
              Scheme rules read.
              <br />
              <span className="text-ledger">Every fee line checked.</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-ink-soft leading-relaxed max-w-2xl">
              CardOS keeps a card-issuing or acquiring business on top of the two documents that
              quietly cost it the most: the scheme rulebook and the acquirer invoice. Rule updates
              become briefed, assigned workstreams; invoices are reconciled line-by-line against
              the contract — with every finding traceable to its source.
            </p>
          </div>
        </div>
      </section>

      {/* Workflows — dark index rows */}
      <section className="max-w-[1400px] mx-auto px-5 md:px-12 py-14 md:py-20">
        <div className="eyebrow text-paper/45 mb-8">Two workflows</div>
        <div className="border-t border-paper/10">
          {workflows.map((wf) => (
            <div
              key={wf.index}
              className="grid md:grid-cols-[56px_260px_1fr] gap-4 md:gap-6 py-8 border-b border-paper/10"
            >
              <span className="font-mono text-xs text-paper/35 pt-1.5">{wf.index}</span>
              <h3 className="font-sans font-expanded font-bold text-2xl text-paper tracking-tight">
                {wf.name}
              </h3>
              <p className="text-paper/60 leading-relaxed max-w-2xl">{wf.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Hatch divider */}
      <div className="max-w-[1400px] mx-auto px-5 md:px-12">
        <div className="h-10 hatch-band rounded-sm" aria-hidden />
      </div>

      {/* Capabilities — paper card grid */}
      <section className="px-3 md:px-5 py-12 md:py-16">
        <div className="bg-paper rounded-2xl md:rounded-3xl">
          <div className="max-w-[1400px] mx-auto px-5 md:px-12 py-12 md:py-16">
            <div className="flex items-baseline justify-between mb-10">
              <span className="eyebrow text-ink-faint">Under the hood</span>
              <span className="font-mono text-xs text-ink-faint hidden sm:block">
                deterministic where possible · traceable everywhere
              </span>
            </div>
            <div className="grid md:grid-cols-2 gap-px bg-rule rounded-xl overflow-hidden border border-rule">
              {capabilities.map((cap) => (
                <div key={cap.name} className="bg-paper-bright p-7 md:p-9">
                  <h3 className="font-sans font-bold text-xl text-ink mb-3 tracking-tight">{cap.name}</h3>
                  <p className="text-ink-soft leading-relaxed text-[15px]">{cap.detail}</p>
                </div>
              ))}
            </div>

            {/* Cost-assurance framing */}
            <div className="mt-12 border-t-2 border-ink pt-5 max-w-3xl">
              <div className="font-mono text-xs text-ledger mb-2">FOR THE OFFICE OF THE CFO</div>
              <p className="text-ink-soft text-[15px] leading-relaxed">
                Acquirer fees are one of the largest unexamined cost lines in a payments P&amp;L —
                checked rarely, disputed later, evidenced poorly. CardOS applies the same
                discipline we apply everywhere: don't trust the invoice, recompute it from the
                contract, and keep the evidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-3 md:px-5 pb-3 md:pb-5">
        <div className="bg-ledger-deep rounded-2xl md:rounded-3xl">
          <div className="max-w-[1400px] mx-auto px-5 md:px-12 py-14 md:py-20 text-center">
            <h2 className="font-sans font-expanded font-extrabold text-paper tracking-tight leading-tight text-4xl md:text-5xl">
              See it on your own invoice.
            </h2>
            <p className="mt-5 text-paper/65 leading-relaxed text-lg max-w-xl mx-auto">
              Bring one acquirer contract and one monthly invoice — the reconciliation makes the
              case better than a slide deck can.
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

export default CardOS;
