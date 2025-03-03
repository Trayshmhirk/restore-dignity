import { cn } from "@/utils";
import React from "react";

function Button({
  className,
  children,
}: {
  text?: string;
  href?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <button
      className={cn(
        "bg-dark_primary hover:bg-[#3d7743] rounded-full py-3 px-[31px] text-white font-semibold transition-all duration-300 ease-in-out",
        className
      )}
    >
      {children}
    </button>
  );
}

export default Button;
