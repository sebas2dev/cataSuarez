"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type AnimatedButtonProps = {
  href: string;
  text: string;
  light?: boolean;
};

export default function AnimatedButton({
  href,
  text,
  light = false,
}: AnimatedButtonProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      animate={{
        scale: [1, 1.05, 1],
        y: [0, -4, 0],
        transition: {
          duration: 2.5,
          repeat: Infinity,
          ease: [0.76, 0, 0.24, 1],
        },
      }}
    >
      <Link
        href={href}
        className={`${
          light
            ? "bg-white  text-[#006838] hover:bg-[#006838] hover:text-white border-2 border-white"
            : "bg-[#006838]  text-white hover:bg-white hover:text-[#006838] border-2 border-[#006838]"
        }inline-block  px-6 md:px-8 py-3 rounded-full  transition-all duration-300  hover:-translate-y-1 shadow-[0_4px_12px_rgba(0,104,56,0.15)] hover:shadow-[0_6px_20px_rgba(0,104,56,0.25)] text-sm md:text-base`}
      >
        {text}
      </Link>
    </motion.div>
  );
}
