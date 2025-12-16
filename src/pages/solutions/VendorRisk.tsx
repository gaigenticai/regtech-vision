import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, ArrowRight, Building2, Calendar, CheckCircle, Clock, FileText, Library, Shield, Target } from "lucide-react";
import { Link } from "react-router-dom";

const VendorRisk = () => {
  const challenges = [
    "Fragmented vendor evidence across email, drives, and ticketing tools",
    "Renewals driven by calendars instead of risk tier and evidence expiry",
    "Inconsistent questionnaires and manual follow‑ups slow onboarding and re‑assessments",
    "Limited auditability: hard to answer who changed what, when, and why",
    "Third‑party concentration risk and sub‑processor exposure not tracked consistently"
  ];

  const technicalCapabilities = [
    {
      category: "Vendor Inventory & Tiering",
      features: [
        "Central vendor register with tier, owner, and renewal cadence",
        "Criticality tagging and concentration risk views",
        "Sub‑processor tracking and data residency attributes",
        "Renewal schedule aligned to risk tier"
      ]
    },
    {
      category: "Questionnaires",
      features: [
        "Template‑driven assessments (SIG Lite, CAIQ‑style, custom)",
        "Per‑question citations and evidence requirements",
        "Review workflow with approvals and audit trail",
        "Exportable artifacts for auditors and procurement"
      ]
    },
    {
      category: "Evidence Library",
      features: [
        "Evidence catalog with owners and expirations",
        "Reuse across assessments with citations",
        "Gap detection for missing or stale artifacts",
        "Expiry alerts and renewal preparation"
      ]
    },
    {
      category: "Auto‑Answer Agent",
      features: [
        "Auto‑answer suggestions grounded in approved evidence",
        "Confidence scoring and gaps surfaced for reviewers",
        "Audit‑ready outputs with citations",
        "Policy‑aligned responses using your internal standards"
      ]
    }
  ];

  const regulatoryFrameworks = [
    { name: "OCC 2013‑29", description: "Third‑party risk management guidance for banks" },
    { name: "EBA Outsourcing", description: "EU outsourcing governance and oversight requirements" },
    { name: "ISO 27001", description: "Information security controls and supplier relationships" },
    { name: "SOC 2", description: "Assurance reporting for service providers (trust services criteria)" }
  ];

  return (
    <div className="min-h-screen pt-28 bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/5 to-purple-600/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4 px-4 py-2 text-indigo-600 border-indigo-200">
                🏢 Autonomous Vendor Risk / TPRM Solution
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Vendor Risk Agent
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> for TPRM Automation</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Centralize evidence, automate renewals, and generate audit‑ready questionnaire responses grounded in approved artifacts.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Clock className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">Days</div>
                  <div className="text-sm text-gray-600">Not Weeks</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Shield className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">Audit‑Ready</div>
                  <div className="text-sm text-gray-600">Evidence & Trail</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Target className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">Risk‑Tiered</div>
                  <div className="text-sm text-gray-600">Renewals</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 text-white font-semibold px-8 py-4 rounded-xl shadow-lg">
                    Schedule a Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/solutions">
                  <Button variant="outline" size="lg" className="border-2 border-gray-300 hover:bg-indigo-50 font-semibold px-8 py-4 rounded-xl">
                    View All Solutions
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <Card className="bg-white/80 backdrop-blur-sm shadow-2xl border-0">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center">
                      <Building2 className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">What the agent handles</h3>
                      <p className="text-gray-600 text-sm">Inventory • Evidence • Gaps • Renewals • Audit trail</p>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <div className="flex items-start gap-3 p-4 bg-indigo-50 rounded-xl border border-indigo-100">
                      <Library className="h-5 w-5 text-indigo-700 mt-0.5" />
                      <div>
                        <div className="font-semibold text-gray-900">Evidence Library</div>
                        <div className="text-sm text-gray-700">SOC 2, ISO, pen tests, BCP, DPIA with ownership and expirations</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-xl border border-purple-100">
                      <FileText className="h-5 w-5 text-purple-700 mt-0.5" />
                      <div>
                        <div className="font-semibold text-gray-900">Questionnaires</div>
                        <div className="text-sm text-gray-700">Standardized templates with per‑answer citations and review</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-amber-50 rounded-xl border border-amber-100">
                      <AlertTriangle className="h-5 w-5 text-amber-700 mt-0.5" />
                      <div>
                        <div className="font-semibold text-gray-900">Gap Detection</div>
                        <div className="text-sm text-gray-700">Highlights missing evidence and unresolved responses</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                      <Calendar className="h-5 w-5 text-emerald-700 mt-0.5" />
                      <div>
                        <div className="font-semibold text-gray-900">Renewals</div>
                        <div className="text-sm text-gray-700">Tracks vendor renewals and evidence expirations with reminders</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-indigo-600" />
                      Outputs are audit‑ready with citations and immutable event history.
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 via-indigo-50/20 to-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">The Vendor Risk Challenge</h2>
            <p className="text-xl text-gray-600">TPRM breaks down when evidence and renewals aren’t system‑driven</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {challenges.map((challenge, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-l-4 border-l-red-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex items-start h-full">
                    <div className="bg-gradient-to-br from-red-500 to-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0 text-sm font-bold shadow-md">{index + 1}</div>
                    <p className="text-gray-700 leading-relaxed font-medium text-sm">{challenge}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Technical Capabilities</h2>
            <p className="text-xl text-gray-600">A complete operating model for vendor assessments and renewals</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {technicalCapabilities.map((capability) => (
              <Card key={capability.category} className="bg-white shadow-lg hover:shadow-xl transition-shadow border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{capability.category}</h3>
                  <div className="space-y-3">
                    {capability.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-indigo-600 flex-shrink-0" />
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

      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Regulatory Alignment</h2>
            <p className="text-xl text-gray-600">Built for third‑party oversight, audits, and outsourcing controls</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {regulatoryFrameworks.map((framework) => (
              <Card key={framework.name} className="bg-white/80 backdrop-blur-sm shadow-lg border-0">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{framework.name}</h3>
                  <p className="text-gray-600">{framework.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default VendorRisk;

