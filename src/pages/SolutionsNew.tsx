// Header is rendered globally from App.tsx
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  AlertTriangle, 
  UserCheck, 
  CreditCard, 
  Activity, 
  Shield, 
  TrendingUp, 
  ArrowRight,
  CheckCircle,
  Zap,
  Target,
  BarChart3,
  Clock,
  DollarSign,
  Globe,
  Database,
  Eye,
  Brain,
  Network,
  FileText,
  Building2,
  Briefcase,
  PiggyBank,
  Landmark,
  Smartphone,
  Users,
  Settings,
  Lock,
  Code,
  Layers,
  Monitor,
  Calculator,
  Calendar,
  MessageCircle,
  Star,
  Award,
  Gauge
} from "lucide-react";

const Solutions = () => {
  // Core Solutions Data
  const coreSolutions = [
    {
      id: "kyc-automation",
      title: "Autonomous KYC & Identity Verification",
      subtitle: "Real-time identity verification with 99.2% accuracy",
      problem: "Manual identity verification takes 5-7 days, causing 40% customer abandonment",
      solution: "Multi-source identity verification in real-time with biometric authentication and continuous risk monitoring",
      icon: UserCheck,
      color: "#10B981",
      bgGradient: "from-green-500 to-emerald-600",
      capabilities: [
        "OCR with handwriting recognition",
        "Facial recognition and anti-spoofing", 
        "Database checks across 50+ global sources",
        "ML-powered fraud pattern detection",
        "Automated compliance reporting"
      ],
      regulations: ["KYC", "CDD", "EDD", "AML", "GDPR", "CCPA"],
      industries: ["Banking", "Insurance", "Fintech", "Wealth Management"],
      metrics: {
        speed: "85% faster processing",
        cost: "60% cost reduction", 
        accuracy: "99.2% accuracy"
      },
      href: "/solutions/kyc-automation"
    },
    {
      id: "transaction-monitoring",
      title: "Intelligent Transaction Monitoring & AML",
      subtitle: "90% false positive reduction with 99.5% threat detection",
      problem: "1000+ daily false positives overwhelming compliance teams",
      solution: "Real-time transaction analysis with behavioral modeling and adaptive ML algorithms",
      icon: Activity,
      color: "#F59E0B",
      bgGradient: "from-amber-500 to-orange-600",
      capabilities: [
        "Stream processing for real-time analysis",
        "Graph databases for relationship mapping",
        "Behavioral analytics and anomaly detection",
        "Sanctions screening and PEP monitoring",
        "Case management automation"
      ],
      regulations: ["AML", "BSA", "FATF", "OFAC", "EU AML Directives"],
      industries: ["Banks", "Payment Processors", "Cryptocurrency", "Remittance"],
      metrics: {
        speed: "90% false positive reduction",
        cost: "75% faster investigations",
        accuracy: "99.5% threat detection"
      },
      href: "/solutions/transaction-monitoring"
    },
    {
      id: "lending-compliance",
      title: "Lending Compliance & Risk Assessment",
      subtitle: "70% faster decisions with 45% lower defaults",
      problem: "Manual underwriting limiting loan capacity and increasing defaults",
      solution: "Automated credit risk assessment using alternative data with real-time compliance checking",
      icon: CreditCard,
      color: "#3B82F6",
      bgGradient: "from-blue-500 to-indigo-600",
      capabilities: [
        "Alternative data integration (social, mobile, utility)",
        "ML credit scoring models",
        "Income and employment verification",
        "Regulatory rule engines",
        "Automated decision documentation"
      ],
      regulations: ["Capital Requirements", "Fair Lending", "Credit Assessment", "Consumer Protection", "Anti-Discrimination"],
      industries: ["Banks", "Credit Unions", "Fintech Lenders", "NBFC"],
      metrics: {
        speed: "70% faster decisions",
        cost: "300% loan volume increase",
        accuracy: "45% lower defaults"
      },
      href: "/solutions/lending-compliance"
    },
    {
      id: "risk-management",
      title: "Proactive Risk & Compliance Management",
      subtitle: "90% risk reduction with 100% audit readiness",
      problem: "Reactive compliance approach leading to violations and penalties",
      solution: "Continuous regulatory change monitoring with automated policy updates and predictive analytics",
      icon: Shield,
      color: "#8B5CF6",
      bgGradient: "from-purple-500 to-violet-600",
      capabilities: [
        "Regulatory API integrations",
        "Policy automation engines",
        "Predictive risk modeling",
        "Audit trail immutability",
        "Compliance workflow orchestration"
      ],
      regulations: ["Financial Controls", "Risk Frameworks", "Security Standards", "Payment Security", "Industry Best Practices"],
      industries: ["All BFSI sectors requiring regulatory compliance"],
      metrics: {
        speed: "90% risk reduction",
        cost: "75% operational savings",
        accuracy: "100% audit readiness"
      },
      href: "/solutions/risk-management"
    }
  ];

  return (
  <div className="min-h-screen bg-white">
      <main className="pt-16">
        
        {/* 1. ENHANCED HERO SECTION */}
        <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#0052CC] to-[#00A3CC]">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-white rounded-full blur-2xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-white rounded-full blur-3xl animate-pulse delay-2000"></div>
            <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-white rounded-full blur-2xl animate-pulse delay-500"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto text-center">
              {/* Main Headline */}
              <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight animate-fade-in-up">
                Complete Agentic AI Suite for
                <br />
                <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Financial Compliance
                </span>
              </h1>
              
              {/* Subheadline */}
              <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-5xl mx-auto leading-relaxed animate-fade-in-up delay-200">
                End-to-end autonomous compliance solutions that eliminate manual processes, 
                reduce costs by 75%, and ensure 100% regulatory adherence across all BFSI operations
              </p>
              
              {/* Trust Indicators */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12 animate-fade-in-up delay-400">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="text-3xl font-bold text-white mb-2">500+</div>
                  <div className="text-blue-100 text-sm">Trusted by financial institutions worldwide</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="text-3xl font-bold text-white mb-2">$2.1B</div>
                  <div className="text-blue-100 text-sm">In compliance costs saved</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                  <div className="text-blue-100 text-sm">Accuracy rate across all solutions</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-600">
                <Link to="/contact">
                  <Button size="lg" className="bg-[#FF7A00] hover:bg-[#E56A00] text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    Start Your Transformation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-[#0052CC] transition-all duration-300"
                  >
                    <Calculator className="mr-2 h-5 w-5" />
                    Calculate ROI
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 2. EXPANDED SOLUTION DEEP-DIVES */}
        <section className="py-20 bg-[#F8FAFC]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Four Core Solutions, Infinite Possibilities
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Each solution works independently or as part of an integrated compliance ecosystem
              </p>
            </div>

            <div className="space-y-16">
              {coreSolutions.map((solution, index) => (
                <div key={solution.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Content */}
                  <div className={`animate-fade-in-up ${index % 2 === 1 ? 'lg:order-2' : ''}`} style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="flex items-center mb-6">
                      <div 
                        className="w-16 h-16 rounded-lg flex items-center justify-center mr-4"
                        style={{ backgroundColor: `${solution.color}20` }}
                      >
                        <solution.icon className="w-8 h-8" style={{ color: solution.color }} />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900">{solution.title}</h3>
                        <p className="text-lg text-gray-600 font-medium">{solution.subtitle}</p>
                      </div>
                    </div>

                    {/* Problem & Solution */}
                    <div className="space-y-6 mb-8">
                      <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
                        <h4 className="font-semibold text-red-800 mb-2">Current Problem:</h4>
                        <p className="text-red-700">{solution.problem}</p>
                      </div>
                      <div className="p-4 border-l-4 rounded-r-lg" style={{ 
                        backgroundColor: `${solution.color}10`, 
                        borderLeftColor: solution.color 
                      }}>
                        <h4 className="font-semibold mb-2" style={{ color: solution.color }}>Our Solution:</h4>
                        <p className="text-gray-700">{solution.solution}</p>
                      </div>
                    </div>

                    {/* Technical Capabilities */}
                    <div className="mb-8">
                      <h4 className="font-semibold text-gray-900 mb-4">Technical Capabilities:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {solution.capabilities.map((capability, capIndex) => (
                          <div key={capIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4" style={{ color: solution.color }} />
                            <span className="text-gray-700 text-sm">{capability}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                      <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                        <div className="text-2xl font-bold" style={{ color: solution.color }}>
                          {solution.metrics.speed.split(' ')[0]}
                        </div>
                        <div className="text-sm text-gray-600">{solution.metrics.speed.split(' ').slice(1).join(' ')}</div>
                      </div>
                      <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                        <div className="text-2xl font-bold" style={{ color: solution.color }}>
                          {solution.metrics.cost.split(' ')[0]}
                        </div>
                        <div className="text-sm text-gray-600">{solution.metrics.cost.split(' ').slice(1).join(' ')}</div>
                      </div>
                      <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                        <div className="text-2xl font-bold" style={{ color: solution.color }}>
                          {solution.metrics.accuracy.split(' ')[0]}
                        </div>
                        <div className="text-sm text-gray-600">{solution.metrics.accuracy.split(' ').slice(1).join(' ')}</div>
                      </div>
                    </div>

                    {/* CTA */}
                    <Link to={solution.href}>
                      <Button 
                        size="lg" 
                        className="text-white px-8 py-3 font-semibold hover:shadow-lg transition-all duration-300"
                        style={{ backgroundColor: solution.color }}
                      >
                        Explore {solution.title.split(' ')[0]} Solution
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>

                  {/* Visual/Info Panel */}
                  <div className={`animate-fade-in-up ${index % 2 === 1 ? 'lg:order-1' : ''}`} style={{ animationDelay: `${index * 100 + 200}ms` }}>
                    <div className="bg-white rounded-2xl shadow-xl p-8">
                      <div className="space-y-6">
                        {/* Regulatory Coverage */}
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Regulatory Coverage:</h4>
                          <div className="flex flex-wrap gap-2">
                            {solution.regulations.map((reg, regIndex) => (
                              <Badge key={regIndex} variant="secondary" className="text-xs" style={{ backgroundColor: `${solution.color}20`, color: solution.color }}>
                                {reg}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Industries */}
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Industries:</h4>
                          <div className="space-y-2">
                            {solution.industries.map((industry, indIndex) => (
                              <div key={indIndex} className="flex items-center space-x-2">
                                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: solution.color }}></div>
                                <span className="text-gray-700 text-sm">{industry}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-20 bg-gradient-to-br from-[#0052CC] to-[#00A3CC]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 animate-fade-in-up">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Compliance Operations?
                </h2>
                <p className="text-xl text-blue-100 max-w-4xl mx-auto">
                  Join 500+ financial institutions who have revolutionized their operations with our agentic AI platform
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {/* Solution-Specific Demos */}
                <Link to="/contact" className="group">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                    <Monitor className="w-8 h-8 text-white mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-lg font-semibold text-white mb-2">Tailored Demo</h3>
                    <p className="text-blue-100 text-sm">Solution-specific demonstration</p>
                  </div>
                </Link>

                {/* ROI Calculator */}
                <Link to="/contact" className="group">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                    <Calculator className="w-8 h-8 text-white mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-lg font-semibold text-white mb-2">ROI Calculator</h3>
                    <p className="text-blue-100 text-sm">Calculate potential savings</p>
                  </div>
                </Link>

                {/* Pilot Program */}
                <Link to="/contact" className="group">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                    <Target className="w-8 h-8 text-white mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-lg font-semibold text-white mb-2">30-Day Trial</h3>
                    <p className="text-blue-100 text-sm">Risk-free pilot program</p>
                  </div>
                </Link>

                {/* Expert Consultation */}
                <Link to="/contact" className="group">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                    <MessageCircle className="w-8 h-8 text-white mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-lg font-semibold text-white mb-2">Expert Consultation</h3>
                    <p className="text-blue-100 text-sm">1-on-1 compliance review</p>
                  </div>
                </Link>
              </div>

              {/* Main CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
                <Link to="/contact">
                  <Button size="lg" className="bg-[#FF7A00] hover:bg-[#E56A00] text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    Start Your Transformation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-[#0052CC] transition-all duration-300"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Schedule Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Solutions;
