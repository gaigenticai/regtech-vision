import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Globe, Layers, Shield, Users, Zap } from "lucide-react";

const WhoWeAreSection = () => {
  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-br from-white via-slate-50 to-indigo-50">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-10 w-80 h-80 bg-gradient-to-r from-purple-400/15 to-blue-400/15 rounded-full mix-blend-multiply filter blur-2xl animate-float" />
        <div className="absolute -bottom-24 right-10 w-80 h-80 bg-gradient-to-r from-blue-400/15 to-cyan-400/15 rounded-full mix-blend-multiply filter blur-2xl animate-float delay-1000" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0001_1px,transparent_1px),linear-gradient(to_bottom,#0001_1px,transparent_1px)] bg-[size:16px_28px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="text-center lg:text-left">
            <Badge
              variant="outline"
              className="inline-flex px-5 py-2.5 text-base font-semibold bg-white/70 backdrop-blur border-slate-200"
            >
              <Globe className="h-4 w-4 mr-2 text-slate-700" />
              Who we are & what we do
            </Badge>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              We build
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {" "}
                agentic enterprises{" "}
              </span>
              for financial services
            </h2>

            <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              We’re a global technology company that boosts productivity across financial services by deploying
              intelligent AI agents that work alongside and augment human experts—multiplying their capabilities and
              impact across the organization.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  icon: Users,
                  title: "Human + agents",
                  desc: "Agents collaborate with experts and escalate when needed."
                },
                {
                  icon: Zap,
                  title: "Faster execution",
                  desc: "Automate repeatable work and accelerate high-volume workflows."
                },
                {
                  icon: Shield,
                  title: "Governed by design",
                  desc: "Controls that keep automation safe and accountable."
                }
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl bg-white/70 backdrop-blur border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 p-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white to-slate-50 border border-slate-200 flex items-center justify-center mb-3">
                    <item.icon className="h-5 w-5 text-slate-800" />
                  </div>
                  <div className="font-semibold text-slate-900">{item.title}</div>
                  <div className="mt-1 text-sm text-slate-600">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-purple-500/30 to-blue-500/30 blur-xl" />
            <Card className="relative rounded-3xl border border-slate-200 bg-white/75 backdrop-blur shadow-2xl">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center shadow-lg">
                    <Layers className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-slate-600">What you get</div>
                    <h3 className="text-2xl font-bold text-slate-900 mt-1">
                      Agents that deliver outcomes, not demos
                    </h3>
                    <p className="text-slate-600 mt-2 leading-relaxed">
                      Deploy AI agents into day-to-day work with clear oversight, measurable impact, and audit-ready
                      execution—without ripping and replacing your existing stack.
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid gap-3">
                  {[
                    "No changes to your stack: agents connect through your existing tools and APIs",
                    "Task automation that frees up expert time for higher-value work",
                    "Operational consistency with reusable workflows and guardrails",
                    "Evidence and traceability for every agent run—inputs to outputs",
                    "Shadow Layer controls: observe, gate, and safely scale autonomy"
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white/60 p-4">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <div className="text-sm text-slate-700 leading-relaxed">{point}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-5">
                    <div className="text-sm font-semibold text-slate-900">Audit-ready by default</div>
                    <div className="mt-1 text-sm text-slate-600">
                      Searchable traces, attribution, and replayable runs for oversight.
                    </div>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-indigo-50 to-white p-5">
                    <div className="text-sm font-semibold text-slate-900">Shadow Layer</div>
                    <div className="mt-1 text-sm text-slate-600">
                      Validate in shadow mode, add approvals, then scale autonomy safely.
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
