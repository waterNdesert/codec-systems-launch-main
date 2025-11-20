import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BackToTop from "@/components/BackToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Recalo from "./pages/products/Recalo";
import RecaloLite from "./pages/products/RecaloLite";
import Sivvar from "./pages/products/Sivvar";
import Intellio from "./pages/products/Intellio";
import Verivo from "./pages/products/Verivo";
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
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/recalo" element={<Recalo />} />
          <Route path="/products/recalolite" element={<RecaloLite />} />
          <Route path="/products/sivvar" element={<Sivvar />} />
          <Route path="/products/intellio" element={<Intellio />} />
          <Route path="/products/verivo" element={<Verivo />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <BackToTop />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
