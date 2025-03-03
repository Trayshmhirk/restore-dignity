import React from "react";
import { motion } from "framer-motion";
interface GetInvolvedCardProps {
  header: string;
  subheader: string;
  floating_icon: React.ReactNode;
  text1: string;
  text2: string;
  text3: string;
  icon1: React.ReactNode;
  icon2: React.ReactNode;
  icon3: React.ReactNode;
  button_text: string;
  is_primary_button?: boolean;
}
// Card component with animations
const GetInvolvedCard = ({
  header,
  subheader,
  floating_icon,
  text1,
  text2,
  text3,
  icon1,
  icon2,
  icon3,
  button_text,
  is_primary_button = false,
}: GetInvolvedCardProps) => {
  return (
    <motion.div
      className="bg-primary p-6 rounded-xl shadow-lg border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h4 className="text-xl font-bold text-gray-800">{header}</h4>
          <p className="text-sm text-gray-600">{subheader}</p>
        </div>
        <motion.div
          className="bg-[#EEF8F2] p-2 rounded-full"
          whileHover={{ rotate: 15 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {floating_icon}
        </motion.div>
      </div>

      <motion.div className="space-y-3 mb-6">
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
        >
          <span className="text-green-600">{icon1}</span>
          <p className="text-sm">{text1}</p>
        </motion.div>
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <span className="text-green-600">{icon2}</span>
          <p className="text-sm">{text2}</p>
        </motion.div>
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <span className="text-green-600">{icon3}</span>
          <p className="text-sm">{text3}</p>
        </motion.div>
      </motion.div>

      <motion.button
        className={`w-full py-2 px-4 rounded-lg text-center font-medium ${
          is_primary_button
            ? "bg-green-600 text-white hover:bg-green-700"
            : "border border-green-600 text-green-600 hover:bg-green-50"
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {button_text}
      </motion.button>
    </motion.div>
  );
};
export default GetInvolvedCard;
