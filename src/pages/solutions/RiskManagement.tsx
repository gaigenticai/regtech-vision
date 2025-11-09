import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Shield, TrendingUp, AlertTriangle, FileText, ArrowRight, Clock, Target, DollarSign, Database, Code } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const RiskManagement = () => {
  const [demoStep, setDemoStep] = useState(0);
  const [isDemo, setIsDemo] = useState(false);

  const demoSteps = [
    {
      icon: AlertTriangle,
      title: "Regulatory Monitoring",
      description: "AI scans global regulatory sources for changes",
      duration: 400,
      status: "Monitoring 200+ regulatory bodies worldwide"
    },
    {
      icon: FileText,
      title: "Impact Assessment",
      description: "Analyzing implications for your organization",
      duration: 600,
      status: "90% risk reduction through proactive compliance"
    },
    {
      icon: Database,
      title: "Policy Automation",
      description: "Automated policy updates and implementation",
      duration: 300,
      status: "75% faster policy deployment"
    },
    {
      icon: Shield,
      title: "Audit Readiness",
      description: "Continuous audit preparation and validation",
      duration: 200,
      status: "100% audit readiness maintained"
    }
  ];

  const challenges = [
    "Manual policy updates take weeks to implement across the organization, creating compliance gaps",
    "Reactive approach to regulatory changes results in penalties and audit findings",
    "Siloed risk management systems provide incomplete visibility into enterprise-wide risks",
    "Time-consuming audit preparation processes strain resources and delay business operations",
    "Difficulty in quantifying and predicting operational and compliance risks"
  ];

  const technicalCapabilities = [
    {
      category: "Regulatory Intelligence",
      features: [
        "AI-powered regulatory change detection",
        "Natural language processing for rule interpretation",
        "Global regulatory database integration",
        "Impact assessment and prioritization algorithms"
      ]
    },
    {
      category: "Policy Automation",
      features: [
        "Automated policy generation and updates",
        "Version control and change management",
        "Workflow automation for approvals",
        "Multi-language policy translation"
      ]
    },
    {
      category: "Risk Analytics",
      features: [
        "Predictive risk modeling and simulation",
        "Monte Carlo risk analysis",
        "Scenario planning and stress testing",
        "Real-time risk dashboard and reporting"
      ]
    },
    {
      category: "Audit & Controls",
      features: [
        "Automated control testing and validation",
        "Evidence collection and documentation",
        "Audit trail generation and maintenance",
        "Compliance reporting and attestation"
      ]
    }
  ];

  const regulatoryFrameworks = [
    { name: "Financial Controls", description: "Internal controls, Financial reporting, Management assessment, External auditor attestation" },
    { name: "Risk Management", description: "Control environment, Risk assessment, Control activities, Information & communication" },
    { name: "Information Security", description: "Information security policy, Risk assessment, Security controls, Continuous improvement" },
    { name: "Capital Standards", description: "Capital conservation, Liquidity coverage, Operational risk, Stress testing" }
  ];

  const runDemo = () => {
    setIsDemo(true);
    setDemoStep(0);

    demoSteps.forEach((step, index) => {
      setTimeout(() => {
        setDemoStep(index + 1);
        if (index === demoSteps.length - 1) {
          setTimeout(() => {
            setIsDemo(false);
            setDemoStep(0);
          }, 2000);
        }
      }, demoSteps.slice(0, index + 1).reduce((acc, curr) => acc + curr.duration, 1000));
    });
  };

  return (
    <div className="min-h-screen pt-28 bg-gradient-to-br from-slate-50 via-white to-purple-50">

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-pink-600/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Content */}
            <div>
              <Badge variant="outline" className="mb-4 px-4 py-2 text-purple-600 border-purple-200">
                🛡️ Proactive Risk Management
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Continuous Risk &
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Compliance Management</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Deploy intelligent agents that proactively manage enterprise risk, automate compliance processes, and maintain perpetual audit readiness across all regulatory frameworks.
              </p>

              {/* Key Benefits */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Shield className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">90%</div>
                  <div className="text-sm text-gray-600">Risk Reduction</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Clock className="h-8 w-8 text-pink-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">75%</div>
                  <div className="text-sm text-gray-600">Operational Savings</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Target className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">100%</div>
                  <div className="text-sm text-gray-600">Audit Ready</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-gray-300 hover:border-purple-600 hover:text-purple-600 font-semibold px-8 py-4 rounded-xl"
                  >
                    Schedule Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Interactive Demo */}
            <div className="relative">
              <Card className="bg-white shadow-2xl border-0 overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">Live Risk Assessment</h3>
                    <div className="flex space-x-2">
                      <div className={`w-3 h-3 rounded-full ${isDemo ? 'bg-green-400' : 'bg-red-400'}`}></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>

                  {/* Demo Steps */}
                  <div className="space-y-4">
                    {demoSteps.map((step, index) => (
                      <div
                        key={index}
                        className={`flex items-center p-4 rounded-lg border-2 transition-all duration-500 ${
                          demoStep > index
                            ? 'border-green-200 bg-green-50'
                            : demoStep === index + 1 && isDemo
                            ? 'border-purple-200 bg-purple-50 animate-pulse'
                            : 'border-gray-200 bg-gray-50'
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 transition-all duration-300 ${
                          demoStep > index
                            ? 'bg-green-500 text-white'
                            : demoStep === index + 1 && isDemo
                            ? 'bg-purple-500 text-white'
                            : 'bg-gray-300 text-gray-600'
                        }`}>
                          {demoStep > index ? (
                            <CheckCircle size={20} />
                          ) : (
                            <step.icon size={20} />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900">{step.title}</div>
                          <div className="text-sm text-gray-600">{step.description}</div>
                          <div className="text-xs text-purple-600 font-medium mt-1">{step.status}</div>
                        </div>
                        {demoStep > index && (
                          <div className="text-xs text-green-600 font-semibold">
                            ✓ Completed in {step.duration}ms
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Demo Progress */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Risk Assessment Progress</span>
                      <span>{Math.round((demoStep / demoSteps.length) * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${(demoStep / demoSteps.length) * 100}%` }}
                      ></div>
                    </div>
                    {demoStep === demoSteps.length && (
                      <div className="mt-4 text-center">
                        <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">
                          ✓ Assessment Complete - 1.5 seconds total
                        </Badge>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">The Risk Management Challenge</h2>
            <p className="text-xl text-gray-600">Traditional approaches are failing to keep pace with regulatory complexity</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {challenges.map((challenge, index) => (
              <Card key={index} className="border-l-4 border-l-red-500 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="bg-red-100 text-red-600 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 text-sm font-bold">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 leading-relaxed">{challenge}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Cost of Inaction */}
          <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">The Cost of Inaction</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">3 weeks</div>
                  <p className="text-gray-700">Average time to update policies organization-wide</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">$5M</div>
                  <p className="text-gray-700">Average annual regulatory penalty costs</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">40%</div>
                  <p className="text-gray-700">Of audit findings due to outdated policies</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Technical Capabilities</h2>
            <p className="text-xl text-gray-600">Enterprise-grade technology for comprehensive risk and compliance management</p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {technicalCapabilities.map((capability, index) => (
              <Card key={index} className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{capability.category}</h3>
                  <div className="space-y-2.5">
                    {capability.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
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

      {/* Regulatory Compliance */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Regulatory Compliance</h2>
            <p className="text-xl text-gray-600">Built-in compliance with global risk management and governance frameworks</p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {regulatoryFrameworks.map((framework, index) => (
              <Card key={index} className="border-2 border-purple-200 hover:border-purple-400 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <Shield className="h-8 w-8 text-purple-600 mr-4" />
                    <h3 className="text-xl font-bold text-gray-900">{framework.name}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{framework.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Risk Management?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Join global financial institutions who have revolutionized their risk and compliance operations. Achieve continuous compliance and audit readiness with our AI-powered platform.
          </p>

          <div className="grid md:grid-cols-5 gap-4 max-w-5xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <CheckCircle className="h-8 w-8 text-white mx-auto mb-2" />
              <p className="text-white text-sm font-semibold">90-day implementation</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <Shield className="h-8 w-8 text-white mx-auto mb-2" />
              <p className="text-white text-sm font-semibold">Enterprise-grade security</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <Target className="h-8 w-8 text-white mx-auto mb-2" />
              <p className="text-white text-sm font-semibold">Multi-framework support</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <TrendingUp className="h-8 w-8 text-white mx-auto mb-2" />
              <p className="text-white text-sm font-semibold">Real-time monitoring</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <FileText className="h-8 w-8 text-white mx-auto mb-2" />
              <p className="text-white text-sm font-semibold">Automated reporting</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-pink-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-xl"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/solutions">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-pink-600 hover:bg-pink-600 hover:text-white font-semibold px-8 py-4 rounded-xl"
              >
                View All Solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default RiskManagement;
