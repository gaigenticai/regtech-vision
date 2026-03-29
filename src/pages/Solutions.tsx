import { Badge } from "@/components/ui/badge";
import { ArrowRight, Eye, Layers, ShieldCheck, Landmark, CreditCard, Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const Solutions = () => {
  const products = [
    {
      title: "Regulens",
      subtitle: "Agentic AI suite for regulated workflows",
      description:
        "A complete suite of intelligent AI agents that works alongside teams across onboarding, monitoring, investigations, reporting, and more—with security and auditability built in.",
      highlights: ["End‑to‑end agent suite", "Audit‑ready operations", "Works with your stack"],
      icon: Layers,
      accent: "from-purple-600 to-blue-600",
      href: "/solutions/regulens"
    },
    {
      title: "CollectEye",
      subtitle: "Shadow‑mode collections orchestration",
      description:
        "A policy‑gated collections system built for safe adoption: read‑only ingestion, governed communications, and an evidence trail from recommendations to outcomes.",
      highlights: ["Read‑only ingestion", "Policy‑gated comms", "Decision ledger + traces"],
      icon: Eye,
      accent: "from-blue-600 to-cyan-600",
      href: "/solutions/collecteye"
    },
    {
      title: "Galileo",
      subtitle: "Agentic AI loan origination system",
      description:
        "Autonomous underwriting powered by four AI agents—Detective, Analyst, Judge, and Supervisor—delivering fair, compliant, and explainable credit decisions in under 30 seconds.",
      highlights: ["30‑second decisions", "ECOA compliant", "Explainable AI"],
      icon: Landmark,
      accent: "from-amber-600 to-orange-600",
      href: "/solutions/galileo"
    },
    {
      title: "CredAI",
      subtitle: "API‑first credit decisioning console",
      description:
        "Borrower 360 with instant decisioning—evaluate consumer and SME borrowers using alternative data sources (e‑commerce, payments, fintech, telco, banking) and return a credit decision in under 3 seconds.",
      highlights: ["Instant decisioning", "Alternative data", "Policy engine"],
      icon: CreditCard,
      accent: "from-emerald-600 to-teal-600",
      href: "/solutions/credai"
    },
    {
      title: "Greenshield",
      subtitle: "AI-powered sustainability compliance",
      description:
        "The only compliance platform with an agentic AI brain that learns across assessments. 6 EU regulations (EUDR, CSRD, CBAM, PPWR, VSME, CO2), 65+ API endpoints, dual-engine OCR, satellite deforestation analysis, and production-grade document intelligence.",
      highlights: ["6 EU regulations", "Agentic AI brain", "65+ API endpoints"],
      icon: Leaf,
      accent: "from-green-600 to-emerald-600",
      href: "/solutions/greenshield"
    }
  ] as const;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <main className="pt-28">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-full mix-blend-multiply filter blur-2xl animate-float" />
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full mix-blend-multiply filter blur-2xl animate-float delay-1000" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px]" />
          </div>

          <div className="container mx-auto px-6 relative z-10 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="bg-white/70 backdrop-blur border-slate-200 px-4 py-2 text-sm font-semibold">
                <ShieldCheck className="h-4 w-4 mr-2" />
                Solutions
              </Badge>

              <h1 className="mt-6 text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
                Products for
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> agentic financial services</span>
              </h1>

              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                Choose a product line to explore. Both are built to integrate with your existing stack and provide clear oversight and auditability.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {products.map((product) => (
                <Link
                  key={product.title}
                  to={product.href}
                  aria-label={`Open ${product.title}`}
                  className="group relative rounded-3xl border border-slate-200 bg-white/70 backdrop-blur shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  <div className={`absolute -top-24 -right-24 w-72 h-72 rounded-full bg-gradient-to-r ${product.accent} opacity-15 blur-2xl`} />

                  <div className="relative p-10">
                    <div className="flex items-start justify-between gap-6">
                      <div className="flex items-start gap-4">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${product.accent} flex items-center justify-center shadow-lg flex-shrink-0`}>
                          <product.icon className="h-7 w-7 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-slate-600">{product.subtitle}</div>
                          <h2 className="text-3xl font-bold text-slate-900 mt-1">{product.title}</h2>
                        </div>
                      </div>

                      <div className="w-11 h-11 rounded-full border border-slate-200 bg-white/70 flex items-center justify-center group-hover:translate-x-0.5 transition-transform duration-300">
                        <ArrowRight className="h-5 w-5 text-slate-600" />
                      </div>
                    </div>

                    <p className="mt-5 text-slate-600 leading-relaxed">
                      {product.description}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-2">
                      {product.highlights.map((h) => (
                        <span
                          key={h}
                          className="inline-flex items-center rounded-full border border-slate-200 bg-white/60 px-3 py-1 text-sm font-semibold text-slate-700"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Solutions;
