import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BookOpen,
  Brain,
  Building2,
  Calculator,
  CheckCircle2,
  ClipboardList,
  Database,
  Factory,
  FileText,
  Gauge,
  Globe,
  Languages,
  Layers,
  Leaf,
  Lock,
  Mail,
  Map,
  MessageSquare,
  Package,
  Recycle,
  Satellite,
  ScrollText,
  Search,
  Shield,
  ShieldCheck,
  Sparkles,
  TreePine,
  Upload,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Greenshield = () => {
  // ---------- Hero metrics ----------
  const platformMetrics = [
    {
      icon: Globe,
      value: "6 Regulations",
      label: "Coverage",
      description:
        "EUDR, CSRD, CBAM, PPWR, VSME, and GHG Protocol / ISO 14064-1 in a single platform.",
    },
    {
      icon: Brain,
      value: "Agentic AI",
      label: "Intelligence",
      description:
        "An AI brain that learns across assessments, detects 13+ cross-assessment patterns automatically.",
    },
    {
      icon: Gauge,
      value: "70+ Endpoints",
      label: "API Coverage",
      description:
        "Production-grade REST API with 70+ endpoints powering every compliance workflow.",
    },
    {
      icon: Shield,
      value: "Audit-Ready",
      label: "Evidence Trail",
      description:
        "Full evidence provenance — every claim traced to source documents, pages, and direct excerpts.",
    },
  ];

  // ---------- Regulations ----------
  const regulations = [
    {
      id: "eudr",
      icon: TreePine,
      tag: "EU 2023/1115",
      title: "EUDR",
      subtitle: "EU Deforestation Regulation",
      bullets: [
        "Due diligence under Article 8 — information collection, risk assessment, and mitigation",
        "15 risk categories from Article 10(2)(a)-(o) with evidence provenance",
        "7 commodities: cattle, cocoa, coffee, oil palm, rubber, soya, wood",
        "DDS Filing Assistant — validates all 22 Annex II fields before TRACES NT submission",
        "Satellite deforestation analysis via Global Forest Watch with polygon boundaries",
        "141-country risk database with CPI, deforestation, and carbon pricing data",
      ],
    },
    {
      id: "csrd",
      icon: FileText,
      tag: "EU Delegated Reg 2023/2772",
      title: "CSRD",
      subtitle: "Corporate Sustainability Reporting Directive",
      bullets: [
        "Full ESRS alignment per EU Delegated Regulation 2023/2772",
        "86 Disclosure Requirements across 11 topical standards with 296 datapoints",
        "Double materiality engine — impact + financial scoring with NACE sector guidance",
        "Interactive ESRS questionnaire (E1-E5, S1-S4, G1) with Omnibus status tracking",
        "iXBRL report generation for digital filing to meet EU ESEF requirements",
      ],
    },
    {
      id: "cbam",
      icon: Factory,
      tag: "EU 2023/956",
      title: "CBAM",
      subtitle: "Carbon Border Adjustment Mechanism",
      bullets: [
        "Full Annex III calculation engine — benchmarks, phase-out factors, precursor emissions",
        "74 CN codes with 100% Annex I coverage across 5 commodity groups",
        "83 country carbon prices with Article 9 deduction engine",
        "Operations Cockpit — declarant checklist, deadline calendar, certificate planning",
        "Phase-out scenario modelling 2026-2034 with ETS price slider",
        "Quarterly report and annual declaration PDF generation",
      ],
    },
    {
      id: "ppwr",
      icon: Recycle,
      tag: "EU 2025/40",
      title: "PPWR",
      subtitle: "Packaging and Packaging Waste Regulation",
      bullets: [
        "Annex II recyclability engine — 8 material streams with RecyClass design-for-recycling grades",
        "Recycled content verification with 6 Chain of Custody schemes",
        "EPR fee calculator across 28 EU countries with modulated fees by recyclability grade",
        "EN 13432 compostability validation, PFAS substance screening (3 methods)",
        "Digital Product Passport template and packaging minimisation checker",
      ],
    },
    {
      id: "vsme",
      icon: Building2,
      tag: "EFRAG VSME (finalized Dec 2024)",
      title: "VSME",
      subtitle: "Voluntary SME Sustainability Standard",
      bullets: [
        "3-module structure: Basic (B1-B11), Policies/Actions/Targets, Business Partners (BP1-BP3)",
        "36 sector benchmarks — 13 NACE sections + 23 division-level with Eurostat SBS 2024 data",
        "Simplified materiality with proportionality (micro / small / medium) and supply chain pressure",
        "Plausibility checks, CSRD disclosure mapping, and structured supplier data requests",
        "Supplier self-service portal with VSME-specific data request workflows",
      ],
    },
    {
      id: "co2",
      icon: Leaf,
      tag: "GHG Protocol & ISO 14064-1",
      title: "CO2",
      subtitle: "GHG Protocol & ISO 14064-1",
      bullets: [
        "Scope 1 / 2 / 3 emissions calculator with 73 emission factors across all 15 Scope 3 categories",
        "83 countries for Scope 2 — location-based (grid average) + market-based (residual mix, GoOs, PPAs)",
        "PCAF financed emissions for banks — 7 asset classes per PCAF Standard v1.0",
        "SBTi target validation — 1.5°C and Well Below 2°C pathways with trajectory modelling",
        "Base year tracking with GHG Protocol Chapter 6 recalculation policy",
      ],
    },
  ];

  // ---------- Key features ----------
  const features = [
    {
      icon: Brain,
      title: "Agentic AI Brain",
      desc: "Learns across assessments, detects patterns, generates recommendations. 13+ cross-assessment patterns detected automatically.",
    },
    {
      icon: Search,
      title: "Dual-Engine OCR",
      desc: "PaddleOCR + Tesseract with tiered processing. Handles scanned PDFs, handwritten notes, and multi-language documents.",
    },
    {
      icon: FileText,
      title: "Document Intelligence",
      desc: "Classifies sub-documents within PDFs (invoices, certificates, permits). Extracts metadata, dates, and reference numbers.",
    },
    {
      icon: Satellite,
      title: "Satellite Deforestation Analysis",
      desc: "Global Forest Watch integration. Tree cover loss data, deforestation alerts, polygon boundaries, and EUDR cutoff verification.",
    },
    {
      icon: BadgeCheck,
      title: "Evidence Provenance Graph",
      desc: "Every compliance claim traced to source documents, pages, and direct excerpts. Full lineage preserved for audit and regulatory review.",
    },
    {
      icon: Layers,
      title: "Org-Level Compliance Dashboard",
      desc: "Real-time compliance posture across all regulations. Supplier intelligence, environmental footprint (Scope 1/2/3), and financial impact metrics.",
    },
    {
      icon: Map,
      title: "Regulatory Change Radar",
      desc: "Tracks 10+ EU regulatory changes with legal status, impact assessments, and source links. Auto-alerts on pending actions affecting your assessments.",
    },
    {
      icon: Shield,
      title: "Supplier Remediation Workspace",
      desc: "Structured corrective action plans with severity-based deadlines (14/30/60/90d), evidence submission tracking, and auto-escalation for overdue items.",
    },
    {
      icon: BarChart3,
      title: "Benchmarking & Scenario Planning",
      desc: "CBAM phase-out cost modelling 2026-2034, EPR multi-market comparison, VSME sector benchmarks, and SBTi target trajectory validation.",
    },
    {
      icon: Users,
      title: "Supplier Self-Service Portal",
      desc: "Token-based upload links with VSME data request workflows. Suppliers upload docs and respond to remediation actions without accounts.",
    },
    {
      icon: Calculator,
      title: "CO2 Emissions Calculator",
      desc: "Scope 1/2/3 with 73 emission factors, 83 country grid factors, PCAF financed emissions for banks, and SBTi target validation.",
    },
    {
      icon: Factory,
      title: "CBAM Operations Cockpit",
      desc: "Declarant readiness checklist, regulatory deadline calendar, import portfolio analysis, certificate planning, and de minimis checks.",
    },
    {
      icon: Lock,
      title: "EUDR Filing Assistant",
      desc: "Validates all 22 Annex II DDS fields against assessment data. Evidence completeness scoring, critical blockers, section-by-section readiness.",
    },
    {
      icon: Mail,
      title: "Email Notifications",
      desc: "Resend integration. Assessment completion alerts with supplier, commodity, and risk level detail.",
    },
    {
      icon: Database,
      title: "ERP Import",
      desc: "SAP, Dynamics 365, NetSuite CSV/JSON import with automatic column mapping and validation.",
    },
    {
      icon: Globe,
      title: "EU TRACES Connector",
      desc: "Submit Due Diligence Statements directly to the EU TRACES NT system from within the platform.",
    },
    {
      icon: ScrollText,
      title: "iXBRL Export",
      desc: "Generate ESRS-tagged iXBRL reports for CSRD digital filing to meet EU ESEF requirements.",
    },
    {
      icon: Package,
      title: "PPWR Compliance Toolkit",
      desc: "EPR fee calculator (28 EU countries), recyclability grading, recycled content verification, compostability validation, and Digital Product Passport.",
    },
    {
      icon: ClipboardList,
      title: "Assessment Templates",
      desc: "Pre-configured templates per regulation. Guided document upload with required-document checklists.",
    },
    {
      icon: MessageSquare,
      title: "Collaborative Annotations",
      desc: "Notes and comments on risk categories. Resolve / unresolve workflow for team collaboration.",
    },
    {
      icon: Languages,
      title: "Multi-Language Support",
      desc: "English, French, German, Spanish UI. Document analysis works in any language via multilingual models.",
    },
  ];

  // ---------- How It Works ----------
  const steps = [
    {
      num: "01",
      title: "Upload Documents",
      desc: "AI extracts text via dual-engine OCR (PaddleOCR + Tesseract). Scanned PDFs, handwritten notes, and multi-language docs are all supported.",
    },
    {
      num: "02",
      title: "Select Regulation",
      desc: "Choose from 6 supported frameworks: EUDR, CSRD, CBAM, PPWR, VSME, or CO2. Each has pre-configured assessment templates.",
    },
    {
      num: "03",
      title: "AI Analysis",
      desc: "Claude Sonnet 4.6 analyzes every document against regulation-specific requirements, extracting evidence and scoring risk per category.",
    },
    {
      num: "04",
      title: "Evidence Provenance",
      desc: "Every compliance claim is traced to source documents, pages, and direct excerpts. Full evidence lineage preserved for audit and regulatory review.",
    },
    {
      num: "05",
      title: "Remediation & Action",
      desc: "Structured corrective action plans with severity-based deadlines. Suppliers receive remediation tasks and submit evidence through the self-service portal.",
    },
    {
      num: "06",
      title: "Benchmark & Scenario",
      desc: "Model regulatory cost scenarios (CBAM phase-out, EPR multi-market), compare ESG metrics against sector benchmarks, and validate science-based targets.",
    },
    {
      num: "07",
      title: "File & Submit",
      desc: "EUDR DDS Filing Assistant validates Annex II readiness. CBAM quarterly reports and annual declarations generated as PDFs. CSRD iXBRL export for digital filing.",
    },
    {
      num: "08",
      title: "Learn & Improve",
      desc: "The Agentic AI Brain accumulates patterns across every assessment, surfacing cross-supplier and cross-regulation insights. The platform gets smarter over time.",
    },
  ];

  // ---------- Comparison ----------
  const comparisonRows = [
    {
      dimension: "Regulation coverage",
      legacy: "1-2 regulations",
      greenshield: "6 EU regulations, deep",
      benefit: "Single platform, full coverage",
    },
    {
      dimension: "AI intelligence",
      legacy: "Static rule engine",
      greenshield: "Agentic AI brain that learns",
      benefit: "Improves with every assessment",
    },
    {
      dimension: "Evidence chain",
      legacy: "Pass / fail checklist",
      greenshield: "Full provenance to page & excerpt",
      benefit: "Audit-proof, regulator-ready",
    },
    {
      dimension: "Supplier management",
      legacy: "Email follow-ups",
      greenshield: "Remediation workspace + portal",
      benefit: "Structured deadlines & escalation",
    },
    {
      dimension: "Scenario planning",
      legacy: "Spreadsheets",
      greenshield: "Built-in CBAM/EPR/SBTi modelling",
      benefit: "Data-driven cost projections",
    },
    {
      dimension: "Filing readiness",
      legacy: "Manual validation",
      greenshield: "Auto-validates DDS / CBAM / iXBRL",
      benefit: "Submit with confidence",
    },
    {
      dimension: "Emissions calculator",
      legacy: "Separate tool",
      greenshield: "Scope 1/2/3 + PCAF + SBTi",
      benefit: "Unified carbon management",
    },
    {
      dimension: "Satellite verification",
      legacy: "Not available",
      greenshield: "Global Forest Watch + polygons",
      benefit: "Objective deforestation proof",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50/30">
      {/* ===== HERO ===== */}
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
                <ShieldCheck className="h-4 w-4 text-green-700 mr-2" />
                <span className="bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent font-semibold text-sm">
                  Greenshield
                </span>
              </div>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in-up delay-200">
                AI-Powered Sustainability
                <span className="bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
                  {" "}
                  Compliance Platform
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 max-w-2xl animate-fade-in-up delay-400">
                The only compliance platform with an{" "}
                <strong>agentic AI brain</strong> that learns across
                assessments.{" "}
                <strong>6 EU regulations, 70+ API endpoints</strong>,
                production-grade document intelligence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up delay-600">
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-green-700 to-emerald-600 hover:opacity-95 font-semibold px-8 py-4 rounded-xl transition-all duration-300"
                  >
                    Request Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <a href="#regulations">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-gray-300 hover:bg-green-700 hover:text-white hover:border-green-700 font-semibold px-8 py-4 rounded-xl transition-all duration-300"
                  >
                    Learn More
                  </Button>
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 animate-fade-in-up delay-800">
                {[
                  {
                    value: "6",
                    label: "EU Regulations",
                    color: "from-green-700 to-emerald-600",
                  },
                  {
                    value: "70+",
                    label: "API Endpoints",
                    color: "from-emerald-600 to-lime-600",
                  },
                  {
                    value: "13+",
                    label: "AI Patterns",
                    color: "from-lime-600 to-green-700",
                  },
                ].map((chip, i) => (
                  <motion.div
                    key={chip.label}
                    initial={{ rotateX: 90, opacity: 0 }}
                    whileInView={{ rotateX: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.1,
                      ease: "easeOut",
                    }}
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

            {/* Right side — Metrics card */}
            <div className="relative animate-fade-in-up delay-1000">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Platform Metrics
                  </h3>
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
                        <div className="font-semibold text-gray-900 text-lg">
                          {metric.value}
                        </div>
                        <div className="text-sm font-medium text-gray-700">
                          {metric.label}
                        </div>
                        <div className="text-xs text-gray-600 mt-1">
                          {metric.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== REGULATIONS COVERED ===== */}
      <section
        id="regulations"
        className="py-20 bg-gradient-to-b from-white to-slate-50/50"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <Badge
              variant="outline"
              className="mb-4 px-3 py-1 text-green-700 border-green-200"
            >
              Regulatory Coverage
            </Badge>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              6 EU sustainability regulations, one platform
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Every regulation is mapped to its official legal basis.
              Greenshield covers the full assessment lifecycle for each — from
              document ingestion through risk scoring to submission-ready
              outputs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regulations.map((reg) => (
              <Card
                key={reg.id}
                className="bg-white/70 backdrop-blur border border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-7">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-green-700 to-emerald-600 flex items-center justify-center shadow-md flex-shrink-0">
                      <reg.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">
                        {reg.title}
                      </h3>
                      <p className="text-sm text-green-700 font-semibold">
                        {reg.subtitle}
                      </p>
                      <Badge
                        variant="outline"
                        className="mt-1 text-xs text-slate-500 border-slate-200"
                      >
                        {reg.tag}
                      </Badge>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {reg.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===== KEY FEATURES ===== */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <Badge
              variant="outline"
              className="mb-4 px-3 py-1 text-green-700 border-green-200"
            >
              Capabilities
            </Badge>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              21 production-grade capabilities
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              From dual-engine OCR to satellite deforestation analysis — every
              feature is built for real compliance workloads, not demos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <Card
                key={f.title}
                className="bg-white/70 backdrop-blur border border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-7">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-green-700 to-emerald-600 flex items-center justify-center shadow-md mb-4">
                    <f.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-slate-600 leading-relaxed">
                    {f.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-20 bg-gradient-to-b from-slate-50/50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <Badge
              variant="outline"
              className="mb-4 px-3 py-1 text-green-700 border-green-200"
            >
              Workflow
            </Badge>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              How it works
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Eight steps from raw documents to submission-ready compliance
              — with the AI brain getting smarter at every stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {steps.map((s, idx) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <Card className="h-full bg-white/70 backdrop-blur border border-slate-200 shadow-lg">
                  <CardContent className="p-7">
                    <div className="text-4xl font-extrabold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent mb-3">
                      {s.num}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {s.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">{s.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TECHNICAL SPECS ===== */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <Badge
              variant="outline"
              className="mb-4 px-3 py-1 text-green-700 border-green-200"
            >
              Under the Hood
            </Badge>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Technical specifications
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Built for production from day one. Enterprise-grade stack,
              battle-tested in real compliance workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { label: "API Endpoints", value: "70+" },
              { label: "Database Tables", value: "11 with Alembic migrations" },
              {
                label: "Backend Services",
                value:
                  "14 (EUDR filing, CBAM ops, remediation, benchmarks, satellite, portal, brain, radar, and more)",
              },
              { label: "AI Model", value: "Anthropic Claude Sonnet 4.6" },
              {
                label: "Stack",
                value: "PostgreSQL + Redis + FastAPI + Next.js 16",
              },
              { label: "Deployment", value: "Dockerised, cloud-agnostic" },
            ].map((spec) => (
              <div
                key={spec.label}
                className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white/70 p-6"
              >
                <Zap className="h-5 w-5 text-green-700 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-sm font-semibold text-slate-500">
                    {spec.label}
                  </div>
                  <div className="text-lg font-bold text-slate-900">
                    {spec.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMPETITIVE ADVANTAGE ===== */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <Badge
              variant="outline"
              className="mb-4 px-3 py-1 text-green-700 border-green-200"
            >
              Why Greenshield
            </Badge>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Competitive advantage
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Greenshield is the only sustainability compliance platform with an
              agentic AI brain that learns from every assessment.
            </p>
          </div>

          {/* Comparison table */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 max-w-6xl mx-auto mb-12">
            <div className="text-sm font-semibold text-slate-600 mb-4">
              Legacy Compliance Tools vs Greenshield
            </div>

            {/* Desktop table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-5 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                      Dimension
                    </th>
                    <th className="px-5 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                      Traditional
                    </th>
                    <th className="px-5 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                      Greenshield
                    </th>
                    <th className="px-5 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                      Benefit
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm text-slate-800">
                  {comparisonRows.map((row) => (
                    <tr
                      key={row.dimension}
                      className="hover:bg-slate-50/60"
                    >
                      <td className="px-5 py-4 font-medium text-slate-900">
                        {row.dimension}
                      </td>
                      <td className="px-5 py-4">
                        <span className="inline-flex items-center rounded-full border border-rose-200 bg-rose-50 text-rose-700 px-2.5 py-1">
                          {row.legacy}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <span className="inline-flex items-center rounded-full border border-green-200 bg-green-50 text-green-700 px-2.5 py-1">
                          {row.greenshield}
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

            {/* Mobile cards */}
            <div className="md:hidden space-y-4">
              {comparisonRows.map((row) => (
                <div
                  key={row.dimension}
                  className="rounded-xl border border-slate-200 bg-white p-4"
                >
                  <div className="font-semibold text-slate-900">
                    {row.dimension}
                  </div>
                  <div className="mt-3 grid grid-cols-6 gap-2 text-sm">
                    <div className="col-span-2 text-slate-600">Traditional</div>
                    <div className="col-span-4">
                      <span className="inline-flex items-center rounded-full border border-rose-200 bg-rose-50 text-rose-700 px-2.5 py-1">
                        {row.legacy}
                      </span>
                    </div>
                    <div className="col-span-2 text-slate-600">Greenshield</div>
                    <div className="col-span-4">
                      <span className="inline-flex items-center rounded-full border border-green-200 bg-green-50 text-green-700 px-2.5 py-1">
                        {row.greenshield}
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

          {/* Named competitors */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                vs: "vs Competitor 1",
                points: [
                  "Agentic AI brain that learns across assessments",
                  "Full evidence provenance — claim to page to excerpt",
                  "Open architecture with 70+ API endpoints",
                ],
              },
              {
                vs: "vs Competitor 2",
                points: [
                  "6 regulations vs 4 — each built to production depth",
                  "Built-in CBAM operations cockpit with phase-out modelling",
                  "Supplier remediation workspace with auto-escalation",
                ],
              },
              {
                vs: "Unique to Greenshield",
                points: [
                  "Only platform that LEARNS from every assessment",
                  "Regulatory Change Radar tracking 10+ EU legislative changes",
                  "Cross-regulation benchmarking and scenario planning",
                ],
              },
            ].map((block) => (
              <Card
                key={block.vs}
                className="bg-white/70 backdrop-blur border border-slate-200 shadow-lg"
              >
                <CardContent className="p-7">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">
                    {block.vs}
                  </h3>
                  <ul className="space-y-3">
                    {block.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-2 text-sm text-slate-700"
                      >
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/70 backdrop-blur border border-slate-200 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-green-700 to-emerald-600 flex items-center justify-center shadow-lg flex-shrink-0">
                    <ShieldCheck className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-slate-600">
                      Next step
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mt-1">
                      See Greenshield in action
                    </h3>
                    <p className="mt-2 text-slate-600 leading-relaxed">
                      Schedule a personalised demo to explore AI-powered
                      sustainability compliance across EUDR, CSRD, CBAM, PPWR,
                      VSME, and GHG Protocol — tailored to your supply chain and
                      reporting obligations.
                    </p>
                    <div className="mt-6 flex flex-col sm:flex-row gap-3">
                      <Link to="/contact">
                        <Button className="bg-gradient-to-r from-green-700 to-emerald-600 hover:opacity-95">
                          Request Demo
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </Link>
                      <Link to="/solutions">
                        <Button
                          variant="outline"
                          className="border-slate-300"
                        >
                          Back to Products
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

export default Greenshield;
