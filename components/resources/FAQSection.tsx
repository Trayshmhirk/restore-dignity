import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  return (
    <motion.div
      className=""
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <motion.h3
        className="text-3xl font-semibold text-gray-800 mb-8 text-center"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Frequently Asked Questions
      </motion.h3>

      <motion.div
        className="bg-white p-6 shadow-lg rounded-lg border max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-b border-gray-200">
            <AccordionTrigger className="text-lg font-medium text-gray-800 py-4">
              Who is eligible for your services?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 pb-4">
              Our programs are designed for individuals transitioning out of
              prison and those experiencing homelessness. Eligibility varies by
              service, so we recommend reaching out to our team for guidance.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border-b border-gray-200">
            <AccordionTrigger className="text-lg font-medium text-gray-800 py-4">
              How can I apply for housing assistance?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 pb-4">
              You can apply for housing support through our intake process.
              Contact our support team, and they will guide you through the
              necessary steps and required documentation.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border-b border-gray-200">
            <AccordionTrigger className="text-lg font-medium text-gray-800 py-4">
              Are there job placement services available?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 pb-4">
              Yes! We offer employment training and job placement programs to
              help individuals secure stable work opportunities after
              incarceration or homelessness.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border-b border-gray-200">
            <AccordionTrigger className="text-lg font-medium text-gray-800 py-4">
              Do you provide emergency assistance?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 pb-4">
              Yes, we offer emergency support services, including temporary
              shelter, food assistance, and crisis intervention. Call our
              hotline at (555) 123-4567 for immediate help.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="text-lg font-medium text-gray-800 py-4">
              How can I support your mission?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 pb-4">
              You can help by volunteering, donating, or partnering with us.
              Visit our &quot;Get Involved&quot; page to learn more about how
              you can contribute.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.div>
    </motion.div>
  );
};

export default FAQSection;
