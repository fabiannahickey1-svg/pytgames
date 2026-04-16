import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Splash from "./pages/Splash.tsx";
import Landing from "./pages/Landing.tsx";
import PhilosophyLanding from "./pages/PhilosophyLanding.tsx";
import PuzzlePicker from "./pages/PuzzlePicker.tsx";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/apush" element={<Landing />} />
          <Route path="/unit/:unit" element={<PuzzlePicker />} />
          <Route path="/unit/:unit/:puzzle" element={<Index />} />
          <Route path="/philosophy" element={<PhilosophyLanding />} />
          <Route path="/philosophy/unit/:unit" element={<PuzzlePicker />} />
          <Route path="/philosophy/unit/:unit/:puzzle" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
