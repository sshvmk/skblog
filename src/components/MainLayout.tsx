import React from "react";
// import { Header } from "@/components/header"; // Removed
import { Footer } from "@/components/footer";
// import { BottomNav } from "./BottomNav"; // Removed BottomNav import

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* <Header /> // Removed */}
      <main className="flex-grow container mx-auto px-4 pt-4 pb-16">
        {children}
      </main>
      <Footer />
      {/* <BottomNav /> // Removed BottomNav usage */}
    </div>
  );
} 