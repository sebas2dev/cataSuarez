"use client";
import React from "react";
import Image from "next/image";
import ProgramasCardFoldable from "@/components/ui/ProgramasCardFoldable";
import { useState } from "react";
import { motion } from "framer-motion";
import { getCloudinaryUrl } from "@/utils/cloudinary";

export default function PruebasPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const cardData = [
    {
      tag: "Curso Virtual",
      title: "COMUNICACIóN POSITIVA CON ADOLESCENTES",
      imageUrl: `${getCloudinaryUrl("Comunicación_positiva_con_adolescentes")}`,
      comingSoon: false,
      productDescription: `
      "Formación virtual de 10 horas para apoyar a padres, madres y maestros en su labor de acompañar y educar adolescentes en una manera eficaz y tranquila.
      <p class="my-2 font-bold">Este curso  se realiza 3 veces al años con un acompañamiento semanal en Vivo durante dos meses.</p>
      `,
      productEspecifications: `
      <ul class="list-disc pl-6">
        <li>10 horas de formación</li>
        <li>Cursos virtual con acompañamiento en Vivo </li>
        <li> Este curso lo realizo 3 veces al año con un acompañamiento semanal en Vivo duración de dos meses.</li>
        <li> Acceso a recursos y materiales especializados </li>
        <li>Sesiones prácticas dinámicas </li>
        <li>Certificado de participación </li>
      </ul>
      `,

      buttonText: "Quiero más Información",
      buttonLink:
        "https://hotmart.com/es/marketplace/productos/comunicacion-positiva-con-adolescentes/V99623692S ",
      openindex: 0,
    },
    {
      tag: "Libros Digitales",
      title: "HERRAMIENTAS PRÁCTICAS DE CRIANZA PARA…",
      imageUrl: `${getCloudinaryUrl("2._Ebooks_lixkvh")}`,
      comingSoon: false,
      productDescription: `
      <p>Una colección de 4 libros pensada para madres, padres y cuidadores que quieren 
      desarrollar habilidades para ejercer una educación más positiva y amorosa y conectar 
      mejor con sus hijos e hijas, educar desde el respeto y tener una experiencia de crianza 
      más satisfactoria e influyente
      </p>
      <p >
      Cada libro ofrece herramientas concretas y prácticas para abordar desafíos y retos comunes de crianza.
      </p><br>
      <p class="font-bold">
      `,
      productEspecifications: `
      <p class="font-bold">En esta serie puedes encontrar Herramientas Prácticas de Crianza Para:</p><br>
      <ol class="list-decimal pl-6">
      <li>Decir NO sin culpa ni castigos</li>
      <li>Aumentar la autoestima y promover una vida con bienestar, exitosa y feliz</li>
      <li>Hablar de la sexualidad sin temor ni vergüenza</li>
      <li>Desarrollar la inteligencia emocional para tener éxito y felicidad</li>
      </ol>
      <br>
      <p class="font-bold">Obtén el primer libro GRATIS diligenciando el siguiente formulario.</p>     
       `,
      buttonText: "Quiero mi libro GRATIS",
      buttonLink: "https://forms.gle/VuzbhhnUE5D6Xfta8",
      openindex: 1,
    },
    {
      tag: "Masterclass",
      title: "Desbloque la comunicación con tu adolescente",
      imageUrl: `${getCloudinaryUrl("Desbloquea_la_comunicacion")}`,
      comingSoon: true,
      productDescription: `
      <p>
      En esta masterclass aprenderás en solo 4 pasos cómo transformar la comunicación con tu adolescente
       y empezar a tener un impacto más profundo y positivo en su vida. Descubrirás cómo conectar desde 
       la empatía, establecer límites con respeto, fortalecer un vínculo que perdure, disfrutar más la 
       crianza y tener una vida familiar más armónica y feliz.
       </p><br>
      `,
      productEspecifications: "Sí es posible, y aquí te muestro cómo lograrlo.",
      buttonText: "Proximamente",
      buttonLink: "#",
      openindex: 2,
    },
  ];

  const dataSelected = cardData.filter((card, index) => index === openIndex);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100  text-white/90 font-book ">
      <div className="md:max-w-[900px] max-w-[90vw] mx-auto text-gray-600  ">
        <motion.h2
          className="text-3xl md:text-4xl font-heavy font-futura-pt text-[#006838]  mt-12 md:mt-0 mb-4 text-center relative inline-block left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Productos digitales
          <motion.div
            className="absolute -bottom-2 left-0 right-0 h-1 bg-[#98B475] mx-auto w-1/3"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.h2>
        {/* <h1 className="text-center mt-16 mb-4 text-[#006838] font-extrabold md:text-4xl text-3xl font-heavy font-futura-pt">
          Productos digitales
        </h1> */}
        <p className="text-center ">
          Si eres padre, madre, cuidador, maestro o lideras una institucion
          educativa...
        </p>
        <p className="bg-[#006838] text-white font-bold px-4 py-1 rounded-lg text-center my-2">
          Quiero que trabajemos juntos para fortalecer tu familia y transformar
          nuestra sociedad
        </p>
        <p className="text-center md:text-left">
          Acompañar la vida de un niño, niña o adolescente es una gran
          responsabilidad, y todo empieza por nosotros: el ejemplo la lección
          mas poderosa
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 ">
        {cardData.map((card, index) => (
          <ProgramasCardFoldable
            key={index}
            title={card.title}
            imageUrl={card.imageUrl}
            tag={card.tag}
            comingSoon={card.comingSoon}
            openindex={card.openindex}
            onClick={() => handleCardClick(index)}
            isOpenIndex={openIndex}
            productDescription={card.productDescription}
            productEspecifications={card.productEspecifications}
            buttonLink={card.buttonLink}
            buttonText={card.buttonText}
          />
        ))}
      </div>

      <div className="hidden md:block bg-[#006838]  w-full md:my-8 ">
        {openIndex !== null &&
          dataSelected.map((card, index) => (
            <motion.div
              key={index}
              className="mt-4 text-white max-w-[900px] mx-auto  my-8 py-8  "
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="uppercase text-center text-2xl mb-6  md:text-4xl text-3xl">
                {card.title}
              </h2>
              <div
                className=""
                dangerouslySetInnerHTML={{ __html: card.productDescription }}
              />
              <div className="flex items-center ">
                <div className=" w-[60%]">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: card.productEspecifications,
                    }}
                  />

                  <div className="flex justify-end">
                    <a
                      href={card.buttonLink}
                      className="inline-block m-8 px-8 py-1 rounded-xl text-[#006838] bg-white font-bold"
                    >
                      {card.buttonText || "Quiero más Información"}
                    </a>
                  </div>
                </div>

                <div className="w-[40%] center">
                  <Image
                    src={card.imageUrl}
                    height={180}
                    width={300}
                    alt={card.title}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </motion.div>
          ))}
      </div>
    </div>
  );
}
