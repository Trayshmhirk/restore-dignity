import React from "react";
import { Target, ArrowRight, Check, Handshake } from "lucide-react";
import { motion } from "framer-motion";

const MissionSection = () => {
  const keyPoints = [
    "Breaking the cycle of homelessness and reoffending",
    "Offering comprehensive support programs and mentorship",
    "Providing access to essential resources and housing",
    "Creating pathways to stable employment and education",
  ];

  return (
    <section className="relative bg-gradient-to-br from-green-50 to-green-300 py-20 px-5 md:px-9 slg:px-12 lg:px-[74px] overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0 opacity-20"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute w-96 h-96 rounded-full bg-green-300 -top-20 -left-20"></div>
        <div className="absolute w-80 h-80 rounded-full bg-green-400 bottom-20 right-10"></div>
        <div className="absolute w-64 h-64 rounded-full bg-green-500 top-40 right-20"></div>
      </motion.div>

      <div className="max-w-[1300px] mx-auto relative">
        {/* Background decorator element */}
        <div className="absolute -right-12 -top-12 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -left-12 -bottom-12 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />

        <div className="relative grid slg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="order-2 slg:order-1"
          >
            <div className="bg-white p-8 rounded-xl shadow-md border border-primary/10 mt-10 slg:mt-0">
              <h3 className="text-3xl font-semibold text-gray-800 mb-6">
                Our Mission
              </h3>
              <p className="text-gray-600 mb-6">
                Our mission is to provide a safe and supportive environment that
                fosters recovery, rehabilitation, and reintegration for
                individuals overcoming substance misuse and alcohol dependency.
                We are dedicated to offering comprehensive, evidence-based
                services that address the physical, emotional, and social
                aspects of recovery. Through compassionate care, personalized
                treatment plans, and ongoing support, we empower our clients to
                rebuild their lives, restore their health, and achieve
                sustainable sobriety.
              </p>

              <div className="space-y-3 mb-6">
                {keyPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="flex items-start gap-2"
                  >
                    <Check
                      className="text-dark_primary mt-1 flex-shrink-0"
                      size={18}
                    />
                    <p className="text-gray-700">{point}</p>
                  </motion.div>
                ))}
              </div>

              <motion.a
                href="/get-involved"
                className="inline-flex items-center gap-2 text-dark_primary font-medium hover:underline"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Learn how you can help
                <ArrowRight size={16} />
              </motion.a>
            </div>
          </motion.div>

          <div className="flex justify-center gap-10 order-1 slg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
              className=" flex "
            >
              <div className="relative">
                {/* Mission icon with decorative elements */}
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/10 rounded-full blur-md transform scale-110" />
                  <div className="relative bg-white p-12 rounded-full shadow-lg border border-primary/20">
                    <Target
                      className="w-20 h-20 text-dark_primary"
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Decorative circles */}
                  <div className="absolute -top-5 -right-5 w-10 h-10 bg-accent/40 rounded-full" />
                  <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-primary/30 rounded-full" />
                  <div className="absolute top-1/4 -left-8 w-6 h-6 bg-secondary/60 rounded-full" />
                </div>

                {/* Stats box */}
                <motion.div
                  className="absolute -bottom-10 right-0 bg-white py-3 px-5 rounded-lg shadow-md border border-primary/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <p className="text-sm text-gray-500">People Helped</p>
                  <p className="text-2xl font-bold text-dark_primary">2,500+</p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
              className="order-1 md:order-2 flex justify-center"
            >
              <div className="relative">
                {/* Mission icon with decorative elements */}
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/10 rounded-full blur-md transform scale-110" />
                  <div className="relative bg-white p-12 rounded-full shadow-lg border border-primary/20">
                    <Handshake
                      className="w-20 h-20 text-dark_primary"
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Decorative circles */}
                  <div className="absolute -top-5 -right-5 w-10 h-10 bg-accent/40 rounded-full" />
                  <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-primary/30 rounded-full" />
                  <div className="absolute top-1/4 -left-8 w-6 h-6 bg-secondary/60 rounded-full" />
                </div>

                {/* Stats box */}
                <motion.div
                  className="absolute -bottom-10 right-0 bg-white py-3 px-5 rounded-lg shadow-md border border-primary/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <p className="text-sm text-gray-500">Volunteers</p>
                  <p className="text-2xl font-bold text-dark_primary">1,200+</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
