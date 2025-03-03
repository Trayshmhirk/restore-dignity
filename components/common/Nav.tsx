"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // Import usePathname for active link tracking
import { Menu, X, Home, Award, Book, Rocket, Users } from "lucide-react";

// Navigation data
const desktopNavLinks = [
  { href: "/", label: "Home", id: "home" },
  { href: "/about", label: "About Us", id: "about" },
  { href: "/services", label: "Services", id: "services" },
  { href: "/get-involved", label: "Get Involved", id: "get_involved" },
  { href: "/resources", label: "Resources", id: "resources" },
  { href: "/contact", label: "Contact", id: "contact" },
];

const mobileNavLinks = [
  { href: "/", label: "Home", id: "home", icon: "Home" },
  { href: "/about", label: "About Us", id: "about", icon: "Award" },
  { href: "/contact", label: "Contact", id: "contact", icon: "Users" },
  { href: "/services", label: "Services", id: "services", icon: "Rocket" },
  {
    href: "/get-involved",
    label: "Get Involved",
    id: "get_involved",
    icon: "Rocket",
  },
  { href: "/resources", label: "Resources", id: "resources", icon: "Book" },
];

const iconMap = { Home, Award, Book, Users, Rocket };

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get current path

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const renderIcon = (iconName: string) => {
    const Icon = iconMap[iconName as keyof typeof iconMap];
    return Icon ? <Icon className="size-5" /> : null;
  };

  return (
    <nav className="flex justify-between items-center px-5 py-4 smd:px-9 slg:px-12 lg:px-[74px]">
      <Link href="/">
        <Image
          src="/img/logo.png"
          alt="logo"
          width={64}
          height={64}
          className="object-cover"
        />
      </Link>

      {/* Mobile Menu Button */}
      <div className="block slg:hidden">
        <button onClick={toggleMenu} aria-label="Toggle Menu">
          <Menu size={24} />
        </button>
      </div>

      {/* Desktop Navigation */}
      <div className="gap-10 hidden items-center slg:flex">
        <ul className="flex gap-6 text-black font-semibold">
          {desktopNavLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`${
                  pathname === href ? "text-[#3d7743] font-bold" : "text-black"
                } hover:text-[#3d7743]`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-50 transition duration-300 ease-in-out"
          onClick={toggleMenu}
        />
      )}

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-y-0 left-0 z-[60] slg:hidden transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="relative bg-white w-[250px] h-full py-5 px-3">
          <div>
            <Link href="/">
              <Image
                src="/img/logo.png"
                alt="logo"
                width={50}
                height={50}
                className="object-cover absolute top-5 left-5"
              />
            </Link>
            <button
              onClick={toggleMenu}
              aria-label="Close Menu"
              className="absolute top-5 right-5"
            >
              <X size={24} />
            </button>
          </div>

          <ul className="flex flex-col gap-2 mt-20">
            {mobileNavLinks.map(({ href, label, icon }) => (
              <Link
                key={href}
                href={href}
                onClick={toggleMenu}
                className={`py-2 px-3 rounded-[6px] flex items-center gap-2 ${
                  pathname === href
                    ? "bg-[#3d7743] text-white font-medium"
                    : "text-[#212529] hover:text-[#3d7743]"
                }`}
              >
                {renderIcon(icon)}
                <span>{label}</span>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
