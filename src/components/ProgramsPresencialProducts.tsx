"use client";
import React from "react";
import Image from "next/image";
import CardFoldable from "./ui/CardFoldable";
import { useState } from "react";
import { motion } from "framer-motion";
import { getCloudinaryUrl } from "@/utils/cloudinary";

export default function ProgramsPresencialProducts() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const cardData = [
    {
      title: "PARENTALIDAD POSITIVA: FAMILIAS A+",
      imageUrl: `${getCloudinaryUrl("4._Parentalidad_Positiva_A_1_sxwvya")}`,
      productDescription: `
      En el programa Familias A+ te brindo herramientas para que puedas disminuir el uso de castigos, gritos y prácticas inefectivas de crianza, e implementar una paternidad transformadora basada en el amor, la cooperación y el respeto.
      <br> Este programa grupal está diseñado para aumentar tu confianza y tus habilidades parentales para la crianza, fortalecer relaciones familiares y crear ambientes familiares más seguros, sensibles y estimulantes para los hijos, que promuevan su bienestar y les permitan desarrollarse con éxito.


      `,

      productEspecifications: `
      Esta formación está dirigida tanto para organizaciones (con grupos de 20 personas o más personas y en cualquier ciudad), como para padres, madres y cuidadores de manera individual. En el caso individual puedes inscribirte a una de las formaciones semestrales que realizo en la ciudad de Barranquilla
      `,

      buttonTextFamily: "Padre o Cuidador",
      buttonLinkFamily:
        "https://www.icloud.com/attachment/?u=https%3A%2F%2Fcvws.icloud-content.com%2FB%2FAT0cRI3EUlr6CtGwK0K1Dqmb7oi-AfvMRkN9rnXUakGXsCZsObBXZ0lj%2F%24%7Bf%7D%3Fo%3DAikjtKb6GiAMKpRZv7OH4RtWnZrwNbzeK7xe7fDXHgxv%26v%3D1%26x%3D3%26a%3DCAoglDFf-a6urLt8oTymo_H4rhzgvMUUBUp8Wj0VImeCE1USdhCtkLq-8TIYraC1kvsyIgEAKgkC6AMA_2RdqKRSBJvuiL5aBFdnSWNqJc7vh9uCSQzzmyXgEqvTWJRetmwzkFfUw4VAuoVDiWfhKHj4qHhyJQDxj5wYH0SvDwugyyLQBwZGEuvFqw51R_htIH_an-BxYaCzz3I%26e%3D1751043100%26fl%3D%26r%3D9695E473-0E16-499C-868E-C0A274353A51-1%26k%3D%24%7Buk%7D%26ckc%3Dcom.apple.largeattachment%26ckz%3D5A2ED198-2E4B-4D52-AC70-1CBB341A4E01%26p%3D52%26s%3DFCa9mt84p_mWzcTTr8HXlQwx7CA&uk=N9LWRJWaNzTOdb9X9UhIWw&f=Portafolio%20Familias%20A%2B%20padres%20y%20cuidadores.pdf&sz=12614284",
      buttonTextTeachers: "Colegio o Empresa",
      buttonLinkTeachers:
        "https://www.icloud.com/attachment/?u=https%3A%2F%2Fcvws.icloud-content.com%2FB%2FAXsFducCt1WRAL3rk-D1L3Eqw1N0AeViJfnglHmhM6G2gUakWXDX6RzN%2F%24%7Bf%7D%3Fo%3DAk50GtKlUfRekXLELoN9gAWyt79nqPRZh2H6UDtHKB6b%26v%3D1%26x%3D3%26a%3DCAogQPuVLsz1HUgGDP_dilwvSBvMnA8BOY03yMMoH35WK1gSdhCKjLq-8TIYipy1kvsyIgEAKgkC6AMA_2ibg6lSBCrDU3RaBNfpHM1qJfo8l6xkIdUhcs64burq3YJa7QMtZ7LHn1km703-afCf8k65KR1yJYsNzg2ZsN1rjiDWDe9F1cD04B7NepduEPyW3gBdH1Zga_v_AZE%26e%3D1751043100%26fl%3D%26r%3D057065C3-EEA3-4EB7-A53E-2FA7AFAFBB67-1%26k%3D%24%7Buk%7D%26ckc%3Dcom.apple.largeattachment%26ckz%3D5A2ED198-2E4B-4D52-AC70-1CBB341A4E01%26p%3D52%26s%3DfsXhs2f_iiIcDy7kTnsgMKK-DX8&uk=4ysXgP-FxWsLcGK_5CLaBw&f=Portafolio%20Familias%20A%2B%20instituciones.pdf&sz=15961019",
      openindex: 0,
      logoUrl: `${getCloudinaryUrl("35._logo_familias_A_wffnwf")}`,
    },
    {
      title: "PROGRAMA MAESTROS PARA LA VIDA ",
      imageUrl: `${getCloudinaryUrl("5._Maestros_para_la_vida_1_tgraox")}`,
      comingSoon: false,
      productEspecifications: `
      En la estrategia tengo en cuenta la disponibilidad horaria de los maestros y hacer énfasis en los temas de interés institucional
      `,
      productDescription: `
      Si eres un líder educativo y tienes más de 15 maestros, puedo diseñarte un programa de formación en educación y disciplina positiva, habilidades socioemocionales o competencias comportamentales docentes. Con esta formación apoyas la gestión de los maestros para que puedan promover la educación socioemocional de los estudiantes y fomentar un clima escolar más positivo. 
      `,
      buttonText: "",
      buttonLink: "/contacto",
      openindex: 1,
      logoUrl: `${getCloudinaryUrl("29._Logo_maestros_para_la_vida_1_objcok")}`,
    },
  ];

  const dataSelected = cardData.filter((card, index) => index === openIndex);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100  text-white/90 font-book">
      <div className="max-w-[900px] mx-auto text-gray-600 ">
        <motion.h2
          className="text-3xl md:text-4xl px-0 font-heavy font-futura-pt text-[#006838] my-16 mb-4 text-center relative inline-block left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Programas Presenciales
          <motion.div
            className="absolute -bottom-2 left-0 right-0 h-1 bg-[#98B475] mx-auto w-1/3"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.h2>

        <p className="text-center text-[#006838] font-bold mb-4">
          Talleres de crianza y educación positiva para padres, educadores y
          organizaciones
        </p>
        <p className="px-4">
          En estos talleres encontrarás herramientas prácticas y basadas en
          evidencia para transformar la manera en que te relacionas con niños,
          niñas y adolescentes, ya sea en el hogar o en el aula. A través de
          metodologías como la Disciplina Positiva y el desarrollo de
          habilidades socio-emocionales, buscamos fortalecer los vínculos,
          promover el respeto mutuo y crear ambientes más seguros, empáticos y
          estimulantes.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 my-8">
        {cardData.map((card, index) => (
          <CardFoldable
            key={index}
            title={card.title}
            imageUrl={card.imageUrl}
            comingSoon={card.comingSoon}
            openindex={card.openindex}
            onClick={() => handleCardClick(index)}
            isOpenIndex={openIndex}
            productDescription={card.productDescription}
            productEspecifications={card.productEspecifications}
            buttonLink={card.buttonLink}
            logoUrl={card.logoUrl}
            buttonTextFamily={card.buttonTextFamily}
            buttonLinkFamily={card.buttonLinkFamily}
            buttonTextTeachers={card.buttonTextTeachers}
            buttonLinkTeachers={card.buttonLinkTeachers}
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
              <h2 className="uppercase text-center text-2xl mb-6">
                {card.title}
              </h2>

              <div
                className="whitespace-pre-line  "
                dangerouslySetInnerHTML={{ __html: card.productDescription }}
              />
              <div className="flex items-center ">
                <div className=" w-[60%]">
                  <div
                    className="whitespace-pre-line"
                    dangerouslySetInnerHTML={{
                      __html: card.productEspecifications,
                    }}
                  />

                  <div className="flex justify-end">
                    {card.buttonLinkFamily && (
                      <a
                        href={card.buttonLinkFamily}
                        target="_blank"
                        className="inline-block m-8 px-8 py-1 rounded-xl text-[#006838] bg-white font-bold cursor-pointer"
                      >
                        {card.buttonTextFamily || "Quiero más Información"}
                      </a>
                    )}
                    <div className=" ">
                      <a
                        href={card.buttonLinkTeachers || "/contacto"}
                        target="_blank"
                        className=" relative inline-block z-10 m-8 px-8 py-1 rounded-lg text-[#006838] bg-white font-bold cursor-pointer z-20"
                      >
                        {card.buttonTextTeachers || "Quiero más Información"}
                        {/* <span className="absolute w-full h-full border-2 border-gray-400 z-0 top-[-6px] left-1 rounded-lg"></span> */}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="w-[40%] center relative">
                  <Image
                    src={card.imageUrl}
                    height={180}
                    width={300}
                    alt={card.title}
                    className="rounded-lg shadow-lg"
                  />
                  <div className="bg-white w-[80px] h-[80px] bottom-2 left-2 rounded-full z-50 absolute overflow-hidden">
                    <Image
                      src={card.logoUrl}
                      fill
                      alt="Logo"
                      className="object-contain absolute center"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
      </div>
    </div>
  );
}
