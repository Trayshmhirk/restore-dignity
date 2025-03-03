"use client";
import React from "react";
import { BookOpen, MapPin, FileText } from "lucide-react";
import FAQSection from "@/components/resources/FAQSection";
import { motion } from "framer-motion";
import Link from "next/link";

const Resources = () => {
  // Define animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const ResourceCard = ({
    icon: Icon,
    title,
    description,
  }: {
    icon: React.ElementType;
    title: string;
    description: string;
  }) => (
    <motion.div
      className="bg-white p-6 shadow-lg rounded-xl border flex flex-col gap-4 h-full"
      variants={itemVariants}
      whileHover={{
        scale: 1.02,
        boxShadow:
          "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: { duration: 0.2 },
      }}
    >
      <div className="flex items-center gap-4">
        <motion.div
          whileHover={{ rotate: 5, scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          <Icon className="text-green-600 size-8" />
        </motion.div>
        <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
      <motion.div
        className="mt-auto pt-4"
        whileHover={{ x: 5 }}
        transition={{ duration: 0.2 }}
      >
        <Link
          href="#"
          className="text-green-600 font-medium flex items-center gap-1 hover:underline"
        >
          Learn more
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.16699 10H15.8337"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.833 5L15.833 10L10.833 15"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </motion.div>
    </motion.div>
  );

  return (
    <>
      <section className="bg-[#EEF8F2]">
        <div className="max-w-[1300px] mx-auto px-5 md:px-9 slg:px-12 lg:px-[74px] py-20">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-green-600 text-xl font-bold tracking-[2px] uppercase mb-2">
              Resources & Support
            </h2>
            <p className="text-4xl font-semibold text-gray-800">
              Essential Tools for Stability & Growth
            </p>
            <motion.div
              className="w-20 h-1 bg-green-600 mx-auto mt-6"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <ResourceCard
              icon={BookOpen}
              title="Guides & Toolkit"
              description="Comprehensive step-by-step guides to help navigate re-entry challenges, housing solutions, and essential life skills for rebuilding."
            />

            <ResourceCard
              icon={MapPin}
              title="Local Services Directory"
              description="Connect with nearby shelters, food banks, healthcare providers, legal aid services, and other essential community resources."
            />

            <ResourceCard
              icon={FileText}
              title="Educational Resources"
              description="Access articles, research papers, and insights about the challenges faced by prison leavers and individuals experiencing homelessness."
            />
          </motion.div>
        </div>
      </section>

      <section className="max-w-[1300px] mx-auto px-5 md:px-9 slg:px-12 lg:px-[74px] py-20">
        <FAQSection />

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Need more support or have questions about our resources? Our team is
            here to help you navigate your journey.
          </p>
          <Link
            href="#"
            className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
          >
            Contact Support Team
          </Link>
        </motion.div>
      </section>
    </>
  );
};

export default Resources;
