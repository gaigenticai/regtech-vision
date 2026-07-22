import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import VerificationRegister from "@/components/VerificationRegister";

const checks = [
  {
    name: "Recompute",
    detail:
      "Every figure an agent produces is tied back to source data. A reconciliation marked \"matched\" is independently re-matched; a filing figure is recomputed from the ledger.",
  },
  {
    name: "Policy",
    detail:
      "Agent decisions are tested against your institution's own documented policies and thresholds. Rule-based, explainable, defensible in front of a supervisor.",
  },
  {
    name: "Challenge",
    detail:
      "An independent model re-scores samples of agent decisions — especially the \"no alert\" ones, where regulatory risk hides. Disagreements escalate to your reviewers.",
  },
];

const products = [
  {
    index: "01",
    name: "Verify",
    href: "/verify",
    dot: "bg-tick",
    description: "Independent verification of finance-AI outputs. The flagship.",
  },
  {
    index: "02",
    name: "Regulens",
    href: "/solutions/regulens",
    dot: "bg-amber",
    description: "Governed agentic workflows across compliance operations.",
  },
  {
    index: "03",
    name: "CollectEye",
    href: "/solutions/collecteye",
    dot: "bg-amber",
    description: "Shadow-mode collections orchestration, policy-gated.",
  },
  {
    index: "04",
    name: "Galileo",
    href: "/solutions/galileo",
    dot: "bg-amber",
    description: "Agentic loan origination with a supervisor agent checking the work.",
  },
  {
    index: "05",
    name: "CredAI",
    href: "/solutions/credai",
    dot: "bg-amber",
    description: "API-first credit decisioning on alternative data.",
  },
  {
    index: "06",
    name: "CardOS",
    href: "/solutions/cardos",
    dot: "bg-amber",
    description: "Card scheme compliance and acquirer invoice reconciliation.",
  },
];

const frameworks = [
  {
    ref: "EU AI ACT · ART. 12",
    name: "Record-keeping",
    detail: "High-risk AI systems must log automatically. Verify's tamper-evident register is built for that expectation.",
  },
  {
    ref: "EU AI ACT · ART. 14",
    name: "Human oversight",
    detail: "Oversight must be effective, not nominal. Verify's escalation and sign-off queues make it operational.",
  },
  {
    ref: "DNB · SAFEST",
    name: "Supervisory principles",
    detail: "Soundness, accountability, transparency. Evidence packs structured to help you demonstrate adherence.",
  },
];

