import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  BadgeCheck,
  ClipboardCheck,
  Database,
  Eye,
  FileText,
  Inbox,
  Layers,
  Lock,
  ScrollText,
  Shield,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CollectEye = () => {
  const platformMetrics = [
    {
      icon: Eye,
      value: "Shadow mode",
      label: "Safe rollout",
      description: "Start read-only, validate outcomes, then scale autonomy with approvals."
    },
    {
      icon: Database,
      value: "Read-only",
      label: "Ingestion",
      description: "Pull portfolio data without changing or writing to your source systems."
    },
    {
      icon: Shield,
      value: "Policy‑gated",
      label: "Comms",
      description: "Safe-by-default communications with guardrails and audit trails."
    },
    {
      icon: ScrollText,
      value: "Audit-ready",
      label: "Traceability",
      description: "Every action and recommendation is logged with attribution and evidence."
    }
  ];

  const capabilities = [
    {
      id: "ingestion",
      icon: Database,
      title: "Read‑only portfolio ingestion",
      subtitle: "Connect to your existing stack without disruption",
      problemHeadline: "New tooling often requires risky integrations, data duplication, and workflow disruption.",
      solutionSummary:
        "CollectEye ingests portfolio data in shadow mode (read-only) while keeping your core systems untouched—so you can evaluate outcomes before changing operations.",
      highlights: [
        "Read-only sync from your source system (e.g., Postgres) into an ops layer",
        "Portfolio changes tracked over time for consistent case context",
        "Designed to minimize integration effort and data egress"
      ],
      sidePanel: {
        kicker: "Integration",
        title: "No changes to your stack",
        points: [
          "Connect read‑only to your source data and existing services.",
          "Keep core systems untouched while CollectEye runs in a separate ops layer.",
          "Validate outcomes in shadow mode before enabling gated actions."
        ]
      }
    },
    {
      id: "workflows",
      icon: ClipboardCheck,
      title: "Operational workflow layer",
      subtitle: "Assignments, holds, and work execution with oversight",
      problemHeadline: "Teams lose time coordinating cases, priorities, and follow‑ups across tools.",
      solutionSummary:
        "A dedicated ops layer to manage assignments, case holds, queues, and work items—supported by agent recommendations and supervisor controls.",
      highlights: [
        "Assignment optimization and queue management for collectors",
        "Supervisor controls for exceptions, holds, and escalation",
        "Playbooks and repeatable workflows to drive consistency"
      ],
      sidePanel: {
        kicker: "Operations",
        title: "Supervisor‑first orchestration",
        points: [
          "Queue views, prioritization, and workload balancing across collectors.",
          "Case holds, exception handling, and approval gates where needed.",
          "Coaching and performance insights to improve outcomes over time."
        ]
      }
    },
    {
      id: "comms",
      icon: Inbox,
      title: "Policy‑gated communications",
      subtitle: "Safe-by-default outreach across channels",
      problemHeadline: "Uncontrolled automation creates compliance risk, inconsistent tone, and audit gaps.",
      solutionSummary:
        "Outbound and inbound communications are routed through policy controls, approvals, and logging—so every message is governed and reviewable.",
      highlights: [
        "Human‑in‑loop or autonomous modes, configurable per policy",
        "Inbound handling for STOP/opt‑out, disputes, and complaints",
        "Template Studio for scripts by channel, stage, product, and region"
      ],
      sidePanel: {
        kicker: "Communications",
        title: "Policy‑gated by default",
        points: [
          "Templates governed by channel, stage, product, and region.",
          "Approval gates for sensitive outreach and exception handling.",
          "Inbound Inbox captures opt‑outs, disputes, and complaints with audit trails."
        ]
      }
    },
    {
      id: "audit",
      icon: BadgeCheck,
      title: "Decision ledger + audit logs",
      subtitle: "Evidence, attribution, and replayable traces",
      problemHeadline: "Audits and incident reviews fail when actions can’t be explained end‑to‑end.",
      solutionSummary:
        "CollectEye captures a full trail of recommendations and actions, including context, approvals, and outcomes—built for oversight and investigations.",
      highlights: [
        "Decision Ledger for key actions and recommendations",
        "Audit Logs and Trace Views to reproduce runs and decisions",
        "Policy controls to keep autonomy bounded and accountable"
      ],
      sidePanel: {
        kicker: "Auditability",
        title: "Evidence you can defend",
        points: [
          "Decision Ledger for key recommendations and actions with attribution.",
          "Searchable audit logs and trace views for review and investigation.",
          "Exportable evidence packs to support audits and incident response."
        ]
      }
    }
  ];

  const comparisonRows = [
    { dimension: "Integration effort", legacy: "Custom builds / deep changes", collectEye: "Read-only connect", benefit: "No rip-and-replace" },
    { dimension: "Rollout model", legacy: "Big-bang cutover", collectEye: "Shadow → gated → autonomous", benefit: "Lower operational risk" },
    { dimension: "Automation control", legacy: "Opaque scripts", collectEye: "Policy-gated actions", benefit: "Safe-by-default execution" },
    { dimension: "Audit trail", legacy: "Fragmented evidence", collectEye: "Decision ledger + traces", benefit: "Audit-ready oversight" },
    { dimension: "Inbound handling", legacy: "Manual triage", collectEye: "Routed workflows", benefit: "Faster, consistent response" }
  ];

  const roles = [
    {
      icon: Shield,
      title: "Admin",
      description: "Configures ingestion, autonomy, providers, and operational policies."
    },
    {
      icon: Users,
      title: "Supervisor (LCS)",
      description: "Manages queues, approvals, coaching, performance, and governance."
    },
    {
      icon: Users,
      title: "Collector (LC)",
      description: "Executes prioritized work with guided recommendations and templates."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Enhanced Hero Section (match Regulens layout) */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-full mix-blend-multiply filter blur-xl animate-float delay-1000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full mix-blend-multiply filter blur-xl animate-float delay-2000"></div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-semibold text-sm">
                  👁️ CollectEye
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in-up delay-200">
                Agentic AI Collections in
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Shadow Mode</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 max-w-2xl animate-fade-in-up delay-400">
                A policy‑gated collections system that ingests portfolio data in a read‑only shadow layer and orchestrates assignments,
                communications, and evidence—without requiring changes to your existing stack.
              </p>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up delay-600">
                <Link to="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-gray-300 hover:bg-blue-500 hover:text-white hover:border-blue-500 font-semibold px-8 py-4 rounded-xl transition-all duration-300"
                  >
                    Schedule Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>

              {/* Animated KPI chips */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 animate-fade-in-up delay-800">
                {[
                  { value: "Read‑only", label: "Ingestion", color: "from-blue-600 to-cyan-600" },
                  { value: "Policy‑gated", label: "Communications", color: "from-indigo-600 to-blue-600" },
                  { value: "Audit‑ready", label: "Evidence", color: "from-sky-600 to-blue-600" },
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

            {/* Right Content - Platform Metrics */}
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
                      className="flex items-center p-4 rounded-lg border-2 border-blue-200 bg-blue-50 hover:bg-blue-100 transition-colors duration-300"
                    >
                      <div className="w-10 h-10 rounded-full flex items-center justify-center mr-4 bg-blue-600 text-white">
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

      {/* Core capabilities */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Core capabilities</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Built from the ground up for shadow‑mode adoption: observe, validate, and govern agentic workflows before turning on autonomy.
            </p>
          </div>

          <div className="space-y-10">
            {capabilities.map((c, index) => (
              <Card key={c.id} className="overflow-hidden border-0 shadow-2xl bg-white">
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                  <div className="p-8 lg:p-12">
                    <Badge variant="outline" className="mb-4 px-3 py-1 text-blue-700 border-blue-200">
                      Capability {index + 1}
                    </Badge>
                    <h3 className="text-3xl font-bold text-slate-900 mb-3">{c.title}</h3>
                    <p className="text-lg text-cyan-700 font-semibold mb-6">{c.subtitle}</p>

                    <div className="space-y-5 mb-8">
                      <div>
                        <h4 className="text-base font-bold text-rose-600 mb-2">Challenge</h4>
                        <p className="text-slate-600 leading-relaxed">{c.problemHeadline}</p>
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-emerald-700 mb-2">CollectEye</h4>
                        <p className="text-slate-600 leading-relaxed">{c.solutionSummary}</p>
                      </div>
                    </div>

                    <div className="grid gap-3">
                      {c.highlights.map((h) => (
                        <div key={h} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50/60 p-4">
                          <Zap className="h-5 w-5 text-blue-700 mt-0.5 flex-shrink-0" />
                          <div className="text-slate-700 leading-relaxed">{h}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 lg:p-12 flex items-center">
                    <div className="w-full">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center shadow-lg">
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
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Shadow‑mode architecture</h2>
              <p className="text-lg text-slate-600 max-w-4xl mx-auto">
                CollectEye keeps your source systems untouched by ingesting data read‑only into an ops layer where agents operate under policy.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
              {[
                { icon: Database, title: "Source system", desc: "Read‑only portfolio data sync from your existing database and services." },
                { icon: Layers, title: "Ops layer", desc: "Assignments, queues, comms, approvals, and operational workflows." },
                { icon: ScrollText, title: "Evidence layer", desc: "Decision ledger, audit logs, traces, and exportable evidence." }
              ].map((item) => (
                <Card key={item.title} className="bg-white/70 backdrop-blur border border-slate-200 shadow-lg">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center shadow-md mb-4">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-xl font-bold text-slate-900">{item.title}</div>
                    <div className="mt-2 text-slate-600 leading-relaxed">{item.desc}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
              <div className="text-sm font-semibold text-slate-600 mb-4">Legacy vs CollectEye</div>
              <div className="hidden md:block overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-5 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Dimension</th>
                      <th className="px-5 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Typical approach</th>
                      <th className="px-5 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">CollectEye</th>
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
                            {row.collectEye}
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
                      <div className="col-span-2 text-slate-600">Typical</div>
                      <div className="col-span-4">
                        <span className="inline-flex items-center rounded-full border border-rose-200 bg-rose-50 text-rose-700 px-2.5 py-1">
                          {row.legacy}
                        </span>
                      </div>
                      <div className="col-span-2 text-slate-600">CollectEye</div>
                      <div className="col-span-4">
                        <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 px-2.5 py-1">
                          {row.collectEye}
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

      {/* Governance */}
      <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Governance & auditability</h2>
              <p className="text-lg text-slate-600 max-w-4xl mx-auto">
                Built for compliance‑critical operations: policy gating, approvals, and evidence capture across every action and communication.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Lock,
                  title: "Policy controls",
                  desc: "Guardrails for sensitive steps, thresholds, and redaction—safe-by-default autonomy."
                },
                {
                  icon: BadgeCheck,
                  title: "Approvals",
                  desc: "Human-in-loop gates for high‑impact steps and exceptions, configurable by role."
                },
                {
                  icon: ScrollText,
                  title: "Audit logs & traces",
                  desc: "Decision ledger, searchable logs, and trace views for replay, review, and evidence export."
                },
                {
                  icon: Inbox,
                  title: "Inbound handling",
                  desc: "STOP/opt‑out, disputes, and complaints captured and routed into workflows with audit trails."
                },
                {
                  icon: FileText,
                  title: "Template Studio",
                  desc: "Manage scripts by channel/stage/product/region with revisions and governance workflows."
                },
                {
                  icon: Shield,
                  title: "Safe integrations",
                  desc: "Designed to minimize data movement and avoid disrupting existing systems."
                }
              ].map((item) => (
                <Card key={item.title} className="bg-white/70 backdrop-blur border border-slate-200 shadow-lg">
                  <CardContent className="p-7">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center shadow-md mb-4">
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

      {/* Roles */}
      <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Built for real teams</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Clear responsibilities and access controls across Admin, Supervisors, and Collectors.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {roles.map((r) => (
                <Card key={r.title} className="bg-white/70 backdrop-blur border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-7">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center shadow-md mb-4">
                      <r.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-xl font-bold text-slate-900">{r.title}</div>
                    <div className="mt-2 text-slate-600 leading-relaxed">{r.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 max-w-4xl mx-auto">
              <Card className="bg-white/70 backdrop-blur border border-slate-200 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center shadow-lg flex-shrink-0">
                      <Sparkles className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-slate-600">Next step</div>
                      <h3 className="text-2xl font-bold text-slate-900 mt-1">See CollectEye in action</h3>
                      <p className="mt-2 text-slate-600 leading-relaxed">
                        Schedule a demo to explore shadow mode rollout, policy gating, and end-to-end auditability—tailored to your collections workflow.
                      </p>
                      <div className="mt-6 flex flex-col sm:flex-row gap-3">
                        <Link to="/contact">
                          <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:opacity-95">
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

export default CollectEye;
