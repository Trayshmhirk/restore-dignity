import GetInvolved from "@/components/home/GetInvolved";
import Hero from "@/components/home/Hero";
import Mission from "@/components/home/Mission";
import Statistics from "@/components/home/Statistics";
import Stories from "@/components/home/Stories";
import React from "react";

const HOME = () => {
  return (
    <>
      <Hero />
      <Mission />
      <Stories />
      <GetInvolved />
      <Statistics />
    </>
  );
};

export default HOME;
