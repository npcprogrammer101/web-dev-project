import React from "react";

import Hello from "../../src/components/hello";
import { MobileThemeToggle } from "@/src/components/MobileThemeToggle";
import { ThemeToggle } from "@/src/components/ThemeToggle";
import { Homescreen } from "@/src/components/Homescreen";
import { About } from "@/src/components/About";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />

      <Homescreen />
      <main>
        <About />
      </main>
      
      <footer></footer>
    </div>
  );
};

export default Home;
