"use client";
import React from "react";
import Button from "../common/Button";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative bg-hero_bg_image bg-cover py-14 md:py-16">
      <div className="max-w-[1300px] mx-auto px-5 md:my-10 md:px-9 slg:px-12 lg:px-[74px]">
        <div className="flex flex-col gap-10 lg:gap-20 items-center justify-between lg:flex-row">
          <motion.div
            className="max-w-[600px]"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-extrabold leading-[48px] md:leading-[64px] mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Rebuilding Lives with Stability and Dignity
            </motion.h2>
            <motion.p
              className="font-bold leading-8 text-[#393939] mt-5 mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Everyone deserves a second chance. We help prison leavers and
              homeless individuals find stability, dignity, and hope.
            </motion.p>
            <motion.p
              className="font-medium leading-8 text-[#393939] mb-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              Restore Policy is dedicated to breaking the cycle of homelessness
              and reoffending by providing essential support, mentorship, and
              resources. Together, we empower individuals to reclaim their
              futures and reintegrate into society with confidence.
            </motion.p>
            <motion.div
              className="flex items-center gap-[37px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Button>Donate now</Button>
            </motion.div>
          </motion.div>

          {/* image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative overflow-hidden rounded-3xl"
          >
            <motion.div
              className="absolute inset-0 bg-green-600/20 z-10 rounded-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            />
            <Image
              src="/img/hero-image.jpg"
              alt="hero image"
              width={550}
              height={500}
              className="object-cover rounded-3xl relative z-0 transition-transform duration-700 hover:scale-105"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
