"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Star,
  MessageCircle,
  Award,
  TrendingUp,
  Clock,
  Heart,
} from "lucide-react";
import Button from "@/components/common/Button";
import Link from "next/link";
import Image from "next/image";
const SuccessStories = () => {
  // Animation variants
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
  const StoryCard = ({
    name,
    age,
    quote,
    achievement,
    imageSrc,
    tags,
  }: {
    name: string;
    age: number;
    quote: string;
    achievement: string;
    imageSrc: string;
    tags: string[];
  }) => (
    <motion.div
      className="bg-white p-6 shadow-lg rounded-lg border flex flex-col gap-4 h-full"
      variants={itemVariants}
      whileHover={{
        scale: 1.02,
        boxShadow:
          "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: { duration: 0.2 },
      }}
    >
      <div className="flex items-start gap-4">
        <Image
          src={imageSrc}
          alt={`${name}'s success story`}
          width={20}
          height={20}
          className="w-20 h-20 object-cover rounded-full"
        />
        <div>
          <h3 className="text-xl font-semibold text-gray-800">
            {name}, {age}
          </h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-2">
        <div className="flex items-start gap-2 mb-3">
          <MessageCircle className="text-green-600 size-5 mt-1 shrink-0" />
          <p className="text-gray-600 italic">&quot;{quote}&quot;</p>
        </div>

        <div className="flex items-start gap-2">
          <Award className="text-green-600 size-5 mt-1 shrink-0" />
          <p className="text-gray-700">{achievement}</p>
        </div>
      </div>

      <motion.div
        className="mt-auto pt-4"
        whileHover={{ x: 5 }}
        transition={{ duration: 0.2 }}
      >
        <Link
          href="#"
          className="text-green-600 font-medium flex items-center gap-1 hover:underline"
        >
          Read full story
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
  const ImpactStat = ({
    icon: Icon,
    value,
    label,
  }: {
    icon: React.ElementType;
    value: string;
    label: string;
  }) => (
    <motion.div
      className="flex flex-col items-center justify-center p-4"
      variants={itemVariants}
    >
      <div className="mb-2 bg-green-100 p-3 rounded-full">
        <Icon className="text-green-600 size-6" />
      </div>
      <h3 className="text-3xl font-bold text-gray-800">{value}</h3>
      <p className="text-gray-600 text-center">{label}</p>
    </motion.div>
  );
  return (
    <section className="max-w-[1300px] mx-auto px-5 md:px-9 slg:px-12 lg:px-[74px] py-20">
      {/* Hero Section */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-green-600 text-xl font-bold tracking-[2px] uppercase mb-2">
          Success Stories
        </h2>
        <p className="text-4xl font-semibold text-gray-800 mb-6">
          Real Transformations, Real Lives
        </p>
        <motion.div
          className="w-20 h-1 bg-green-600 mx-auto mb-6"
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        />
        <p className="text-gray-600 max-w-2xl mx-auto">
          Every success story represents a journey of resilience, determination,
          and hope. These individuals have overcome significant challenges and
          are now building stable, fulfilling lives.
        </p>
      </motion.div>
      {/* Success Stories Grid */}
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <StoryCard
          name="James Roberts"
          age={34}
          quote="This program gave me the second chance I never thought I'd get."
          achievement="After 5 years of incarceration, James secured stable housing and full-time employment within 3 months of release."
          imageSrc="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          tags={["Housing Support", "Employment"]}
        />

        <StoryCard
          name="Sarah Johnson"
          age={29}
          quote="For the first time in years, I have hope for my future."
          achievement="After experiencing homelessness for 2 years, Sarah completed vocational training and now works as a healthcare assistant."
          imageSrc="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          tags={["Education", "Career Development"]}
        />

        <StoryCard
          name="Michael Chen"
          age={42}
          quote="The mentorship program changed my perspective on what's possible for me."
          achievement="Michael reconnected with his family, completed addiction recovery, and now mentors others in similar situations."
          imageSrc="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          tags={["Family Reunification", "Mentorship"]}
        />

        <StoryCard
          name="Alicia Martinez"
          age={31}
          quote="Having stable housing meant I could finally focus on rebuilding my life."
          achievement="Alicia completed her GED while in transitional housing and is now pursuing an associate's degree."
          imageSrc="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=822&q=80"
          tags={["Education", "Housing Support"]}
        />

        <StoryCard
          name="David Thompson"
          age={38}
          quote="The skills I learned helped me become financially independent for the first time."
          achievement="David started his own landscaping business after completing the entrepreneurship program."
          imageSrc="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=848&q=80"
          tags={["Entrepreneurship", "Financial Literacy"]}
        />

        <StoryCard
          name="Taylor Williams"
          age={26}
          quote="Having a support network made all the difference in my recovery journey."
          achievement="Taylor has maintained sobriety for 18 months and now has custody of her children again."
          imageSrc="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80"
          tags={["Family Reunification", "Recovery Support"]}
        />
      </motion.div>
      {/* Impact Statistics */}
      <motion.div
        className="bg-gray-50 rounded-xl p-8 mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold text-center mb-10">
          Our Impact by the Numbers
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <ImpactStat icon={Heart} value="850+" label="Lives Transformed" />
          <ImpactStat icon={TrendingUp} value="78%" label="Employment Rate" />
          <ImpactStat
            icon={Clock}
            value="5 Years"
            label="Average Support Duration"
          />
          <ImpactStat icon={Star} value="92%" label="Housing Retention" />
        </div>
      </motion.div>
      {/* Call to Action */}
      <motion.div
        className="text-center bg-green-50 p-10 rounded-xl border border-green-100"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Be Part of Our Next Success Story
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Whether you need support or want to support others, you can be part of
          creating more success stories. Join our community and help build a
          future where everyone has the opportunity to thrive.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button className="bg-green-600 hover:bg-green-700">
            <Link href="/get-involved">Get Involved</Link>
          </Button>
          <Button className="bg-transparent border border-green-600 text-green-600 hover:bg-green-50">
            <Link href="/resources">Access Resources</Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
};
export default SuccessStories;
