import React from "react";

function H1({ children, className }) {
  return (
    <h1
      className={`font-urbanist font-bold md:text-35px text-25px leading-full  ${className}`}
    >
      {children}
    </h1>
  );
}

function H2({ children, className }) {
  return (
    <h2
      className={`font-urbanist font-bold md:text-35px text-25px leading-full  ${className}`}
    >
      {children}
    </h2>
  );
}

export { H1, H2 };
