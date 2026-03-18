import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Solutions from "./pages/Solutions";
import Platform from "./pages/Platform";
import Sentinel from "./pages/Sentinel";
import Infrastructure from "./pages/Infrastructure";
import Cognito from "./pages/Cognito";
import Resources from "./pages/Resources";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Regulens from "./pages/solutions/Regulens";
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
import VendorRisk from "./pages/solutions/VendorRisk";
import CollectEye from "./pages/solutions/CollectEye";
import Galileo from "./pages/solutions/Galileo";
import CredAI from "./pages/solutions/CredAI";
import Canopy from "./pages/solutions/Canopy";
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
          <Route path="/solutions/regulens" element={<Regulens />} />
          <Route path="/solutions/collecteye" element={<CollectEye />} />
          <Route path="/solutions/galileo" element={<Galileo />} />
          <Route path="/solutions/credai" element={<CredAI />} />
          <Route path="/solutions/canopy" element={<Canopy />} />

          <Route path="/solutions/regulens/kyc-automation" element={<KYCAutomation />} />
          <Route path="/solutions/regulens/lending-compliance" element={<LendingCompliance />} />
          <Route path="/solutions/regulens/transaction-monitoring" element={<TransactionMonitoring />} />
          <Route path="/solutions/regulens/risk-management" element={<RiskManagement />} />
          <Route path="/solutions/regulens/sanctions-screening" element={<SanctionsScreening />} />
          <Route path="/solutions/regulens/case-management" element={<CaseManagement />} />
          <Route path="/solutions/regulens/audit-evidence" element={<AuditEvidence />} />
          <Route path="/solutions/regulens/policy-governance" element={<PolicyGovernance />} />
          <Route path="/solutions/regulens/regulatory-intelligence" element={<RegulatoryIntelligence />} />
          <Route path="/solutions/regulens/vendor-risk" element={<VendorRisk />} />
          <Route path="/solutions/regulens/fraud-detection" element={<FraudDetection />} />
          <Route path="/solutions/regulens/document-intelligence" element={<DocumentIntelligence />} />

          {/* Backward-compatible redirects */}
          <Route path="/solutions/kyc-automation" element={<Navigate to="/solutions/regulens/kyc-automation" replace />} />
          <Route path="/solutions/lending-compliance" element={<Navigate to="/solutions/regulens/lending-compliance" replace />} />
          <Route path="/solutions/transaction-monitoring" element={<Navigate to="/solutions/regulens/transaction-monitoring" replace />} />
          <Route path="/solutions/risk-management" element={<Navigate to="/solutions/regulens/risk-management" replace />} />
          <Route path="/solutions/sanctions-screening" element={<Navigate to="/solutions/regulens/sanctions-screening" replace />} />
          <Route path="/solutions/case-management" element={<Navigate to="/solutions/regulens/case-management" replace />} />
          <Route path="/solutions/audit-evidence" element={<Navigate to="/solutions/regulens/audit-evidence" replace />} />
          <Route path="/solutions/policy-governance" element={<Navigate to="/solutions/regulens/policy-governance" replace />} />
          <Route path="/solutions/regulatory-intelligence" element={<Navigate to="/solutions/regulens/regulatory-intelligence" replace />} />
          <Route path="/solutions/vendor-risk" element={<Navigate to="/solutions/regulens/vendor-risk" replace />} />
          <Route path="/solutions/fraud-detection" element={<Navigate to="/solutions/regulens/fraud-detection" replace />} />
          <Route path="/solutions/document-intelligence" element={<Navigate to="/solutions/regulens/document-intelligence" replace />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/infrastructure/sentinel" element={<Sentinel />} />
          <Route path="/infrastructure/cognito" element={<Cognito />} />
          <Route path="/sentinel" element={<Navigate to="/infrastructure/sentinel" replace />} />
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
