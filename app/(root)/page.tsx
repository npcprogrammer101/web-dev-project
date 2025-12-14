import React from "react";

import { Hero } from "../../src/components/Hero";
import { MobileThemeToggle } from "@/src/components/MobileThemeToggle";
import { ThemeToggle } from "@/src/components/ThemeToggle";
import { Homescreen } from "@/src/components/Homescreen";
import { About } from "@/src/components/About";
import { AlgoSection } from "@/src/components/AlgoSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      {/* <Homescreen /> */}
      <Hero />
      
      <main>
        <About />
        <AlgoSection />
        
      </main>
      
      <footer></footer>
    </div>
  );
};

export default Home;
