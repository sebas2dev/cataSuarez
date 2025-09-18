import SobreMiHero from "@/components/SobreMiHero";
import SobreMiInfo from "@/components/SobreMiInfo";
import SobreMiEducation from "@/components/SobreMiEducation";
import SobreMiProfessional from "@/components/SobreMiProfessional";
import PageTransition from "@/components/PageTransition";
// import Head from "next/head";

export const metadata = {
  title: "Conoce a Cata Suárez | Educación y Parentalidad Consciente",
  description:
    "Con más de 10 años de experiencia, Cata Suárez comparte su misión de transformar la crianza y la educación con programas, talleres y conferencias.",
  openGraph: {
    title: "Conoce a Cata Suárez | Educación y Parentalidad Consciente",
    url: "https://catasuarezeducacion.com/sobre-mi",
  },
};

export default function SobreMi() {
  return (
    <PageTransition>
      <main>
        <SobreMiHero />
        <SobreMiInfo />
        <SobreMiEducation />
        <SobreMiProfessional />
      </main>
    </PageTransition>
  );
}
