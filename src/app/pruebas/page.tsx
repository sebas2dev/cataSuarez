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
      title: "COMUNICACIÖN POSITIVA CON ADOLESCENTES",
      imageUrl: `${getCloudinaryUrl("Comunicación_positiva_con_adolescentes")}`,
      comingSoon: false,
      productDescription:
        "Formación virtual de 10 horas para apoyar a padres, madres y maestros en su labor de acompañar y educar adolescentes en una manera eficaz y tranquila.\n \nEste curso  se realiza 3 veces al años con un acompañamiento semanal en Vivo durante dos meses.\n\n",
      productEspecifications:
        "10 horas de formación\nCursos virtual con acompañamiento en Vivo \n Este curso lo realizo 3 veces al año con un acompañamiento semanal en Vivo dirate dos meses. \n Acceso a recursos y materiales especializados \nSesiones practicas dinámicas \nCertificado de participación",
      buttonLink: "#",
      openindex: 0,
    },
    {
      tag: "Libros Digitales",
      title: "",
      imageUrl: `${getCloudinaryUrl("libros_digitales")}`,
      comingSoon: false,
      productDescription: "Descripción del Programa 1",
      productEspecifications: "Especificaciones del Programa 1",
      buttonLink: "#",
      openindex: 1,
    },
    {
      tag: "Masterclass",
      title: "Desbloque la comunicación con tu adolescente",
      imageUrl: `${getCloudinaryUrl("Desbloquea_la_comunicacion")}`,
      comingSoon: true,
      productDescription: "Descripción del Programa 1",
      productEspecifications: "Especificaciones del Programa 1",
      buttonLink: "#",
      openindex: 2,
    },
  ];

  const dataSelected = cardData.filter((card, index) => index === openIndex);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100  text-white/90 font-book tracking-[0.1em] my-16">
      <h1 className="text-3xl font-bold mb-4">Página de Pruebas</h1>
      <p className="text-lg text-gray-700">
        Esta es una página de pruebas para verificar el funcionamiento del
        componente ProgramasCardFoldable.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-8">
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
          />
        ))}
      </div>

      <div className="hidden md:block bg-[#006838]  w-full my-8">
        {/* <strong>Seleccionaste:</strong> {selectedCard} */}
        {openIndex !== null &&
          dataSelected.map((card, index) => (
            <motion.div
              key={index}
              className="mt-4 text-white max-w-[900px] mx-auto  my-8 py-8  "
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="whitespace-pre-line w-4/5  ">
                {card.productDescription}
              </p>
              <div className="flex ">
                <div className=" w-[65%]">
                  <p className="whitespace-pre-line">
                    {card.productEspecifications}
                  </p>
                  <div className="flex justify-end">
                    <a
                      href={card.buttonLink}
                      className="inline-block m-8 px-8 py-1 rounded-xl text-[#006838] bg-white font-bold"
                    >
                      Quiero más Información
                    </a>
                  </div>
                </div>

                <div className="w-[35%] center">
                  <Image
                    src={card.imageUrl}
                    width={300}
                    height={180}
                    alt={card.title}
                  />
                </div>
              </div>
            </motion.div>
          ))}
      </div>
    </div>
  );
}
