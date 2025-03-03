"use client";

import React from "react";
import Nav from "./Nav";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <header className={isHomePage ? "bg-[#EFF0F1]" : "bg-white"}>
      <Nav />
    </header>
  );
};

export default Header;
