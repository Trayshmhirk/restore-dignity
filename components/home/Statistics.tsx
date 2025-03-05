"use client";
import React, { useEffect, useState } from "react";
import { Users, CheckCircle, Handshake } from "lucide-react";
import { motion } from "framer-motion";

// Counter animation hook
const useCounter = (
  end: number,
  duration: number = 2000,
  delay: number = 0
) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (delay > 0) {
      timeoutId = setTimeout(() => {
        let start = 0;
        const step = end / (duration / 16); // 16ms is roughly one frame at 60fps
        const timer = setInterval(() => {
          start += step;
          if (start > end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);

        return () => clearInterval(timer);
      }, delay);
    } else {
      let start = 0;
      const step = end / (duration / 16);
      const timer = setInterval(() => {
        start += step;
        if (start > end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }

    return () => clearTimeout(timeoutId);
  }, [end, duration, delay]);

  return count;
};

const Statistics = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  // Counter values with animation
  const individualsCount = useCounter(2500, 2500, 300);
  const successRateCount = useCounter(85, 2000, 600);
  const volunteersCount = useCounter(1200, 2200, 900);

  return (
    <section className="bg-[#EEF8F2] relative overflow-hidden">
      {/* Decorative background elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 rounded-full bg-green-600/5 -z-0"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-green-500/5 -z-0"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        viewport={{ once: true }}
      />

      <div className="max-w-[1300px] flex flex-col gap-7 md:gap-10 m-auto px-5 md:px-9 slg:px-12 lg:px-[74px] py-20 relative z-10">
        <motion.div
          className="flex flex-col gap-1 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-dark_primary text-xl font-bold tracking-[2px]">
            Our Impact
          </h2>
          <p className="text-[30px] font-medium">
            Transforming lives through support, opportunity, and community.
          </p>
          <motion.div
            className="w-24 h-1 bg-green-600 mx-auto mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 slg:gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div
            className="bg-white p-6 flex items-center gap-4 border border-primary rounded-xl"
            variants={item}
            whileHover={{
              y: -10,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              transition: { duration: 0.2 },
            }}
          >
            <motion.div
              className="bg-[#EEF8F2] flex items-center justify-center p-4 rounded-md"
              whileHover={{ rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Users className="size-8 text-green-600" />
            </motion.div>

            <div className="flex flex-col">
              <h3 className="text-3xl font-bold">
                {individualsCount.toLocaleString()}+
              </h3>
              <p className="text-sm text-gray-700">Individuals Reached</p>
            </div>
          </motion.div>

          <motion.div
            className="bg-white p-6 flex items-center gap-4 border border-primary rounded-xl"
            variants={item}
            whileHover={{
              y: -10,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              transition: { duration: 0.2 },
            }}
          >
            <motion.div
              className="bg-[#EEF8F2] flex items-center justify-center p-4 rounded-md"
              whileHover={{ rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <CheckCircle className="size-8 text-green-600" />
            </motion.div>

            <div className="flex flex-col">
              <h3 className="text-3xl font-bold">{successRateCount}%</h3>
              <p className="text-sm text-gray-700">Success Rate</p>
            </div>
          </motion.div>

          <motion.div
            className="bg-white p-6 flex items-center gap-4 border border-primary rounded-xl"
            variants={item}
            whileHover={{
              y: -10,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              transition: { duration: 0.2 },
            }}
          >
            <motion.div
              className="bg-[#EEF8F2] flex items-center justify-center p-4 rounded-md"
              whileHover={{ rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Handshake className="size-8 text-green-600" />
            </motion.div>

            <div className="flex flex-col">
              <h3 className="text-3xl font-bold">
                {volunteersCount.toLocaleString()}+
              </h3>
              <p className="text-sm text-gray-700">Community Volunteers</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Statistics;
