
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
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4 text-neutral-dark">
            Security and privacy at our core
          </h2>
          <p className="text-lg text-neutral-dark/70">
            Built for financial services teams that need secure automation with clear oversight.
            We pair strong security and privacy controls with auditability and a Shadow Layer that
            helps you validate, govern, and safely scale agentic AI.
          </p>
        </div>

        {/* Differentiators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {differentiators.map((item, index) => (
            <Card key={index} className="border-border/50 hover:border-accent/20 transition-colors">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-accent/10 rounded-full">
                    <item.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="text-lg font-semibold text-neutral-dark">
                    {item.title}
                  </div>
                </div>
                <p className="text-sm text-neutral-dark/70 mb-4">
                  {item.description}
                </p>
                <ul className="space-y-2 text-sm text-neutral-dark/70">
                  {item.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-neutral-dark/40 flex-shrink-0" />
                      <span>{point}</span>
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
