import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ClipboardCheck, Clock, Shield, ArrowRight, Target, FileText, Database } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const AuditEvidence = () => {
  const [demoStep, setDemoStep] = useState(0);
  const [isDemo, setIsDemo] = useState(false);

  const demoSteps = [
    { icon: Database, title: "Evidence Collection", description: "Automated evidence gathering from multiple sources", duration: 500, status: "100% audit coverage maintained" },
    { icon: FileText, title: "Audit Trail", description: "Immutable audit logs and documentation", duration: 400, status: "Complete audit trail generation" },
    { icon: ClipboardCheck, title: "Model Governance", description: "Model explainability and validation", duration: 600, status: "24/7 continuous monitoring" },
    { icon: Shield, title: "Compliance Reporting", description: "Automated regulatory reporting", duration: 300, status: "Zero compliance gaps" }
  ];

  const challenges = [
    "Fragmented audit trails, manual evidence collection, and compliance gaps in model governance",
    "Time-consuming manual audit preparation processes",
    "Difficulty maintaining complete audit trails across systems",
    "Lack of model explainability for regulatory requirements",
    "Inconsistent evidence collection and documentation standards"
  ];

  const technicalCapabilities = [
    {
      category: "Evidence Collection",
      features: [
        "Automated evidence gathering",
        "Multi-source data integration",
        "Evidence validation and verification",
        "Continuous monitoring"
      ]
    },
    {
      category: "Audit Trails",
      features: [
        "Immutable audit logs",
        "Complete activity tracking",
        "Timestamp and user attribution",
        "Tamper-proof documentation"
      ]
    },
    {
      category: "Model Governance",
      features: [
        "Model explainability",
        "Model validation and testing",
        "Performance monitoring",
        "Regulatory compliance tracking"
      ]
    },
    {
      category: "Reporting",
      features: [
        "Automated regulatory reporting",
        "Custom report generation",
        "Compliance dashboards",
        "Evidence package creation"
      ]
    }
  ];

  const regulatoryFrameworks = [
    { name: "Model Risk Management", description: "SR 11-7 compliance, Model validation, Model governance frameworks" },
    { name: "GDPR", description: "Data protection, Right to explanation, Audit trail requirements" },
    { name: "CCPA", description: "California Consumer Privacy Act, Data audit requirements" },
    { name: "SOX", description: "Sarbanes-Oxley Act, Financial reporting controls, Audit requirements" }
  ];

  const runDemo = () => {
    setIsDemo(true);
    setDemoStep(0);
    demoSteps.forEach((step, index) => {
      setTimeout(() => {
        setDemoStep(index + 1);
        if (index === demoSteps.length - 1) {
          setTimeout(() => { setIsDemo(false); setDemoStep(0); }, 2000);
        }
      }, demoSteps.slice(0, index + 1).reduce((acc, curr) => acc + curr.duration, 1000));
    });
  };

  return (
    <div className="min-h-screen pt-28 bg-gradient-to-br from-slate-50 via-violet-50/30 to-purple-50/30">
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 to-purple-600/10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-violet-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4 px-4 py-2 text-violet-600 border-violet-200">
                🔬 Autonomous Audit & Evidence Solution
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Audit & Evidence Agent
                <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent"> for Compliance</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Model governance, audit trails, and automated evidence collection for regulatory compliance.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="h-8 w-8 text-violet-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">100%</div>
                  <div className="text-sm text-gray-600">Audit Coverage</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Clock className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">24/7</div>
                  <div className="text-sm text-gray-600">Monitoring</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">Zero</div>
                  <div className="text-sm text-gray-600">Gaps</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={runDemo} disabled={isDemo} size="lg" className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl">
                  {isDemo ? "Running Demo..." : "Watch Live Demo"}
                </Button>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="border-2 border-gray-300 hover:border-violet-600 hover:text-violet-600 font-semibold px-8 py-4 rounded-xl">
                    Schedule Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <Card className="bg-white shadow-2xl border-0 overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">Live Audit Demo</h3>
                    <div className="flex space-x-2">
                      <div className={`w-3 h-3 rounded-full ${isDemo ? 'bg-green-400' : 'bg-red-400'}`}></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {demoSteps.map((step, index) => (
                      <div key={index} className={`flex items-center p-4 rounded-lg border-2 transition-all duration-500 ${
                        demoStep > index ? 'border-green-200 bg-green-50' : demoStep === index + 1 && isDemo ? 'border-violet-200 bg-violet-50 animate-pulse' : 'border-gray-200 bg-gray-50'
                      }`}>
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 transition-all duration-300 ${
                          demoStep > index ? 'bg-green-500 text-white' : demoStep === index + 1 && isDemo ? 'bg-violet-500 text-white' : 'bg-gray-300 text-gray-600'
                        }`}>
                          {demoStep > index ? <CheckCircle size={20} /> : <step.icon size={20} />}
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900">{step.title}</div>
                          <div className="text-sm text-gray-600">{step.description}</div>
                          <div className="text-xs text-violet-600 font-medium mt-1">{step.status}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Audit Progress</span>
                      <span>{Math.round((demoStep / demoSteps.length) * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-violet-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out" style={{ width: `${(demoStep / demoSteps.length) * 100}%` }}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 via-violet-50/20 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-72 h-72 bg-violet-400 rounded-full mix-blend-multiply filter blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">The Audit & Evidence Challenge</h2>
            <p className="text-xl text-gray-600">Traditional audit approaches struggle with completeness and automation</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {challenges.map((challenge, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-l-4 border-l-red-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex items-start h-full">
                    <div className="bg-gradient-to-br from-red-500 to-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0 text-sm font-bold shadow-md">{index + 1}</div>
                    <p className="text-gray-700 leading-relaxed font-medium text-sm">{challenge}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Cost of Inaction */}
          <Card className="bg-gradient-to-r from-red-50 via-orange-50 to-red-50 border-2 border-red-200 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-200/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl"></div>
            <CardContent className="p-8 relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">The Cost of Inaction</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-red-100 hover:shadow-lg transition-shadow">
                  <div className="text-5xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent mb-3">3 weeks</div>
                  <p className="text-gray-700 font-medium">Average audit preparation time</p>
                </div>
                <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-red-100 hover:shadow-lg transition-shadow">
                  <div className="text-5xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent mb-3">$2M</div>
                  <p className="text-gray-700 font-medium">Cost of failed audit findings</p>
                </div>
                <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-red-100 hover:shadow-lg transition-shadow">
                  <div className="text-5xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent mb-3">40%</div>
                  <p className="text-gray-700 font-medium">Missing evidence in manual audits</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-br from-violet-50/30 via-white to-purple-50/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 bg-violet-300 rounded-full mix-blend-multiply filter blur-2xl"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Technical Capabilities</h2>
            <p className="text-xl text-gray-600">Enterprise-grade audit and evidence technology</p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {technicalCapabilities.map((capability, index) => (
              <Card key={index} className="bg-white/90 backdrop-blur-sm shadow-lg border border-violet-100 hover:shadow-xl hover:border-violet-300 transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{capability.category}</h3>
                  </div>
                  <div className="space-y-2.5">
                    {capability.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start p-1.5 rounded-lg hover:bg-violet-50/50 transition-colors">
                        <CheckCircle className="h-5 w-5 text-violet-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-br from-white via-violet-50/20 to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Regulatory Compliance</h2>
            <p className="text-xl text-gray-600">Built-in compliance with global regulatory standards</p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {regulatoryFrameworks.map((framework, index) => (
              <Card key={index} className="bg-gradient-to-br from-white to-violet-50/30 border-2 border-violet-200 hover:border-violet-400 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg flex items-center justify-center mr-4 shadow-md">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{framework.name}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{framework.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-violet-600 to-purple-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Audit & Evidence Management?</h2>
          <p className="text-xl text-violet-100 mb-8 max-w-3xl mx-auto">
            Join leading financial institutions who have revolutionized their audit processes with our autonomous audit and evidence agents.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-violet-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-xl mr-4">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link to="/solutions/regulens">
            <Button variant="outline" size="lg" className="border-2 border-white text-violet-600 hover:bg-violet-600 hover:text-white font-semibold px-8 py-4 rounded-xl">
              View All Solutions
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AuditEvidence;
