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
          className="order-2 lg:absolute relative xl:w-[666px] lg:w-[600px] md:w-1/2 w-full xl:right-[105px] lg:right-[15px] hidden md:flex self-center top-5 -z-10 px-4 lg:px-0"
          src="/hero-bg-img.png"
          alt="hero-bg-img"
          width={666}
          height={679}
        />
        <Image
          className="order-2 lg:absolute relative flex md:hidden self-center -top-[78px] -right-2.5 -z-10"
          src="/hero-bg-img-m.png"
          alt="hero-bg-img"
          width={320}
          height={424}
        />

        <Header className="order-1" />
        <div className="container px-4 order-3 relative">
          <div className="mt-57px lg:max-w-[516px] max-w-full absolute md:static -top-[220px] left-0 right-0 md:top-0">
            <div className="px-4 md:px-0">
              <div className="text-center md:text-left max-w-[350px] md:max-w-full mx-auto px-2 md:px-0">
                <H1>Want to Turn Social Media Into a Profitable Career?</H1>
                <H2 className="text-secondary text-shadow-glow">
                  Discover your way to success with Fametonic:
                </H2>
              </div>

              <ul className="list-none mt-[22px] md:mt-4 flex flex-col gap-y-2.5 md:gap-y-13px">
                {heroSectionListData.map((item, index) => (
                  <li key={index} className="flex gap-x-2.5">
                    <span className="h-6 w-6">✨</span>{" "}
                    <span className="text-white text-base font-normal md:font-semibold">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col-reverse md:flex-col">
                <ButtonPrimary
                  showArrow
                  className="mt-[32px] md:mt-30px mb-10 md:mb-0 lg:max-w-[313px] w-full max-w-full"
                  helpText="1-minute quiz for personalized Insights"
                />

                <div className="md:mt-30px mt-22px flex flex-col md:gap-y-3 gap-y-[19px] items-center lg:items-start text-center md:text-left">
                  <Text>
                    By clicking "Get Started", you agree with Terms and <br className="block md:hidden" />
                    Conditions, Privacy Policy, Subscription Terms
                  </Text>
                  <Text>Fametonic 2025 ©All Rights Reserved.</Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
