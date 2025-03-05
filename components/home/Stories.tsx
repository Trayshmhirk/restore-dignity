"use client";

import React from "react";
import { Sun, Moon, Heart } from "lucide-react";
import StoriesCard from "../cards/StoriesCard";
import { motion } from "framer-motion";
function Card({
  text,
  description,
  icon: Icon,
  delay = 0,
}: {
  text: string;
  description: string;
  icon: React.ElementType;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
      className="flex gap-3 bg-white h-full p-5 rounded-[10px] shadow-lg"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
      >
        <Icon className="stroke-[#2b7a33] stroke-2 size-8" />
      </motion.div>
      <div className="flex flex-col gap-5">
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="font-semibold"
          >
            {text}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="text-sm"
          >
            {description}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}
const Stories = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    }),
  };

  return (
    <section className="bg-primary overflow-hidden">
      <div className="max-w-[1300px] m-auto px-5 md:px-9 slg:px-12 lg:px-[74px] py-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 justify-center items-start">
          <Card
            text="Wellness and Positivity"
            description="Embrace new beginnings with positivity and joy"
            icon={Sun}
            delay={0.1}
          />
          <Card
            text="Restful Nights"
            description="Experience deep, rejuvenating sleep for a fresh start"
            icon={Moon}
            delay={0.3}
          />
          <Card
            text="Stress-Free Living"
            description="Embrace peace of mind and positivity for a fresh start"
            icon={Heart}
            delay={0.5}
          />
        </div>
      </div>
      <div className="max-w-[1300px] m-auto px-5 md:px-9 slg:px-12 lg:px-[74px] py-20">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-dark_primary font-bold mb-2 tracking-[2px] text-center"
        >
          CLIENT TESTIMONIALS
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="font-medium text-[36px] mb-[60px] text-center"
        >
          Inspiring stories of innovation and hope
        </motion.p>
        <div className="grid smd:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 justify-center items-start">
          {[
            {
              text: "A new chapter begins",
              image: "/img/user1.png",
              name: "Sarah D.",
              job: "Founder of FreshStart",
              small: false,
            },
            {
              text: "Empowering lives with compassion and support",
              image: "/img/user2.png",
              name: "Michael R.",
              job: "Employment Specialist",
              small: true,
            },
            {
              text: "Hope through support and opportunities",
              image: "/img/user3.png",
              name: "Emily P.",
              job: "Healthcare Coordinator",
              small: false,
            },
            {
              text: "Empowering individuals through a brighter future",
              image: "/img/user3.png",
              name: "David H.",
              job: "Volunteer Coordinator",
              small: false,
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              className="h-full"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
            >
              <StoriesCard
                text={testimonial.text}
                image={testimonial.image}
                name={testimonial.name}
                job={testimonial.job}
                small={testimonial.small}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Stories;
