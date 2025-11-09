import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Solutions from "./pages/Solutions";
import Platform from "./pages/Platform";
import Resources from "./pages/Resources";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import KYCAutomation from "./pages/solutions/KYCAutomation";
import LendingCompliance from "./pages/solutions/LendingCompliance";
import TransactionMonitoring from "./pages/solutions/TransactionMonitoring";
import RiskManagement from "./pages/solutions/RiskManagement";
import SanctionsScreening from "./pages/solutions/SanctionsScreening";
import CaseManagement from "./pages/solutions/CaseManagement";
import AuditEvidence from "./pages/solutions/AuditEvidence";
import PolicyGovernance from "./pages/solutions/PolicyGovernance";
import RegulatoryIntelligence from "./pages/solutions/RegulatoryIntelligence";
import FraudDetection from "./pages/solutions/FraudDetection";
import DocumentIntelligence from "./pages/solutions/DocumentIntelligence";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Security from "./pages/Security";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
  <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/kyc-automation" element={<KYCAutomation />} />
          <Route path="/solutions/lending-compliance" element={<LendingCompliance />} />
          <Route path="/solutions/transaction-monitoring" element={<TransactionMonitoring />} />
          <Route path="/solutions/risk-management" element={<RiskManagement />} />
          <Route path="/solutions/sanctions-screening" element={<SanctionsScreening />} />
          <Route path="/solutions/case-management" element={<CaseManagement />} />
          <Route path="/solutions/audit-evidence" element={<AuditEvidence />} />
          <Route path="/solutions/policy-governance" element={<PolicyGovernance />} />
          <Route path="/solutions/regulatory-intelligence" element={<RegulatoryIntelligence />} />
          <Route path="/solutions/fraud-detection" element={<FraudDetection />} />
          <Route path="/solutions/document-intelligence" element={<DocumentIntelligence />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/security" element={<Security />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
