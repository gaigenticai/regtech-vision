import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  TrendingUp, 
  Eye, 
  Shield, 
  Search, 
  FileText, 
  ClipboardCheck, 
  BookOpen, 
  Radio,
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const AgentsShowcase = () => {
  const [hoveredAgent, setHoveredAgent] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // All 11 agents - 4 existing + 7 additional with comprehensive details
  const allAgents = [
    {
      id: 1,
      icon: Brain,
      title: "KYC Agent",
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
      demoLink: "/solutions/kyc-automation"
    },
    {
      id: 2,
      icon: TrendingUp,
      title: "Lending Agent",
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
      demoLink: "/solutions/lending-compliance"
    },
    {
      id: 3,
      icon: Eye,
      title: "Transaction Monitoring Agent",
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
      demoLink: "/solutions/transaction-monitoring"
    },
    {
      id: 4,
      icon: Shield,
      title: "Risk & Compliance Agent",
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
      demoLink: "/solutions/risk-management"
    },
    {
      id: 5,
      icon: Search,
      title: "Sanctions Screening Agent",
      subtitle: "99.8% match accuracy with <2s screening time",
      description: "Automated sanctions, PEP, and adverse media screening across 50+ global databases in real-time",
      problemHeadline: "Manual screening processes taking hours, missing critical matches, and causing compliance gaps",
      metrics: { primary: "99.8%", secondary: "<2s", label1: "Match Accuracy", label2: "Screening Time" },
      features: ["OFAC screening", "PEP detection", "Adverse media", "Watchlist monitoring"],
      technicalHighlights: ["50+ global database sources", "Fuzzy matching algorithms", "Real-time list updates", "Multi-jurisdiction coverage"],
      regulatory: ["OFAC", "UN Sanctions", "EU Sanctions", "UK Sanctions", "FATF"],
      industries: ["Banks", "Payment Processors", "Money Service Businesses", "Cryptocurrency"],
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-50 hover:bg-indigo-100",
      demoLink: "/solutions/sanctions-screening"
    },
    {
      id: 6,
      icon: FileText,
      title: "Case Management Agent",
      subtitle: "75% time saved with 60% automated SAR generation",
      description: "Intelligent investigation case management with automated SAR generation and workflow orchestration",
      problemHeadline: "Case backlogs growing, manual SAR filing errors, and inconsistent investigation workflows",
      metrics: { primary: "75%", secondary: "60%", label1: "Time Saved", label2: "Auto-SAR Rate" },
      features: ["Case investigation", "SAR generation", "Workflow automation", "Evidence collection"],
      technicalHighlights: ["AI-powered case prioritization", "Automated SAR form filling", "Workflow orchestration", "Evidence linking"],
      regulatory: ["BSA", "FATF", "FinCEN", "EU AML Directives"],
      industries: ["Banks", "MSBs", "Casinos", "Securities Firms"],
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-50 hover:bg-teal-100",
      demoLink: "/solutions/case-management"
    },
    {
      id: 7,
      icon: ClipboardCheck,
      title: "Audit & Evidence Agent",
      subtitle: "100% audit coverage with 24/7 monitoring",
      description: "Model governance, audit trails, and automated evidence collection for regulatory compliance",
      problemHeadline: "Fragmented audit trails, manual evidence collection, and compliance gaps in model governance",
      metrics: { primary: "100%", secondary: "24/7", label1: "Audit Coverage", label2: "Monitoring" },
      features: ["Audit trails", "Evidence collection", "Model governance", "Compliance reporting"],
      technicalHighlights: ["Immutable audit logs", "Automated evidence gathering", "Model explainability", "Regulatory reporting"],
      regulatory: ["Model Risk Management", "SR 11-7", "GDPR", "CCPA"],
      industries: ["Banks", "Fintech", "Credit Unions", "Investment Firms"],
      color: "from-violet-500 to-purple-500",
      bgColor: "bg-violet-50 hover:bg-violet-100",
      demoLink: "/solutions/audit-evidence"
    },
    {
      id: 8,
      icon: BookOpen,
      title: "Policy Governance Agent",
      subtitle: "95% policy coverage with automated updates",
      description: "Automated policy management, framework mapping, and compliance control validation",
      problemHeadline: "Policy gaps, manual framework mapping, and inconsistent control validation processes",
      metrics: { primary: "95%", secondary: "Auto", label1: "Policy Coverage", label2: "Updates" },
      features: ["Policy automation", "Framework mapping", "Control validation", "Attestation workflows"],
      technicalHighlights: ["Automated policy generation", "Framework compliance mapping", "Control testing automation", "Attestation workflows"],
      regulatory: ["COSO", "COBIT", "NIST", "ISO 27001"],
      industries: ["All BFSI sectors"],
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50 hover:bg-amber-100",
      demoLink: "/solutions/policy-governance"
    },
    {
      id: 9,
      icon: Radio,
      title: "Regulatory Intelligence Agent",
      subtitle: "Real-time monitoring across 50+ regulatory sources",
      description: "Real-time regulatory change monitoring, impact analysis, and compliance gap identification",
      problemHeadline: "Missing regulatory updates, manual impact assessment, and delayed compliance implementation",
      metrics: { primary: "Real-time", secondary: "50+", label1: "Monitoring", label2: "Sources" },
      features: ["Regulatory updates", "Impact analysis", "Gap identification", "Change alerts"],
      technicalHighlights: ["NLP for regulatory text", "Impact assessment algorithms", "Gap analysis automation", "Multi-jurisdiction tracking"],
      regulatory: ["All Global Frameworks", "FATF", "Basel", "MiFID II"],
      industries: ["All BFSI sectors"],
      color: "from-rose-500 to-pink-500",
      bgColor: "bg-rose-50 hover:bg-rose-100",
      demoLink: "/solutions/regulatory-intelligence"
    },
    {
      id: 10,
      icon: Shield,
      title: "Fraud Detection Agent",
      subtitle: "98.5% detection rate with real-time analysis",
      description: "Advanced ML-powered fraud detection with behavioral analysis and anomaly detection",
      problemHeadline: "Rising fraud losses, delayed detection, and high false positive rates overwhelming teams",
      metrics: { primary: "98.5%", secondary: "Real-time", label1: "Detection Rate", label2: "Analysis" },
      features: ["Behavioral analysis", "Anomaly detection", "ML models", "Real-time alerts"],
      technicalHighlights: ["Deep learning models", "Behavioral biometrics", "Network analysis", "Real-time scoring"],
      regulatory: ["PCI-DSS", "Regulation E", "PSD2", "Fraud Prevention"],
      industries: ["Banks", "Payment Processors", "E-commerce", "Fintech"],
      color: "from-red-500 to-rose-500",
      bgColor: "bg-red-50 hover:bg-red-100",
      demoLink: "/solutions/fraud-detection"
    },
    {
      id: 11,
      icon: Brain,
      title: "Document Intelligence Agent",
      subtitle: "99.5% extraction accuracy, 10x faster processing",
      description: "AI-powered document processing, extraction, and validation for compliance workflows",
      problemHeadline: "Manual document review taking days, extraction errors, and inconsistent data validation",
      metrics: { primary: "99.5%", secondary: "10x", label1: "Extraction Accuracy", label2: "Faster" },
      features: ["OCR processing", "Data extraction", "Document validation", "Multi-format support"],
      technicalHighlights: ["Advanced OCR with 180+ formats", "Intelligent data extraction", "Document validation", "Multi-language support"],
      regulatory: ["KYC", "CDD", "Documentation Requirements"],
      industries: ["Banks", "Insurance", "Legal", "Real Estate"],
      color: "from-sky-500 to-blue-500",
      bgColor: "bg-sky-50 hover:bg-sky-100",
      demoLink: "/solutions/document-intelligence"
    }
  ];

  const checkScrollability = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollability();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollability);
      window.addEventListener('resize', checkScrollability);
      return () => {
        container.removeEventListener('scroll', checkScrollability);
        window.removeEventListener('resize', checkScrollability);
      };
    }
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    if (isPaused) {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
        autoScrollIntervalRef.current = null;
      }
      return;
    }

    autoScrollIntervalRef.current = setInterval(() => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const { scrollLeft, scrollWidth, clientWidth } = container;
        const cardWidth = 420; // Approximate card width + gap
        const scrollAmount = cardWidth;

        // Check if we've reached the end
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          // Smoothly scroll back to the beginning
          container.scrollTo({
            left: 0,
            behavior: 'smooth'
          });
        } else {
          // Scroll forward by one card width
          container.scrollTo({
            left: scrollLeft + scrollAmount,
            behavior: 'smooth'
          });
        }
      }
    }, 4000); // Scroll every 4 seconds (not too fast)

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
        autoScrollIntervalRef.current = null;
      }
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
        resumeTimeoutRef.current = null;
      }
    };
  }, [isPaused]);

  // Pause auto-scroll on hover
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  // Pause auto-scroll on manual scroll
  const handleScroll = () => {
    checkScrollability();
    setIsPaused(true);
    
    // Clear any existing resume timeout
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }
    
    // Resume after 5 seconds of no interaction
    resumeTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
      resumeTimeoutRef.current = null;
    }, 5000);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      setIsPaused(true); // Pause auto-scroll when manually scrolling
      
      // Clear any existing resume timeout
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
      }
      
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
      const newScrollLeft = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
      
      // Resume auto-scroll after 5 seconds
      resumeTimeoutRef.current = setTimeout(() => {
        setIsPaused(false);
        resumeTimeoutRef.current = null;
      }, 5000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-float delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-purple-600 border-purple-200 bg-purple-50">
            🤖 Complete Agent Suite
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Autonomous AI Agents</span>
            <br />
            Powering Your Compliance Operations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Deploy specialized AI agents that work together seamlessly to automate every aspect of financial compliance
          </p>
        </div>

        {/* Scroll Controls - Desktop */}
        <div className="hidden md:flex justify-end mb-6 gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className="rounded-full border-2 hover:bg-purple-50 disabled:opacity-30"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className="rounded-full border-2 hover:bg-purple-50 disabled:opacity-30"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Horizontal Scrolling Container */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-6 snap-x snap-mandatory scroll-smooth"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onScroll={handleScroll}
        >
          {allAgents.map((agent) => (
            <Card
              key={agent.id}
              className={`group relative flex-shrink-0 w-[380px] md:w-[420px] border-2 border-transparent hover:border-gray-200 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl snap-start ${agent.bgColor}`}
              onMouseEnter={() => setHoveredAgent(agent.id)}
              onMouseLeave={() => setHoveredAgent(null)}
            >
              <CardContent className="p-8 h-full flex flex-col">
                {/* Card Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${agent.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <agent.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">{agent.metrics.primary}</div>
                    <div className="text-sm text-gray-600">{agent.metrics.label1}</div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {agent.title}
                </h3>
                {agent.subtitle && (
                  <p className="text-sm font-semibold text-purple-600 mb-3">
                    {agent.subtitle}
                  </p>
                )}
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {agent.description}
                </p>

                {/* Problem Statement */}
                {agent.problemHeadline && (
                  <div className="mb-4 p-3 bg-red-50 border-l-4 border-red-400 rounded-r">
                    <p className="text-xs text-red-700 font-medium leading-relaxed">
                      {agent.problemHeadline}
                    </p>
                  </div>
                )}

                {/* Features List */}
                <div className="space-y-2 mb-4">
                  {agent.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-xs text-gray-600">
                      <div className={`w-1.5 h-1.5 bg-gradient-to-r ${agent.color} rounded-full mr-2 flex-shrink-0`}></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Technical Highlights */}
                {agent.technicalHighlights && (
                  <div className="mb-4 p-3 bg-white/50 rounded-lg border border-gray-200">
                    <p className="text-xs font-semibold text-gray-700 mb-2">Technical Capabilities:</p>
                    <div className="space-y-1">
                      {agent.technicalHighlights.slice(0, 2).map((highlight, index) => (
                        <div key={index} className="flex items-start text-xs text-gray-600">
                          <span className="mr-2">•</span>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Regulatory & Industries */}
                {(agent.regulatory || agent.industries) && (
                  <div className="mb-4 grid grid-cols-2 gap-2">
                    {agent.regulatory && (
                      <div className="p-2 bg-white/50 rounded border border-gray-200">
                        <p className="text-xs font-semibold text-gray-700 mb-1">Regulatory:</p>
                        <div className="flex flex-wrap gap-1">
                          {agent.regulatory.slice(0, 2).map((reg, idx) => (
                            <span key={idx} className="text-xs px-1.5 py-0.5 bg-gray-100 text-gray-700 rounded">
                              {reg}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {agent.industries && (
                      <div className="p-2 bg-white/50 rounded border border-gray-200">
                        <p className="text-xs font-semibold text-gray-700 mb-1">Industries:</p>
                        <div className="flex flex-wrap gap-1">
                          {agent.industries.slice(0, 2).map((industry, idx) => (
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
                <div className="flex items-center justify-between mb-6 p-4 bg-white/70 rounded-lg backdrop-blur-sm">
                  <div>
                    <div className="text-lg font-bold text-gray-900">{agent.metrics.secondary}</div>
                    <div className="text-sm text-gray-600">{agent.metrics.label2}</div>
                  </div>
                  <div className={`px-3 py-1 bg-gradient-to-r ${agent.color} text-white text-xs font-semibold rounded-full shadow-sm`}>
                    Enterprise Ready
                  </div>
                </div>

                {/* CTA Button */}
                <Link to={agent.demoLink} className="w-full block">
                  <Button
                    className={`w-full bg-gradient-to-r ${agent.color} hover:opacity-90 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl ${
                      hoveredAgent === agent.id ? 'transform scale-105' : ''
                    }`}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>

                {/* Hover Overlay */}
                {hoveredAgent === agent.id && (
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none rounded-lg">
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-gray-800 shadow-sm">
                      Live Demo Available
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile Scroll Indicator */}
        <div className="md:hidden text-center mt-4">
          <p className="text-sm text-gray-500">← Swipe to explore all agents →</p>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link to="/solutions">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
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

export default AgentsShowcase;

