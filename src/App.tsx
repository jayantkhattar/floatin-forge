import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import Tools from "./pages/Tools";
import Playbooks from "./pages/Playbooks";
import CaseStudies from "./pages/CaseStudies";
import Systems from "./pages/Systems";
import Audit from "./pages/Audit";
import BookCall from "./pages/BookCall";
import About from "./pages/About";
import LeadCostCalculator from "./pages/tools/LeadCostCalculator";
import AdsBudgetPlanner from "./pages/tools/AdsBudgetPlanner";
import FunnelHealthChecker from "./pages/tools/FunnelHealthChecker";
import WhatsAppROICalculator from "./pages/tools/WhatsAppROICalculator";
import ROASCalculator from "./pages/tools/ROASCalculator";
import BreakEvenCalculator from "./pages/tools/BreakEvenCalculator";
import Clients from "./pages/Clients";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/tools/lead-cost-calculator" element={<LeadCostCalculator />} />
          <Route path="/tools/ads-budget-planner" element={<AdsBudgetPlanner />} />
          <Route path="/tools/funnel-health-checker" element={<FunnelHealthChecker />} />
          <Route path="/tools/whatsapp-roi-calculator" element={<WhatsAppROICalculator />} />
          <Route path="/tools/roas-calculator" element={<ROASCalculator />} />
          <Route path="/tools/break-even-calculator" element={<BreakEvenCalculator />} />
          <Route path="/playbooks" element={<Playbooks />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/systems" element={<Systems />} />
          <Route path="/audit" element={<Audit />} />
          <Route path="/book-call" element={<BookCall />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
