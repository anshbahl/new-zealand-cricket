
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import MobileForm from "./pages/MobileForm";
import NationalDashboard from "./pages/NationalDashboard";
import RegionalDashboard from "./pages/RegionalDashboard";
import InsightsDashboard from "./pages/InsightsDashboard";
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
          <Route path="/mobile-form" element={<MobileForm />} />
          <Route path="/national-dashboard" element={<NationalDashboard />} />
          <Route path="/regional-dashboard" element={<RegionalDashboard />} />
          <Route path="/insights" element={<InsightsDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
