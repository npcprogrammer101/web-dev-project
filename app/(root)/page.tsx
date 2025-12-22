import React from "react";

import { Homescreen } from "../../src/components/Homescreen";
import { MobileThemeToggle } from "@/src/components/MobileThemeToggle";
import { ThemeToggle } from "@/src/components/ThemeToggle";

import { About } from "@/src/components/About";
import { AlgoSection } from "@/src/components/AlgoSection";
import { DSSection } from "@/src/components/DSSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      {/* <Homescreen /> */}
      <Homescreen />
      
      <main>
        {/* <About /> */}
        <DSSection />
        <AlgoSection />
        
      </main>
      
      <footer></footer>
    </div>
  );
};

export default Home;
