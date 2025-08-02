import React from "react";

function Text({ children, className }) {
  return (
    <p className={`text-gray text-xs leading-full font-medium ${className}`}>
      {children}
    </p>
  );
}

export default Text;
