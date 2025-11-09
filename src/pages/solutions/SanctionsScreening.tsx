import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Search, Shield, Clock, Target, ArrowRight, FileCheck, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SanctionsScreening = () => {
  const [demoStep, setDemoStep] = useState(0);
  const [isDemo, setIsDemo] = useState(false);

  const demoSteps = [
    {
      icon: Search,
      title: "Name Screening",
      description: "Automated screening against 50+ global sanctions lists",
      duration: 500,
      status: "Real-time fuzzy matching across multiple databases"
    },
    {
      icon: FileCheck,
      title: "PEP Detection",
      description: "Politically Exposed Person identification and risk assessment",
      duration: 400,
      status: "Comprehensive PEP database with relationship mapping"
    },
    {
      icon: Globe,
      title: "Adverse Media",
      description: "Automated adverse media screening and risk scoring",
      duration: 600,
      status: "AI-powered media analysis across multiple languages"
    },
    {
      icon: Shield,
      title: "Risk Assessment",
      description: "Automated risk scoring and compliance reporting",
      duration: 300,
      status: "99.8% accuracy with <2s screening time"
    }
  ];

  const challenges = [
    "Manual screening processes taking hours, missing critical matches, and causing compliance gaps",
    "High false positive rates requiring extensive manual review",
    "Fragmented screening across multiple vendors and systems",
    "Difficulty keeping up with rapidly changing sanctions lists",
    "Lack of real-time updates leading to compliance violations"
  ];

  const technicalCapabilities = [
    {
      category: "Screening Engine",
      features: [
        "50+ global database sources integration",
        "Fuzzy matching algorithms with configurable thresholds",
        "Real-time list updates and synchronization",
        "Multi-jurisdiction coverage and compliance"
      ]
    },
    {
      category: "Risk Analysis",
      features: [
        "Automated PEP detection and classification",
        "Adverse media screening and scoring",
        "Relationship mapping and network analysis",
        "Risk-based decision automation"
      ]
    },
    {
      category: "Integration & APIs",
      features: [
        "RESTful APIs for seamless integration",
        "Real-time webhook notifications",
        "Batch processing capabilities",
        "Custom screening rule configuration"
      ]
    },
    {
      category: "Compliance & Reporting",
      features: [
        "Automated compliance reporting",
        "Audit trail and evidence collection",
        "Regulatory framework mapping",
        "Exception handling and workflow automation"
      ]
    }
  ];

  const regulatoryFrameworks = [
    { name: "OFAC", description: "Office of Foreign Assets Control sanctions screening, SDN list monitoring, Sectoral sanctions compliance" },
    { name: "UN Sanctions", description: "United Nations Security Council sanctions, Consolidated list screening, Multi-lateral sanctions compliance" },
    { name: "EU Sanctions", description: "European Union sanctions lists, EU Consolidated List, EU Autonomous Sanctions" },
    { name: "FATF", description: "Financial Action Task Force recommendations, High-risk jurisdictions, AML/CFT compliance" }
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
    <div className="min-h-screen pt-28 bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/5 to-blue-600/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <Badge variant="outline" className="mb-4 px-4 py-2 text-indigo-600 border-indigo-200">
                🔍 Autonomous Sanctions Screening Solution
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Sanctions Screening Agent
                <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent"> for Compliance</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Deploy AI agents that automate sanctions, PEP, and adverse media screening across 50+ global databases with 99.8% accuracy in under 2 seconds.
              </p>

              {/* Key Benefits */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Target className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">99.8%</div>
                  <div className="text-sm text-gray-600">Match Accuracy</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">&lt;2s</div>
                  <div className="text-sm text-gray-600">Screening Time</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Globe className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600">Data Sources</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={runDemo}
                  disabled={isDemo}
                  size="lg"
                  className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-xl"
                >
                  {isDemo ? "Running Demo..." : "Watch Live Demo"}
                </Button>
                <Link to="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-gray-300 hover:border-indigo-600 hover:text-indigo-600 font-semibold px-8 py-4 rounded-xl"
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
                    <h3 className="text-lg font-semibold text-gray-900">Live Screening Demo</h3>
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
                            ? 'border-indigo-200 bg-indigo-50 animate-pulse'
                            : 'border-gray-200 bg-gray-50'
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 transition-all duration-300 ${
                          demoStep > index
                            ? 'bg-green-500 text-white'
                            : demoStep === index + 1 && isDemo
                            ? 'bg-indigo-500 text-white'
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
                          <div className="text-xs text-indigo-600 font-medium mt-1">{step.status}</div>
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
                      <span>Screening Progress</span>
                      <span>{Math.round((demoStep / demoSteps.length) * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-indigo-600 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${(demoStep / demoSteps.length) * 100}%` }}
                      ></div>
                    </div>
                    {demoStep === demoSteps.length && (
                      <div className="mt-4 text-center">
                        <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">
                          ✓ Screening Complete - 1.8 seconds total
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
      <section className="py-20 bg-gradient-to-br from-gray-50 via-indigo-50/20 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">The Sanctions Screening Challenge</h2>
            <p className="text-xl text-gray-600">Traditional screening approaches fail to meet modern compliance demands</p>
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
                  <div className="text-5xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent mb-3">$10M+</div>
                  <p className="text-gray-700 font-medium">Average fine for sanctions violations</p>
                </div>
                <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-red-100 hover:shadow-lg transition-shadow">
                  <div className="text-5xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent mb-3">8 hours</div>
                  <p className="text-gray-700 font-medium">Average manual screening time per batch</p>
                </div>
                <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-red-100 hover:shadow-lg transition-shadow">
                  <div className="text-5xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent mb-3">15%</div>
                  <p className="text-gray-700 font-medium">Missed matches with outdated systems</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="py-12 bg-gradient-to-br from-indigo-50/30 via-white to-blue-50/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-2xl"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Technical Capabilities</h2>
            <p className="text-xl text-gray-600">Enterprise-grade technology stack built for scale and accuracy</p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {technicalCapabilities.map((capability, index) => (
              <Card key={index} className="bg-white/90 backdrop-blur-sm shadow-lg border border-indigo-100 hover:shadow-xl hover:border-indigo-300 transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{capability.category}</h3>
                  </div>
                  <div className="space-y-2.5">
                    {capability.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start p-1.5 rounded-lg hover:bg-indigo-50/50 transition-colors">
                        <CheckCircle className="h-5 w-5 text-indigo-600 mr-3 flex-shrink-0 mt-0.5" />
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
      <section className="py-12 bg-gradient-to-br from-white via-indigo-50/20 to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Regulatory Compliance</h2>
            <p className="text-xl text-gray-600">Built-in compliance with global sanctions and regulatory standards</p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {regulatoryFrameworks.map((framework, index) => (
              <Card key={index} className="bg-gradient-to-br from-white to-indigo-50/30 border-2 border-indigo-200 hover:border-indigo-400 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center mr-4 shadow-md">
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Sanctions Screening?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Join leading financial institutions who have revolutionized their screening operations with our autonomous sanctions screening agents.
          </p>

          <Link to="/contact">
            <Button
              size="lg"
              className="bg-white text-indigo-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-xl mr-4"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link to="/solutions">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-indigo-600 hover:bg-indigo-600 hover:text-white font-semibold px-8 py-4 rounded-xl"
            >
              View All Solutions
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SanctionsScreening;

