import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, CreditCard, TrendingUp, Shield, Brain, ArrowRight, Clock, Target, DollarSign, Database, Code } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const LendingCompliance = () => {
  const [demoStep, setDemoStep] = useState(0);
  const [isDemo, setIsDemo] = useState(false);

  const demoSteps = [
    {
      icon: Database,
      title: "Data Collection",
      description: "Aggregating applicant data from multiple sources",
      duration: 300,
      status: "Processing 100+ data points from 15+ sources"
    },
    {
      icon: Brain,
      title: "AI Credit Scoring",
      description: "Advanced ML models analyze creditworthiness",
      duration: 500,
      status: "98.5% accuracy in risk assessment"
    },
    {
      icon: Shield,
      title: "Fraud Detection",
      description: "Real-time fraud and synthetic identity detection",
      duration: 200,
      status: "Multi-layered fraud prevention system"
    },
    {
      icon: CreditCard,
      title: "Decision Engine",
      description: "Automated lending decision with compliance checks",
      duration: 100,
      status: "70% faster than manual underwriting"
    }
  ];

  const challenges = [
    "Manual underwriting processes take 7-14 days, causing customer frustration and lost opportunities",
    "High default rates due to inadequate risk assessment and limited data sources",
    "Complex regulatory requirements across multiple jurisdictions creating compliance gaps",
    "Inability to scale lending operations without proportional increase in operational costs",
    "Difficulty in detecting fraudulent applications and synthetic identity fraud"
  ];

  const technicalCapabilities = [
    {
      category: "Credit Scoring Models",
      features: [
        "Advanced ML algorithms with 500+ variables",
        "Alternative data integration and analysis",
        "Real-time credit bureau API connections",
        "Behavioral pattern recognition systems"
      ]
    },
    {
      category: "Risk Assessment",
      features: [
        "Multi-layered fraud detection algorithms",
        "Synthetic identity detection systems",
        "Income and employment verification",
        "Debt-to-income ratio optimization"
      ]
    },
    {
      category: "Data Processing",
      features: [
        "Real-time data aggregation from 100+ sources",
        "Bank statement analysis and categorization",
        "Social media and digital footprint analysis",
        "Open banking API integrations"
      ]
    },
    {
      category: "Compliance Engine",
      features: [
        "Automated regulatory rule enforcement",
        "Fair lending compliance monitoring",
        "Audit trail generation and reporting",
        "Regulatory change management system"
      ]
    }
  ];

  const regulatoryFrameworks = [
    { name: "Capital Standards", description: "Capital conservation buffer, Liquidity coverage ratio, Credit risk assessment, Operational risk management" },
    { name: "FCRA", description: "Permissible purpose verification, Adverse action notices, Consumer rights notification, Data accuracy" },
    { name: "ECOA", description: "Prohibited basis monitoring, Disparate impact analysis, Fair lending testing, Corrective actions" },
    { name: "Fair Lending", description: "Interest rate cap enforcement, Licensing verification, State-specific disclosures, Consumer protection" }
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
    <div className="min-h-screen pt-28 bg-gradient-to-br from-slate-50 via-white to-blue-50">

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Content */}
            <div>
              <Badge variant="outline" className="mb-4 px-4 py-2 text-blue-600 border-blue-200">
                🧠 Intelligent Lending Solution
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Intelligent Lending &
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Credit Assessment</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your lending operations with AI agents that deliver faster, more accurate credit decisions while maintaining strict regulatory compliance and reducing default rates.
              </p>

              {/* Key Benefits */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">70%</div>
                  <div className="text-sm text-gray-600">Faster Decisions</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Target className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">45%</div>
                  <div className="text-sm text-gray-600">Lower Defaults</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">300%</div>
                  <div className="text-sm text-gray-600">Loan Volume Increase</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 font-semibold px-8 py-4 rounded-xl"
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
                    <h3 className="text-lg font-semibold text-gray-900">Live Credit Assessment</h3>
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
                            ? 'border-blue-200 bg-blue-50 animate-pulse'
                            : 'border-gray-200 bg-gray-50'
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 transition-all duration-300 ${
                          demoStep > index
                            ? 'bg-green-500 text-white'
                            : demoStep === index + 1 && isDemo
                            ? 'bg-blue-500 text-white'
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
                          <div className="text-xs text-blue-600 font-medium mt-1">{step.status}</div>
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
                      <span>Assessment Progress</span>
                      <span>{Math.round((demoStep / demoSteps.length) * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${(demoStep / demoSteps.length) * 100}%` }}
                      ></div>
                    </div>
                    {demoStep === demoSteps.length && (
                      <div className="mt-4 text-center">
                        <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">
                          ✓ Assessment Complete - 1.1 seconds total
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">The Lending Challenge</h2>
            <p className="text-xl text-gray-600">Traditional underwriting is failing to meet modern lending demands</p>
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
                  <div className="text-4xl font-bold text-red-600 mb-2">12%</div>
                  <p className="text-gray-700">Average default rate with traditional underwriting</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">14 days</div>
                  <p className="text-gray-700">Average loan processing time</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">$500</div>
                  <p className="text-gray-700">Cost per loan application processed</p>
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
            <p className="text-xl text-gray-600">Enterprise-grade technology for intelligent credit assessment</p>
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
            <p className="text-xl text-gray-600">Built-in compliance with global lending and credit regulations</p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {regulatoryFrameworks.map((framework, index) => (
              <Card key={index} className="border-2 border-blue-200 hover:border-blue-400 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <Shield className="h-8 w-8 text-blue-600 mr-4" />
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Scale Your Lending Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join innovative lenders who have transformed their operations with our intelligent lending platform. Start with a personalized assessment of your current processes.
          </p>

          <div className="grid md:grid-cols-5 gap-4 max-w-5xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <CheckCircle className="h-8 w-8 text-white mx-auto mb-2" />
              <p className="text-white text-sm font-semibold">45-day implementation</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <Shield className="h-8 w-8 text-white mx-auto mb-2" />
              <p className="text-white text-sm font-semibold">Multi-jurisdictional compliance</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <Target className="h-8 w-8 text-white mx-auto mb-2" />
              <p className="text-white text-sm font-semibold">Real-time fraud detection</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <TrendingUp className="h-8 w-8 text-white mx-auto mb-2" />
              <p className="text-white text-sm font-semibold">Scalable architecture</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <CreditCard className="h-8 w-8 text-white mx-auto mb-2" />
              <p className="text-white text-sm font-semibold">24/7 monitoring</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-xl"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/solutions/regulens">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-8 py-4 rounded-xl"
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

export default LendingCompliance;
