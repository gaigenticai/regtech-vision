import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Users, DollarSign, Target, Clock, Shield, TrendingUp } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Solutions = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedMetric, setSelectedMetric] = useState(null);

  const platformMetrics = [
    { icon: Users, value: "500+", label: "Financial Institutions", description: "Trusted by leading banks, insurance companies, and fintech platforms globally" },
    { icon: DollarSign, value: "$2.1B", label: "Compliance Costs Saved", description: "Total savings achieved by our clients through automation and efficiency gains" },
    { icon: Target, value: "99.9%", label: "Accuracy Rate", description: "Industry-leading precision across all compliance and verification solutions" },
    { icon: Clock, value: "75%", label: "Time Reduction", description: "Average processing time improvement across all compliance workflows" }
  ];

  const solutions = [
    {
      id: "kyc",
      title: "Autonomous KYC & Identity Verification",
      subtitle: "Real-time identity verification with 99.2% accuracy",
      problemHeadline: "Manual identity verification takes 5-7 days, causing 40% customer abandonment",
      solutionSummary: "Multi-source identity verification in real-time with biometric authentication and continuous risk monitoring",
      keyResults: [
        { metric: "85%", label: "faster processing", icon: Clock },
        { metric: "60%", label: "cost reduction", icon: DollarSign },
        { metric: "99.2%", label: "accuracy", icon: Target }
      ],
      technicalHighlights: [
        "OCR with handwriting recognition",
        "Facial recognition and anti-spoofing",
        "Database checks across 50+ global sources",
        "ML-powered fraud pattern detection",
        "Automated compliance reporting"
      ],
      regulatory: ["KYC", "CDD", "EDD", "AML", "GDPR", "CCPA"],
      industries: ["Banking", "Insurance", "Fintech", "Wealth Management"],
      demoLink: "/solutions/kyc-automation"
    },
    {
      id: "transaction",
      title: "Intelligent Transaction Monitoring & AML",
      subtitle: "90% false positive reduction with 99.5% threat detection",
      problemHeadline: "1000+ daily false positives overwhelming compliance teams",
      solutionSummary: "Real-time transaction analysis with behavioral modeling and adaptive ML algorithms",
      keyResults: [
        { metric: "90%", label: "false positive reduction", icon: Shield },
        { metric: "75%", label: "faster investigations", icon: Clock },
        { metric: "99.5%", label: "threat detection", icon: Target }
      ],
      technicalHighlights: [
        "Stream processing for real-time analysis",
        "Graph databases for relationship mapping",
        "Behavioral analytics and anomaly detection",
        "Sanctions screening and PEP monitoring",
        "Case management automation"
      ],
      regulatory: ["AML", "BSA", "FATF", "OFAC", "EU AML Directives"],
      industries: ["Banks", "Payment Processors", "Cryptocurrency", "Remittance"],
      demoLink: "/solutions/transaction-monitoring"
    },
    {
      id: "lending",
      title: "Lending Compliance & Risk Assessment",
      subtitle: "70% faster decisions with 45% lower defaults",
      problemHeadline: "Manual underwriting limiting loan capacity and increasing defaults",
      solutionSummary: "Automated credit risk assessment using alternative data with real-time compliance checking",
      keyResults: [
        { metric: "70%", label: "faster decisions", icon: Clock },
        { metric: "300%", label: "loan volume increase", icon: TrendingUp },
        { metric: "45%", label: "lower defaults", icon: Shield }
      ],
      technicalHighlights: [
        "Alternative data integration (social, mobile, utility)",
        "ML credit scoring models",
        "Income and employment verification",
        "Regulatory rule engines",
        "Automated decision documentation"
      ],
      regulatory: ["Capital Requirements", "Fair Lending", "Credit Assessment", "Consumer Protection", "Anti-Discrimination"],
      industries: ["Banks", "Credit Unions", "Fintech Lenders", "NBFC"],
      demoLink: "/solutions/lending-compliance"
    },
    {
      id: "risk",
      title: "Proactive Risk & Compliance Management",
      subtitle: "90% risk reduction with 100% audit readiness",
      problemHeadline: "Reactive compliance approach leading to violations and penalties",
      solutionSummary: "Continuous regulatory change monitoring with automated policy updates and predictive analytics",
      keyResults: [
        { metric: "90%", label: "risk reduction", icon: Shield },
        { metric: "75%", label: "operational savings", icon: DollarSign },
        { metric: "100%", label: "audit readiness", icon: CheckCircle }
      ],
      technicalHighlights: [
        "Regulatory API integrations",
        "Policy automation engines",
        "Predictive risk modeling",
        "Audit trail immutability",
        "Compliance workflow orchestration"
      ],
      regulatory: ["Financial Controls", "Risk Frameworks", "Security Standards", "Payment Security", "Industry Best Practices"],
      industries: ["All BFSI sectors requiring regulatory compliance"],
      demoLink: "/solutions/risk-management"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-blue-600/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2 text-purple-600 border-purple-200">
              ðŸš€ Complete Agentic AI Suite
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Complete Agentic AI Suite for
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Financial Compliance</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              End-to-end autonomous compliance solutions that eliminate manual processes, reduce costs by 75%, and ensure 100% regulatory adherence across all BFSI operations
            </p>

            {/* Interactive Metrics */}
            <div className="grid md:grid-cols-4 gap-6 mt-12">
              {platformMetrics.map((metric, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                    selectedMetric === index
                      ? 'border-purple-500 bg-purple-50 shadow-lg transform scale-105'
                      : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                  }`}
                  onClick={() => setSelectedMetric(selectedMetric === index ? null : index)}
                >
                  <metric.icon className={`h-8 w-8 mb-4 ${selectedMetric === index ? 'text-purple-600' : 'text-gray-600'}`} />
                  <div className={`text-3xl font-bold mb-2 ${selectedMetric === index ? 'text-purple-600' : 'text-gray-900'}`}>
                    {metric.value}
                  </div>
                  <div className="text-sm font-semibold text-gray-900 mb-2">{metric.label}</div>
                  {selectedMetric === index && (
                    <div className="text-sm text-gray-600 animate-fade-in-up">
                      {metric.description}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Four Core Solutions, Infinite Possibilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each solution works independently or as part of an integrated compliance ecosystem
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="space-y-12">
            {solutions.map((solution, index) => (
              <Card key={solution.id} className="overflow-hidden border-0 shadow-2xl">
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>

                  {/* Content Side */}
                  <div className="p-8 lg:p-12">
                    <Badge variant="outline" className="mb-4 px-3 py-1 text-purple-600 border-purple-200">
                      Solution {index + 1}
                    </Badge>

                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {solution.title}
                    </h3>

                    <p className="text-lg text-purple-600 font-semibold mb-6">
                      {solution.subtitle}
                    </p>

                    {/* Problem/Solution */}
                    <div className="space-y-6 mb-8">
                      <div>
                        <h4 className="text-lg font-bold text-red-600 mb-2">Current Problem:</h4>
                        <p className="text-gray-600">{solution.problemHeadline}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-green-600 mb-2">Our Solution:</h4>
                        <p className="text-gray-600">{solution.solutionSummary}</p>
                      </div>
                    </div>

                    {/* Key Results */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                      {solution.keyResults.map((result, idx) => (
                        <div key={idx} className="text-center p-4 bg-gray-50 rounded-lg">
                          <result.icon className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-gray-900">{result.metric}</div>
                          <div className="text-sm text-gray-600">{result.label}</div>
                        </div>
                      ))}
                    </div>

                    <Button
                      asChild
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-6 py-3 rounded-lg"
                    >
                      <Link to={solution.demoLink}>
                        Explore {solution.title.split(' ')[0]}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>

                  {/* Visual/Demo Side */}
                  <div className={`bg-gradient-to-br from-purple-50 to-blue-50 p-8 lg:p-12 flex items-center justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="w-full max-w-md">

                      {/* Technical Highlights */}
                      <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
                        <h4 className="font-bold text-gray-900 mb-4">Technical Capabilities</h4>
                        <div className="space-y-3">
                          {solution.technicalHighlights.slice(0, 3).map((highlight, idx) => (
                            <div key={idx} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                              {highlight}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Regulatory & Industries */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white rounded-xl p-4 shadow-md">
                          <h5 className="font-semibold text-gray-900 mb-2">Regulatory</h5>
                          <div className="flex flex-wrap gap-1">
                            {solution.regulatory.slice(0, 3).map((reg, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs px-2 py-1">
                                {reg}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="bg-white rounded-xl p-4 shadow-md">
                          <h5 className="font-semibold text-gray-900 mb-2">Industries</h5>
                          <div className="flex flex-wrap gap-1">
                            {solution.industries.slice(0, 2).map((industry, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs px-2 py-1">
                                {industry}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              </Card>
            ))}
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Compliance Operations?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Join 500+ financial institutions who have revolutionized their operations with our agentic AI platform
          </p>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <h3 className="font-bold text-white mb-2">Tailored Demo</h3>
              <p className="text-purple-100 text-sm">Solution-specific demonstration</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <h3 className="font-bold text-white mb-2">ROI Calculator</h3>
              <p className="text-purple-100 text-sm">Calculate potential savings</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <h3 className="font-bold text-white mb-2">30-Day Trial</h3>
              <p className="text-purple-100 text-sm">Risk-free pilot program</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <h3 className="font-bold text-white mb-2">Expert Consultation</h3>
              <p className="text-purple-100 text-sm">1-on-1 compliance review</p>
            </div>
          </div>

          <Button
            size="lg"
            className="mt-12 bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-xl"
          >
            Schedule Your Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

    </div>
  );
};

export default Solutions;
