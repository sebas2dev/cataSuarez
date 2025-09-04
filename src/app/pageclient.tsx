"use client";

import PageTransition from "@/components/PageTransition";
import About from "@/components/ui/About";
import Hero from "@/components/ui/Hero";
import QuoteSection from "@/components/ui/QuoteSection";
import { motion } from "framer-motion";

export default function PageClient() {
  return (
    <PageTransition>
      <main>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
          <QuoteSection />
          <About />
        </motion.div>
      </main>
    </PageTransition>
  );
}
