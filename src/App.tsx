import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Splash from "./pages/Splash.tsx";
import Landing from "./pages/Landing.tsx";
import PhilosophyLanding from "./pages/PhilosophyLanding.tsx";
import EnvSciLanding from "./pages/EnvSciLanding.tsx";
import EnvSciUnitPage from "./pages/EnvSciUnitPage.tsx";
import APWorldLanding from "./pages/APWorldLanding.tsx";
import APWorldUnitPage from "./pages/APWorldUnitPage.tsx";
import APGovLanding from "./pages/APGovLanding.tsx";
import APGovUnitPage from "./pages/APGovUnitPage.tsx";
import APPsychLanding from "./pages/APPsychLanding.tsx";
import APPsychUnitPage from "./pages/APPsychUnitPage.tsx";
import APBioLanding from "./pages/APBioLanding.tsx";
import APBioUnitPage from "./pages/APBioUnitPage.tsx";
import APEuroLanding from "./pages/APEuroLanding.tsx";
import APEuroUnitPage from "./pages/APEuroUnitPage.tsx";
import PuzzlePicker from "./pages/PuzzlePicker.tsx";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import NotFound from "./pages/NotFound.tsx";
import NavMenu from "./components/NavMenu.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <NavMenu />
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/apush" element={<Landing />} />
          <Route path="/unit/:unit" element={<PuzzlePicker />} />
          <Route path="/unit/:unit/:puzzle" element={<Index />} />
          <Route path="/philosophy" element={<PhilosophyLanding />} />
          <Route path="/philosophy/unit/:unit" element={<PuzzlePicker />} />
          <Route path="/philosophy/unit/:unit/:puzzle" element={<Index />} />
          <Route path="/envsci" element={<EnvSciLanding />} />
          <Route path="/envsci/unit/:unit" element={<EnvSciUnitPage />} />
          <Route path="/envsci/unit/:unit/:puzzle" element={<Index />} />
          <Route path="/apworld" element={<APWorldLanding />} />
          <Route path="/apworld/unit/:unit" element={<APWorldUnitPage />} />
          <Route path="/apworld/unit/:unit/:puzzle" element={<Index />} />
          <Route path="/apgov" element={<APGovLanding />} />
          <Route path="/apgov/unit/:unit" element={<APGovUnitPage />} />
          <Route path="/apgov/unit/:unit/:puzzle" element={<Index />} />
          <Route path="/appsych" element={<APPsychLanding />} />
          <Route path="/appsych/unit/:unit" element={<APPsychUnitPage />} />
          <Route path="/appsych/unit/:unit/:puzzle" element={<Index />} />
          <Route path="/apbio" element={<APBioLanding />} />
          <Route path="/apbio/unit/:unit" element={<APBioUnitPage />} />
          <Route path="/apbio/unit/:unit/:puzzle" element={<Index />} />
          <Route path="/apeuro" element={<APEuroLanding />} />
          <Route path="/apeuro/unit/:unit" element={<APEuroUnitPage />} />
          <Route path="/apeuro/unit/:unit/:puzzle" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
