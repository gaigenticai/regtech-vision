
import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield,
  Layers,
  CheckCircle2
} from "lucide-react";

const AboutSection = () => {
  const differentiators = [
    {
      icon: Shield,
      title: "Security & privacy built in",
      description: "Security-first foundations designed for sensitive financial data and operational reliability.",
      points: [
        "Encryption in transit and at rest, with modern cipher suites",
        "Role-based access control with least-privilege defaults",
        "Tenant isolation and configurable data retention policies",
        "Secrets hygiene and key management-friendly architecture",
        "Data minimization patterns and sensitive-field protection",
        "Safe-by-default agent tool access via allowlists"
      ]
    },
    {
      icon: CheckCircle2,
      title: "Auditability by default",
      description: "Transparent traceability across users, agents, tools, and outcomes—ready for review and oversight.",
      points: [
        "End-to-end traces for each agent run: inputs, tool calls, decisions, and outputs",
        "Searchable event logs with timestamps and user/agent attribution",
        "Versioned prompts, policies, and configurations for governance",
        "Evidence packaging for reviews, investigations, and incident response",
        "Replayable runs to reproduce outcomes and validate changes",
        "Clear lineage for outputs back to source inputs and actions"
      ]
    },
    {
      icon: Layers,
      title: "Shadow Layer control plane",
      description: "A safety layer that observes, constrains, and validates automation before it acts.",
      points: [
        "Shadow mode to monitor outcomes before turning on automation",
        "Policy guardrails for sensitive actions (redaction, allow/deny rules, thresholds)",
        "Approval gates for high-impact steps and exception handling",
        "Deterministic replay and run-to-run comparisons to reduce regressions",
        "Change control support: promote from shadow → gated → autonomous"
      ]
    }
  ];

  return (
    <section id="about" className="py-20 bg-neutral-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6 text-neutral-dark">
            Security and privacy at our core
          </h2>
          <p className="text-xl text-neutral-dark/70 leading-relaxed">
            Built for financial services teams that need secure automation with clear oversight.
            We pair strong security and privacy controls with auditability and a Shadow Layer that
            helps you validate, govern, and safely scale agentic AI.
          </p>
        </div>

        {/* Differentiators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {differentiators.map((item, index) => (
            <Card
              key={index}
              className="h-full bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 border border-slate-200 bg-gradient-to-br from-white to-slate-50">
                    <item.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-semibold text-neutral-dark leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-neutral-dark/70 leading-relaxed mb-6">
                  {item.description}
                </p>
                <ul className="space-y-3">
                  {item.points.map((point, pointIndex) => (
                    <li
                      key={pointIndex}
                      className="flex items-start gap-3 text-sm text-neutral-dark/70 leading-relaxed"
                    >
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="flex-1">{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
