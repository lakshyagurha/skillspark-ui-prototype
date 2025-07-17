
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import AssessmentQuestion from "./pages/AssessmentQuestion";
import AssessmentResults from "./pages/AssessmentResults";
import Roadmap from "./pages/Roadmap";
import Module from "./pages/Module";
import ModuleQuiz from "./pages/ModuleQuiz";
import ModuleFeedback from "./pages/ModuleFeedback";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/assess/qs/:id" element={<AssessmentQuestion />} />
          <Route path="/assess/results" element={<AssessmentResults />} />
          <Route path="/roadmap" element={<Layout><Roadmap /></Layout>} />
          <Route path="/module/:id" element={<Layout><Module /></Layout>} />
          <Route path="/module/:id/quiz" element={<Layout><ModuleQuiz /></Layout>} />
          <Route path="/module/:id/feedback" element={<Layout><ModuleFeedback /></Layout>} />
          <Route path="/profile" element={<Layout><Profile /></Layout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
