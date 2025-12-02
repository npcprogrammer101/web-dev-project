import React from "react";

import Hello from "../../src/components/hello";
import { MobileThemeToggle } from "@/src/components/MobileThemeToggle";

const Home = () => {
  return (
    <main>
      <div className="text-5xl underline font-bold">
        Welcome to the Webpage!
      </div>

      <MobileThemeToggle />
    </main>
  );
};

export default Home;
