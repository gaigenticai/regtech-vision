// Header is rendered globally from App.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Users, 
  Award, 
  MapPin, 
  Mail, 
  Phone, 
  Linkedin, 
  Twitter, 
  Github,
  Building2,
  TrendingUp,
  Globe,
  Heart,
  Shield,
  Lightbulb,
  Target,
  Calendar
} from "lucide-react";

const About = () => {
  const companyValues = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Pioneering cutting-edge agentic AI solutions that transform how financial services teams run high-volume workflows."
    },
    {
      icon: Shield,
      title: "Trust",
      description: "Building secure, reliable, and transparent AI systems that financial institutions can depend on."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Delivering exceptional results through rigorous engineering, comprehensive testing, and continuous improvement."
    },
    {
      icon: Globe,
      title: "Transparency",
      description: "Maintaining open communication with clients, clear AI decision-making processes, and ethical business practices."
    }
  ];

  const leadership = [
    {
      name: "Auke D Veenstra",
      title: "CEO & Co-Founder",
      background: "Experienced entrepreneur and business leader with a strong background in technology and financial services. Founded and scaled multiple successful ventures, bringing deep expertise in business development, strategic partnerships, and market expansion. Passionate about leveraging AI to solve complex operational challenges across the financial sector.",
      education: "Master Degree in Business Law & Civil Law from University of Groningen",
      expertise: ["Entrepreneurship", "Business Development", "Strategic Partnerships", "Financial Technology"],
  image: "https://i.ibb.co/dJXP4JWR/Auke.jpg",
      linkedin: "https://www.linkedin.com/in/auke-d-veenstra-922311221/"
    },
    {
      name: "Krishna Kumar",
      title: "CPO & Co-Founder",
      background: "Experienced product leader with deep expertise in AI-driven solutions and financial technology. Proven track record in building innovative products that solve complex business challenges. Strong background in product strategy, user experience design, and technology implementation across enterprise environments.",
      education: "MBA from University of Madras",
      expertise: ["Product Strategy", "AI/ML Products", "User Experience", "Technology Leadership"],
  image: "https://i.ibb.co/MyprDcTj/Krishna.jpg",
      linkedin: "https://www.linkedin.com/in/krishnakumarkr/"
    }
  ];

  const advisors = [
    {
      name: "Vincent Bouwens",
      title: "Senior Advisor - Risk & Compliance",
      background: "Seasoned risk and compliance professional with extensive experience in financial services regulatory frameworks and risk management.",
      expertise: "Risk Management, Regulatory Compliance, AML/KYC, Operational Risk",
  image: "https://i.ibb.co/t71gY3Y/Vincent-Bouwens.jpg",
      linkedin: "https://www.linkedin.com/in/vincent-bouwens-86b32321/"
    },
    {
      name: "Marco Bosma",
      title: "Senior Advisor - Banking",
      background: "Experienced banking professional with comprehensive knowledge of financial operations and compliance requirements.",
      expertise: "Banking Operations, Compliance, Payment Systems, Regulatory Reporting",
  image: "https://i.ibb.co/1GMYRLsB/Marco-Bosma.jpg",
      linkedin: "https://www.linkedin.com/in/marco-bosma-9827333/"
    }
    ,
    {
      name: "Bert Daniel",
      title: "Senior Advisor - Trade Finance",
      background: "Experienced trade finance professional with deep expertise in trade operations, letters of credit, and cross-border payments.",
      expertise: "Trade Finance, Payment Systems, Letters of Credit, Trade Risk",
      image: "https://i.ibb.co/BHhcMvCH/bert.jpg",
      linkedin: "https://www.linkedin.com/in/bert-daniel-7a809039/"
    }
  ];

  const companyStats = [
    { metric: "200+", label: "Years Combined Experience", description: "Combined expertise in finance and AI" },
    { metric: "Seed", label: "Funding Stage", description: "Early-stage startup focused on innovation" },
    { metric: "10+", label: "Pilot Programs", description: "Working with select financial institutions" },
    { metric: "15+", label: "Team Members", description: "AI experts and financial services professionals" },
    { metric: "99.9%", label: "System Uptime", description: "Enterprise-grade reliability" },
    { metric: "75%", label: "Average Cost Savings", description: "For our clients within 12 months" }
  ];

  const testimonials = [
    {
      quote: "As a pilot partner, we've been impressed with the team's innovative approach and the potential of their AI solution for streamlining our day-to-day operations.",
      author: "Operations Leader",
      company: "Regional Credit Union",
      industry: "Banking"
    },
    {
      quote: "The team's deep understanding of both AI technology and financial regulations gives us confidence in their ability to deliver a game-changing solution.",
      author: "CTO", 
      company: "Digital Lending Startup",
      industry: "Fintech"
    },
    {
      quote: "Working with this startup has been refreshing — their agile approach and focus on real workflow automation is exactly what the industry needs.",
      author: "Head of Risk",
      company: "Community Bank",
      industry: "Banking"
    }
  ];

  const awards = [
    {
      title: "TechCrunch Startup Battlefield Finalist",
      organization: "TechCrunch",
      year: "2025"
    },
    {
      title: "Fintech Innovation Award",
      organization: "Local Fintech Association",
      year: "2025"
    }
  ];

  const partners = [
    {
      category: "Technology Partners",
      companies: ["AWS", "Google Cloud", "Microsoft Azure"]
    },
    {
      category: "Industry Partners", 
      companies: ["Fintech Association", "Compliance Week", "RegTech Network"]
    }
  ];

  const investors = [
    "Angel Investors", "Early-stage VC Funds", "Strategic Partners"
  ];



    const offices = [
    {
      city: "San Francisco",
      address: "123 Tech Street, San Francisco, CA 94105, USA",
      phone: "+1 (555) 123-4567",
      email: "hello@gaigentic.ai"
    }
  ];

  return (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <main className="pt-16 md:pt-28">
        {/* Enhanced Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full mix-blend-multiply filter blur-xl animate-float delay-1000"></div>
            <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full mix-blend-multiply filter blur-xl animate-float delay-2000"></div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* Left Content */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-blue-100 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-semibold text-sm">
                    🏢 About Gaigentic AI
                  </span>
                </div>

                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in-up delay-200">
                  Leading the Future of
                  <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent"> Agentic Financial Services</span>
                </h1>

                <p className="text-xl text-gray-600 mb-8 max-w-2xl animate-fade-in-up delay-400">
                  We're industry veterans with decades of experience across financial services and AI, pioneering autonomous AI agents that work alongside human experts to streamline onboarding, customer service, operations, and reporting—making productivity gains <strong>fast, measurable, and sustainable</strong>.
                </p>

                {/* Trust Indicators with Animation */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 animate-fade-in-up delay-800">
                  <div className="text-center group">
                    <div className="text-3xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                      200+
                    </div>
                    <p className="text-sm text-gray-600">Years Combined Experience</p>
                  </div>
                  <div className="text-center group">
                    <div className="text-3xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                      10+
                    </div>
                    <p className="text-sm text-gray-600">Pilot Programs</p>
                  </div>
                  <div className="text-center group">
                    <div className="text-3xl font-bold text-indigo-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                      15+
                    </div>
                    <p className="text-sm text-gray-600">Team Members</p>
                  </div>
                </div>
              </div>

              {/* Right Content - Company Highlights */}
              <div className="relative animate-fade-in-up delay-1000">
                <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">Company Highlights</h3>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                  </div>

                  {/* Company Stats */}
                  <div className="space-y-4">
                    <div className="flex items-center p-4 rounded-lg border-2 border-green-200 bg-green-50">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center mr-4 bg-green-500 text-white">
                        <Users className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">Industry Veterans</div>
                        <div className="text-sm text-gray-600">Decades of combined experience in finance and AI</div>
                      </div>
                    </div>

                    <div className="flex items-center p-4 rounded-lg border-2 border-blue-200 bg-blue-50">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center mr-4 bg-blue-500 text-white">
                        <Target className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">Pilot Programs</div>
                        <div className="text-sm text-gray-600">Working with select institutions</div>
                      </div>
                    </div>

                    <div className="flex items-center p-4 rounded-lg border-2 border-purple-200 bg-purple-50">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center mr-4 bg-purple-500 text-white">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">99.9% Uptime</div>
                        <div className="text-sm text-gray-600">Enterprise-grade reliability</div>
                      </div>
                    </div>

                    <div className="flex items-center p-4 rounded-lg border-2 border-indigo-200 bg-indigo-50">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center mr-4 bg-indigo-500 text-white">
                        <Shield className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">Bank-Grade Security</div>
                        <div className="text-sm text-gray-600">Enterprise-grade security practices</div>
                      </div>
                    </div>
                  </div>

                  <Link to="/contact">
                    <Button
                      size="lg"
                      className="w-full mt-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                    >
                      Learn More About Us
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Our Story & Values
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <div className="space-y-6">
                  <Card className="bg-white/70 backdrop-blur border border-gray-200 shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
                          <Target className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-900">Mission</h3>
                          <p className="mt-3 text-gray-600 text-lg leading-relaxed">
                            We boost productivity in financial services by helping companies become agentic enterprises—deploying intelligent AI
                            agents that work alongside human experts, multiplying their capabilities and impact.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white/70 backdrop-blur border border-gray-200 shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
                          <Globe className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-900">Vision</h3>
                          <p className="mt-3 text-gray-600 text-lg leading-relaxed">
                            Every financial services company becomes an agentic enterprise where humans and agents drive customer success
                            together—creating unprecedented value and efficiency. This isn’t about replacing people; it’s about empowering them
                            with digital colleagues that take on repetitive work with high accuracy and consistency.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white/70 backdrop-blur border border-gray-200 shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-green-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
                          <TrendingUp className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-900">Impact</h3>
                          <p className="mt-3 text-gray-600 text-lg leading-relaxed">
                            Practical outcomes you can measure—across cost, speed, and customer experience.
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-4">
                        {[
                          {
                            icon: TrendingUp,
                            title: "Reduce costs",
                            description: "Eliminate manual processes and reduce operational costs by up to 60%."
                          },
                          {
                            icon: Heart,
                            title: "Improve customer experience",
                            description: "Faster cycle times and more consistent execution across teams."
                          },
                          {
                            icon: Shield,
                            title: "Maintain audit-ready adherence",
                            description:
                              "Strengthen regulatory adherence across compliance functions with clear oversight and traceability."
                          }
                        ].map((item) => (
                          <div
                            key={item.title}
                            className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white/60 p-5"
                          >
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white to-slate-50 border border-slate-200 flex items-center justify-center flex-shrink-0">
                              <item.icon className="h-5 w-5 text-gray-900" />
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900">{item.title}</div>
                              <div className="mt-1 text-gray-600 leading-relaxed">{item.description}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div>
                <Card className="bg-white/70 backdrop-blur border border-gray-200 shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6 text-gray-900">Our Values</h3>
                    <div className="space-y-6">
                      {companyValues.map((value, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                            <value.icon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h4>
                            <p className="text-gray-600">{value.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Team & Expertise */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Leadership Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experienced professionals in AI and financial services building secure, auditable agentic systems for the modern financial industry.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {leadership.map((leader, index) => (
                <Card key={index} className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                        <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex-shrink-0 overflow-hidden">
                          <img
                            src={leader.image}
                            alt={leader.name}
                            className="w-full h-full object-cover rounded-full"
                            onError={(e) => {
                              const img = e.target as HTMLImageElement;
                              img.style.display = 'none';
                              const parent = img.parentElement;
                              if (parent) {
                                parent.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center"><span class="text-purple-600 font-bold text-lg">' + leader.name.charAt(0) + '</span></div>';
                              }
                            }}
                          />
                        </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold text-gray-900">{leader.name}</h3>
                          {leader.linkedin && (
                            <a
                              href={leader.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center w-8 h-8 bg-[#0077B5] hover:bg-[#005885] rounded-md transition-colors duration-200 group"
                              title={`Connect with ${leader.name} on LinkedIn`}
                            >
                              <svg
                                className="w-4 h-4 text-white"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                              </svg>
                            </a>
                          )}
                        </div>
                        <p className="text-purple-600 font-medium mb-3">{leader.title}</p>
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{leader.background}</p>
                        <div className="mb-3">
                          <p className="text-sm text-gray-500 mb-2">{leader.education}</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {leader.expertise.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="outline" className="text-xs px-3 py-1 text-purple-600 border-purple-200">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Advisory Board */}
            <div>
              <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">Advisory Board</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {advisors.map((advisor, index) => (
                  <Card key={index} className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow duration-300 text-center">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                        <img
                          src={advisor.image}
                          alt={advisor.name}
                          className="w-full h-full object-cover rounded-full"
                          onError={(e) => {
                            const img = e.target as HTMLImageElement;
                            img.style.display = 'none';
                            const parent = img.parentElement;
                            if (parent) {
                              parent.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center"><span class="text-purple-600 font-bold text-lg">' + advisor.name.charAt(0) + '</span></div>';
                            }
                          }}
                        />
                      </div>
                      <div className="flex items-center justify-center mb-2">
                        <h4 className="font-semibold text-gray-900 mr-2">{advisor.name}</h4>
                        {advisor.linkedin && (
                          <a
                            href={advisor.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-6 h-6 bg-[#0077B5] hover:bg-[#005885] rounded-md transition-colors duration-200 group"
                            title={`Connect with ${advisor.name} on LinkedIn`}
                          >
                            <svg
                              className="w-3 h-3 text-white"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                          </a>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{advisor.title}</p>
                      <p className="text-xs text-purple-600">{advisor.expertise}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default About;
