import React from "react";
import { heroSectionListData } from "../../../data/heroSection";
import ButtonPrimary from "../ui/Button";
import { H1, H2 } from "../ui/Headings";
import Text from "../ui/Text";
import Image from "next/image";
import Header from "../Header";

function HeroSection() {
  return (
    <>
      <div className="relative bg-hero-section flex flex-col lg:block">
        <Image
          className="order-2 lg:absolute relative xl:w-[666px] lg:w-[600px] md:w-1/2 w-full xl:right-[105px] lg:right-[15px] flex self-center top-5 -z-10 px-4 lg:px-0"
          src="/hero-bg-img.png"
          alt="hero-bg-img"
          width={666}
          height={679}
        />

        <Header className="order-1" />
        <div className="container order-3">
          <div className="mt-57px lg:max-w-[516px]">
            <H1>Want to Turn Social Media Into a Profitable Career?</H1>
            <H2 className="text-secondary text-shadow-glow">
              Discover your way to success with Fametonic:
            </H2>

            <ul className="list-none mt-4 flex flex-col gap-y-13px">
              {heroSectionListData.map((item, index) => (
                <li key={index} className="flex gap-x-2.5">
                  <span className="h-6 w-6">✨</span>{" "}
                  <span className="text-white text-base font-semibold">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <ButtonPrimary
              showArrow
              className="mt-30px"
              helpText="1-minute quiz for personalized Insights"
            />

            <div className="mt-30px flex flex-col gap-y-3">
              <Text>
                By clicking "Get Started", you agree with Terms and Conditions,
                Privacy Policy, Subscription Terms
              </Text>
              <Text>Fametonic 2025 ©All Rights Reserved.</Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
