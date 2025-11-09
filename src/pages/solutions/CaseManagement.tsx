import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, FileText, Clock, Shield, ArrowRight, Target, Users, Workflow } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const CaseManagement = () => {
  const [demoStep, setDemoStep] = useState(0);
  const [isDemo, setIsDemo] = useState(false);

  const demoSteps = [
    { icon: FileText, title: "Case Creation", description: "Automated case creation from alerts", duration: 400, status: "AI prioritizes cases by risk level" },
    { icon: Users, title: "Investigation", description: "Intelligent evidence collection and analysis", duration: 600, status: "75% time saved on investigations" },
    { icon: Workflow, title: "SAR Generation", description: "Automated SAR form filling and submission", duration: 500, status: "60% automated SAR generation rate" },
    { icon: Shield, title: "Compliance", description: "100% regulatory compliance maintained", duration: 300, status: "Automated compliance validation" }
  ];

  const challenges = [
    "Case backlogs growing, manual SAR filing errors, and inconsistent investigation workflows",
    "Time-consuming manual case investigation processes delaying critical decisions",
    "High risk of compliance violations due to inconsistent SAR filing procedures",
    "Lack of visibility into case status and investigation progress",
    "Difficulty in linking related cases and identifying patterns"
  ];

  const technicalCapabilities = [
    {
      category: "Case Investigation",
      features: [
        "AI-powered case prioritization",
        "Automated evidence collection",
        "Intelligent case linking",
        "Workflow orchestration"
      ]
    },
    {
      category: "SAR Automation",
      features: [
        "Automated SAR form filling",
        "Regulatory compliance validation",
        "Multi-jurisdiction SAR support",
        "Submission tracking and reporting"
      ]
    },
    {
      category: "Workflow Management",
      features: [
        "Customizable investigation workflows",
        "Task assignment and tracking",
        "Escalation and approval processes",
        "Real-time collaboration tools"
      ]
    },
    {
      category: "Analytics & Reporting",
      features: [
        "Case analytics and insights",
        "Performance metrics tracking",
        "Regulatory reporting",
        "Trend analysis and pattern detection"
      ]
    }
  ];

  const regulatoryFrameworks = [
    { name: "BSA", description: "Bank Secrecy Act compliance, SAR filing requirements, Record keeping" },
    { name: "FATF", description: "Financial Action Task Force recommendations, Suspicious transaction reporting" },
    { name: "FinCEN", description: "Financial Crimes Enforcement Network requirements, SAR submission standards" },
    { name: "EU AML Directives", description: "European Union AML directives, Suspicious transaction reporting" }
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
    <div className="min-h-screen pt-28 bg-gradient-to-br from-slate-50 via-white to-teal-50">
      <section className="py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/5 to-cyan-600/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-3 px-4 py-2 text-teal-600 border-teal-200">
                📋 Autonomous Case Management Solution
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-3">
                Case Management Agent
                <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent"> for Investigations</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Intelligent investigation case management with automated SAR generation and workflow orchestration.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Clock className="h-8 w-8 text-teal-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">75%</div>
                  <div className="text-sm text-gray-600">Time Saved</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Target className="h-8 w-8 text-cyan-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">60%</div>
                  <div className="text-sm text-gray-600">Auto-SAR Rate</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">100%</div>
                  <div className="text-sm text-gray-600">Compliance</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={runDemo} disabled={isDemo} size="lg" className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-semibold px-8 py-4 rounded-xl">
                  {isDemo ? "Running Demo..." : "Watch Live Demo"}
                </Button>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="border-2 border-gray-300 hover:border-teal-600 hover:text-teal-600 font-semibold px-8 py-4 rounded-xl">
                    Schedule Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <Card className="bg-white shadow-2xl border-0 overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">Live Case Management Demo</h3>
                    <div className="flex space-x-2">
                      <div className={`w-3 h-3 rounded-full ${isDemo ? 'bg-green-400' : 'bg-red-400'}`}></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                  <div className="space-y-2.5">
                    {demoSteps.map((step, index) => (
                      <div key={index} className={`flex items-center p-4 rounded-lg border-2 transition-all duration-500 ${
                        demoStep > index ? 'border-green-200 bg-green-50' : demoStep === index + 1 && isDemo ? 'border-teal-200 bg-teal-50 animate-pulse' : 'border-gray-200 bg-gray-50'
                      }`}>
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 transition-all duration-300 ${
                          demoStep > index ? 'bg-green-500 text-white' : demoStep === index + 1 && isDemo ? 'bg-teal-500 text-white' : 'bg-gray-300 text-gray-600'
                        }`}>
                          {demoStep > index ? <CheckCircle size={20} /> : <step.icon size={20} />}
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900">{step.title}</div>
                          <div className="text-sm text-gray-600">{step.description}</div>
                          <div className="text-xs text-teal-600 font-medium mt-1">{step.status}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Case Progress</span>
                      <span>{Math.round((demoStep / demoSteps.length) * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 h-2 rounded-full transition-all duration-1000 ease-out" style={{ width: `${(demoStep / demoSteps.length) * 100}%` }}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-br from-gray-50 via-teal-50/20 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">The Case Management Challenge</h2>
            <p className="text-xl text-gray-600">Traditional case management approaches struggle with scale and compliance</p>
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
            <CardContent className="p-6 relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">The Cost of Inaction</h3>
              <div className="grid md:grid-cols-3 gap-5">
                <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-red-100 hover:shadow-lg transition-shadow">
                  <div className="text-5xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent mb-3">45 days</div>
                  <p className="text-gray-700 font-medium">Average case resolution time</p>
                </div>
                <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-red-100 hover:shadow-lg transition-shadow">
                  <div className="text-5xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent mb-3">$500K</div>
                  <p className="text-gray-700 font-medium">Cost per compliance violation</p>
                </div>
                <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-red-100 hover:shadow-lg transition-shadow">
                  <div className="text-5xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent mb-3">30%</div>
                  <p className="text-gray-700 font-medium">Cases missed due to manual processes</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-br from-teal-50/30 via-white to-cyan-50/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1.50 right-20 w-96 h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-2xl"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Technical Capabilities</h2>
            <p className="text-xl text-gray-600">Enterprise-grade case management technology</p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {technicalCapabilities.map((capability, index) => (
              <Card key={index} className="bg-white/90 backdrop-blur-sm shadow-lg border border-teal-100 hover:shadow-xl hover:border-teal-300 transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{capability.category}</h3>
                  </div>
                  <div className="space-y-2.5">
                    {capability.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start p-1.5 rounded-lg hover:bg-teal-50/50 transition-colors">
                        <CheckCircle className="h-5 w-5 text-teal-600 mr-3 flex-shrink-0 mt-0.5" />
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

      <section className="py-12 bg-gradient-to-br from-white via-teal-50/20 to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-2xl"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Regulatory Compliance</h2>
            <p className="text-xl text-gray-600">Built-in compliance with global regulatory standards</p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {regulatoryFrameworks.map((framework, index) => (
              <Card key={index} className="bg-gradient-to-br from-white to-teal-50/30 border-2 border-teal-200 hover:border-teal-400 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4 shadow-md">
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

      <section className="py-12 bg-gradient-to-r from-teal-600 to-cyan-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-3">Ready to Transform Your Case Management?</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
            Join leading financial institutions who have revolutionized their investigation workflows with our autonomous case management agents.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-xl mr-4">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link to="/solutions">
            <Button variant="outline" size="lg" className="border-2 border-white text-teal-600 hover:bg-teal-600 hover:text-white font-semibold px-8 py-4 rounded-xl">
              View All Solutions
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseManagement;

