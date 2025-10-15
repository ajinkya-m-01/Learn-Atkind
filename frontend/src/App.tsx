import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CoursesPage from "./pages/Courses";
import CourseDetailPage from "./pages/CourseDetail";
import CategoriesPage from "./pages/Categories";
import InstructorsPage from "./pages/Instructors";
import ContactPage from "./pages/Contact";
import LoginPage from "./pages/Login";
import SignUpPage from "./pages/SignUp";
import { DocumentationPage, BlogPage, CaseStudiesPage, CommunityPage } from "./pages/resources";
import { AboutPage, CareersPage, PressKitPage, PartnersPage } from "./pages/company";
import { HelpCenterPage, PrivacyPolicyPage, TermsOfServicePage } from "./pages/legal";

const queryClient = new QueryClient();

const App = () => {
  const [backendStatus, setBackendStatus] = useState<string>("Checking backend...");

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;

    if (!apiUrl) {
      setBackendStatus("⚠️ Backend URL not configured");
      return;
    }

    // 👇 Check backend connection on load
    fetch(`${apiUrl}/api/hello`)
      .then(async (res) => {
        if (!res.ok) throw new Error("Backend not responding properly");
        const data = await res.json();
        setBackendStatus(`✅ ${data.message}`);
      })
      .catch((err) => {
        console.error("Backend connection failed:", err);
        setBackendStatus("❌ Backend not reachable");
      });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Index />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/courses/:courseId" element={<CourseDetailPage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/instructors" element={<InstructorsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />

            {/* Resource Routes */}
            <Route path="/documentation" element={<DocumentationPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/community" element={<CommunityPage />} />

            {/* Company Routes */}
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/press-kit" element={<PressKitPage />} />
            <Route path="/partners" element={<PartnersPage />} />

            {/* Help & Legal Routes */}
            <Route path="/help-center" element={<HelpCenterPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsOfServicePage />} />

            {/* 404 Page */}
            <Route path="*" element={<NotFound />} />
          </Routes>

          {/* 👇 Backend Connection Status Display */}
          <div className="fixed bottom-4 right-4 bg-gray-800 text-white text-sm px-4 py-2 rounded-xl shadow-lg z-50">
            {backendStatus}
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
