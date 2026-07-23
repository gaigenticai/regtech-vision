import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const regulations = [
  {
    index: "01",
    ref: "EUDR",
    name: "Deforestation regulation",
    detail:
      "Satellite deforestation analysis through Global Forest Watch: tree cover loss, deforestation alerts, plot polygon boundaries, and cutoff-date verification. A 141-country risk database and a DDS Filing Assistant that validates Annex II readiness before you submit.",
  },
  {
    index: "02",
    ref: "CSRD",
    name: "Sustainability reporting",
    detail:
      "Double-materiality assessment support, ESRS disclosure mapping, and ESRS-tagged iXBRL export for digital filing under EU ESEF requirements. The report the CFO signs, prepared with the evidence attached.",
  },
  {
    index: "03",
    ref: "CBAM",
    name: "Carbon border adjustment",
    detail:
      "A full Annex III calculation engine covering benchmarks, phase-out factors, and precursor emissions. Carbon prices for 83 countries with an Article 9 deduction engine, plus quarterly reports and annual declarations generated as filing-ready PDFs.",
  },
  {
    index: "04",
    ref: "PPWR",
    name: "Packaging & packaging waste",
    detail:
      "Digital Product Passport templates, a packaging minimisation checker, and EPR obligations compared across markets, so packaging decisions are made with the rulebook in view.",
  },
  {
    index: "05",
    ref: "VSME",
    name: "Voluntary SME standard",
    detail:
      "The EFRAG VSME standard (finalized December 2024) with plausibility checks, CSRD disclosure mapping, sector benchmarks, and structured supplier data requests built in.",
  },
  {
    index: "06",
    ref: "GHG · ISO 14064-1",
    name: "Emissions accounting",
    detail:
      "Scope 1, 2 and 3 calculation with 73 emission factors across all 15 Scope 3 categories and 83 country grid factors. PCAF financed emissions for banks across 7 asset classes, SBTi target validation, and base-year recalculation per GHG Protocol Chapter 6.",
  },
];

const capabilities = [
  {
    name: "Supplier portal",
    detail:
      "Token-based upload links: suppliers submit documents and respond to remediation actions without creating accounts, with VSME-specific data request workflows.",
  },
  {
    name: "Regulatory radar",
    detail:
      "EUR-Lex integration tracks the regulations themselves, so assessments reference the current text rather than last year's summary.",
  },
  {
    name: "Scenario modelling",
    detail:
      "CBAM phase-out cost modelling for 2026 to 2034, EPR multi-market comparison, sector benchmarking, and science-based target trajectory validation.",
  },
  {
    name: "Audit trail",
    detail:
      "Every assessment, calculation, and filing artifact is traceable to its inputs. Cross-regulation intelligence connects findings from one regime to obligations in another.",
  },
];

const Greenshield = () => {
  return (
    <div className="bg-ink min-h-screen pt-16">
      {/* Hero: paper */}
      <section className="px-3 md:px-5 pt-3 md:pt-5">
        <div className="bg-paper rounded-2xl md:rounded-3xl">
          <div className="max-w-[1400px] mx-auto px-5 md:px-12 py-12 md:py-16">
            <div className="flex items-center justify-between">
              <span className="eyebrow text-ink-faint flex items-center gap-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber" aria-hidden />
                Greenshield
              </span>
              <span className="font-mono text-xs text-ink-faint hidden sm:block">
                EU sustainability compliance
              </span>
            </div>
            <h1 className="mt-6 font-sans font-expanded font-extrabold text-ink tracking-tight leading-[1.0] text-5xl md:text-7xl max-w-4xl">
              Six EU regimes.
              <br />
              <span className="text-ledger">One evidence trail.</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-ink-soft leading-relaxed max-w-2xl">
              Greenshield covers EUDR, CSRD, CBAM, PPWR, VSME, and GHG Protocol / ISO 14064-1 in a
              single platform: assessments grounded in the actual regulation text, calculations you
              can trace, and filings generated in the format the regulator expects.
            </p>
          </div>
        </div>
      </section>

      {/* Regulations: dark index rows */}
      <section className="max-w-[1400px] mx-auto px-5 md:px-12 py-14 md:py-20">
        <div className="eyebrow text-paper/45 mb-8">Six regulation modules</div>
        <div className="border-t border-paper/10">
          {regulations.map((reg) => (
            <div
              key={reg.index}
              className="grid md:grid-cols-[56px_260px_1fr] gap-4 md:gap-6 py-8 border-b border-paper/10"
            >
              <span className="font-mono text-xs text-paper/35 pt-1.5">{reg.index}</span>
              <div>
                <div className="font-mono text-xs text-amber mb-2">{reg.ref}</div>
                <h3 className="font-sans font-expanded font-bold text-2xl text-paper tracking-tight">
                  {reg.name}
                </h3>
              </div>
              <p className="text-paper/60 leading-relaxed max-w-2xl">{reg.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Hatch divider */}
      <div className="max-w-[1400px] mx-auto px-5 md:px-12">
        <div className="h-10 hatch-band rounded-sm" aria-hidden />
      </div>

      {/* Capabilities: paper card grid */}
      <section className="px-3 md:px-5 py-12 md:py-16">
        <div className="bg-paper rounded-2xl md:rounded-3xl">
          <div className="max-w-[1400px] mx-auto px-5 md:px-12 py-12 md:py-16">
            <div className="flex items-baseline justify-between mb-10">
              <span className="eyebrow text-ink-faint">Across all six</span>
              <span className="font-mono text-xs text-ink-faint hidden sm:block">
                grounded in regulation text · traceable to source
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

            {/* CFO office framing */}
            <div className="mt-12 border-t-2 border-ink pt-5 max-w-3xl">
              <div className="font-mono text-xs text-ledger mb-2">FOR THE OFFICE OF THE CFO</div>
              <p className="text-ink-soft text-[15px] leading-relaxed">
                Sustainability reporting has moved into the CFO's remit: CSRD lands in the annual
                report, CBAM lands in the cost base. Greenshield applies the same discipline as the
                rest of our stack. Every number traces to a source, and every filing carries its
                evidence with it.
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
              See your obligations in one view.
            </h2>
            <p className="mt-5 text-paper/65 leading-relaxed text-lg max-w-xl mx-auto">
              Bring one product line or one reporting entity. We'll walk the six regimes against
              your actual exposure.
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

export default Greenshield;
