import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  BadgeCheck,
  Brain,
  Clock,
  FileText,
  Gavel,
  Landmark,
  Layers,
  Lock,
  Search,
  Shield,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Galileo = () => {
  const platformMetrics = [
    {
      icon: Clock,
      value: "<30s",
      label: "Decisions",
      description: "Autonomous underwriting decisions in under 30 seconds."
    },
    {
      icon: Shield,
      value: "ECOA",
      label: "Compliant",
      description: "Full Regulation B compliance with specific, evidenced adverse action reasons."
    },
    {
      icon: Brain,
      value: "Explainable",
      label: "AI",
      description: "Complete chain-of-thought audit trail with source document highlighting."
    },
    {
      icon: Users,
      value: "Human-in-loop",
      label: "Safety",
      description: "Automatic escalation when confidence falls below 90%."
    }
  ];

  const agents = [
    {
      id: "detective",
      icon: Search,
      title: "Detective Agent",
      subtitle: "Data & Fraud Hunter",
      problemHeadline: "Manual KYB/KYC checks take days, miss red flags, and create bottlenecks in loan processing.",
      solutionSummary:
        "Autonomous verification across Secretary of State lookups, SBA eligibility, fraud detection, digital footprint analysis, and document forensics.",
      highlights: [
        "KYB/KYC verification with business registration lookups",
        "Circular transaction detection and fraud pattern analysis",
        "Document forensics including PDF manipulation detection"
      ],
      sidePanel: {
        kicker: "Verification",
        title: "Multi-source intelligence",
        points: [
          "SBA eligibility screening with NAICS code validation.",
          "Digital footprint analysis—website, reviews, online presence.",
          "Real-time fraud signals from multiple data sources."
        ]
      }
    },
    {
      id: "analyst",
      icon: FileText,
      title: "Analyst Agent",
      subtitle: "Financial Intelligence",
      problemHeadline: "Manual tax return spreading and bank statement analysis is slow, error-prone, and inconsistent.",
      solutionSummary:
        "Auto-spreads tax returns (1120S, 1065, Schedule C), analyzes bank statements, performs dual-ledger verification, and runs DSCR stress testing.",
      highlights: [
        "Dual-ledger verification comparing Accounting vs Banking data",
        "Dynamic DSCR calculation with stress testing at -10%, -20%, -30%",
        "Variance detection flagging discrepancies exceeding 10%"
      ],
      sidePanel: {
        kicker: "Analysis",
        title: "Deep financial insight",
        points: [
          "Auto-spreading across multiple tax return types.",
          "Bank statement categorization and trend analysis.",
          "Correlation analysis across accounting and banking data."
        ]
      }
    },
    {
      id: "judge",
      icon: Gavel,
      title: "Judge Agent",
      subtitle: "Decision & Structuring",
      problemHeadline: "Credit decisions lack consistency, structuring is manual, and adverse action letters risk compliance violations.",
      solutionSummary:
        "Applies credit policy rules, validates SBA SOP 50 10 7.1 compliance, structures deals, and generates ECOA-compliant adverse action letters.",
      highlights: [
        "Credit policy engine with SBA SOP compliance validation",
        "ECOA-compliant adverse action letter generation (max 4 reasons)",
        "Investment committee memo and SBA form auto-population"
      ],
      sidePanel: {
        kicker: "Decisioning",
        title: "Compliant by design",
        points: [
          "Risk rating assignment with full reasoning chain.",
          "Deal structuring and recommendation engine.",
          "Auto-populated SBA Forms 1919 and 159."
        ]
      }
    },
    {
      id: "supervisor",
      icon: BadgeCheck,
      title: "Supervisor Agent",
      subtitle: "Quality Assurance",
      problemHeadline: "AI outputs can hallucinate, contradict across stages, or drift from source documents—without oversight.",
      solutionSummary:
        "Detects hallucinations, verifies cross-agent consistency, validates source references, and triggers human escalation when needed.",
      highlights: [
        "Hallucination detection and prevention across all agents",
        "Cross-agent consistency verification for coherent decisions",
        "Automatic human escalation triggers for edge cases"
      ],
      sidePanel: {
        kicker: "Oversight",
        title: "Trust but verify",
        points: [
          "Every claim traced back to source documents.",
          "Quality scores for each agent's output.",
          "Configurable confidence thresholds for escalation."
        ]
      }
    }
  ];

  const comparisonRows = [
    { dimension: "Decision speed", legacy: "5-7 days manual", galileo: "<30 seconds", benefit: "Instant underwriting" },
    { dimension: "ECOA compliance", legacy: "Manual letter drafting", galileo: "Auto-generated, evidenced", benefit: "Zero compliance risk" },
    { dimension: "Financial analysis", legacy: "Spreadsheet-based spreading", galileo: "Auto-spread + stress test", benefit: "Deeper, faster insight" },
    { dimension: "Fraud detection", legacy: "Checklist-based review", galileo: "Multi-signal ML analysis", benefit: "Catches hidden patterns" },
    { dimension: "Audit trail", legacy: "Fragmented notes", galileo: "Full chain-of-thought", benefit: "Examination-ready" },
    { dimension: "Integration model", legacy: "Rip-and-replace LOS", galileo: "API layer on any LOS", benefit: "No system migration" }
  ];

  const loanTypes = [
    "SBA 7(a) Loans",
    "Term Loans",
    "Lines of Credit",
    "SBA 504 Loans",
    "Equipment Financing"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50/30">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-full mix-blend-multiply filter blur-xl animate-float delay-1000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-gradient-to-r from-amber-400/20 to-yellow-400/20 rounded-full mix-blend-multiply filter blur-xl animate-float delay-2000"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center bg-gradient-to-r from-amber-100 to-orange-100 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent font-semibold text-sm">
                  Galileo
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in-up delay-200">
                Intelligent Loan Origination Powered by
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent"> AI Agents</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 max-w-2xl animate-fade-in-up delay-400">
                Four autonomous underwriting agents—Detective, Analyst, Judge, and Supervisor—work together to deliver fair, compliant, and explainable credit decisions in under <strong>30 seconds</strong>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up delay-600">
                <Link to="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-gray-300 hover:bg-amber-500 hover:text-white hover:border-amber-500 font-semibold px-8 py-4 rounded-xl transition-all duration-300"
                  >
                    Schedule Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 animate-fade-in-up delay-800">
                {[
                  { value: "<30s", label: "Decision Speed", color: "from-amber-600 to-orange-600" },
                  { value: "100%", label: "ECOA Compliant", color: "from-orange-600 to-red-600" },
                  { value: "4", label: "AI Agents", color: "from-yellow-600 to-amber-600" },
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
                      className="flex items-center p-4 rounded-lg border-2 border-amber-200 bg-amber-50 hover:bg-amber-100 transition-colors duration-300"
                    >
                      <div className="w-10 h-10 rounded-full flex items-center justify-center mr-4 bg-amber-600 text-white">
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

      {/* AI Agents */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Four autonomous agents</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Each agent specializes in a stage of the underwriting process, working together to deliver a complete, auditable credit decision.
            </p>
          </div>

          <div className="space-y-10">
            {agents.map((a, index) => (
              <Card key={a.id} className="overflow-hidden border-0 shadow-2xl bg-white">
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                  <div className="p-8 lg:p-12">
                    <Badge variant="outline" className="mb-4 px-3 py-1 text-amber-700 border-amber-200">
                      Agent {index + 1}
                    </Badge>
                    <h3 className="text-3xl font-bold text-slate-900 mb-3">{a.title}</h3>
                    <p className="text-lg text-amber-700 font-semibold mb-6">{a.subtitle}</p>

                    <div className="space-y-5 mb-8">
                      <div>
                        <h4 className="text-base font-bold text-rose-600 mb-2">Challenge</h4>
                        <p className="text-slate-600 leading-relaxed">{a.problemHeadline}</p>
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-emerald-700 mb-2">Galileo</h4>
                        <p className="text-slate-600 leading-relaxed">{a.solutionSummary}</p>
                      </div>
                    </div>

                    <div className="grid gap-3">
                      {a.highlights.map((h) => (
                        <div key={h} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50/60 p-4">
                          <Zap className="h-5 w-5 text-amber-700 mt-0.5 flex-shrink-0" />
                          <div className="text-slate-700 leading-relaxed">{h}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-slate-50 to-amber-50 p-8 lg:p-12 flex items-center">
                    <div className="w-full">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-amber-600 to-orange-600 flex items-center justify-center shadow-lg">
                          <a.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-slate-600">{a.sidePanel.kicker}</div>
                          <div className="text-xl font-bold text-slate-900">{a.sidePanel.title}</div>
                        </div>
                      </div>
                      <div className="grid gap-4">
                        {a.sidePanel.points.map((p) => (
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Dual-product architecture</h2>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto">
              Galileo ships as a portable agentic engine that works on top of any existing LOS, plus a premium standalone LOS for full-stack deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
            {[
              { icon: Brain, title: "Agentic Engine", desc: "Portable, API-first underwriting intelligence layer deployed on top of any existing LOS." },
              { icon: Landmark, title: "Galileo LOS", desc: "Premium reference implementation with world-class UX and full agent integration." },
              { icon: Layers, title: "Integration Layer", desc: "Connect to Plaid, Codat, Experian, Middesk, DocuSign, and core banking via adapters." }
            ].map((item) => (
              <Card key={item.title} className="bg-white/70 backdrop-blur border border-slate-200 shadow-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-amber-600 to-orange-600 flex items-center justify-center shadow-md mb-4">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-xl font-bold text-slate-900">{item.title}</div>
                  <div className="mt-2 text-slate-600 leading-relaxed">{item.desc}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
            <div className="text-sm font-semibold text-slate-600 mb-4">Traditional LOS vs Galileo</div>
            <div className="hidden md:block overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-5 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Dimension</th>
                    <th className="px-5 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Traditional</th>
                    <th className="px-5 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Galileo</th>
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
                          {row.galileo}
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
                    <div className="col-span-2 text-slate-600">Galileo</div>
                    <div className="col-span-4">
                      <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 px-2.5 py-1">
                        {row.galileo}
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

      {/* Compliance & Loan Types */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Compliance & coverage</h2>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto">
              Purpose-built for regulated lending—ECOA, SBA SOP, FDIC AI guidance, and fair lending compliance baked into every decision.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "ECOA / Regulation B",
                desc: "Specific, evidenced adverse action reasons (max 4 per decision) with full audit trail."
              },
              {
                icon: FileText,
                title: "SBA SOP 50 10 7.1",
                desc: "Full SBA loan compliance validation built into the Judge Agent's decisioning engine."
              },
              {
                icon: BadgeCheck,
                title: "FDIC AI Guidance",
                desc: "Model risk management, explainability, and human oversight meeting regulatory expectations."
              },
              {
                icon: Lock,
                title: "SOC 2 Ready",
                desc: "AES-256 encryption, role-based access control, and comprehensive security controls."
              },
              {
                icon: Users,
                title: "Multiplayer collaboration",
                desc: "Real-time collaboration with live cursors, presence indicators, and role-based views."
              },
              {
                icon: Landmark,
                title: "Supported loan types",
                desc: loanTypes.join(" \u00B7 ")
              }
            ].map((item) => (
              <Card key={item.title} className="bg-white/70 backdrop-blur border border-slate-200 shadow-lg">
                <CardContent className="p-7">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-amber-600 to-orange-600 flex items-center justify-center shadow-md mb-4">
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
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-amber-600 to-orange-600 flex items-center justify-center shadow-lg flex-shrink-0">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-slate-600">Next step</div>
                    <h3 className="text-2xl font-bold text-slate-900 mt-1">See Galileo in action</h3>
                    <p className="mt-2 text-slate-600 leading-relaxed">
                      Schedule a demo to see autonomous underwriting in real-time—from application intake through a fully reasoned, ECOA-compliant credit decision in under 30 seconds.
                    </p>
                    <div className="mt-6 flex flex-col sm:flex-row gap-3">
                      <Link to="/contact">
                        <Button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:opacity-95">
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

export default Galileo;
