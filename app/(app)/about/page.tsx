"use client";

import React from "react";
import { Users, Handshake, HeartHandshake, BookOpenCheck } from "lucide-react";
import { motion } from "framer-motion";
import MissionSection from "@/components/about/MissionSection";
import VisionSection from "@/components/about/VisionSection";

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-dark_primary/10 py-20 px-5 md:px-9 slg:px-12 lg:px-[74px] text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-[#3d7743] mb-4">
            Who We Are
          </h1>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            At Restore Policy, we are dedicated to empowering individuals who
            have faced incarceration or homelessness. Our mission is to provide
            the tools, resources, and support needed to rebuild lives with
            dignity and purpose.
          </p>
        </motion.div>
      </section>

      {/* Mission Section */}
      <MissionSection />

      {/* Vision Section */}
      <VisionSection />

      {/* Values Section */}
      <section className="bg-[#F7FAF8] py-20 px-5 md:px-9 slg:px-12 lg:px-[74px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-[1300px] mx-auto text-center"
        >
          <HeartHandshake
            className="text-dark_primary mx-auto mb-3"
            strokeWidth={2}
            size={40}
          />
          <h3 className="text-2xl font-semibold text-gray-800">Our Values</h3>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Our work is guided by compassion, integrity, and a commitment to
            equity. We believe in:
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            {[
              {
                icon: BookOpenCheck,
                title: "Empowerment",
                description:
                  "Providing tools and opportunities for self-sufficiency.",
              },
              {
                icon: Users,
                title: "Community",
                description:
                  "Building strong, supportive networks for lasting change.",
              },
              {
                icon: Handshake,
                title: "Collaboration",
                description:
                  "Partnering with organizations and individuals to amplify impact.",
              },
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-white p-8 rounded-lg shadow-sm border border-primary/60"
              >
                <value.icon
                  className="text-dark_primary mx-auto mb-3"
                  size={40}
                />
                <h4 className="text-lg font-semibold">{value.title}</h4>
                <p className="text-gray-600 text-sm mt-2">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default About;
