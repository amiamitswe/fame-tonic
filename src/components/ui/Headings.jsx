import React from "react";

function H1({ children, className }) {
  return (
    <h1
      className={`font-urbanist font-bold text-35px leading-full  ${className}`}
    >
      {children}
    </h1>
  );
}

function H2({ children, className }) {
  return (
    <h2
      className={`font-urbanist font-bold text-35px leading-full  ${className}`}
    >
      {children}
    </h2>
  );
}

export { H1, H2 };
