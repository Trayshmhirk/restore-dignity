"use client";
import React from "react";
import {
  Heart,
  HandHelping,
  BookOpen,
  Briefcase,
  Home,
  Users,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

const Mission = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
    hover: {
      y: -10,
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 },
    },
  };

  const iconMotion = {
    rest: { scale: 1 },
    hover: { scale: 1.1, rotate: 5, transition: { duration: 0.3 } },
  };

  return (
    <section className="bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <motion.div
        className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-green-600/5 -z-10"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
      />
      <motion.div
        className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-green-600/5 -z-10"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
      />

      <div className="max-w-[1300px] m-auto px-5 md:px-9 slg:px-12 lg:px-[74px] py-20">
        <motion.div
          className="flex flex-col md:flex-row gap-12 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Mission Statement Side */}
          <motion.div
            className="flex flex-col space-y-6 md:w-1/2"
            variants={itemVariants}
          >
            <motion.h3
              className="text-dark_primary font-bold tracking-[2px] uppercase"
              variants={itemVariants}
            >
              Our Mission
            </motion.h3>
            <motion.h2
              className="text-3xl md:text-4xl font-bold leading-tight"
              variants={itemVariants}
            >
              Creating Pathways to Recovery and Reintegration
            </motion.h2>

            <motion.p
              className="text-[#393939] leading-relaxed"
              variants={itemVariants}
            >
              We are dedicated to providing a safe and supportive environment
              that fosters recovery, rehabilitation, and reintegration for
              individuals overcoming challenges. Through compassionate care and
              personalized support, we empower our clients to rebuild their
              lives and achieve sustainable change.
            </motion.p>

            <motion.div
              variants={itemVariants}
              whileInView={{
                opacity: 1,
                transition: {
                  when: "beforeChildren",
                  staggerChildren: 0.1,
                },
              }}
            >
              <Separator className="bg-green-200 h-[2px] my-4" />
            </motion.div>

            <motion.div
              className="flex flex-col space-y-4"
              variants={itemVariants}
            >
              {[
                {
                  icon: <Heart className="stroke-[#2b7a33] h-5 w-5" />,
                  text: "Compassionate, evidence-based services",
                },
                {
                  icon: <HandHelping className="stroke-[#2b7a33] h-5 w-5" />,
                  text: "Personalized treatment and support",
                },
                {
                  icon: <Users className="stroke-[#2b7a33] h-5 w-5" />,
                  text: "Community safety and well-being",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                    variants={iconMotion}
                  >
                    {item.icon}
                  </motion.div>
                  <p className="font-medium">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Key Focus Areas */}
          <motion.div className="md:w-1/2" variants={itemVariants}>
            <motion.h3
              className="text-dark_primary font-bold mb-6 tracking-[2px] uppercase md:text-right"
              variants={itemVariants}
            >
              Our Approach
            </motion.h3>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              variants={containerVariants}
            >
              {[
                {
                  icon: <Home className="stroke-[#2b7a33] h-8 w-8 mb-2" />,
                  title: "Safe Environment",
                  description:
                    "Creating secure spaces for healing and sustainable recovery",
                },
                {
                  icon: <Briefcase className="stroke-[#2b7a33] h-8 w-8 mb-2" />,
                  title: "Holistic Support",
                  description:
                    "Addressing physical, emotional, and social aspects of recovery",
                },
                {
                  icon: <Users className="stroke-[#2b7a33] h-8 w-8 mb-2" />,
                  title: "Empowerment",
                  description:
                    "Helping clients rebuild their lives and achieve lasting change",
                },
                {
                  icon: <BookOpen className="stroke-[#2b7a33] h-8 w-8 mb-2" />,
                  title: "Brighter Future",
                  description:
                    "Creating pathways to fulfilling futures for every individual",
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  transition={{ delay: 0.3 + i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-[#EEF8F2] border-none shadow-sm transition-all duration-300">
                    <CardContent className="pt-6">
                      <motion.div
                        className="flex flex-col gap-3"
                        initial="rest"
                        whileHover="hover"
                      >
                        <motion.div variants={iconMotion}>
                          {card.icon}
                        </motion.div>
                        <h4 className="font-semibold text-lg">{card.title}</h4>
                        <p className="text-sm text-[#393939]">
                          {card.description}
                        </p>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;
