import React from "react";
import COP from "../LendingBorrowing/COP";
import { ShootingStars } from "../ui/shooting-stars";
import { StarsBackground } from "../ui/starsBG";

const LayoutLB = () => {
  return (
    <div className="h-screen rounded-md bg-neutral-900 flex flex-col items-center justify-center relative w-full">
      <div className="relative z-10 mt-10">
        <COP />
      </div>
      <ShootingStars />
      <StarsBackground />
    </div>
  );
};

export default LayoutLB;
