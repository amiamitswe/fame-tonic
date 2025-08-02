import Image from "next/image";
import React from "react";
import { cn } from "../../helper/utils";

function BrandLogo({isMobile = false}) {
  return (
    <div className={cn("relative w-[173px] h-[74px]", isMobile && "w-[107px] h-[46px]")}>
      <Image
        height={isMobile ? 46 : 74}
        width={isMobile ? 107 : 173}
        src="/red.svg"
        alt="Magenta Layer"
        className="absolute -top-1 left-0 w-full h-auto opacity-100 pointer-events-none select-none"
      />
      <Image
        height={isMobile ? 46 : 74}
        width={isMobile ? 107 : 173}
        src="/cyan.svg"
        alt="Cyan Layer"
        className="absolute -top-[1.75px] -left-[3.86px] w-full h-auto opacity-100 pointer-events-none select-none"
      />

      <Image
        height={isMobile ? 46 : 74}
        width={isMobile ? 107 : 173}
        src="/white.svg"
        alt="White Layer"
        className="absolute -top-[1.8px] -left-[2.26px] w-full h-auto z-10 pointer-events-none select-none"
      />
    </div>
  );
}

export default BrandLogo;
