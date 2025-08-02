import React from "react";
import Image from "next/image";
import { cn } from "../../../helper/utils";
import Text from "./Text";

function ButtonPrimary({
  showArrow = false,
  className,
  btnClassName,
  helpText,
}) {
  return (
    <div className={cn("max-w-[313px] w-full text-center", className)}>
      <button
        className={cn(
          "flex items-center justify-center gap-x-2.5 text-20px font-bold leading-full py-2 w-full bg-primary rounded-10px h-10 cursor-pointer button-shadow",
          btnClassName
        )}
      >
        GET STARTED
        {showArrow && (
          <Image
            src="/arrow-right.svg"
            alt="arrow-right"
            width={7}
            height={4}
          />
        )}
      </button>
      {helpText && (
        <Text className="text-white text-xs !leading-4 mt-2.5">
          {helpText}
        </Text>
      )}
    </div>
  );
}

export default ButtonPrimary;
