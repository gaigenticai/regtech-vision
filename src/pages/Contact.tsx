import { ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-ink min-h-screen pt-16">
      {/* Hero - paper */}
      <section className="px-3 md:px-5 pt-3 md:pt-5">
        <div className="bg-paper rounded-2xl md:rounded-3xl">
          <div className="max-w-[1400px] mx-auto px-5 md:px-12 py-12 md:py-16">
            <span className="eyebrow text-ink-faint">Contact</span>
            <h1 className="mt-6 font-sans font-expanded font-extrabold text-ink tracking-tight leading-[1.0] text-5xl md:text-7xl max-w-4xl">
              Ready to make your AI <span className="text-ledger">provable?</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-ink-soft leading-relaxed max-w-2xl">
              Whether you want independent verification of your finance-AI outputs with Verify, or
              governed agentic workflows for compliance and lending, write to us. We're onboarding
              a small number of design partners in the Netherlands and wider EU, and the founders
              answer directly.
            </p>

            {/* Email block */}
            <div className="mt-12 border-t border-rule pt-8 grid md:grid-cols-2 gap-10">
              <div>
                <div className="eyebrow text-ink-faint mb-3">Email</div>
                <a
                  href="mailto:info@gaigentic.ai"
                  className="group inline-flex items-baseline gap-2 font-sans font-expanded font-bold text-3xl md:text-4xl text-ink tracking-tight hover:text-ledger transition-colors"
                >
                  info@gaigentic.ai
                  <ArrowUpRight className="h-5 w-5 text-ink-faint group-hover:text-ledger transition-colors" />
                </a>
                <p className="mt-4 text-ink-soft text-[15px] leading-relaxed max-w-md">
                  Include your name, institution, and a line on where AI touches your monitoring or
                  finance workflows. We respond within one business day.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="eyebrow text-ink-faint mb-2">Phone</div>
                  <div className="font-mono text-sm text-ink leading-relaxed">
                    +31 6 20343034
                    <br />
                    +91 9841206769
                  </div>
                </div>
                <div>
                  <div className="eyebrow text-ink-faint mb-2">Offices</div>
                  <div className="font-mono text-sm text-ink leading-relaxed">
                    Gustav Mahlerplein 2
                    <br />
                    1082 MA Amsterdam
                    <br />
                    <span className="text-ink-faint">Amsterdam · Chennai</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The discovery question - dark */}
      <section className="max-w-[1400px] mx-auto px-5 md:px-12 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">
          <div>
            <div className="eyebrow text-paper/45 mb-6">Start with one question</div>
            <h2 className="font-sans font-expanded font-extrabold text-paper tracking-tight leading-tight text-4xl md:text-5xl max-w-xl">
              "If AI does your transaction monitoring, how do you prove to DNB that it's working?"
            </h2>
          </div>
          <div className="space-y-5 text-paper/65 leading-relaxed text-lg max-w-xl lg:pt-2">
            <p>
              If the honest answer is "the vendor's dashboard," that's the conversation we'd like
              to have. Bring your compliance officer: the first meeting is about your workflows
              and your supervisor's expectations, not a product demo.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
