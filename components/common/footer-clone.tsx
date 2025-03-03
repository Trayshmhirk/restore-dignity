"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  // Navigation links (same as the Nav component)
  const footerLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/get-involved", label: "Get Involved" },
    { href: "/resources", label: "Resources" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="bg-[#F7FAF8]">
      {/* Main Footer Section */}
      <div className="max-w-[1300px] mx-auto px-5 md:px-9 lg:px-[74px] py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo and Description */}
          <div className="space-y-6">
            <Image
              src={"/img/logo.png"}
              alt="logo"
              width={150}
              height={150}
              className="object-contain"
            />
            <p className="text-gray-600 text-sm">
              Restore Policy is dedicated to empowering individuals who have
              faced incarceration or homelessness. We provide the tools,
              resources, and support needed to rebuild lives with dignity and
              purpose.
            </p>
            <div className="flex gap-4">
              {[
                {
                  icon: "/svg/instagram.svg",
                  href: "https://www.instagram.com/",
                },
                {
                  icon: "/svg/linkedln.svg",
                  href: "https://www.linkedin.com/",
                },
                {
                  icon: "/svg/facebook.svg",
                  href: "https://www.facebook.com/",
                },
                { icon: "/svg/x.svg", href: "https://x.com/" },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <Image
                    src={social.icon}
                    alt={social.icon.split("/").pop()?.split(".")[0] || "icon"}
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-gray-800">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-gray-600 hover:text-[#3d7743] transition-colors text-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-gray-800">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>123 Restore Street, City, Country</li>
              <li>Email: info@restorepolicy.org</li>
              <li>Phone: +1 (234) 567-890</li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-gray-800">Subscribe</h4>
            <p className="text-sm text-gray-600">
              Stay updated with our latest news and opportunities.
            </p>
            <div className="flex rounded-lg overflow-hidden bg-white shadow-sm">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 text-sm text-gray-800 outline-none"
              />
              <button className="px-6 bg-[#3d7743] hover:bg-[#2b7a33] transition-colors">
                <Image
                  src={"/svg/send.svg"}
                  alt="send"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-[#3d7743] py-4 text-center">
        <p className="text-sm text-white">
          © {new Date().getFullYear()} Restore Policy. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
