import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="">{children}</main>
      <Footer />
    </div>
  );
};

export default layout;
