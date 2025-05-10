import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
import About from "./pages/About";
import BlogPost from "./pages/BlogPost";
import { MainLayout } from "@/components/MainLayout";

const queryClient = new QueryClient();

const withLayout = (element: React.ReactNode) => <MainLayout>{element}</MainLayout>;

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
