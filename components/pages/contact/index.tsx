"use client";

import React from "react";
import { Clock, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import ContactCard from "@/components/contact/ContactCard";
import ContactForm from "@/components/contact/ContactForm";
import SocialMedia from "@/components/contact/SocialMedia";
import Image from "next/image";

const Contact = () => {
  // Fade in animation for sections
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-16 md:py-24">
        <div className="max-w-[1300px] mx-auto px-5 md:px-9 lg:px-[74px]">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-green-600 mb-6">
              Contact Us
            </h1>
            <p className="text-gray-700 text-lg mb-4 max-w-2xl mx-auto">
              We&apos;re here to help and answer any questions you might have.
              We look forward to hearing from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <motion.section
        className="max-w-[1300px] mx-auto grid smd:grid-cols-2 lg:grid-cols-3 gap-6 px-5 md:px-9 lg:px-[74px] py-10 md:py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <ContactCard
          title="Phone & Email"
          value="020 8124 5017"
          valuebottom="info@restoredignity.co.uk"
          icon={Phone}
        />
        <ContactCard
          title="Our Location"
          value="92 Livingston Street, Leicester"
          valuebottom="LE3 0QY, England"
          icon={MapPin}
        />
        <ContactCard
          title="Working Hours"
          value="Monday - Friday: 9AM - 5PM"
          valuebottom="Weekend: By Appointment"
          icon={Clock}
        />
      </motion.section>

      {/* Contact Form Section */}
      <section className="max-w-[1300px] mx-auto px-5 md:px-9 lg:px-[74px] py-16">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-green-600 text-xl font-bold tracking-[2px] uppercase mb-2">
            Get In Touch
          </h2>
          <p className="text-4xl font-semibold text-gray-800">
            We&apos;d Love to Hear From You
          </p>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions, suggestions, or want to learn more about our
            services? Fill out the form below and our team will get back to you
            as soon as possible.
          </p>
          <motion.div
            className="w-20 h-1 bg-green-600 mx-auto mt-6"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Image
              src={"/img/contact-image.png"}
              alt="email"
              className="w-full smd:max-w-[450px] lg:max-w-[400px] xl:max-w-[500px] object-cover"
              width={500}
              height={450}
            />
            {/* <div className="relative rounded-lg overflow-hidden shadow-lg">
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <div className="flex items-center gap-3 text-white mb-2">
                  <Mail className="h-5 w-5" />
                  <span>hello@restorepolicy.com</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <MessageSquare className="h-5 w-5" />
                  <span>(+1) 444-123-4567</span>
                </div>
              </div>
            </div> */}
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <motion.section
        className="w-full py-12 bg-gray-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="max-w-[1300px] mx-auto px-5 md:px-9 lg:px-[74px]">
          <div className="bg-white rounded-lg shadow-md overflow-hidden h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2421.6605590739173!2d-1.1554673229558021!3d52.62997792808084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487760c3b6b710ef%3A0xf297666ca7b31df1!2s92%20Livingstone%20St%2C%20Leicester%20LE3%200QY%2C%20UK!5e0!3m2!1sen!2sng!4v1742806425883!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Livingston Street, Leicester"
            ></iframe>
          </div>
        </div>
      </motion.section>

      {/* Social Media Section */}
      <section className="bg-primary/50 py-16">
        <div className="max-w-[1300px] mx-auto px-5 md:px-9 lg:px-[74px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-dark_primary font-bold text-xl mb-8">
              Connect With Us on Social Media
            </h2>

            <div className="flex justify-center items-center gap-6">
              <SocialMedia
                icon="/img/facebook.png"
                link="https://facebook.com"
                alt="Facebook"
              />
              <SocialMedia
                icon="/img/insta.png"
                link="https://instagram.com"
                alt="Instagram"
              />
              <SocialMedia
                icon="/img/x.png"
                link="https://twitter.com"
                alt="Twitter/X"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;
