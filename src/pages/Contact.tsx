// Header is rendered globally from App.tsx
import { ArrowRight } from "lucide-react";

const Contact = () => {
  return (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <main className="pt-28">
        
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
                    📞 Contact Us
                  </span>
                </div>

                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in-up delay-200">
                  Ready to
                  <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent"> boost your productivity?</span>
                </h1>

                <p className="text-xl text-gray-600 mb-8 max-w-2xl animate-fade-in-up delay-400">
                  Be among the first to experience our agentic AI platform for financial services. <strong>Schedule a personalized demo</strong> to see how our AI agents can streamline workflows, elevate customer experience, and deliver measurable productivity gains.
                </p>

                {/* Trust Indicators with Animation */}
                <div className="grid grid-cols-3 gap-8 animate-fade-in-up delay-800">
                  <div className="text-center group">
                    <div className="text-3xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                      24/7
                    </div>
                    <p className="text-sm text-gray-600">Support</p>
                  </div>
                  <div className="text-center group">
                    <div className="text-3xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                      15min
                    </div>
                    <p className="text-sm text-gray-600">Response Time</p>
                  </div>
                  <div className="text-center group">
                    <div className="text-3xl font-bold text-indigo-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                      99.9%
                    </div>
                    <p className="text-sm text-gray-600">Uptime</p>
                  </div>
                </div>
              </div>

              {/* Right Content - Contact Notice */}
              <div className="relative animate-fade-in-up delay-1000">
                <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">Get Started Today</h3>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                  </div>

                  <div className="space-y-5">
                    <p className="text-gray-700 text-base leading-relaxed">
                      For product inquiries, partnerships, or to schedule a demo, email our team and we will respond
                      within one business day.
                    </p>
                    <div className="rounded-xl border border-purple-100 bg-gradient-to-r from-purple-50 to-blue-50 p-5">
                      <p className="text-sm uppercase tracking-wide text-gray-500">Email</p>
                      <a
                        className="mt-2 inline-flex items-center text-lg font-semibold text-purple-700 hover:text-purple-800"
                        href="mailto:info@gaigentic.ai"
                      >
                        info@gaigentic.ai
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </a>
                      <p className="mt-3 text-sm text-gray-600">
                        Please include your name, company, and a brief description of your use case.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default Contact;
