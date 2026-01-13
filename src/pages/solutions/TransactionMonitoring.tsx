import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Activity, Network, AlertTriangle, ArrowRight, Clock, Target, DollarSign, Shield, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const TransactionMonitoring = () => {
  const [demoStep, setDemoStep] = useState(0);
  const [isDemo, setIsDemo] = useState(false);

  const demoSteps = [
    {
      icon: Activity,
      title: "Transaction Analysis",
      description: "AI processes transaction data in real-time",
      duration: 200,
      status: "Analyzing 10,000+ transactions per second"
    },
    {
      icon: Network,
      title: "Pattern Recognition",
      description: "Machine learning detects suspicious patterns",
      duration: 400,
      status: "99.5% accuracy in anomaly detection"
    },
    {
      icon: AlertTriangle,
      title: "Risk Assessment",
      description: "Multi-factor risk scoring and evaluation",
      duration: 300,
      status: "Real-time risk scoring across 50+ parameters"
    },
    {
      icon: Shield,
      title: "Automated Alert",
      description: "Intelligent alert generation and prioritization",
      duration: 100,
      status: "90% reduction in false positive alerts"
    }
  ];

  const challenges = [
    "Traditional rule-based systems generate 95% false positives, overwhelming compliance teams",
    "Sophisticated money laundering schemes evade detection through complex transaction patterns",
    "Manual investigation of alerts takes 4-6 hours per case, creating backlogs",
    "Inability to detect emerging threats and new typologies in real-time",
    "High operational costs with teams of analysts working around the clock"
  ];

  const technicalCapabilities = [
    {
      category: "Stream Processing",
      features: [
        "Real-time transaction processing at scale",
        "Apache Kafka for high-throughput messaging",
        "Complex event processing engines",
        "Millisecond-level latency monitoring"
      ]
    },
    {
      category: "Machine Learning",
      features: [
        "Unsupervised anomaly detection algorithms",
        "Deep learning for pattern recognition",
        "Ensemble models for improved accuracy",
        "Continuous model retraining and optimization"
      ]
    },
    {
      category: "Data Analytics",
      features: [
        "Graph database for network analysis",
        "Time-series analysis for trend detection",
        "Statistical modeling for risk scoring",
        "Big data processing with Spark and Hadoop"
      ]
    },
    {
      category: "Integration & APIs",
      features: [
        "RESTful APIs for system integration",
        "Real-time webhook notifications",
        "SWIFT message processing",
        "Core banking system connectors"
      ]
    }
  ];

  const regulatoryFrameworks = [
    { name: "AML", description: "Suspicious activity monitoring, PEP monitoring, Transaction pattern analysis, Risk-based approach implementation" },
    { name: "BSA", description: "Currency transaction reporting, Suspicious activity reporting, Customer identification program, Information sharing" },
    { name: "FATF", description: "Risk-based approach, Customer due diligence, Record keeping and monitoring, International cooperation" },
    { name: "OFAC", description: "Sanctions list screening, Real-time list updates, PEP monitoring, Adverse media monitoring" }
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
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/5 to-red-600/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Content */}
            <div>
              <Badge variant="outline" className="mb-4 px-4 py-2 text-orange-600 border-orange-200">
                🤖 Intelligent AML Solution
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Intelligent Transaction Monitoring &
                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"> AML Detection</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Deploy AI agents that monitor transactions in real-time, detect sophisticated money laundering schemes, and dramatically reduce false positives while ensuring regulatory compliance.
              </p>

              {/* Key Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Clock className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">&lt;1sec</div>
                  <div className="text-sm text-gray-600">Response Time</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Target className="h-8 w-8 text-red-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">99.5%</div>
                  <div className="text-sm text-gray-600">Detection Rate</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">80%</div>
                  <div className="text-sm text-gray-600">False Positive Reduction</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-gray-300 hover:border-orange-600 hover:text-orange-600 font-semibold px-8 py-4 rounded-xl"
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
                    <h3 className="text-lg font-semibold text-gray-900">Live AML Detection</h3>
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
                            ? 'border-orange-200 bg-orange-50 animate-pulse'
                            : 'border-gray-200 bg-gray-50'
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 transition-all duration-300 ${
                          demoStep > index
                            ? 'bg-green-500 text-white'
                            : demoStep === index + 1 && isDemo
                            ? 'bg-orange-500 text-white'
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
                          <div className="text-xs text-orange-600 font-medium mt-1">{step.status}</div>
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
                      <span>Detection Progress</span>
                      <span>{Math.round((demoStep / demoSteps.length) * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-orange-600 to-red-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${(demoStep / demoSteps.length) * 100}%` }}
                      ></div>
                    </div>
                    {demoStep === demoSteps.length && (
                      <div className="mt-4 text-center">
                        <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">
                          ✓ Detection Complete - 1.0 seconds total
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">The AML Challenge</h2>
            <p className="text-xl text-gray-600">Traditional approaches are failing to keep pace with sophisticated threats</p>
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
                  <div className="text-4xl font-bold text-red-600 mb-2">95%</div>
                  <p className="text-gray-700">False positive rate with traditional systems</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">6 hours</div>
                  <p className="text-gray-700">Average time to investigate each alert</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">$2M</div>
                  <p className="text-gray-700">Annual cost of compliance team operations</p>
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
            <p className="text-xl text-gray-600">Enterprise-grade technology built for high-volume transaction processing</p>
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
            <p className="text-xl text-gray-600">Built-in compliance with global AML and financial crime prevention standards</p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {regulatoryFrameworks.map((framework, index) => (
              <Card key={index} className="border-2 border-orange-200 hover:border-orange-400 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <Shield className="h-8 w-8 text-orange-600 mr-4" />
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
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your AML Operations?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Join leading banks who have revolutionized their transaction monitoring with our AI-powered platform. Reduce false positives while improving detection rates.
          </p>

          <div className="grid md:grid-cols-5 gap-4 max-w-5xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <CheckCircle className="h-8 w-8 text-white mx-auto mb-2" />
              <p className="text-white text-sm font-semibold">60-day implementation</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <Shield className="h-8 w-8 text-white mx-auto mb-2" />
              <p className="text-white text-sm font-semibold">Real-time monitoring</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <Target className="h-8 w-8 text-white mx-auto mb-2" />
              <p className="text-white text-sm font-semibold">Sub-second alerts</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <TrendingUp className="h-8 w-8 text-white mx-auto mb-2" />
              <p className="text-white text-sm font-semibold">99.9% uptime SLA</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <Activity className="h-8 w-8 text-white mx-auto mb-2" />
              <p className="text-white text-sm font-semibold">Scalable architecture</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-xl"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/solutions/regulens">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-red-600 hover:bg-red-600 hover:text-white font-semibold px-8 py-4 rounded-xl"
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

export default TransactionMonitoring;
