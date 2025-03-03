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
    { href: "/success-stories", label: "Success Stories" },
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
    <footer>
      {/* Main Footer Section */}
      <div className="bg-primary grid smd:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-16 px-5 py-16 md:px-9 slg:px-12 xl:px-[74px]">
        {/* Logo and Social Media */}
        <div className="w-full smd:max-w-[350px]">
          <Image
            src={"/img/logo.png"}
            alt="logo"
            width={150}
            height={150}
            className="object-contain"
          />

          <p className="text-[14px] my-4">
            Restore Policy is dedicated to empowering individuals who have faced
            incarceration or homelessness. We provide the tools, resources, and
            support needed to rebuild lives with dignity and purpose.
          </p>

          <p className="font-bold text-[20px] mb-3">Follow Us</p>
          <div className="flex gap-[18px] items-center">
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
                className="size-[40px] flex justify-center items-center p-2 bg-dark_primary rounded-full shadow-sm hover:shadow-md hover:-translate-y-[2px] transition-all"
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

        {/* Quick Links (Split into Two Columns) */}
        <div>
          <h4 className="text-xl font-bold mb-6">Quick Links</h4>
          <div className="flex gap-8 md:gap-10 xl:gap-20">
            <div>
              <ul className="space-y-3">
                {firstColumnLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-[14px] hover:text-[#3d7743] font-medium transition-colors"
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
                      className="text-[14px] hover:text-[#3d7743] font-medium transition-colors"
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
        <div className="space-y-5">
          <h4 className="text-xl font-bold">Subscribe</h4>
          <p className="text-sm">
            Stay updated with our latest news and opportunities.
          </p>
          <div className="rounded-full overflow-hidden flex w-full sxl:w-[350px] shadow-md">
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
      <div className="bg-[#8fb993] p-3 text-center text-sm">
        Copyright © 2025 Restore Policy. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
