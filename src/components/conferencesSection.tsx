import Image from "next/image";
import AsideElements from "./ui/AsideElements";
import { getCloudinaryUrl } from "@/utils/cloudinary";

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
      <h1 className="text-center text-[#006838]  font-extrabold md:text-4xl font-heavy font-futura-pt my-8 ">
        Conferencias
      </h1>
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
      <div className="flex gap-8 my-8">
        <div className="w-[45%]  relative m-8">
          <Image
            src="https://res.cloudinary.com/dqgqrvnnw/image/upload/v1752762944/12._Secci%C3%B3n_conferencias_o2lfxe_c_fill_ar_3_4_g_auto_upao4v.jpg"
            fill
            alt={"Conferencia sobre crianzas"}
            className="rounded-lg shadow-lg "
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
