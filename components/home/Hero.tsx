import React from "react";

import Button from "../common/Button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative bg-hero_bg_image bg-cover py-14 md:py-16">
      <div className="max-w-[1300px] mx-auto px-5 md:my-10 md:px-9 slg:px-12 lg:px-[74px]">
        <div className="flex flex-col gap-10 lg:gap-20  items-center justify-between lg:flex-row">
          <div className="max-w-[600px]">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-[48px] md:leading-[64px] mb-2">
              Rebuilding Lives with Stability and Dignity
            </h2>
            <p className="font-bold leading-8 text-[#393939] mt-5 mb-2">
              Everyone deserves a second chance. We help prison leavers and
              homeless individuals find stability, dignity, and hope.
            </p>
            <p className="font-medium leading-8 text-[#393939] mb-5">
              Restore Policy is dedicated to breaking the cycle of homelessness
              and reoffending by providing essential support, mentorship, and
              resources. Together, we empower individuals to reclaim their
              futures and reintegrate into society with confidence.
            </p>
            <div className="flex items-center gap-[37px]">
              <Button>Donate now</Button>
            </div>
          </div>

          {/* image */}
          <Image
            src="/img/hero-image.jpg"
            alt="hero image"
            width={550}
            height={500}
            className="object-cover rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
