"use client";

import React from "react";
import Image from "next/image";
import {
  Users,
  Handshake,
  Target,
  Globe,
  HeartHandshake,
  BookOpenCheck,
} from "lucide-react";
import { motion } from "framer-motion";

const AboutUsPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary py-20 px-5 md:px-9 slg:px-12 lg:px-[74px] text-center space-y-10">
        <p className="text-[#3d7743] text-4xl sm:text-5xl font-semibold mb-4">
          Who We Are
        </p>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          At Restore Policy, we are dedicated to empowering individuals who have
          faced incarceration or homelessness. Our mission is to provide the
          tools, resources, and support needed to rebuild lives with dignity and
          purpose.
        </p>
      </section>

      {/* Mission Section */}
      <section className="bg-[#F7FAF8] py-20 px-5 md:px-9 slg:px-12 lg:px-[74px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-[1300px] mx-auto text-center"
        >
          <Target
            className="stroke-[#3d7743] mx-auto mb-3"
            strokeWidth={2}
            size={40}
          />
          <h3 className="text-2xl font-semibold text-gray-800">Our Mission</h3>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Our mission is to break the cycle of homelessness and reoffending by
            offering comprehensive support programs, mentorship, and access to
            essential resources. We believe in second chances and are committed
            to helping individuals reintegrate into society with confidence and
            stability.
          </p>
        </motion.div>
      </section>

      {/* Vision Section */}
      <section className="bg-white py-20 px-5 md:px-9 slg:px-12 lg:px-[74px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-[1300px] mx-auto text-center"
        >
          <Globe
            className="stroke-[#3d7743] mx-auto mb-3"
            strokeWidth={2}
            size={40}
          />
          <h3 className="text-2xl font-semibold text-gray-800">Our Vision</h3>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            We envision a world where every individual, regardless of their
            past, has the opportunity to thrive. A world where communities are
            inclusive, supportive, and empowered to uplift those in need.
          </p>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="bg-[#F7FAF8] py-20 px-5 md:px-9 slg:px-12 lg:px-[74px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-[1300px] mx-auto text-center"
        >
          <HeartHandshake
            className="stroke-[#3d7743] mx-auto mb-3"
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
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white p-8 rounded-lg"
              >
                <value.icon
                  className="stroke-[#3d7743] mx-auto mb-3"
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

      {/* Team Section */}
      <section className="bg-white py-20 px-5 md:px-9 slg:px-12 lg:px-[74px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-[1300px] mx-auto text-center"
        >
          <Users
            className="stroke-[#3d7743] mx-auto mb-3"
            strokeWidth={2}
            size={40}
          />
          <h3 className="text-2xl font-semibold text-gray-800">Our Team</h3>
          <p className="text-gray-600 mt-3 mb-10 max-w-2xl mx-auto">
            Meet the passionate individuals driving our mission forward.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "John Doe", role: "Founder & CEO", image: "/team1.jpg" },
              {
                name: "Jane Smith",
                role: "Program Director",
                image: "/team2.jpg",
              },
              {
                name: "Michael Brown",
                role: "Community Outreach Lead",
                image: "/team3.jpg",
              },
            ].map((member, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                className="bg-white p-6 rounded-lg"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={150}
                  height={150}
                  className="rounded-full mx-auto"
                />
                <h4 className="text-lg font-semibold mt-3">{member.name}</h4>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Partners Section */}
      <section className="bg-[#F7FAF8] py-20 px-5 md:px-9 slg:px-12 lg:px-[74px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-[1300px] mx-auto text-center"
        >
          <Handshake
            className="stroke-[#3d7743] mx-auto mb-3"
            strokeWidth={2}
            size={40}
          />
          <h3 className="text-2xl font-semibold text-gray-800">Our Partners</h3>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            We are proud to collaborate with organizations and individuals who
            share our vision of creating a more inclusive and supportive
            society.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                className="bg-white p-6 rounded-lg"
              >
                <Image
                  src={`/partner${i}.jpg`}
                  alt={`Partner ${i}`}
                  width={150}
                  height={150}
                  className="rounded-lg mx-auto"
                />
                <h4 className="text-lg font-semibold mt-3">Partner Name {i}</h4>
                <p className="text-gray-600 text-sm">Collaboration Focus</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default AboutUsPage;
