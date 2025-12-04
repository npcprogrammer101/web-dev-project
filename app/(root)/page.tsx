import React from "react";

import Hello from "../../src/components/hello";
import { MobileThemeToggle } from "@/src/components/MobileThemeToggle";

const Home = () => {
  return (
    <main>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        Welcome to the Webpage!
      </div>

      <MobileThemeToggle />
    </main>
  );
};

export default Home;
