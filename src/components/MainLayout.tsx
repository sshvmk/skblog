import React from "react";
// import { Header } from "@/components/header"; // Removed
import { Footer } from "@/components/footer"; // Use alias and correct case
import { BottomNav } from "./BottomNav";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* <Header /> // Removed */}
      <main className="flex-grow container mx-auto px-4 py-8 pb-16 md:pb-24">
        {children}
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
} 