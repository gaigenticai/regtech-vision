import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Brain,
  Database,
  FileText,
  Gauge,
  Globe,
  Layers,
  Leaf,
  Lock,
  Map,
  ScrollText,
  Shield,
  Sparkles,
  TreePine,
  Upload,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Canopy = () => {
  const platformMetrics = [
    {
      icon: Globe,
      value: "EUDR Ready",
      label: "Compliance",
      description: "Full EU Deforestation Regulation compliance with automated due diligence statements."
    },
    {
      icon: Map,
      value: "Geolocation",
      label: "Traceability",
      description: "Plot-level geolocation tracking for all commodities in your supply chain."
    },
    {
      icon: Brain,
      value: "4 AI Agents",
      label: "Intelligence",
      description: "Mapper, Auditor, Risk Scorer, and Reporter agents for end-to-end compliance."
    },
    {
      icon: Shield,
      value: "Audit-Ready",
      label: "Governance",
      description: "Immutable evidence trail with timestamped due diligence records for regulators."
    }
  ];

  const capabilities = [
    {
      id: "traceability",
      icon: Map,
      title: "Supply chain traceability",
      subtitle: "Plot-level geolocation for every commodity",
      problemHeadline: "EUDR requires operators to trace commodities back to the exact plot of land where they were produced—most supply chains lack this visibility.",
      solutionSummary:
        "Canopy ingests supplier declarations, shipping documents, and satellite imagery to map every commodity batch to GPS-level coordinates, building a complete chain of custody.",
      highlights: [
        "Automated geolocation extraction from supplier declarations and trade docs",
        "Satellite imagery cross-referencing for deforestation-free verification",
        "Multi-tier supply chain mapping from producer to port of entry"
      ],
      sidePanel: {
        kicker: "Traceability",
        title: "From plot to port",
        points: [
          "GPS polygon mapping for every production plot in your supply chain.",
          "Batch-level linkage connecting raw commodities through processing to final products.",
          "Real-time supply chain visualization with risk heat maps."
        ]
      }
    },
    {
      id: "risk",
      icon: Shield,
      title: "Deforestation risk assessment",
      subtitle: "AI-powered risk scoring with satellite verification",
      problemHeadline: "Manually assessing deforestation risk across thousands of supply chain nodes is impossible to scale and prone to gaps.",
      solutionSummary:
        "Canopy's Risk Scorer agent evaluates every sourcing region against forest-cover change data, protected area boundaries, and country-level risk benchmarks—returning a scored risk profile in seconds.",
      highlights: [
        "Forest-cover change detection using Hansen/GFC satellite datasets",
        "Protected area and indigenous territory boundary checks",
        "Country and sub-national risk benchmarking aligned to EUDR Annex"
      ],
      sidePanel: {
        kicker: "Risk",
        title: "Beyond self-declaration",
        points: [
          "Continuous monitoring with alerts when sourcing regions show new deforestation signals.",
          "Risk scores (0–100) with confidence intervals and mitigation recommendations.",
          "Historical deforestation trend analysis back to the December 2020 cutoff date."
        ]
      }
    },
    {
      id: "dds",
      icon: FileText,
      title: "Due diligence statements",
      subtitle: "Automated DDS generation and submission",
      problemHeadline: "Preparing due diligence statements for each regulated commodity is manual, error-prone, and must meet strict regulatory formatting requirements.",
      solutionSummary:
        "Canopy's Reporter agent auto-generates compliant due diligence statements by assembling traceability data, risk assessments, and mitigation measures into submission-ready documents for the EU Information System.",
      highlights: [
        "Pre-filled DDS templates aligned to EUDR Article 4 requirements",
        "Automated reference number generation and submission tracking",
        "Multi-commodity support: soy, palm oil, cattle, cocoa, coffee, rubber, wood"
      ],
      sidePanel: {
        kicker: "Reporting",
        title: "Submission-ready compliance",
        points: [
          "One-click DDS generation with all required fields pre-populated.",
          "Submission status tracking with deadline alerts and renewal reminders.",
          "Version-controlled statement history with full audit trail."
        ]
      }
    },
    {
      id: "audit",
      icon: ScrollText,
      title: "Audit trail & evidence management",
      subtitle: "Immutable records for regulatory inspections",
      problemHeadline: "When competent authorities request evidence, companies scramble to assemble documents from scattered systems with no guarantee of completeness.",
      solutionSummary:
        "Canopy's Auditor agent maintains an immutable evidence ledger—every document, risk assessment, satellite check, and decision is timestamped and linked to the relevant due diligence statement.",
      highlights: [
        "Tamper-evident document storage with cryptographic hashing",
        "Automatic evidence assembly for regulatory inspection requests",
        "Five-year retention policy aligned with EUDR Article 12 requirements"
      ],
      sidePanel: {
        kicker: "Audit",
        title: "Inspection-ready by default",
        points: [
          "One-click evidence package export for competent authority requests.",
          "Complete chain of custody documentation from source to shelf.",
          "Gap analysis identifying missing evidence before it becomes a compliance risk."
        ]
      }
    }
  ];

  const comparisonRows = [
    { dimension: "Traceability", legacy: "Spreadsheet-based", canopy: "Plot-level GPS mapping", benefit: "Full supply chain visibility" },
    { dimension: "Risk assessment", legacy: "Annual self-audits", canopy: "Continuous satellite monitoring", benefit: "Real-time risk detection" },
    { dimension: "DDS preparation", legacy: "Weeks of manual work", canopy: "Auto-generated in minutes", benefit: "Faster time to compliance" },
    { dimension: "Evidence management", legacy: "Scattered documents", canopy: "Immutable evidence ledger", benefit: "Audit-ready at all times" },
    { dimension: "Commodity coverage", legacy: "Single commodity", canopy: "All 7 EUDR commodities", benefit: "Unified compliance" },
    { dimension: "Cutoff verification", legacy: "Manual checks", canopy: "Automated Dec 2020 cutoff", benefit: "Regulatory certainty" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50/30">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-emerald-400/20 to-lime-400/20 rounded-full mix-blend-multiply filter blur-xl animate-float delay-1000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-gradient-to-r from-lime-400/20 to-green-400/20 rounded-full mix-blend-multiply filter blur-xl animate-float delay-2000"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-lime-100 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
                <TreePine className="h-4 w-4 text-green-700 mr-2" />
                <span className="bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent font-semibold text-sm">
                  Canopy
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in-up delay-200">
                EUDR Compliance
                <span className="bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent"> Powered by AI</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 max-w-2xl animate-fade-in-up delay-400">
                End-to-end EU Deforestation Regulation compliance—from <strong>plot-level traceability</strong> and satellite-verified risk scoring to <strong>automated due diligence statements</strong>—so you can trade with confidence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up delay-600">
                <Link to="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-gray-300 hover:bg-green-700 hover:text-white hover:border-green-700 font-semibold px-8 py-4 rounded-xl transition-all duration-300"
                  >
                    Schedule Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 animate-fade-in-up delay-800">
                {[
                  { value: "7", label: "Commodities Covered", color: "from-green-700 to-emerald-600" },
                  { value: "GPS", label: "Plot-Level Tracing", color: "from-emerald-600 to-lime-600" },
                  { value: "2020", label: "Cutoff Verified", color: "from-lime-600 to-green-700" },
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
                      className="flex items-center p-4 rounded-lg border-2 border-green-200 bg-green-50 hover:bg-green-100 transition-colors duration-300"
                    >
                      <div className="w-10 h-10 rounded-full flex items-center justify-center mr-4 bg-green-700 text-white">
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

      {/* Product Preview */}
      <section className="py-16 bg-gradient-to-b from-white to-slate-50/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <Badge variant="outline" className="mb-4 px-3 py-1 text-green-700 border-green-200">
              Live Product
            </Badge>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">EUDR Compliance Dashboard</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Unified supply chain view with plot-level geolocation, satellite-verified risk scores, due diligence statement management, and real-time compliance status—all in one dashboard.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative max-w-6xl mx-auto"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-green-400/20 via-emerald-400/20 to-lime-400/20 rounded-3xl blur-2xl"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-100 border-b border-slate-200">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <span className="ml-3 text-sm text-slate-500 font-medium">Canopy - EUDR Compliance</span>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-12">
                <div className="grid grid-cols-3 gap-6 mb-6">
                  <div className="bg-white rounded-xl p-5 shadow-sm border border-green-100">
                    <div className="text-sm text-slate-500 mb-1">Compliant Batches</div>
                    <div className="text-3xl font-bold text-green-700">2,847</div>
                    <div className="text-xs text-green-600 mt-1">98.2% compliance rate</div>
                  </div>
                  <div className="bg-white rounded-xl p-5 shadow-sm border border-green-100">
                    <div className="text-sm text-slate-500 mb-1">Active DDS</div>
                    <div className="text-3xl font-bold text-green-700">156</div>
                    <div className="text-xs text-green-600 mt-1">12 pending submission</div>
                  </div>
                  <div className="bg-white rounded-xl p-5 shadow-sm border border-green-100">
                    <div className="text-sm text-slate-500 mb-1">Risk Alerts</div>
                    <div className="text-3xl font-bold text-amber-600">3</div>
                    <div className="text-xs text-amber-600 mt-1">Requires attention</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-5 shadow-sm border border-green-100 h-40 flex items-center justify-center">
                    <div className="text-center">
                      <Map className="h-10 w-10 text-green-600 mx-auto mb-2" />
                      <div className="text-sm font-medium text-slate-700">Supply Chain Map</div>
                      <div className="text-xs text-slate-500">4,312 geolocated plots</div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-5 shadow-sm border border-green-100 h-40 flex items-center justify-center">
                    <div className="text-center">
                      <Leaf className="h-10 w-10 text-green-600 mx-auto mb-2" />
                      <div className="text-sm font-medium text-slate-700">Forest Cover Analysis</div>
                      <div className="text-xs text-slate-500">Verified deforestation-free</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Core capabilities</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              From plot-level traceability to automated due diligence statements—everything you need for EUDR compliance across all seven regulated commodities.
            </p>
          </div>

          <div className="space-y-10">
            {capabilities.map((c, index) => (
              <Card key={c.id} className="overflow-hidden border-0 shadow-2xl bg-white">
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                  <div className="p-8 lg:p-12">
                    <Badge variant="outline" className="mb-4 px-3 py-1 text-green-700 border-green-200">
                      Capability {index + 1}
                    </Badge>
                    <h3 className="text-3xl font-bold text-slate-900 mb-3">{c.title}</h3>
                    <p className="text-lg text-green-700 font-semibold mb-6">{c.subtitle}</p>

                    <div className="space-y-5 mb-8">
                      <div>
                        <h4 className="text-base font-bold text-rose-600 mb-2">Challenge</h4>
                        <p className="text-slate-600 leading-relaxed">{c.problemHeadline}</p>
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-green-700 mb-2">Canopy</h4>
                        <p className="text-slate-600 leading-relaxed">{c.solutionSummary}</p>
                      </div>
                    </div>

                    <div className="grid gap-3">
                      {c.highlights.map((h) => (
                        <div key={h} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50/60 p-4">
                          <Zap className="h-5 w-5 text-green-700 mt-0.5 flex-shrink-0" />
                          <div className="text-slate-700 leading-relaxed">{h}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-slate-50 to-green-50 p-8 lg:p-12 flex items-center">
                    <div className="w-full">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-green-700 to-emerald-600 flex items-center justify-center shadow-lg">
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
                            <Sparkles className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Platform architecture</h2>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto">
              Three-tier system: Data ingestion layer for supply chain mapping, AI agents layer for risk and compliance intelligence, and a full-featured compliance console.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
            {[
              { icon: Upload, title: "Ingestion Layer", desc: "Supplier declarations, trade documents, satellite imagery, and geolocation data unified into a single supply chain graph." },
              { icon: Brain, title: "AI Agents Layer", desc: "Four agents—Mapper, Risk Scorer, Auditor, and Reporter—working in concert for continuous compliance monitoring." },
              { icon: BarChart3, title: "Compliance Console", desc: "Dashboard with supply chain maps, risk heat maps, DDS management, and audit-ready evidence packages." }
            ].map((item) => (
              <Card key={item.title} className="bg-white/70 backdrop-blur border border-slate-200 shadow-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-green-700 to-emerald-600 flex items-center justify-center shadow-md mb-4">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-xl font-bold text-slate-900">{item.title}</div>
                  <div className="mt-2 text-slate-600 leading-relaxed">{item.desc}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
            <div className="text-sm font-semibold text-slate-600 mb-4">Traditional Compliance vs Canopy</div>
            <div className="hidden md:block overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-5 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Dimension</th>
                    <th className="px-5 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Traditional</th>
                    <th className="px-5 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Canopy</th>
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
                        <span className="inline-flex items-center rounded-full border border-green-200 bg-green-50 text-green-700 px-2.5 py-1">
                          {row.canopy}
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
                    <div className="col-span-2 text-slate-600">Canopy</div>
                    <div className="col-span-4">
                      <span className="inline-flex items-center rounded-full border border-green-200 bg-green-50 text-green-700 px-2.5 py-1">
                        {row.canopy}
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

      {/* Commodities & Compliance */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Commodities & compliance</h2>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto">
              Full coverage across all seven EUDR-regulated commodities with built-in regulatory frameworks and continuous monitoring.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Leaf,
                title: "All 7 commodities",
                desc: "Soy, palm oil, cattle, cocoa, coffee, rubber, and wood—plus derived products—covered under a single platform."
              },
              {
                icon: Globe,
                title: "EUDR Article 4 aligned",
                desc: "Due diligence obligations, information requirements, and risk assessment procedures built into every workflow."
              },
              {
                icon: Map,
                title: "Geolocation compliance",
                desc: "Plot-level GPS coordinates for all sourcing regions, meeting EUDR Annex II geolocation requirements."
              },
              {
                icon: BadgeCheck,
                title: "Deforestation-free verification",
                desc: "Satellite-based verification against the December 31, 2020 cutoff date with continuous forest-cover monitoring."
              },
              {
                icon: Lock,
                title: "Data sovereignty",
                desc: "EU-hosted infrastructure with GDPR-compliant data handling and encryption at rest and in transit."
              },
              {
                icon: Database,
                title: "EU Information System ready",
                desc: "Direct integration with the EU Information System for electronic DDS submission and reference number management."
              }
            ].map((item) => (
              <Card key={item.title} className="bg-white/70 backdrop-blur border border-slate-200 shadow-lg">
                <CardContent className="p-7">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-green-700 to-emerald-600 flex items-center justify-center shadow-md mb-4">
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
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-green-700 to-emerald-600 flex items-center justify-center shadow-lg flex-shrink-0">
                    <TreePine className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-slate-600">Next step</div>
                    <h3 className="text-2xl font-bold text-slate-900 mt-1">See Canopy in action</h3>
                    <p className="mt-2 text-slate-600 leading-relaxed">
                      Schedule a demo to explore supply chain traceability, satellite-verified risk scoring, and automated due diligence statement generation—tailored to your commodity supply chain.
                    </p>
                    <div className="mt-6 flex flex-col sm:flex-row gap-3">
                      <Link to="/contact">
                        <Button className="bg-gradient-to-r from-green-700 to-emerald-600 hover:opacity-95">
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

export default Canopy;
