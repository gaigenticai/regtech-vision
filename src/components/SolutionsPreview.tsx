import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Shield, TrendingUp, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const SolutionsPreview = () => {
  const [hoveredSolution, setHoveredSolution] = useState(null);

  const solutions = [
    {
      id: 1,
      icon: Brain,
      title: "KYC Automation",
      subtitle: "Real-time identity verification with 99.2% accuracy",
      description: "Autonomous identity verification and onboarding with real-time compliance monitoring",
      problemHeadline: "Manual identity verification takes 5-7 days, causing 40% customer abandonment",
      metrics: { primary: "99.2%", secondary: "85%", label1: "Accuracy", label2: "Faster Processing" },
      features: ["Biometric verification", "Document analysis", "Global database checks", "Fraud detection"],
      technicalHighlights: ["OCR with 180+ document types", "Facial recognition & anti-spoofing", "50+ global database sources", "ML-powered fraud detection"],
      regulatory: ["KYC", "CDD", "EDD", "AML", "GDPR"],
      industries: ["Banking", "Insurance", "Fintech", "Wealth Management"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 hover:bg-blue-100",
      demoLink: "/solutions/regulens/kyc-automation"
    },
    {
      id: 2,
      icon: TrendingUp,
      title: "Lending Compliance",
      subtitle: "70% faster decisions with 45% lower defaults",
      description: "Intelligent loan underwriting and credit assessment with automated regulatory compliance",
      problemHeadline: "Manual underwriting limiting loan capacity and increasing defaults",
      metrics: { primary: "70%", secondary: "45%", label1: "Faster Decisions", label2: "Lower Defaults" },
      features: ["Credit scoring", "Alternative data", "Risk assessment", "Regulatory compliance"],
      technicalHighlights: ["Alternative data integration", "ML credit scoring models", "Income verification", "Regulatory rule engines"],
      regulatory: ["Basel III", "FCRA", "ECOA", "TILA", "Fair Lending"],
      industries: ["Banks", "Credit Unions", "Fintech Lenders", "NBFC"],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50 hover:bg-purple-100",
      demoLink: "/solutions/regulens/lending-compliance"
    },
    {
      id: 3,
      icon: Eye,
      title: "Transaction Monitoring",
      subtitle: "90% false positive reduction with 99.5% threat detection",
      description: "Real-time suspicious activity detection with adaptive pattern recognition",
      problemHeadline: "1000+ daily false positives overwhelming compliance teams",
      metrics: { primary: "90%", secondary: "99.5%", label1: "False Positive Reduction", label2: "Detection Rate" },
      features: ["Real-time monitoring", "Pattern recognition", "Network analysis", "SAR generation"],
      technicalHighlights: ["Stream processing", "Graph databases", "Behavioral analytics", "Anomaly detection"],
      regulatory: ["AML", "BSA", "FATF", "OFAC", "EU AML Directives"],
      industries: ["Banks", "Payment Processors", "Cryptocurrency", "Remittance"],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50 hover:bg-green-100",
      demoLink: "/solutions/regulens/transaction-monitoring"
    },
    {
      id: 4,
      icon: Shield,
      title: "Risk Management",
      subtitle: "90% risk reduction with 100% audit readiness",
      description: "Continuous regulatory monitoring with automated policy alignment and predictive analytics",
      problemHeadline: "Reactive compliance approach leading to violations and penalties",
      metrics: { primary: "90%", secondary: "100%", label1: "Risk Reduction", label2: "Audit Ready" },
      features: ["Risk assessment", "Policy automation", "Predictive analytics", "Audit trails"],
      technicalHighlights: ["Regulatory API integrations", "Policy automation engines", "Predictive risk modeling", "Audit trail immutability"],
      regulatory: ["SOX", "COSO", "ISO 27001", "PCI-DSS"],
      industries: ["All BFSI sectors"],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50 hover:bg-orange-100",
      demoLink: "/solutions/regulens/risk-management"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-purple-600 border-purple-200">
            🤖 Agentic AI Solutions
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Core Solutions,
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Infinite Possibilities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Deploy autonomous AI agents that revolutionize compliance operations across insurance, lending, and banking with intelligent automation.
          </p>
        </div>

        {/* Interactive Solution Flow */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">How Our AI Agents Work Together</h3>
              
              {/* Desktop Layout */}
              <div className="hidden md:flex items-center space-x-8 p-6 bg-white rounded-2xl shadow-lg">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-2">
                    <Brain className="h-8 w-8 text-white" />
                  </div>
                  <span className="text-sm font-semibold">Collect</span>
                </div>
                <ArrowRight className="text-gray-400" />
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-2">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <span className="text-sm font-semibold">Analyze</span>
                </div>
                <ArrowRight className="text-gray-400" />
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-2">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                  <span className="text-sm font-semibold">Monitor</span>
                </div>
                <ArrowRight className="text-gray-400" />
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-2">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <span className="text-sm font-semibold">Protect</span>
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="md:hidden grid grid-cols-2 gap-6 p-6 bg-white rounded-2xl shadow-lg max-w-sm mx-auto">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-2">
                    <Brain className="h-8 w-8 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-center">Collect</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-2">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-center">Analyze</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-2">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-center">Monitor</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-2">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-center">Protect</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {solutions.map((solution) => (
            <Card
              key={solution.id}
              className={`group relative overflow-hidden border-2 border-transparent hover:border-gray-200 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${solution.bgColor}`}
              onMouseEnter={() => setHoveredSolution(solution.id)}
              onMouseLeave={() => setHoveredSolution(null)}
            >
              <CardContent className="p-8">

                {/* Card Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <solution.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">{solution.metrics.primary}</div>
                    <div className="text-sm text-gray-600">{solution.metrics.label1}</div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {solution.title}
                </h3>
                {solution.subtitle && (
                  <p className="text-sm font-semibold text-purple-600 mb-3">
                    {solution.subtitle}
                  </p>
                )}
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {solution.description}
                </p>

                {/* Problem Statement */}
                {solution.problemHeadline && (
                  <div className="mb-4 p-3 bg-red-50 border-l-4 border-red-400 rounded-r">
                    <p className="text-xs text-red-700 font-medium leading-relaxed">
                      {solution.problemHeadline}
                    </p>
                  </div>
                )}

                {/* Features List */}
                <div className="space-y-2 mb-4">
                  {solution.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-xs text-gray-600">
                      <div className={`w-1.5 h-1.5 bg-gradient-to-r ${solution.color} rounded-full mr-2`}></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Technical Highlights */}
                {solution.technicalHighlights && (
                  <div className="mb-4 p-3 bg-white/50 rounded-lg border border-gray-200">
                    <p className="text-xs font-semibold text-gray-700 mb-2">Technical Capabilities:</p>
                    <div className="space-y-1">
                      {solution.technicalHighlights.slice(0, 2).map((highlight, index) => (
                        <div key={index} className="flex items-start text-xs text-gray-600">
                          <span className="mr-2">•</span>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Regulatory & Industries */}
                {(solution.regulatory || solution.industries) && (
                  <div className="mb-4 grid grid-cols-2 gap-2">
                    {solution.regulatory && (
                      <div className="p-2 bg-white/50 rounded border border-gray-200">
                        <p className="text-xs font-semibold text-gray-700 mb-1">Regulatory:</p>
                        <div className="flex flex-wrap gap-1">
                          {solution.regulatory.slice(0, 2).map((reg, idx) => (
                            <span key={idx} className="text-xs px-1.5 py-0.5 bg-gray-100 text-gray-700 rounded">
                              {reg}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {solution.industries && (
                      <div className="p-2 bg-white/50 rounded border border-gray-200">
                        <p className="text-xs font-semibold text-gray-700 mb-1">Industries:</p>
                        <div className="flex flex-wrap gap-1">
                          {solution.industries.slice(0, 2).map((industry, idx) => (
                            <span key={idx} className="text-xs px-1.5 py-0.5 bg-gray-100 text-gray-700 rounded">
                              {industry}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Metrics Bar */}
                <div className="flex items-center justify-between mb-6 p-4 bg-white/70 rounded-lg">
                  <div>
                    <div className="text-lg font-bold text-gray-900">{solution.metrics.secondary}</div>
                    <div className="text-sm text-gray-600">{solution.metrics.label2}</div>
                  </div>
                  <div className={`px-3 py-1 bg-gradient-to-r ${solution.color} text-white text-xs font-semibold rounded-full`}>
                    Enterprise Ready
                  </div>
                </div>

                {/* CTA Button */}
                <Link to={solution.demoLink} className="w-full block">
                  <Button
                    className={`w-full bg-gradient-to-r ${solution.color} hover:opacity-90 text-white font-semibold transition-all duration-300 ${
                      hoveredSolution === solution.id ? 'transform scale-105' : ''
                    }`}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>

                {/* Hover Overlay */}
                {hoveredSolution === solution.id && (
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none">
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-gray-800">
                      Live Demo Available
                    </div>
                  </div>
                )}

              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link to="/solutions/regulens">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl"
            >
              Explore All Solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default SolutionsPreview;
