"use client";
import React from "react";
import { HandHeart, Gift, Briefcase, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Button from "@/components/common/Button";

const GetInvolved = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Card component for reuse
  const InvolvementCard = ({
    title,
    description,
    items,
    ctaText,
    accent = "bg-green-600",
  }: {
    title: string;
    description: string;
    items?: Array<{
      icon: React.ElementType;
      title: string;
      description: string;
    }>;
    ctaText: string;
    accent?: string;
  }) => (
    <motion.div
      className="flex flex-col gap-6 bg-white shadow-lg p-8 rounded-xl border border-gray-100 h-full"
      variants={itemVariants}
      whileHover={{
        y: -5,
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: { duration: 0.2 },
      }}
    >
      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
        <div className={`w-16 h-1.5 ${accent} rounded-full mb-4`}></div>
        <p className="text-gray-600">{description}</p>
      </div>

      {items && items.length > 0 && (
        <div className="flex flex-col gap-4 my-2">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className="flex gap-4 items-start group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-green-50 p-2 rounded-lg group-hover:bg-green-100 transition-colors">
                  <Icon className="text-green-600 size-5" strokeWidth={2} />
                </div>
                <div className="flex flex-col">
                  <p className="text-sm font-semibold text-gray-800">
                    {item.title}
                  </p>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      <div className="mt-auto">
        <Link href={"mailto:info@restorediginty.co.uk"}>
          <Button className="text-white rounded-xl font-medium">
            {ctaText}
          </Button>
        </Link>
      </div>
    </motion.div>
  );

  return (
    <>
      {/* Hero Section with Parallax Effect */}
      <motion.section
        className="relative overflow-hidden bg-gradient-to-br from-green-50 to-green-100 py-28 lg:py-36 px-5 md:px-9 lg:px-[74px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="absolute inset-0 z-0 opacity-10"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="absolute w-96 h-96 rounded-full bg-green-300 -top-20 -left-20"></div>
          <div className="absolute w-80 h-80 rounded-full bg-green-400 bottom-20 right-10"></div>
          <div className="absolute w-64 h-64 rounded-full bg-green-500 top-40 right-20"></div>
        </motion.div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              Make a <span className="text-green-600">Difference</span> Today
            </h1>
            <p className="text-gray-700 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Join us in transforming lives. Your support helps create
              sustainable pathways for those transitioning from prison or
              homelessness.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={"mailto:info@restorediginty.co.uk"}>
                <Button className="bg-green-600 hover:bg-green-700 text-white px-8 font-bold">
                  Volunteer Now
                </Button>
              </Link>

              <Link href={"mailto:info@restorediginty.co.uk"}>
                <Button className="bg-transparent border border-dark_primary hover:bg-primary text-dark_primary px-8 font-bold">
                  Make a Donation
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Ways to Get Involved Section */}
      <section className="max-w-[1300px] mx-auto px-5 md:px-9 lg:px-[74px] py-20">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-green-600 text-xl font-bold tracking-[2px] uppercase mb-2">
            Ways to Get Involved
          </h2>
          <p className="text-4xl font-semibold text-gray-800">
            Your Support Makes All the Difference
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
          className="grid md:grid-cols-2 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <InvolvementCard
            title="Volunteering Opportunities"
            description="Contribute your time and skills to support prison leavers and homeless individuals in their journey toward stability and self-sufficiency."
            items={[
              {
                icon: HandHeart,
                title: "Mentorship Programs",
                description:
                  "Guide and support individuals in developing skills and career paths.",
              },
              {
                icon: BookOpen,
                title: "Skill-Building Workshops",
                description:
                  "Help facilitate training in job readiness, digital literacy, and more.",
              },
              {
                icon: Briefcase,
                title: "Employment Support",
                description:
                  "Assist in resume building, interview preparation, and job applications.",
              },
            ]}
            ctaText="Sign Up to Volunteer"
          />

          <InvolvementCard
            title="Ways to Donate"
            description="Your contributions enable us to provide housing, job training, and essential services. Every donation makes a lasting impact."
            items={[
              {
                icon: Gift,
                title: "Financial Contributions",
                description:
                  "Make a one-time or recurring donation to support our programs.",
              },
              {
                icon: HandHeart,
                title: "Essential Supplies",
                description:
                  "Donate clothes, food, hygiene products, and books to those in need.",
              },
              {
                icon: Briefcase,
                title: "Corporate Sponsorship",
                description:
                  "Businesses can support by funding specific programs or services.",
              },
            ]}
            ctaText="Donate Now"
          />

          <InvolvementCard
            title="Partnerships"
            description="We collaborate with businesses and organizations to create job opportunities, sponsorship programs, and advocacy campaigns. Partner with us to amplify the impact."
            ctaText="Partner With Us"
          />

          <InvolvementCard
            title="Advocacy"
            description="Stand for policy changes that support reintegration and fair housing. Learn how to advocate for reforms, spread awareness, and influence decision-makers."
            ctaText="Learn More"
          />
        </motion.div>
      </section>

      {/* Impact Stories and Stats Section */}
      <section className="bg-gray-50">
        <div className="max-w-[1300px] mx-auto py-20 px-5 md:px-9 lg:px-[74px]">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-green-600 text-xl font-bold tracking-[2px] uppercase mb-2">
              Our Impact
            </h2>
            <p className="text-4xl font-semibold text-gray-800 mb-4">
              See the Difference We&apos;re Making Together
            </p>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Through the support of donors, volunteers, and partners,
              we&apos;ve been able to create meaningful change in thousands of
              lives.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              { number: "2,500+", label: "People Housed" },
              { number: "4,800+", label: "Job Placements" },
              { number: "10,000+", label: "Lives Impacted" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md p-8 text-center"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600 text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <motion.section
        className="bg-[#EEF8F2] py-16 px-5 md:px-9 lg:px-[74px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-[1000px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl text-green-600 font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg mb-8 text-[#000000] font-medium max-w-2xl mx-auto">
            Join our community of changemakers today. Every action, no matter
            how small, contributes to creating lasting change.
          </p>
          <Link href={"mailto:info@restorediginty.co.uk"}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-dark_primary text-white hover:bg-primary hover:text-dark_primary px-8 rounded-lg text-base font-medium shadow-md">
                Get Started Now
              </Button>
            </div>
          </Link>
        </div>
      </motion.section>
    </>
  );
};

export default GetInvolved;
