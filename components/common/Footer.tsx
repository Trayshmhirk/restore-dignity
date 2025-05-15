"use client";
import React from "react";
import Link from "next/link";
import { Instagram, Linkedin, Facebook, Twitter } from "lucide-react";
import SocialMedia from "../contact/SocialMedia";
import Image from "next/image";

const Footer = () => {
  // Navigation links
  const footerLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/get-involved", label: "Get Involved" },
    { href: "/resources", label: "Resources" },
    { href: "/contact", label: "Contact" },
    // { href: "/success-stories", label: "Success Stories" },
  ];

  // Split links into two columns
  const firstColumnLinks = footerLinks.slice(
    0,
    Math.ceil(footerLinks.length / 2)
  );
  const secondColumnLinks = footerLinks.slice(
    Math.ceil(footerLinks.length / 2)
  );

  return (
    <footer className="bg-primary border-t border-gray-200">
      {/* Main Footer Section */}
      <div className="max-w-[1440px] mx-auto flex flex-col flex-wrap xl:justify-between smd:flex-row gap-10 xl:gap-16 px-5 py-16 md:px-9 slg:px-12 xl:px-[74px]">
        {/* Logo and Social Media */}
        <div className="w-full smd:max-w-[350px]">
          <Image
            src={"/img/logo.png"}
            alt="logo"
            width={100}
            height={100}
            className="object-contain"
          />
          <div className="text-2xl font-bold text-green-700">
            Restore Dignity
          </div>

          <p className="text-sm my-4 text-gray-700">
            Restore Dignity is dedicated to empowering individuals who have
            faced incarceration or homelessness. We provide the tools,
            resources, and support needed to rebuild lives with dignity and
            purpose.
          </p>

          <p className="font-bold text-lg mb-3">Follow Us</p>
          <div className="flex gap-3 items-center">
            <SocialMedia
              icon="/placeholder.svg"
              link="https://www.instagram.com/"
              alt="Instagram"
              className="w-10 h-10"
            >
              <Instagram className="text-green-600" />
            </SocialMedia>

            <SocialMedia
              icon="/placeholder.svg"
              link="https://www.linkedin.com/"
              alt="LinkedIn"
              className="w-10 h-10"
            >
              <Linkedin className="text-green-600" />
            </SocialMedia>

            <SocialMedia
              icon="/placeholder.svg"
              link="https://www.facebook.com/"
              alt="Facebook"
              className="w-10 h-10"
            >
              <Facebook className="text-green-600" />
            </SocialMedia>

            <SocialMedia
              icon="/placeholder.svg"
              link="https://twitter.com/"
              alt="Twitter"
              className="w-10 h-10"
            >
              <Twitter className="text-green-600" />
            </SocialMedia>
          </div>
        </div>

        {/* Quick Links (Split into Two Columns) */}
        <div className="flex-shrink">
          <h4 className="text-xl font-bold mb-6 text-green-700">Quick Links</h4>
          <div className="flex gap-8 md:gap-10 xl:gap-20">
            <div>
              <ul className="space-y-3">
                {firstColumnLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm hover:text-green-700 font-medium transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <ul className="space-y-3">
                {secondColumnLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm hover:text-green-700 font-medium transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="space-y-5 flex-shrink-0">
          <h4 className="text-xl font-bold text-green-700">Subscribe</h4>
          <p className="text-sm text-gray-700">
            Stay updated with our latest news and opportunities.
          </p>
          <div className="rounded-full overflow-hidden flex w-full sm:w-[350px] shadow-md">
            <input
              type="email"
              placeholder="Email Address"
              className="py-[15px] px-[28px] flex-1 text-black outline-none"
            />
            <button className="w-[60px] border-none bg-dark_primary hover:bg-[#3d7743] grid place-content-center transition-colors duration-300 ease-in-out">
              <Image
                src={"/svg/send.svg"}
                alt="send"
                width={0}
                height={0}
                className="w-[21px] mr-1"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-green-600/20 p-3 text-center text-sm text-gray-700">
        Copyright © {new Date().getFullYear()} Restore Dignity. All Rights
        Reserved.
      </div>
    </footer>
  );
};

export default Footer;
