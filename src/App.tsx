import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { lazy, Suspense } from "react";
import { MainLayout } from "@/components/MainLayout";

// Lazy load routes for code splitting
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Projects = lazy(() => import("./pages/Projects"));
const About = lazy(() => import("./pages/About"));
const BlogPost = lazy(() => import("./pages/BlogPost"));

const queryClient = new QueryClient();

const withLayout = (element: React.ReactNode) => (
  <MainLayout>
    <Suspense fallback={<div className="container max-w-xl py-12 text-center">Loading...</div>}>
      {element}
    </Suspense>
  </MainLayout>
);

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={withLayout(<Index />)} />
              <Route path="/projects" element={withLayout(<Projects />)} />
              <Route path="/about" element={withLayout(<About />)} />
              <Route path="/blog/:slug" element={withLayout(<BlogPost />)} />
              <Route path="*" element={withLayout(<NotFound />)} />
            </Routes>
          </BrowserRouter>
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
