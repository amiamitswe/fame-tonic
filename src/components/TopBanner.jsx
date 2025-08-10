import React from "react";

function TopBanner() {
  return (
    <div className="bg-gradient px-4 py-2.5 lg:h-[46px] h-[76px] align-middle flex items-center justify-center">
      <p className="text-center font-extrabold text-base lg:text-22px leading-full">
        🚀 <span className="text-secondary">FRESH BEGINNINGS SALE:</span>{" "}
        <span className="font-semibold">
          Extra 25% OFF, <span className="block lg:inline-block"> Limited Spots - start your journey today!</span>
        </span>
      </p>
    </div>
  );
}

export default TopBanner;
