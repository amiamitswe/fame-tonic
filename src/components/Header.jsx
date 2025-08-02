import Link from "next/link";
import React from "react";
import BrandLogo from "./BrandLogo";
import { cn } from "../../helper/utils";
import Image from "next/image";

function Header({ className }) {
  return (
    <header
      className={cn(
        "container relative flex lg:justify-between justify-center items-start mt-[35px] order-1 ",
        className
      )}
    >
      <Link href="/">
        <div className="hidden lg:block">
          <BrandLogo />
        </div>
        <div className="lg:hidden">
          <BrandLogo isMobile />
        </div>
      </Link>

      <div className="gap-x-10 hidden lg:flex">
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

      <button className="lg:hidden absolute right-7 cursor-pointer">
        <Image src="/menu-icon.svg" alt="menu-icon" width={24} height={24} />
      </button>
    </header>
  );
}

export default Header;
