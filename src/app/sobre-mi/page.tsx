"use client";

import SobreMiHero from "@/components/SobreMiHero";
import SobreMiInfo from "@/components/SobreMiInfo";
import SobreMiEducation from "@/components/SobreMiEducation";
import SobreMiProfessional from "@/components/SobreMiProfessional";
import PageTransition from "@/components/PageTransition";
import Head from "next/head";

export default function SobreMi() {
  return (
    <PageTransition>
      <Head>
        <title>
          Conoce a Cata Suárez | Educación y Parentalidad Consciente
        </title>
        <meta
          name="description"
          content="Con más de 10 años de experiencia, Cata Suárez comparte su misión de transformar la crianza y la educación con programas, talleres y conferencias."
        />
        <meta
          property="og:title"
          content="Conoce a Cata Suárez | Educación y Parentalidad Consciente"
        />
        <meta
          property="og:description"
          content="Con más de 10 años de experiencia, Cata Suárez comparte su misión de transformar la crianza y la educación con programas, talleres y conferencias."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://catasuarezeducacion.com/sobre-mi"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dqgqrvnnw/image/upload/v1754921395/Banner_c6lnhl.jpg"
        />
      </Head>
      <main>
        <SobreMiHero />
        <SobreMiInfo />
        <SobreMiEducation />
        <SobreMiProfessional />
      </main>
    </PageTransition>
  );
}
