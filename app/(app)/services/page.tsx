"use client";

import React from "react";
import { Home, Heart, Users, PhoneCall, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const Services = () => {
  // Animation variants for the cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary py-32 px-5 md:px-9 slg:px-12 lg:px-[74px] text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-[#3d7743] mb-4">
            Our Services
          </h1>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            We provide comprehensive support to help individuals rebuild their
            lives with dignity and purpose. Explore our services below.
          </p>
        </motion.div>
      </section>

      {/* Services Grid Section */}
      <section className="max-w-[1300px] m-auto px-5 md:px-9 slg:px-12 lg:px-[74px] py-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-dark_primary text-xl font-bold tracking-[2px] uppercase">
            What We Offer
          </h2>
          <p className="font-medium text-[36px] text-gray-800">
            Providing Essential Support for Rebuilding Lives
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-10">
          {/* Support for Prison Leavers */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            }}
            className="bg-white p-8 shadow-lg rounded-lg border hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center gap-4 mb-4">
              <Home className="size-8 text-[#3d7743]" />
              <h3 className="text-2xl font-semibold">
                Support for Prison Leavers
              </h3>
            </div>
            <ul className="list-disc list-inside text-gray-700">
              <li>
                <strong>Housing Assistance:</strong> Safe and stable
                accommodation.
              </li>
              <li>
                <strong>Employment Training & Placement:</strong> Skills
                development and job opportunities.
              </li>
              <li>
                <strong>Counseling & Mentorship:</strong> Emotional support and
                guidance.
              </li>
            </ul>
          </motion.div>

          {/* Support for Homeless Individuals */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            custom={1}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            }}
            className="bg-white p-8 shadow-lg rounded-lg border hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center gap-4 mb-4">
              <Users className="size-8 text-[#3d7743]" />
              <h3 className="text-2xl font-semibold">
                Support for Homeless Individuals
              </h3>
            </div>
            <ul className="list-disc list-inside text-gray-700">
              <li>
                <strong>Housing Solutions:</strong> Temporary and permanent
                options.
              </li>
              <li>
                <strong>Healthcare & Social Services:</strong> Medical support
                and assistance programs.
              </li>
              <li>
                <strong>Skill-Building & Reintegration:</strong> Workshops and
                community inclusion initiatives.
              </li>
            </ul>
          </motion.div>

          {/* Community Outreach */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            custom={2}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            }}
            className="bg-white p-8 shadow-lg rounded-lg border hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center gap-4 mb-4">
              <Heart className="size-8 text-[#3d7743]" />
              <h3 className="text-2xl font-semibold">Community Outreach</h3>
            </div>
            <ul className="list-disc list-inside text-gray-700">
              <li>
                <strong>Awareness Campaigns:</strong> Educating the public on
                reintegration and homelessness.
              </li>
              <li>
                <strong>Community Support Activities:</strong> Events, volunteer
                programs, and advocacy initiatives.
              </li>
            </ul>
          </motion.div>

          {/* Emergency Assistance */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            custom={3}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            }}
            className="bg-white p-8 shadow-lg rounded-lg border hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center gap-4 mb-4">
              <PhoneCall className="size-8 text-[#3d7743]" />
              <h3 className="text-2xl font-semibold">Emergency Assistance</h3>
            </div>
            <ul className="list-disc list-inside text-gray-700">
              <li>
                <strong>Immediate Help:</strong> Steps to get urgent support.
              </li>
              <li>
                <strong>Contact Information:</strong> Reach out to our support
                team 24/7.
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#F7FAF8] py-20 px-5 md:px-9 slg:px-12 lg:px-[74px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-[1300px] mx-auto text-center"
        >
          <h2 className="text-dark_primary text-xl font-bold tracking-[2px] uppercase mb-4">
            Success Stories
          </h2>
          <p className="font-medium text-[36px] text-gray-800 mb-12">
            Inspiring Stories of Transformation
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "John Doe",
                testimonial:
                  "Restore Policy helped me find stable housing and a job after my release. I’m forever grateful!",
                image:
                  "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
              },
              {
                name: "Jane Smith",
                testimonial:
                  "The mentorship program gave me the confidence to rebuild my life. Thank you!",
                image:
                  "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
              },
              {
                name: "Michael Brown",
                testimonial:
                  "I was homeless, but now I have a home and a community that supports me.",
                image:
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={20}
                  height={20}
                  className="w-20 h-20 rounded-full object-cover  mx-auto mb-4"
                  unoptimized
                />
                <p className="text-gray-700 italic mb-4">
                  &quot;{testimonial.testimonial}&quot;
                </p>
                <p className="font-semibold text-gray-800">
                  - {testimonial.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="bg-dark_primary py-20 px-5 md:px-9 slg:px-12 lg:px-[74px] text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-gray-100 max-w-2xl mx-auto text-lg mb-8">
            Join us in empowering individuals to rebuild their lives. Your
            support can change lives.
          </p>
          <button className="bg-white text-[#3d7743] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2 mx-auto">
            Get Involved <ArrowRight className="size-5" />
          </button>
        </motion.div>
      </section>
    </>
  );
};

export default Services;
