import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Users, DollarSign, Target, Clock } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const SolutionsHero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const solutionSteps = [
    { title: "Identity Verification", description: "Multi-source KYC with biometric authentication", duration: "0.8s", icon: Users },
    { title: "Transaction Monitoring", description: "Real-time AML analysis with AI patterns", duration: "0.6s", icon: Target },
    { title: "Risk Assessment", description: "Automated credit scoring and compliance checks", duration: "0.4s", icon: DollarSign },
    { title: "Compliance Reporting", description: "Automated regulatory documentation generation", duration: "0.2s", icon: CheckCircle }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full mix-blend-multiply filter blur-xl animate-float delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full mix-blend-multiply filter blur-xl animate-float delay-2000"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-blue-100 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-semibold text-sm">
                🚀 Complete Agentic AI Suite
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in-up delay-200">
              Complete Agentic AI Suite for
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent"> Financial Compliance</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl animate-fade-in-up delay-400">
              End-to-end autonomous compliance solutions that eliminate manual processes, reduce costs by <strong>75%</strong>, and ensure <strong>100% regulatory adherence</strong> across all BFSI operations.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up delay-600">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Schedule Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/platform">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-gray-300 hover:bg-gray-50 font-semibold px-8 py-4 rounded-xl transition-all duration-300"
                >
                  View Platform
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            {/* Trust Indicators with Animation */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 animate-fade-in-up delay-800">
              <div className="text-center group">
                <div className="text-3xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  Modular
                </div>
                <p className="text-sm text-gray-600">Flexible Design</p>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  <CountingNumber end={75} suffix="%" duration={2500} />
                </div>
                <p className="text-sm text-gray-600">Projected Savings</p>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-indigo-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  <CountingNumber end={99.9} suffix="%" duration={3000} />
                </div>
                <p className="text-sm text-gray-600">Accuracy Rate</p>
              </div>
            </div>
          </div>

          {/* Right Interactive Demo */}
          <div className="relative animate-fade-in-up delay-1000">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Solution Workflow Demo</h3>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
              </div>

              {/* Solution Steps */}
              <div className="space-y-4">
                {solutionSteps.map((step, index) => (
                  <div
                    key={index}
                    className={`flex items-center p-4 rounded-lg border-2 transition-all duration-500 ${
                      currentStep >= index
                        ? 'border-green-200 bg-green-50'
                        : currentStep === index + 1 && isPlaying
                        ? 'border-blue-200 bg-blue-50 animate-pulse'
                        : 'border-gray-200 bg-gray-50'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 transition-all duration-300 ${
                      currentStep >= index
                        ? 'bg-green-500 text-white'
                        : currentStep === index + 1 && isPlaying
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-300 text-gray-600'
                    }`}>
                      {currentStep >= index ? <CheckCircle size={16} /> : <step.icon size={16} />}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">{step.title}</div>
                      <div className="text-sm text-gray-600">{step.description}</div>
                    </div>
                    <div className="text-xs text-purple-600 font-semibold">
                      {step.duration}
                    </div>
                  </div>
                ))}
              </div>

              {/* Demo Progress */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Processing...</span>
                  <span>{Math.round((currentStep / solutionSteps.length) * 100)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${(currentStep / solutionSteps.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              <Button
                onClick={() => {
                  setIsPlaying(true);
                  setCurrentStep(0);
                  const interval = setInterval(() => {
                    setCurrentStep(prev => {
                      if (prev >= solutionSteps.length - 1) {
                        clearInterval(interval);
                        setIsPlaying(false);
                        return solutionSteps.length;
                      }
                      return prev + 1;
                    });
                  }, 1000);
                }}
                className="w-full mt-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                disabled={isPlaying}
              >
                {isPlaying ? "Running Demo..." : "Run Demo Again"}
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// Counting Animation Component
const CountingNumber = ({ end, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);

  React.useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
};

export default SolutionsHero;
