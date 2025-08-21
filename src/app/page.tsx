"use client";

import Hero from "../components/ui/Hero";
import About from "../components/ui/About";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import QuoteSection from "../components/ui/QuoteSection";
import Head from "next/head";

export default function Home() {
  return (
    <PageTransition>
      <Head>
        <title>Cata Suárez Educación | Crianza Positiva y Formación</title>
        <meta
          name="description"
          content="Descubre la experiencia de Cata Suárez Educación: charlas, programas y recursos en crianza positiva y desarrollo infantil para padres y docentes."
        />
        <meta
          property="og:title"
          content="Cata Suárez Educación | Crianza Positiva y Formación"
        />
        <meta
          property="og:description"
          content="Descubre la experiencia de Cata Suárez Educación: charlas, programas y recursos en crianza positiva y desarrollo infantil para padres y docentes."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://catasuarezeducacion.com" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dqgqrvnnw/image/upload/v1754921395/Banner_c6lnhl.jpg"
        />
      </Head>
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
