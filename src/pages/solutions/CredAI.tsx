import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Brain,
  CreditCard,
  Database,
  FileText,
  Gauge,
  Layers,
  Lock,
  MessageSquare,
  ScrollText,
  Shield,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CredAI = () => {
  const platformMetrics = [
    {
      icon: Gauge,
      value: "<3s",
      label: "Decisioning",
      description: "Credit decisions returned in under 3 seconds using alternative data."
    },
    {
      icon: Database,
      value: "6 Sources",
      label: "Alternative Data",
      description: "E-commerce, payments, fintech, telco, bank, and card data unified."
    },
    {
      icon: Brain,
      value: "6 AI Agents",
      label: "Intelligence",
      description: "Copilot, Watchdog, Ingestion, Simulator, Compliance, and Collection agents."
    },
    {
      icon: Shield,
      value: "Policy Engine",
      label: "Governance",
      description: "Configurable rule-based decisioning with version control and audit trails."
    }
  ];

  const capabilities = [
    {
      id: "decisioning",
      icon: Gauge,
      title: "Instant credit decisioning",
      subtitle: "Borrower 360 with sub-3-second decisions",
      problemHeadline: "Traditional credit scoring relies on limited bureau data, excluding thin-file and emerging-market borrowers.",
      solutionSummary:
        "CredAI evaluates consumer and SME borrowers using unified alternative data—e-commerce, payments, fintech, telco, bank, and card transactions—returning a scored decision in under 3 seconds.",
      highlights: [
        "90-day rolling window analysis with cashflow metrics",
        "Stability index, chargeback rates, and transaction volatility scoring",
        "Three decision outcomes: APPROVE, DECLINE, or REVIEW with full reasoning"
      ],
      sidePanel: {
        kicker: "Decisioning",
        title: "Beyond bureau scores",
        points: [
          "Credit scores (0–1000) with confidence levels and APR suggestions.",
          "Key signals categorized as positive, negative, or neutral.",
          "Next-best-action recommendations for each borrower."
        ]
      }
    },
    {
      id: "data",
      icon: Database,
      title: "Unified alternative data",
      subtitle: "Six data sources, one borrower view",
      problemHeadline: "Borrower data is scattered across payment rails, telecom providers, and banking platforms with no unified view.",
      solutionSummary:
        "CredAI ingests and normalizes transaction data from e-commerce, payments, fintech, telco, bank, and card sources into a unified Borrower 360 profile.",
      highlights: [
        "Cashflow metrics: inflow, outflow, and net flow over 90 days",
        "Activity coverage with transaction counts per data source",
        "Telco metrics: tenure, bill punctuality, and top-up behavior"
      ],
      sidePanel: {
        kicker: "Data",
        title: "Complete borrower picture",
        points: [
          "Automated feature engineering from raw transaction data.",
          "Payment source diversity and stability analysis.",
          "Feature snapshots stored with each decision for auditability."
        ]
      }
    },
    {
      id: "agents",
      icon: Brain,
      title: "AI-powered agent suite",
      subtitle: "Six specialized agents for lending intelligence",
      problemHeadline: "Manual portfolio monitoring, compliance checks, and collection strategies drain resources and miss patterns.",
      solutionSummary:
        "CredAI ships six AI agents—Copilot Chat, Portfolio Watchdog, Document Ingestion, Policy Simulator, Compliance, and Collection—each grounded in borrower data.",
      highlights: [
        "Copilot Chat: AI assistant with persistent sessions grounded in borrower data",
        "Portfolio Watchdog: automated anomaly detection across the portfolio",
        "Policy Simulator: natural language what-if analysis for policy changes"
      ],
      sidePanel: {
        kicker: "Agents",
        title: "Intelligence at every stage",
        points: [
          "Compliance agent for adverse action notices and fair lending analysis.",
          "Collection agent for risk scoring and outreach strategy generation.",
          "Document ingestion for bank statement extraction and verification."
        ]
      }
    },
    {
      id: "policy",
      icon: ScrollText,
      title: "Flexible policy engine",
      subtitle: "Version-controlled rules with full audit trail",
      problemHeadline: "Static credit policies can't adapt to changing risk profiles, and policy changes lack governance and traceability.",
      solutionSummary:
        "CredAI's policy engine supports multiple versions with configurable parameters—amount caps, score thresholds, chargeback limits, transaction counts, and telco requirements—with active/inactive management.",
      highlights: [
        "Separate configurations for Consumer and SME borrower types",
        "Minimum score thresholds for approval and review tiers",
        "Decision simulation for what-if analysis before activation"
      ],
      sidePanel: {
        kicker: "Policy",
        title: "Governed by design",
        points: [
          "Full version history with audit trail of every policy change.",
          "Active/inactive policy toggling with instant rollback.",
          "Natural language policy impact analysis via the Simulator agent."
        ]
      }
    }
  ];

  const comparisonRows = [
    { dimension: "Decision speed", legacy: "Hours to days", credai: "<3 seconds", benefit: "Real-time lending" },
    { dimension: "Data sources", legacy: "Bureau-only", credai: "6 alternative sources", benefit: "Financial inclusion" },
    { dimension: "Borrower view", legacy: "Partial profile", credai: "Borrower 360", benefit: "Complete risk picture" },
    { dimension: "Policy changes", legacy: "Dev cycle required", credai: "UI + natural language", benefit: "Instant adaptation" },
    { dimension: "Compliance", legacy: "Manual review", credai: "AI-powered agents", benefit: "Automated oversight" },
    { dimension: "Collections", legacy: "One-size-fits-all", credai: "Risk-scored outreach", benefit: "Higher recovery rates" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 rounded-full mix-blend-multiply filter blur-xl animate-float delay-1000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-gradient-to-r from-emerald-400/20 to-green-400/20 rounded-full mix-blend-multiply filter blur-xl animate-float delay-2000"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent font-semibold text-sm">
                  CredAI
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in-up delay-200">
                Borrower 360 with
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"> Instant Decisioning</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 max-w-2xl animate-fade-in-up delay-400">
                API-first credit decisioning middleware that evaluates borrowers using <strong>6 alternative data sources</strong> and returns a scored decision in under <strong>3 seconds</strong>—with a full decisioning console for operations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up delay-600">
                <Link to="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-gray-300 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 font-semibold px-8 py-4 rounded-xl transition-all duration-300"
                  >
                    Schedule Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 animate-fade-in-up delay-800">
                {[
                  { value: "<3s", label: "Decision Speed", color: "from-emerald-600 to-teal-600" },
                  { value: "6", label: "Data Sources", color: "from-teal-600 to-cyan-600" },
                  { value: "360\u00B0", label: "Borrower View", color: "from-green-600 to-emerald-600" },
                ].map((chip, i) => (
                  <motion.div
                    key={chip.label}
                    initial={{ rotateX: 90, opacity: 0 }}
                    whileInView={{ rotateX: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                    className="text-center group"
                  >
                    <div
                      className={`text-sm md:text-base font-bold text-white mb-2 group-hover:scale-105 transition-transform duration-300 inline-block rounded-full px-4 py-2 bg-gradient-to-r ${chip.color}`}
                    >
                      {chip.value}
                    </div>
                    <p className="text-sm text-gray-600">{chip.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative animate-fade-in-up delay-1000">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Platform Metrics</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>

                <div className="space-y-4">
                  {platformMetrics.map((metric, index) => (
                    <div
                      key={index}
                      className="flex items-center p-4 rounded-lg border-2 border-emerald-200 bg-emerald-50 hover:bg-emerald-100 transition-colors duration-300"
                    >
                      <div className="w-10 h-10 rounded-full flex items-center justify-center mr-4 bg-emerald-600 text-white">
                        <metric.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900 text-lg">{metric.value}</div>
                        <div className="text-sm font-medium text-gray-700">{metric.label}</div>
                        <div className="text-xs text-gray-600 mt-1">{metric.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Core capabilities</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              From alternative data ingestion to AI-powered decisioning and policy governance—everything you need for inclusive, compliant credit.
            </p>
          </div>

          <div className="space-y-10">
            {capabilities.map((c, index) => (
              <Card key={c.id} className="overflow-hidden border-0 shadow-2xl bg-white">
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                  <div className="p-8 lg:p-12">
                    <Badge variant="outline" className="mb-4 px-3 py-1 text-emerald-700 border-emerald-200">
                      Capability {index + 1}
                    </Badge>
                    <h3 className="text-3xl font-bold text-slate-900 mb-3">{c.title}</h3>
                    <p className="text-lg text-emerald-700 font-semibold mb-6">{c.subtitle}</p>

                    <div className="space-y-5 mb-8">
                      <div>
                        <h4 className="text-base font-bold text-rose-600 mb-2">Challenge</h4>
                        <p className="text-slate-600 leading-relaxed">{c.problemHeadline}</p>
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-emerald-700 mb-2">CredAI</h4>
                        <p className="text-slate-600 leading-relaxed">{c.solutionSummary}</p>
                      </div>
                    </div>

                    <div className="grid gap-3">
                      {c.highlights.map((h) => (
                        <div key={h} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50/60 p-4">
                          <Zap className="h-5 w-5 text-emerald-700 mt-0.5 flex-shrink-0" />
                          <div className="text-slate-700 leading-relaxed">{h}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-slate-50 to-emerald-50 p-8 lg:p-12 flex items-center">
                    <div className="w-full">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 flex items-center justify-center shadow-lg">
                          <c.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-slate-600">{c.sidePanel.kicker}</div>
                          <div className="text-xl font-bold text-slate-900">{c.sidePanel.title}</div>
                        </div>
                      </div>
                      <div className="grid gap-4">
                        {c.sidePanel.points.map((p) => (
                          <div key={p} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white/70 p-5">
                            <Sparkles className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                            <div className="text-slate-700 leading-relaxed">{p}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">API-first architecture</h2>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto">
              Three-tier system: API layer for decisioning logic, Agents layer for AI-powered intelligence, and a full-featured Web UI for operations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
            {[
              { icon: Layers, title: "API Layer", desc: "Core decisioning logic, policy engine, feature computation, and borrower management endpoints." },
              { icon: Brain, title: "Agents Layer", desc: "Six AI agents for chat, portfolio monitoring, document ingestion, simulation, compliance, and collections." },
              { icon: BarChart3, title: "Decisioning Console", desc: "Dashboard with portfolio overview, decision history, borrower search, and policy management." }
            ].map((item) => (
              <Card key={item.title} className="bg-white/70 backdrop-blur border border-slate-200 shadow-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 flex items-center justify-center shadow-md mb-4">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-xl font-bold text-slate-900">{item.title}</div>
                  <div className="mt-2 text-slate-600 leading-relaxed">{item.desc}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
            <div className="text-sm font-semibold text-slate-600 mb-4">Traditional Scoring vs CredAI</div>
            <div className="hidden md:block overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-5 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Dimension</th>
                    <th className="px-5 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Traditional</th>
                    <th className="px-5 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">CredAI</th>
                    <th className="px-5 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Benefit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm text-slate-800">
                  {comparisonRows.map((row) => (
                    <tr key={row.dimension} className="hover:bg-slate-50/60">
                      <td className="px-5 py-4 font-medium text-slate-900">{row.dimension}</td>
                      <td className="px-5 py-4">
                        <span className="inline-flex items-center rounded-full border border-rose-200 bg-rose-50 text-rose-700 px-2.5 py-1">
                          {row.legacy}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 px-2.5 py-1">
                          {row.credai}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <span className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 text-indigo-700 px-2.5 py-1">
                          {row.benefit}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="md:hidden space-y-4">
              {comparisonRows.map((row) => (
                <div key={row.dimension} className="rounded-xl border border-slate-200 bg-white p-4">
                  <div className="font-semibold text-slate-900">{row.dimension}</div>
                  <div className="mt-3 grid grid-cols-6 gap-2 text-sm">
                    <div className="col-span-2 text-slate-600">Traditional</div>
                    <div className="col-span-4">
                      <span className="inline-flex items-center rounded-full border border-rose-200 bg-rose-50 text-rose-700 px-2.5 py-1">
                        {row.legacy}
                      </span>
                    </div>
                    <div className="col-span-2 text-slate-600">CredAI</div>
                    <div className="col-span-4">
                      <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 px-2.5 py-1">
                        {row.credai}
                      </span>
                    </div>
                    <div className="col-span-2 text-slate-600">Benefit</div>
                    <div className="col-span-4">
                      <span className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 text-indigo-700 px-2.5 py-1">
                        {row.benefit}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard & Compliance */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Dashboard & compliance</h2>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto">
              A full-featured operations console with real-time analytics, fair lending analysis, and collection management built in.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                icon: BarChart3,
                title: "Portfolio overview",
                desc: "Real-time metrics—total borrowers, approval rates, decision scores, and transaction volumes by source."
              },
              {
                icon: BadgeCheck,
                title: "Fair lending analysis",
                desc: "Detect disparate impact and bias with group-based fairness testing and regulatory flag identification."
              },
              {
                icon: FileText,
                title: "Adverse action notices",
                desc: "Automated generation of compliant adverse action notices based on specific decision reasons."
              },
              {
                icon: MessageSquare,
                title: "Collection management",
                desc: "Priority-based collection queue with risk scoring and intelligent outreach strategy generation."
              },
              {
                icon: Lock,
                title: "Decision explainability",
                desc: "Detailed reports with credit scores, confidence levels, key signals, and next-best-action recommendations."
              },
              {
                icon: CreditCard,
                title: "Consumer & SME support",
                desc: "Unified platform supporting both consumer and SME borrower evaluation with type-specific policies."
              }
            ].map((item) => (
              <Card key={item.title} className="bg-white/70 backdrop-blur border border-slate-200 shadow-lg">
                <CardContent className="p-7">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 flex items-center justify-center shadow-md mb-4">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-xl font-bold text-slate-900">{item.title}</div>
                  <div className="mt-2 text-slate-600 leading-relaxed">{item.desc}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="mt-12 max-w-4xl mx-auto">
            <Card className="bg-white/70 backdrop-blur border border-slate-200 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 flex items-center justify-center shadow-lg flex-shrink-0">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-slate-600">Next step</div>
                    <h3 className="text-2xl font-bold text-slate-900 mt-1">See CredAI in action</h3>
                    <p className="mt-2 text-slate-600 leading-relaxed">
                      Schedule a demo to explore Borrower 360 profiles, instant credit decisioning, and the full AI agent suite—tailored to your lending workflow.
                    </p>
                    <div className="mt-6 flex flex-col sm:flex-row gap-3">
                      <Link to="/contact">
                        <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:opacity-95">
                          Contact us
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </Link>
                      <Link to="/solutions">
                        <Button variant="outline" className="border-slate-300">
                          Back to Solutions
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CredAI;
