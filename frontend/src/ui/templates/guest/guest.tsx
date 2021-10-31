import React from "react";
import { Header } from "@ui";

type TProps = {
  className?: string;
};

export const Guest: React.FC<TProps> = ({ children, className }) => {
  return (
    <div>
      <Header />
      <div className={className}>{children}</div>
    </div>
  );
};
