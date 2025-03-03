"use client";
import {
  HeartHandshake,
  HelpingHand,
  Home,
  Users,
  Briefcase,
  HandHeart,
  BookOpenCheck,
} from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import GetInvolvedCard from "../cards/GetInvolvedCard";
// Card component with animations

const GetInvolved = () => {
  // Container animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Title animations
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  return (
    <motion.div
      className="max-w-[1300px] flex flex-col gap-10 m-auto px-5 md:px-9 slg:px-12 lg:px-[74px] py-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.h3
        className="text-[26px] font-bold mb-2 text-center"
        variants={titleVariants}
      >
        Get Involved in Creating Change
      </motion.h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-start">
        <GetInvolvedCard
          header="Support Change"
          subheader="Help rebuild lives"
          floating_icon={<HandHeart size={24} strokeWidth={2} />}
          text1="Aid reintegration efforts"
          text2="Provide housing & jobs"
          text3="Be part of the movement"
          icon1={<HeartHandshake size={24} />}
          icon2={<Home size={24} />}
          icon3={<HelpingHand size={24} />}
          button_text="Support Now"
        />
        <GetInvolvedCard
          header="Donate & Empower"
          subheader="Your gift creates impact"
          floating_icon={<Briefcase size={24} strokeWidth={2} />}
          text1="Fund job training"
          text2="Support safe housing"
          text3="Change lives today"
          icon1={<HandHeart size={24} />}
          icon2={<BookOpenCheck size={24} />}
          icon3={<Users size={24} />}
          button_text="Donate Today"
          is_primary_button
        />
        <GetInvolvedCard
          header="Mentor & Guide"
          subheader="Be the support they need"
          floating_icon={<Users size={24} strokeWidth={2} />}
          text1="Guide someone's journey"
          text2="Help with job readiness"
          text3="Build a strong community"
          icon1={<HandHeart size={24} />}
          icon2={<Briefcase size={24} />}
          icon3={<HelpingHand size={24} />}
          button_text="Get Involved"
        />
      </div>
    </motion.div>
  );
};
export default GetInvolved;