const Index = () => {
  return (
    <div className="bg-ink min-h-screen pt-16">
      {/* ============ HERO — paper sheet ============ */}
      <section className="px-3 md:px-5 pt-3 md:pt-5">
        <div className="bg-paper rounded-2xl md:rounded-3xl">
          <div className="max-w-[1400px] mx-auto px-5 md:px-12 pt-12 md:pt-16 pb-14 md:pb-20">
            {/* Top strip */}
            <div className="flex items-center justify-between mb-16 md:mb-24">
              <span className="eyebrow text-ink-faint">The verification layer for the office of the CFO</span>
              <span className="eyebrow text-ink-soft hidden sm:flex items-center gap-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-tick" aria-hidden />
                Design partner program open
              </span>
            </div>

            {/* Thesis */}
            <h1 className="font-sans font-expanded font-extrabold text-ink tracking-tight leading-[0.98] text-[13vw] sm:text-6xl md:text-7xl lg:text-[84px] max-w-5xl">
              Your AI does the work.
              <br />
              <span className="text-ledger">You're still the one who signs it.</span>
            </h1>

            <div className="mt-10 md:mt-14 grid md:grid-cols-2 gap-8 md:gap-16 items-end">
              <p className="text-lg md:text-xl text-ink-soft leading-relaxed max-w-xl">
                AI is entering the office of the CFO workflow by workflow — monitoring,
                reconciliation, close, reporting. Gaigentic Verify is the independent check in
                between: it continuously re-verifies what those agents produce and turns every
                check into evidence built for supervisory review. One layer across the whole
                finance function.
              </p>

              <div className="flex flex-wrap gap-3 md:justify-end">
                <Link
                  to="/verify"
                  className="eyebrow inline-flex items-center gap-2 bg-ink text-paper rounded-full px-6 py-3.5 hover:bg-ink-soft transition-colors"
                >
                  Explore Verify
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  to="/contact"
                  className="eyebrow inline-flex items-center gap-2 border border-ink/25 text-ink rounded-full px-6 py-3.5 hover:border-ink transition-colors"
                >
                  Talk to us
                </Link>
              </div>
            </div>

            {/* Bottom strip */}
            <div className="mt-14 md:mt-20 pt-5 border-t border-rule flex items-center justify-between">
              <span className="eyebrow text-ink-faint">Vendor-agnostic · read-only · structurally separate</span>
              <span className="font-mono text-xs text-ink-faint hidden sm:block">Amsterdam · Chennai</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ REGISTER — dark ============ */}
      <section className="max-w-[1400px] mx-auto px-5 md:px-12 py-16 md:py-24">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-20 items-start">
          <div>
            <div className="eyebrow text-paper/45 mb-6">Seen working</div>
            <h2 className="font-sans font-expanded font-extrabold text-paper tracking-tight leading-tight text-4xl md:text-5xl">
              Every output.
              <br />
              Checked. Sealed.
            </h2>
            <p className="mt-6 text-paper/60 leading-relaxed max-w-md">
              Verify sits outside the systems doing the work. Outputs stream in read-only; each one
              is recomputed, tested against policy, or challenged — and the result lands in a
              register your supervisor can read.
            </p>
          </div>
          <div className="bg-ink border border-paper/10 rounded-2xl p-5 md:p-8">
            <VerificationRegister />
          </div>
        </div>
      </section>

      {/* Hatch divider */}
      <div className="max-w-[1400px] mx-auto px-5 md:px-12">
        <div className="h-10 hatch-band rounded-sm" aria-hidden />
      </div>

      {/* ============ WHO CHECKS THE AI — dark ============ */}
      <section className="max-w-[1400px] mx-auto px-5 md:px-12 py-16 md:py-24">
        <div className="eyebrow text-paper/45 mb-6">The question</div>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20">
          <h2 className="font-sans font-expanded font-extrabold text-paper tracking-tight leading-tight text-4xl md:text-6xl">
            Who checks
            <br />
            the AI?
          </h2>
          <div className="space-y-5 text-paper/65 leading-relaxed text-lg max-w-xl">
            <p>
              Across the office of the CFO, AI agents are moving into production — transaction
              monitoring, reconciliation, close, reporting. The work gets faster. The
              accountability doesn't move: the CFO and the compliance officer still sign.
            </p>
            <p>
              Today, the answer at most institutions is the AI vendor's own dashboard. An audit
              trail written by the system being audited proves what that system{" "}
              <em className="text-paper">says</em> it did. Supervisors have never accepted
              self-audit from people. There is no reason to expect they will accept it from
              software.
            </p>
            <p className="text-paper font-medium">
              Verification has to be independent, continuous, and evidenced.
            </p>
          </div>
        </div>
      </section>

      {/* ============ OFFICE OF THE CFO — dark ============ */}
      <section className="max-w-[1400px] mx-auto px-5 md:px-12 pb-16 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20">
          <div>
            <div className="eyebrow text-paper/45 mb-6">Who we serve</div>
            <h2 className="font-sans font-expanded font-extrabold text-paper tracking-tight leading-tight text-4xl md:text-6xl">
              Built for the
              <br />
              office of the CFO.
            </h2>
          </div>
          <div className="space-y-5 text-paper/65 leading-relaxed text-lg max-w-xl">
            <p>
              The finance function adopts AI vendor by vendor — AP and AR, monitoring,
              reconciliation and close, reporting, treasury — each tool with its own dashboard.
              What the CFO signs is the sum of all of them.
            </p>
            <p>
              Verify is the one trust layer across that stack: every agent's outputs checked the
              same three ways, every check landing in the same register, one evidence pack for the
              whole finance function. Add an agent; the layer already covers it.
            </p>
          </div>
        </div>
      </section>

      {/* ============ THREE CHECKS — paper sheet ============ */}
      <section className="px-3 md:px-5">
        <div className="bg-paper rounded-2xl md:rounded-3xl">
          <div className="max-w-[1400px] mx-auto px-5 md:px-12 py-14 md:py-20">
            <div className="flex items-baseline justify-between mb-10 md:mb-14">
              <span className="eyebrow text-ink-faint">Three checks on every output</span>
              <span className="font-mono text-xs text-ink-faint hidden sm:block">in descending order of certainty</span>
            </div>

            <div className="grid md:grid-cols-3 gap-px bg-rule rounded-xl overflow-hidden border border-rule">
              {checks.map((check) => (
                <div key={check.name} className="bg-paper-bright p-7 md:p-9">
                  <h3 className="font-sans font-expanded font-bold text-2xl text-ink mb-4">{check.name}</h3>
                  <p className="text-ink-soft leading-relaxed text-[15px]">{check.detail}</p>
                </div>
              ))}
            </div>

            {/* Frameworks */}
            <div className="mt-14 md:mt-20">
              <div className="eyebrow text-ink-faint mb-8">Built against the rules you answer to</div>
              <div className="grid md:grid-cols-3 gap-8">
                {frameworks.map((fw) => (
                  <div key={fw.ref} className="border-t-2 border-ink pt-5">
                    <div className="font-mono text-xs text-ledger mb-2">{fw.ref}</div>
                    <div className="font-sans font-bold text-lg text-ink mb-2">{fw.name}</div>
                    <p className="text-ink-soft text-[15px] leading-relaxed">{fw.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PRODUCT INDEX — dark ============ */}
      <section className="max-w-[1400px] mx-auto px-5 md:px-12 py-16 md:py-24">
        <div className="flex items-baseline justify-between mb-8">
          <span className="eyebrow text-paper/45">Products</span>
          <span className="font-mono text-xs text-paper/35">verification first · workflows that earn it</span>
        </div>

        <div className="border-t border-paper/10">
          {products.map((product) => (
            <Link
              key={product.index}
              to={product.href}
              className="group grid grid-cols-[36px_auto_1fr_auto] md:grid-cols-[56px_220px_1fr_auto] items-center gap-4 md:gap-6 py-6 md:py-7 border-b border-paper/10 hover:bg-paper/[0.03] transition-colors px-2 -mx-2 rounded-sm"
            >
              <span className="font-mono text-xs text-paper/35">{product.index}</span>
              <span className="flex items-center gap-2.5">
                <span className={`inline-block w-1.5 h-1.5 rounded-full ${product.dot}`} aria-hidden />
                <span className="font-sans font-bold text-xl md:text-2xl text-paper tracking-tight">
                  {product.name}
                </span>
              </span>
              <span className="hidden md:block text-paper/55 text-[15px]">{product.description}</span>
              <ArrowUpRight className="h-4 w-4 text-paper/35 group-hover:text-paper transition-colors justify-self-end" />
            </Link>
          ))}
        </div>
      </section>

      {/* ============ CTA — deep green ============ */}
      <section className="px-3 md:px-5 pb-3 md:pb-5">
        <div className="bg-ledger-deep rounded-2xl md:rounded-3xl">
          <div className="max-w-[1400px] mx-auto px-5 md:px-12 py-16 md:py-24 text-center">
            <div className="eyebrow text-paper/50 mb-6">Design partner program</div>
            <h2 className="font-sans font-expanded font-extrabold text-paper tracking-tight leading-tight text-4xl md:text-6xl max-w-3xl mx-auto">
              Make your AI provable.
            </h2>
            <p className="mt-6 text-paper/65 leading-relaxed text-lg max-w-xl mx-auto">
              We're onboarding a small number of banks and insurers in the Netherlands and wider EU.
              Design partners shape the verification checks against their real AI workflows.
            </p>
            <Link
              to="/contact"
              className="eyebrow inline-flex items-center gap-2 bg-paper text-ink rounded-full px-7 py-4 mt-10 hover:bg-paper-bright transition-colors"
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

export default Index;
