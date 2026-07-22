import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const leadership = [
  {
    name: "Auke D Veenstra",
    title: "CEO & Co-Founder",
    background:
      "Entrepreneur and business leader with a strong background in technology and financial services. Decades in Dutch BFSI, with deep expertise in business development, strategic partnerships, and market expansion.",
    education: "Master in Business Law & Civil Law, University of Groningen",
    image: "https://i.ibb.co/dJXP4JWR/Auke.jpg",
    linkedin: "https://www.linkedin.com/in/auke-d-veenstra-922311221/",
  },
  {
    name: "Krishna Kumar",
    title: "CPO & Co-Founder",
    background:
      "Product leader with deep expertise in AI-driven solutions and financial technology. Strong background in product strategy, user experience, and technology implementation across enterprise environments.",
    education: "MBA, University of Madras",
    image: "https://i.ibb.co/MyprDcTj/Krishna.jpg",
    linkedin: "https://www.linkedin.com/in/krishnakumarkr/",
  },
];

const advisors = [
  {
    name: "Vincent Bouwens",
    title: "Senior Advisor · Risk & Compliance",
    expertise: "Risk management, regulatory compliance, AML/KYC, operational risk",
    image: "https://i.ibb.co/t71gY3Y/Vincent-Bouwens.jpg",
    linkedin: "https://www.linkedin.com/in/vincent-bouwens-86b32321/",
  },
  {
    name: "Marco Bosma",
    title: "Senior Advisor · Banking",
    expertise: "Banking operations, compliance, payment systems, regulatory reporting",
    image: "https://i.ibb.co/1GMYRLsB/Marco-Bosma.jpg",
    linkedin: "https://www.linkedin.com/in/marco-bosma-9827333/",
  },
  {
    name: "Bert Daniel",
    title: "Senior Advisor · Trade Finance",
    expertise: "Trade finance, payment systems, letters of credit, trade risk",
    image: "https://i.ibb.co/BHhcMvCH/bert.jpg",
    linkedin: "https://www.linkedin.com/in/bert-daniel-7a809039/",
  },
];

const facts = [
  { label: "Stage", value: "Seed" },
  { label: "Home market", value: "NL / EU" },
  { label: "Offices", value: "Amsterdam · Chennai" },
  { label: "Focus", value: "Verification-first AI" },
];

const About = () => {
  return (
    <div className="bg-ink min-h-screen pt-16">
      {/* Hero — paper */}
      <section className="px-3 md:px-5 pt-3 md:pt-5">
        <div className="bg-paper rounded-2xl md:rounded-3xl">
          <div className="max-w-[1400px] mx-auto px-5 md:px-12 py-12 md:py-16">
            <span className="eyebrow text-ink-faint">About Gaigentic AI</span>
            <h1 className="mt-6 font-sans font-expanded font-extrabold text-ink tracking-tight leading-[1.0] text-5xl md:text-7xl max-w-4xl">
              Making AI in finance <span className="text-ledger">provable</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-ink-soft leading-relaxed max-w-2xl">
              We're industry veterans with decades of combined experience across financial services
              and AI. As finance teams hand real work to AI agents, we build the independent
              verification layer that checks what those agents produce — and governed agentic
              workflows engineered to the same standard.
            </p>

            {/* Fact strip */}
            <div className="mt-12 pt-6 border-t border-rule grid grid-cols-2 md:grid-cols-4 gap-6">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <div className="eyebrow text-ink-faint mb-1.5">{fact.label}</div>
                  <div className="font-mono text-sm text-ink">{fact.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership — dark */}
      <section className="max-w-[1400px] mx-auto px-5 md:px-12 py-14 md:py-20">
        <div className="eyebrow text-paper/45 mb-8">Leadership</div>
        <div className="grid md:grid-cols-2 gap-px bg-paper/10 border border-paper/10 rounded-2xl overflow-hidden">
          {leadership.map((person) => (
            <div key={person.name} className="bg-ink p-7 md:p-10">
              <div className="flex items-start justify-between gap-4">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-16 h-16 rounded-full object-cover grayscale"
                  loading="lazy"
                />
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-paper/35 hover:text-paper transition-colors"
                  aria-label={`${person.name} on LinkedIn`}
                >
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
              <h3 className="mt-6 font-sans font-expanded font-bold text-2xl text-paper tracking-tight">
                {person.name}
              </h3>
              <div className="eyebrow text-tick mt-2">{person.title}</div>
              <p className="mt-5 text-paper/60 leading-relaxed text-[15px]">{person.background}</p>
              <div className="mt-5 font-mono text-xs text-paper/40">{person.education}</div>
            </div>
          ))}
        </div>

        {/* Advisors */}
        <div className="eyebrow text-paper/45 mt-14 mb-8">Advisors</div>
        <div className="grid md:grid-cols-3 gap-px bg-paper/10 border border-paper/10 rounded-2xl overflow-hidden">
          {advisors.map((person) => (
            <div key={person.name} className="bg-ink p-7 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-14 h-14 rounded-full object-cover grayscale"
                  loading="lazy"
                />
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-paper/35 hover:text-paper transition-colors"
                  aria-label={`${person.name} on LinkedIn`}
                >
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
              <h3 className="mt-5 font-sans font-bold text-lg text-paper tracking-tight">{person.name}</h3>
              <div className="eyebrow text-paper/45 mt-1.5">{person.title}</div>
              <p className="mt-4 font-mono text-xs text-paper/40 leading-relaxed">{person.expertise}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Hatch divider */}
      <div className="max-w-[1400px] mx-auto px-5 md:px-12">
        <div className="h-10 hatch-band rounded-sm" aria-hidden />
      </div>

      {/* What we believe — dark */}
      <section className="max-w-[1400px] mx-auto px-5 md:px-12 py-14 md:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20">
          <div>
            <div className="eyebrow text-paper/45 mb-6">What we believe</div>
            <h2 className="font-sans font-expanded font-extrabold text-paper tracking-tight leading-tight text-4xl md:text-5xl">
              Trust is structural,
              <br />
              not stated.
            </h2>
          </div>
          <div className="space-y-5 text-paper/65 leading-relaxed text-lg max-w-xl">
            <p>
              Financial institutions don't need more AI promises. They need AI whose work can be
              checked — by something that isn't the AI itself. That conviction runs through
              everything we ship: read-only where possible, evidence by default, human oversight as
              a product feature rather than a slide.
            </p>
            <p>
              We build from the Netherlands for the EU, where supervisors have said clearly what
              they expect from AI in finance. We think that clarity is an advantage — for us, and
              for the institutions we work with.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-3 md:px-5 pb-3 md:pb-5">
        <div className="bg-ledger-deep rounded-2xl md:rounded-3xl">
          <div className="max-w-[1400px] mx-auto px-5 md:px-12 py-14 md:py-20 text-center">
            <h2 className="font-sans font-expanded font-extrabold text-paper tracking-tight leading-tight text-4xl md:text-5xl">
              Talk to the founders.
            </h2>
            <p className="mt-5 text-paper/65 leading-relaxed text-lg max-w-xl mx-auto">
              We answer directly — no sales layer. If you run AI in a regulated finance workflow,
              we'd like to hear how you prove it works.
            </p>
            <Link
              to="/contact"
              className="eyebrow inline-flex items-center gap-2 bg-paper text-ink rounded-full px-7 py-4 mt-9 hover:bg-paper-bright transition-colors"
            >
              Get in touch
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
