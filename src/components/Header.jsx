import Link from "next/link";
import React from "react";
import BrandLogo from "./BrandLogo";

function Header() {
  return (
    <header className="container flex justify-between items-start mt-[35px]">
       <BrandLogo />

      <div className="flex gap-x-10">
        <Link
          className="text-[18px] font-semibold leading-[22px] text-gray-1"
          href="/"
        >
          About us
        </Link>
        <Link
          className="text-[18px] font-semibold leading-[22px] text-gray-1"
          href="/"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}

export default Header;
