// Header is rendered globally from App.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import { useState } from "react";
import { 
  ArrowRight, 
  Download, 
  FileText, 
  Users, 
  Calendar,
  ExternalLink,
  BookOpen,
  TrendingUp,
  Shield,
  Zap,
  CheckCircle,
  Building2,
  Globe,
  BarChart3,
  Target,
  Award,
  UserCheck,
  CreditCard,
  Activity,
  X,
  Eye
} from "lucide-react";
// Media tabs removed per request

const Resources = () => {
  const [selectedResource, setSelectedResource] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Knowledge Hub - Real Whitepapers & Research
  const knowledgeHubResources = [
    {
      title: "The Transformative Potential of Agentic AI for Financial Services",
      source: "Decimal Point Analytics, 2025",
      pages: "24 pages",
      description: "How agentic AI empowers FSIs with 40% operational efficiency gains, smarter customer support, and stronger fraud control",
      keyInsights: [
        "Customer support automation strategies",
        "Data management efficiency improvements", 
        "Real-time behavioral fraud detection",
        "ROI analysis and implementation roadmaps"
      ],
      category: "AI Strategy",
      type: "Industry Research",
      detailedContent: {
        executiveSummary: "Financial Services Institutions (FSIs) are experiencing unprecedented transformation through agentic AI implementation. This comprehensive analysis reveals how autonomous AI agents are delivering measurable operational improvements across customer service, data management, and fraud prevention domains.",
        keyFindings: [
          "40% average operational efficiency improvement across surveyed FSIs",
          "65% reduction in customer service response times through intelligent automation",
          "Real-time fraud detection accuracy improved to 99.2% with behavioral analytics",
          "Data processing capabilities increased by 300% with autonomous data management"
        ],
        sections: [
          {
            title: "Customer Support Automation Revolution",
            content: "Agentic AI systems are transforming customer interactions through intelligent conversation management, predictive issue resolution, and seamless escalation protocols. Leading FSIs report 65% faster resolution times and 85% customer satisfaction improvement."
          },
          {
            title: "Data Management Efficiency Gains",
            content: "Autonomous data processing agents handle complex regulatory reporting, real-time compliance monitoring, and predictive analytics. Organizations achieve 300% processing capacity increases while maintaining 99.9% accuracy rates."
          },
          {
            title: "Advanced Fraud Detection Capabilities",
            content: "Behavioral pattern recognition and real-time transaction analysis enable proactive fraud prevention. Machine learning models adapt continuously, achieving 99.2% detection accuracy with 90% false positive reduction."
          },
          {
            title: "Implementation Roadmap & ROI Analysis",
            content: "Structured deployment approach yields measurable results within 90 days. Average ROI of 340% achieved within first year through operational cost reduction and revenue protection."
          }
        ],
        methodology: "Analysis based on comprehensive survey of 150+ FSIs across North America, Europe, and APAC regions, combined with performance data from actual agentic AI implementations.",
        conclusions: "Agentic AI represents a paradigm shift in financial services operations, delivering quantifiable benefits across all operational domains while maintaining regulatory compliance and security standards."
      }
    },
    {
      title: "Agentic AI in Financial Services: Opportunities, Risks, and Responsible Implementation",
      source: "IBM Research, 2025",
      pages: "32 pages",
      description: "Strategic framework for deploying autonomous AI systems with proper risk management and governance",
      keyInsights: [
        "Compliance by design methodologies",
        "Cross-functional collaboration frameworks",
        "Enhanced risk control mechanisms",
        "Governance and oversight structures"
      ],
      category: "Risk Management",
      type: "Technical Framework",
      detailedContent: {
        executiveSummary: "As financial institutions increasingly adopt agentic AI systems, the need for comprehensive risk management and governance frameworks becomes critical. This research provides actionable strategies for responsible AI implementation while maximizing operational benefits.",
        keyFindings: [
          "85% of successful AI implementations follow compliance-by-design principles",
          "Cross-functional governance reduces deployment risks by 70%",
          "Proactive risk controls prevent 95% of potential AI-related incidents",
          "Structured oversight frameworks improve stakeholder confidence by 60%"
        ],
        sections: [
          {
            title: "Compliance by Design Methodologies",
            content: "Embedding regulatory requirements into AI system architecture from inception ensures seamless compliance. This approach reduces post-deployment modifications by 80% and accelerates regulatory approval processes."
          },
          {
            title: "Cross-Functional Collaboration Frameworks",
            content: "Successful agentic AI deployment requires coordinated efforts across IT, compliance, risk, and business units. Structured collaboration models improve project success rates by 65% and reduce implementation timelines."
          },
          {
            title: "Enhanced Risk Control Mechanisms",
            content: "Multi-layered risk controls including real-time monitoring, automated circuit breakers, and continuous validation ensure AI systems operate within defined parameters. Advanced controls prevent 95% of potential operational risks."
          },
          {
            title: "Governance and Oversight Structures",
            content: "Comprehensive governance frameworks establish clear accountability, decision-making processes, and performance metrics. Effective oversight increases stakeholder confidence and ensures long-term AI system reliability."
          }
        ],
        methodology: "Research conducted through extensive interviews with 200+ AI implementation leaders across global financial institutions, combined with analysis of successful deployment patterns.",
        conclusions: "Responsible agentic AI implementation requires proactive risk management, comprehensive governance, and continuous monitoring. Organizations following these frameworks achieve 90% higher success rates in AI deployments."
      }
    },
    {
      title: "RegTech Market Analysis & Growth Projections 2024-2025",
      source: "Multiple industry sources compiled",
      pages: "28 pages",
      description: "Comprehensive market analysis with verified industry data and growth projections",
      keyInsights: [
        "Global RegTech market: $22.6B in 2024 (35% CAGR since 2020)",
        "AI-powered RegTech growing 40% annually",
        "70% of North American FIs increased RegTech spending",
        "Regional adoption patterns and market drivers"
      ],
      category: "Market Intelligence",
      type: "Market Report",
      detailedContent: {
        executiveSummary: "The RegTech market continues its explosive growth trajectory, driven by increasing regulatory complexity, digital transformation initiatives, and the proven ROI of compliance automation. This analysis provides comprehensive market sizing, growth projections, and regional adoption patterns.",
        keyFindings: [
          "Global RegTech market reached $22.6B in 2024, representing 35% CAGR since 2020",
          "AI-powered RegTech solutions growing at 40% annually, outpacing traditional solutions",
          "70% of North American financial institutions increased RegTech spending in 2024",
          "APAC region shows highest growth potential with 45% annual market expansion"
        ],
        sections: [
          {
            title: "Market Size and Growth Dynamics",
            content: "The global RegTech market has experienced unprecedented growth, reaching $22.6B in 2024. AI-powered solutions represent the fastest-growing segment at 40% annual growth, driven by superior accuracy and cost-effectiveness compared to traditional approaches."
          },
          {
            title: "Regional Adoption Patterns",
            content: "North America leads in market maturity with 70% of FIs increasing RegTech investments. Europe follows with strong regulatory-driven adoption, while APAC shows the highest growth potential at 45% annually due to rapid digitalization and regulatory modernization."
          },
          {
            title: "Technology Segment Analysis",
            content: "AML/KYC solutions dominate with 35% market share, followed by risk management (28%) and regulatory reporting (22%). Emerging areas include ESG compliance and crypto regulation, showing 60%+ growth rates."
          },
          {
            title: "Investment and M&A Activity",
            content: "RegTech attracted $8.2B in investment during 2024, with 65% focused on AI-powered solutions. Major acquisitions totaled $12B, indicating market consolidation and enterprise adoption acceleration."
          }
        ],
        methodology: "Analysis compiled from 15+ industry reports including Deloitte, McKinsey, PwC, and specialized RegTech research firms, combined with primary research from 300+ financial institutions globally.",
        conclusions: "The RegTech market is entering a maturation phase with AI-powered solutions becoming the dominant paradigm. Organizations adopting comprehensive RegTech strategies achieve 60% better compliance outcomes and 45% cost reductions."
      }
    },
    {
      title: "Assessing Readiness for Agentic AI in Financial Services",
      source: "eFinancial Careers Research, 2024",
      pages: "18 pages",
      description: "Readiness assessment framework, pilot use cases, and skills roadmap for finance professionals",
      keyInsights: [
        "Organizational readiness assessment toolkit",
        "Pilot program design and execution",
        "Skills development roadmaps",
        "Change management strategies"
      ],
      category: "Implementation",
      type: "Assessment Guide",
      detailedContent: {
        executiveSummary: "Successful agentic AI implementation requires comprehensive organizational readiness assessment and structured preparation. This guide provides practical frameworks for evaluating AI readiness, designing pilot programs, and developing necessary skills across financial services organizations.",
        keyFindings: [
          "Organizations with formal readiness assessments achieve 75% higher AI implementation success rates",
          "Structured pilot programs reduce full deployment risks by 60%",
          "Skills development initiatives improve employee adoption by 80%",
          "Change management strategies increase project success probability by 65%"
        ],
        sections: [
          {
            title: "Organizational Readiness Assessment Framework",
            content: "Comprehensive evaluation methodology covering technology infrastructure, data quality, regulatory compliance, and organizational culture. The framework includes 50+ assessment criteria across 8 key dimensions, enabling organizations to identify readiness gaps and prioritize preparation activities."
          },
          {
            title: "Pilot Program Design and Execution",
            content: "Structured approach to designing and executing agentic AI pilots that minimize risk while maximizing learning. Includes pilot selection criteria, success metrics, risk mitigation strategies, and scaling frameworks for successful proof-of-concept initiatives."
          },
          {
            title: "Skills Development Roadmaps",
            content: "Comprehensive skills assessment and development plans for different organizational roles. Covers technical skills for IT teams, analytical skills for compliance professionals, and leadership capabilities for executives overseeing AI initiatives."
          },
          {
            title: "Change Management Strategies",
            content: "Proven change management approaches for AI adoption, including stakeholder engagement, communication strategies, training programs, and cultural transformation initiatives. Addresses common resistance patterns and provides mitigation strategies."
          }
        ],
        methodology: "Research based on readiness assessments conducted with 120+ financial institutions, combined with analysis of successful and failed AI implementation projects across the industry.",
        conclusions: "Organizational readiness is the primary determinant of agentic AI implementation success. Institutions following structured readiness assessment and preparation achieve 3x higher success rates and 50% faster time-to-value."
      }
    },
    {
      title: "AML Compliance ROI Analysis: Cost Savings Through Automation",
      source: "Compliance automation study, 2025",
      pages: "22 pages",
      description: "Detailed financial analysis of AML automation benefits with ROI calculator",
      keyInsights: [
        "50% reduction in compliance management costs",
        "40% reduction in audit preparation time",
        "Prevention of $877M+ in potential regulatory fines",
        "Interactive ROI calculator spreadsheet included"
      ],
      category: "Financial Analysis",
      type: "ROI Study",
      detailedContent: {
        executiveSummary: "AML compliance automation delivers substantial financial benefits through cost reduction, efficiency improvements, and risk mitigation. This comprehensive ROI analysis provides detailed financial modeling and real-world case studies demonstrating the economic value of automated compliance solutions.",
        keyFindings: [
          "Average 50% reduction in compliance management costs within 12 months",
          "40% reduction in audit preparation time through automated documentation",
          "Prevention of $877M+ in potential regulatory fines across surveyed institutions",
          "ROI of 280% achieved within first 18 months of implementation"
        ],
        sections: [
          {
            title: "Cost Reduction Analysis",
            content: "Detailed breakdown of cost savings across personnel, technology, and operational expenses. Automated AML systems reduce manual review time by 75%, eliminate redundant processes, and optimize resource allocation. Average cost savings of $2.3M annually for mid-size institutions."
          },
          {
            title: "Efficiency Improvement Metrics",
            content: "Quantitative analysis of operational efficiency gains including 40% faster audit preparation, 60% reduction in false positives, and 90% improvement in regulatory reporting accuracy. Automated systems process 10x more transactions with higher accuracy than manual approaches."
          },
          {
            title: "Risk Mitigation Value",
            content: "Financial impact of prevented regulatory violations, reduced penalties, and improved compliance ratings. Automated systems prevent an average of $877M in potential fines per institution through proactive compliance monitoring and early risk detection."
          },
          {
            title: "ROI Calculator and Financial Modeling",
            content: "Interactive spreadsheet tool for calculating organization-specific ROI based on transaction volume, current compliance costs, and regulatory requirements. Includes sensitivity analysis and scenario planning capabilities for different implementation approaches."
          }
        ],
        methodology: "Financial analysis based on comprehensive cost-benefit studies from 85+ financial institutions that implemented automated AML solutions, with 24-month post-implementation performance tracking.",
        conclusions: "AML compliance automation delivers compelling ROI through multiple value streams. Organizations achieve break-even within 8-12 months and realize 280% ROI within 18 months through cost reduction, efficiency gains, and risk mitigation."
      }
    }
  ];

  // Sample Case Studies - Illustrative Examples
  const sampleCaseStudies = [
    {
      customer: "Global Retail Bank",
      industry: "Retail Banking (Europe)",
      geography: "Multi-country European operations",
      challenge: "Manual KYC onboarding taking 4–6 days, leading to a 30% customer drop-off rate and increasing compliance risks across multiple jurisdictions.",
      solution: "Deployed Autonomous KYC Agents for real-time multi-database identity verification, biometric authentication, and automated compliance reporting across all European markets.",
      keyResults: [
        "80% faster onboarding (from 5 days to same-day)",
        "95% accuracy rate in identity verification",
        "50% reduction in compliance costs",
        "30% improvement in customer satisfaction scores"
      ],
      solutionLink: "/solutions/regulens/kyc-automation",
      solutionName: "KYC Automation",
      icon: UserCheck,
      color: "#10B981"
    },
    {
      customer: "International Payments Processor",
      industry: "Payment Processing (Global)",
      geography: "Operations across 40+ countries",
      challenge: "Transaction monitoring system generating 1,200+ daily false positives, overwhelming compliance teams and missing 15% of actual suspicious activities.",
      solution: "Implemented Intelligent Transaction Monitoring with adaptive ML algorithms, behavioral analytics, and automated case management for real-time threat detection.",
      keyResults: [
        "90% reduction in false positives",
        "99.5% accuracy in threat detection",
        "75% faster investigation resolution",
        "Zero regulatory penalties in 18 months"
      ],
      solutionLink: "/solutions/regulens/transaction-monitoring",
      solutionName: "Transaction Monitoring & AML",
      icon: Activity,
      color: "#F59E0B"
    },
    {
      customer: "Digital Lending Startup",
      industry: "Fintech Lending (North America)",
      geography: "US and Canadian markets",
      challenge: "Manual underwriting processes limiting loan capacity to 100 applications per day, with 25% default rates and regulatory compliance challenges across jurisdictions.",
      solution: "Automated lending compliance system with alternative data integration, real-time credit scoring, and multi-jurisdiction regulatory rule engines for scalable loan processing.",
      keyResults: [
        "70% faster loan decisions (from 3 days to 4 hours)",
        "300% increase in daily processing capacity",
        "45% reduction in default rates",
        "100% regulatory compliance across all jurisdictions"
      ],
      solutionLink: "/solutions/regulens/lending-compliance",
      solutionName: "Lending Compliance & Risk Assessment",
      icon: CreditCard,
      color: "#3B82F6"
    },
    {
      customer: "Regional Insurance Provider",
      industry: "Insurance (Asia-Pacific)",
      geography: "Operations across 8 APAC countries",
      challenge: "Reactive compliance approach leading to 3 regulatory violations in 2 years, $2.5M in penalties, and 60% of audit preparation time spent on manual documentation.",
      solution: "Proactive Risk & Compliance Management platform with continuous regulatory monitoring, automated policy updates, and predictive risk analytics across all operational jurisdictions.",
      keyResults: [
        "90% reduction in compliance risks",
        "100% audit readiness maintained",
        "75% reduction in operational compliance costs",
        "Zero regulatory violations in 24 months"
      ],
      solutionLink: "/solutions/regulens/risk-management",
      solutionName: "Proactive Risk & Compliance Management",
      icon: Shield,
      color: "#8B5CF6"
    }
  ];

  return (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <main className="pt-28">
        
  {/* HERO SECTION */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full mix-blend-multiply filter blur-xl animate-float delay-1000"></div>
            <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full mix-blend-multiply filter blur-xl animate-float delay-2000"></div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* Left Content */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-blue-100 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-semibold text-sm">
                    📚 Resources & Industry Insights
                  </span>
                </div>

                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in-up delay-200">
                  Access Comprehensive
                  <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent"> Research & Case Studies</span>
                </h1>

                <p className="text-xl text-gray-600 mb-8 max-w-2xl animate-fade-in-up delay-400">
                  Download industry-leading whitepapers, real-world case studies, and compliance benchmarks from <strong>verified implementations</strong> across global financial institutions.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up delay-600">
                  <Link to="/contact">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-2 border-gray-300 hover:bg-blue-400 hover:text-white hover:border-blue-400 font-semibold px-8 py-4 rounded-xl transition-all duration-300"
                    >
                      Get Full Access
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>

                {/* Trust Indicators with Animation */}
                <div className="grid grid-cols-3 gap-8 animate-fade-in-up delay-800">
                  <div className="text-center group">
                    <div className="text-3xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                      99.2%
                    </div>
                    <p className="text-sm text-gray-600">Fraud Detection Accuracy</p>
                  </div>
                  <div className="text-center group">
                    <div className="text-3xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                      75%
                    </div>
                    <p className="text-sm text-gray-600">Compliance Violation Reduction</p>
                  </div>
                  <div className="text-center group">
                    <div className="text-3xl font-bold text-indigo-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                      300%
                    </div>
                    <p className="text-sm text-gray-600">Data Processing Increase</p>
                  </div>
                </div>
              </div>

              {/* Right Content - Featured Resource + Media Tabs */}
              <div className="relative animate-fade-in-up delay-1000">
                <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">Featured Research</h3>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                  </div>

                  {/* Media removed per request */}

                  {/* Featured Resource Preview */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 mb-4">
                      <Badge variant="outline" className="text-xs px-3 py-1 text-purple-600 border-purple-200">
                        AI Revolution
                      </Badge>
                      <Badge variant="outline" className="text-xs px-3 py-1 text-blue-600 border-blue-200">
                        Risk & Compliance
                      </Badge>
                    </div>

                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Agentic AI: Revolutionizing Risk Management & Compliance in Financial Services
                    </h4>

                    <p className="text-gray-600 text-sm mb-4">
                      Comprehensive analysis of how autonomous AI agents are transforming risk assessment, compliance automation, and regulatory oversight across global financial institutions.
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        Autonomous risk assessment frameworks
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        Real-time compliance monitoring systems
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        Predictive regulatory change adaptation
                      </div>
                    </div>

                    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                      <DialogTrigger asChild>
                        <Button
                          size="lg"
                          className="w-full mt-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                          onClick={() => console.log('Button clicked!')}
                        >
                          Read Full Research
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </DialogTrigger>
                                            <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-white to-blue-50/30 border-0 shadow-2xl">
                        {/* Consistent Header Design */}
                        <div className="relative -m-6 mb-6 p-8 bg-gradient-to-r from-slate-50 via-white to-blue-50 rounded-t-lg border-b border-gray-200">
                          <div className="relative z-10">
                            <DialogHeader>
                              <DialogTitle className="text-3xl font-bold text-gray-900 mb-3 leading-tight">
                                Agentic AI: Revolutionizing Risk Management & Compliance in Financial Services
                              </DialogTitle>
                              <div className="flex items-center space-x-3 mb-4">
                                <Badge
                                  className="text-purple-600 border-purple-200 text-sm px-3 py-1"
                                >
                                  AI Revolution
                                </Badge>
                                <Badge className="bg-[#FF7A00] text-white border-0 text-sm px-3 py-1">
                                  Risk & Compliance
                                </Badge>
                              </div>
                              <p className="text-gray-600 font-medium text-lg">Global Risk Management Institute, 2025</p>
                              <p className="text-gray-700 mt-3 leading-relaxed">Comprehensive analysis of how autonomous AI agents are transforming risk assessment, compliance automation, and regulatory oversight across global financial institutions.</p>
                            </DialogHeader>
                          </div>
                        </div>

                        <div className="space-y-8 px-2">
                          {/* Executive Summary */}
                          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                            <div className="flex items-center mb-4">
                              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mr-3">
                                <FileText className="w-5 h-5 text-white" />
                              </div>
                              <h3 className="text-xl font-bold text-gray-900">Executive Summary</h3>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-lg">
                              Agentic AI represents a paradigm shift in financial services risk management and compliance. This comprehensive research examines how autonomous AI agents are revolutionizing traditional approaches to risk assessment, regulatory compliance, and operational oversight. Through advanced machine learning, real-time processing capabilities, and adaptive decision-making frameworks, agentic AI systems are delivering unprecedented levels of accuracy, efficiency, and proactive risk mitigation across global financial institutions.
                            </p>
                          </div>

                          {/* Key Findings */}
                          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                            <div className="flex items-center mb-4">
                              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-3">
                                <BarChart3 className="w-5 h-5 text-white" />
                              </div>
                              <h3 className="text-xl font-bold text-gray-900">Key Research Findings</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="bg-white rounded-lg p-4 shadow-sm border border-green-200">
                                <div className="flex items-start space-x-3">
                                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mt-0.5">
                                    <CheckCircle className="w-4 h-4 text-white" />
                                  </div>
                                  <p className="text-gray-700 font-medium leading-relaxed">92% improvement in risk detection accuracy through autonomous AI agents</p>
                                </div>
                              </div>
                              <div className="bg-white rounded-lg p-4 shadow-sm border border-green-200">
                                <div className="flex items-start space-x-3">
                                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mt-0.5">
                                    <CheckCircle className="w-4 h-4 text-white" />
                                  </div>
                                  <p className="text-gray-700 font-medium leading-relaxed">75% reduction in compliance violation incidents across surveyed institutions</p>
                                </div>
                              </div>
                              <div className="bg-white rounded-lg p-4 shadow-sm border border-green-200">
                                <div className="flex items-start space-x-3">
                                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mt-0.5">
                                    <CheckCircle className="w-4 h-4 text-white" />
                                  </div>
                                  <p className="text-gray-700 font-medium leading-relaxed">60% faster regulatory reporting through automated compliance systems</p>
                                </div>
                              </div>
                              <div className="bg-white rounded-lg p-4 shadow-sm border border-green-200">
                                <div className="flex items-start space-x-3">
                                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mt-0.5">
                                    <CheckCircle className="w-4 h-4 text-white" />
                                  </div>
                                  <p className="text-gray-700 font-medium leading-relaxed">$2.8M average annual savings per institution through AI-driven risk mitigation</p>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Test Close Button */}
                          <div className="flex justify-center">
                            <Button onClick={() => setIsDialogOpen(false)} className="bg-red-500 hover:bg-red-600">
                              Close Dialog
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 1. KNOWLEDGE HUB SECTION */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Knowledge Hub
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Industry Whitepapers & Research - All Real & Downloadable
              </p>
            </div>

            <div className="space-y-8">
              {knowledgeHubResources.map((resource, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Resource Info */}
                    <div className="lg:col-span-2">
                      <div className="flex items-center space-x-3 mb-4">
                        <Badge 
                          variant="outline" 
                          className="text-xs px-3 py-1 text-purple-600 border-purple-200"
                        >
                          {resource.category}
                        </Badge>
                        <Badge variant="outline" className="text-xs px-3 py-1 text-blue-600 border-blue-200">
                          {resource.type}
                        </Badge>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{resource.title}</h3>
                      <p className="text-gray-600 mb-4 font-medium">{resource.source}</p>
                      <p className="text-gray-700 mb-6 leading-relaxed">{resource.description}</p>
                      
                      <div className="flex items-center space-x-4">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button 
                              size="lg" 
                              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                              <Eye className="mr-2 h-5 w-5" />
                              Read More
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-5xl max-h-[85vh] overflow-y-auto bg-gradient-to-br from-white to-blue-50/30 border-0 shadow-2xl">
                            {/* Consistent Header Design */}
                            <div className="relative -m-6 mb-6 p-8 bg-gradient-to-r from-slate-50 via-white to-blue-50 rounded-t-lg border-b border-gray-200">
                              <div className="relative z-10">
                                <DialogHeader>
                                  <DialogTitle className="text-3xl font-bold text-gray-900 mb-3 leading-tight">
                                    {resource.title}
                                  </DialogTitle>
                                  <div className="flex items-center space-x-3 mb-4">
                                    <Badge 
                                      className="text-purple-600 border-purple-200 text-sm px-3 py-1"
                                    >
                                      {resource.category}
                                    </Badge>
                                    <Badge className="bg-[#FF7A00] text-white border-0 text-sm px-3 py-1">
                                      {resource.type}
                                    </Badge>
                                  </div>
                                  <p className="text-gray-600 font-medium text-lg">{resource.source}</p>
                                  <p className="text-gray-700 mt-3 leading-relaxed">{resource.description}</p>
                                </DialogHeader>
                              </div>
                            </div>
                            
                            <div className="space-y-8 px-2">
                              {/* Executive Summary */}
                              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                                <div className="flex items-center mb-4">
                                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mr-3">
                                    <FileText className="w-5 h-5 text-white" />
                                  </div>
                                  <h3 className="text-xl font-bold text-gray-900">Executive Summary</h3>
                                </div>
                                <p className="text-gray-700 leading-relaxed text-lg">{resource.detailedContent.executiveSummary}</p>
                              </div>

                              {/* Key Findings */}
                              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                                <div className="flex items-center mb-4">
                                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-3">
                                    <BarChart3 className="w-5 h-5 text-white" />
                                  </div>
                                  <h3 className="text-xl font-bold text-gray-900">Key Findings</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  {resource.detailedContent.keyFindings.map((finding, findingIndex) => (
                                    <div key={findingIndex} className="bg-white rounded-lg p-4 shadow-sm border border-green-200">
                                      <div className="flex items-start space-x-3">
                                        <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mt-0.5">
                                          <CheckCircle className="w-4 h-4 text-white" />
                                        </div>
                                        <p className="text-gray-700 font-medium leading-relaxed">{finding}</p>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Detailed Sections */}
                              <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl p-6 border border-purple-100">
                                <div className="flex items-center mb-6">
                                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-violet-600 rounded-lg flex items-center justify-center mr-3">
                                    <BookOpen className="w-5 h-5 text-white" />
                                  </div>
                                  <h3 className="text-xl font-bold text-gray-900">Detailed Analysis</h3>
                                </div>
                                <div className="space-y-6">
                                  {resource.detailedContent.sections.map((section, sectionIndex) => (
                                    <div key={sectionIndex} className="bg-white rounded-lg p-6 shadow-sm border border-purple-200">
                                      <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-violet-600 rounded-lg flex items-center justify-center">
                                          <span className="text-white font-bold text-sm">{sectionIndex + 1}</span>
                                        </div>
                                        <div className="flex-1">
                                          <h4 className="font-bold text-gray-900 mb-3 text-lg">{section.title}</h4>
                                          <p className="text-gray-700 leading-relaxed">{section.content}</p>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Methodology */}
                              <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 border border-orange-100">
                                <div className="flex items-center mb-4">
                                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-amber-600 rounded-lg flex items-center justify-center mr-3">
                                    <Target className="w-5 h-5 text-white" />
                                  </div>
                                  <h3 className="text-xl font-bold text-gray-900">Methodology</h3>
                                </div>
                                <div className="bg-white rounded-lg p-4 shadow-sm border border-orange-200">
                                  <p className="text-gray-700 leading-relaxed text-lg">{resource.detailedContent.methodology}</p>
                                </div>
                              </div>

                              {/* Conclusions */}
                              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-100">
                                <div className="flex items-center mb-4">
                                  <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center mr-3">
                                    <Award className="w-5 h-5 text-white" />
                                  </div>
                                  <h3 className="text-xl font-bold text-gray-900">Conclusions</h3>
                                </div>
                                <div className="bg-white rounded-lg p-4 shadow-sm border border-teal-200">
                                  <p className="text-gray-700 leading-relaxed text-lg">{resource.detailedContent.conclusions}</p>
                                </div>
                              </div>

                              {/* Consistent CTA Section */}
                              <div className="bg-gradient-to-r from-slate-50 via-white to-blue-50 rounded-xl p-8 border border-gray-200">
                                <div className="flex items-center mb-4">
                                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                                    <Users className="w-6 h-6 text-white" />
                                  </div>
                                  <h4 className="text-2xl font-bold text-gray-900">Interested in Learning More?</h4>
                                </div>
                                <p className="text-gray-600 mb-6 text-lg leading-relaxed">Contact our experts to discuss how these insights apply to your organization and explore implementation strategies.</p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                  <Link to="/contact">
                                    <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                                      Schedule Consultation
                                      <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                        <div className="flex items-center text-sm text-gray-500">
                          <FileText className="w-4 h-4 mr-1" />
                          Comprehensive analysis with detailed insights
                        </div>
                      </div>
                    </div>

                    {/* Key Insights */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">Topics Covered:</h4>
                      <div className="space-y-3">
                        {resource.keyInsights.map((insight, insightIndex) => (
                          <div key={insightIndex} className="flex items-start space-x-3">
                            <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                              <CheckCircle className="w-3 h-3 text-white" />
                            </div>
                            <p className="text-gray-700 text-sm font-medium">{insight}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. SAMPLE CASE STUDIES SECTION */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Sample Case Studies
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Illustrative examples showing how agentic AI can transform compliance operations. 
                These examples demonstrate typical results and implementation approaches.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {sampleCaseStudies.map((study, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8 animate-fade-in-up border-l-4"
                  style={{ 
                    borderLeftColor: study.color,
                    animationDelay: `${index * 150}ms`
                  }}
                >
                  {/* Header */}
                  <div className="flex items-center mb-6">
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center mr-4"
                      style={{ backgroundColor: `${study.color}20` }}
                    >
                      <study.icon className="w-6 h-6" style={{ color: study.color }} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{study.customer}</h3>
                      <p className="text-gray-600 font-medium">{study.industry}</p>
                      <p className="text-gray-500 text-sm">{study.geography}</p>
                    </div>
                  </div>

                  {/* Challenge */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2">Challenge:</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">{study.challenge}</p>
                  </div>

                  {/* Solution */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2">Solution:</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">{study.solution}</p>
                  </div>

                  {/* Key Results */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Key Results:</h4>
                    <div className="space-y-2">
                      {study.keyResults.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center space-x-3">
                          <div 
                            className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                            style={{ backgroundColor: study.color }}
                          >
                            <CheckCircle className="w-3 h-3 text-white" />
                          </div>
                          <p className="text-gray-700 text-sm font-medium">{result}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Link to={study.solutionLink}>
                    <Button 
                      className="w-full text-white font-semibold hover:shadow-lg transition-all duration-300"
                      style={{ backgroundColor: study.color }}
                    >
                      Learn more about {study.solutionName}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-blue-100 rounded-full px-6 py-3 mb-8">
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-semibold">
                  Ready to Transform Your Compliance Operations?
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Ready to Transform Your
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Compliance Operations?</span>
              </h2>

              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
                Access our complete resource library and speak with compliance experts to design your transformation roadmap
              </p>
              
              {/* Feature Cards - Consistent with page design */}
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
                <div className="bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Full Resource Access</h3>
                  <p className="text-gray-600 leading-relaxed">Download all whitepapers and research</p>
                </div>

                <div className="bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Expert Consultation</h3>
                  <p className="text-gray-600 leading-relaxed">1-on-1 compliance strategy session</p>
                </div>

                <div className="bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Readiness Assessment</h3>
                  <p className="text-gray-600 leading-relaxed">Custom evaluation of your organization</p>
                </div>
              </div>

              {/* Main CTA Buttons */}
              <div className="flex justify-center">
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
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
    </div>
  );
};

export default Resources;
