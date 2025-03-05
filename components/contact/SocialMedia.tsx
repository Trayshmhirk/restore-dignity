import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface SocialMediaProps {
  icon: string;
  link: string;
  alt: string;
  className?: string;
  children?: React.ReactNode;
}

const SocialMedia = ({
  icon,
  link,
  alt,
  className,
  children,
}: SocialMediaProps) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={`rounded-full shadow-md overflow-hidden flex items-center justify-center bg-white p-0.5 hover:shadow-lg transition-shadow duration-300 ${className}`}
    >
      {children || (
        <Image
          src={icon}
          alt={alt}
          className="rounded-full object-cover w-12 h-12"
          width={48}
          height={48}
        />
      )}
    </motion.a>
  );
};

export default SocialMedia;
