import React from "react";
import { Globe, Sunrise, Award, Heart } from "lucide-react";
import { motion } from "framer-motion";

const VisionSection = () => {
  const visionPillars = [
    {
      icon: Sunrise,
      title: "Opportunity",
      description:
        "Creating pathways for every individual to thrive, regardless of their past",
    },
    {
      icon: Award,
      title: "Dignity",
      description:
        "Ensuring respectful treatment and recognition of inherent human worth",
    },
    {
      icon: Heart,
      title: "Community",
      description:
        "Building inclusive, supportive networks that uplift those in need",
    },
  ];

  return (
    <section className="bg-white py-20 px-5 md:px-9 slg:px-12 lg:px-[74px] overflow-hidden">
      <div className="max-w-[1300px] mx-auto relative">
        {/* Background decorator elements */}
        <div className="absolute right-1/4 top-1/3 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <div className="inline-block p-3 bg-[#EEF8F2] rounded-full mb-4">
            <Globe className="w-10 h-10 text-dark_primary" strokeWidth={1.5} />
          </div>
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">
            Our Vision
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            We envision a world where every individual, regardless of their
            past, has the opportunity to thrive and contribute meaningfully to
            society.
          </p>
        </motion.div>

        {/* Vision pillars */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {visionPillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-[#F7FAF8] p-6 rounded-xl border border-primary/10 shadow-md"
            >
              <div className="bg-white p-3 rounded-full w-fit mb-4">
                <pillar.icon
                  className="w-8 h-8 text-dark_primary"
                  strokeWidth={1.5}
                />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                {pillar.title}
              </h4>
              <p className="text-gray-600">{pillar.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Vision illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative bg-[#EEF8F2] rounded-xl"
        >
          <div className="flex items-center justify-center p-10">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 md:p-10 max-w-2xl text-center shadow-lg border">
              <h4 className="text-2xl font-semibold text-gray-800 mb-4">
                A World of Inclusion and Support
              </h4>
              <p className="text-gray-600 mb-6">
                In our vision, communities work together to provide resources,
                understanding, and pathways forward for those who have
                experienced incarceration or homelessness. Through collaborative
                efforts, we can create lasting change and build a more equitable
                society.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  "Rehabilitation",
                  "Reintegration",
                  "Empowerment",
                  "Support",
                ].map((value, index) => (
                  <span
                    key={index}
                    className="bg-[#EEF8F2] text-dark_primary px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;
