import Image from "next/image";
import AsideElements from "./ui/AsideElements";
import { getCloudinaryUrl } from "@/utils/cloudinary";
import { motion } from "framer-motion";

export default function ConferencesSection() {
  const conferencesElements = [
    {
      title: "Padres de alto desempeño  ",
      imageUrl: `${getCloudinaryUrl("6._Padres_de_alto_desempeño_mupptw")}`,
    },
    {
      title: "Educar sin premios ni castigos",
      imageUrl: `${getCloudinaryUrl(
        "7._Educar_sin_premios_ni_castigos_1_su0gwf"
      )}`,
    },
    {
      title: "Manejo Positivo de problemas y conflictos",
      imageUrl: `${getCloudinaryUrl(
        "8._Manejo_positivo_de_problemas_y_conflictos_idykfj"
      )}`,
    },
    {
      title: "Prevensión y manejo de la violencia",
      imageUrl: `${getCloudinaryUrl(
        "9._Prevencion_y_manejo_de_la_violencia_pmkcrv"
      )}`,
    },
    {
      title: "Como convertirme en un padre o lider para inspirar",
      imageUrl: `${getCloudinaryUrl(
        "10._cómo_convertirme_en_un_padre_coj0bj"
      )}`,
    },
    {
      title: "Comunicación positiva con adolescentes",
      imageUrl: `${getCloudinaryUrl(
        "11._comunicación_positiva_con_adolescentes_yar3g9"
      )}`,
    },
  ];
  return (
    <div className="max-w-[900px] mx-auto px-4 py-4 text-gray-600">
      <motion.h2
        className="text-3xl md:text-4xl font-heavy font-futura-pt text-[#006838] my-16 mb-4 text-center relative inline-block left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Conferencias
        <motion.div
          className="absolute -bottom-2 left-0 right-0 h-1 bg-[#98B475] mx-auto w-1/3"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </motion.h2>
      {/* <h1 className="text-center text-[#006838]  font-extrabold md:text-4xl text-3xl font-heavy font-futura-pt my-8 ">
        Conferencias
      </h1> */}
      <p className="font-bold">
        Ofrezco conferencias presenciales y virtuales sobre crianza
        parentalidad, educación y disciplina positiva dirigidas a:
      </p>
      <ol className=" list-decimal pl-5 my-4">
        <li>
          Familias que buscan herramientas prácticas para acompañar a sus hijos
          e hijas con mayor conciencia y conocimiento para la promoción de sus
          fortalezas y potencialidades.
        </li>
        <li>
          Docentes y entornos educativos enfocados en fortalecer los climas de
          aula positivos, el desarrollo socioemocional e integral de niños,
          niñas y adolescentes.
        </li>
        <li>
          Organizaciones que quieran fortalecer sus equipos y las familias de
          sus colaboradores, apoyando su bienestar emocional, disminuyendo
          factores de estrés y aumentando su rendimiento individual y grupal.
        </li>
      </ol>
      <div className="flex flex-col md:flex-row gap-8 my-8">
        <div className=" w-[95%] h-80  md:h-auto md:w-[50%] relative m-8">
          <Image
            src="https://res.cloudinary.com/dqgqrvnnw/image/upload/v1746027045/images/maestros-primera-2.jpg"
            fill
            alt={"Conferencia sobre crianzas"}
            className="object-cover object-left rounded-lg shadow-lg "
          />
          <div className="bg-white w-[80px] h-[80px] top-2 left-2 rounded-full z-10 absolute overflow-hidden">
            <Image
              src={getCloudinaryUrl("CataSuarez_j6c6l6")}
              fill
              alt="Logo"
              className="object-contain absolute center"
            />
          </div>
        </div>
        <div>
          {conferencesElements.map((conference, index) => (
            <div key={index}>
              <AsideElements
                imageUrl={conference.imageUrl}
                title={conference.title}
              />
              {index < conferencesElements.length - 1 && (
                <hr className="my-4 border-t border-gray-300 w-7/10 ml-6" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
