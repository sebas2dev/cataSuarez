// components/CardItem.tsx
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import AnimatedButton from "./button";

type CardItemProps = {
  title: string;
  imageUrl: string;
  comingSoon?: boolean;
  productDescription?: string;
  productEspecifications?: string;
  buttonLink?: string;
  logoUrl: string;
  onClick: () => void;
  openindex?: number;
  isOpenIndex?: number | null;
  buttonTextFamily?: string;
  buttonLinkFamily?: string;
  buttonTextTeachers?: string;
  buttonLinkTeachers?: string;
};

export default function CardFoldable({
  title,
  imageUrl,
  comingSoon = false,
  productDescription,
  productEspecifications,
  openindex,
  logoUrl,
  onClick,
  isOpenIndex,
  buttonLinkFamily,
  buttonLinkTeachers,
  buttonTextFamily,
  buttonTextTeachers,
}: CardItemProps) {
  return (
    <div className="w-full ">
      <div className=" relative  font-futura-pt font-book">
        <div className="mx-auto mb-[-16px]  w-[300px] rounded-2xl shadow-lg overflow-hidden">
          {/* Etiqueta superior */}
          <div className="bg-white w-[80px] h-[80px] top-2 left-2 rounded-full z-20 absolute overflow-hidden">
            <Image
              src={logoUrl}
              fill
              alt="Logo"
              className="object-contain absolute center"
            />
          </div>

          {/* Imagen */}
          <div className="relative h-110 w-full rounded-2xl overflow-hidden">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover absolute center "
            />

            {/* Gradiente y título */}
            {title && (
              <div className="absolute z-10 bottom-0 w-full p-4 rounded-t-lg backdrop-blur-sm bg-white/30">
                <h3 className="text-white font-bold text-xl uppercase">
                  {title}
                </h3>
              </div>
            )}
          </div>

          {/* Flecha y toggle */}

          <div className=" absolute left-1/2 transform -translate-x-1/2  z-20 mt-[-15px]">
            {comingSoon ? (
              <div className=" bg-white text-2xl text-[#006838]  font-bold px-2 py-1 rounded ">
                Próximamente
              </div>
            ) : (
              <button
                onClick={onClick}
                className="bg-white  rounded-full p-2 text-white cursor-pointer hover:scale-110 "
              >
                {openindex == isOpenIndex ? (
                  <FaArrowUp className="-500 text-2xl text-[#006838]" />
                ) : (
                  <FaArrowDown className=" text-2xl text-[#006838]" />
                )}
              </button>
            )}
          </div>
        </div>
        <div
          className={`w-[300px] mx-auto text-white font-bold px-4 pt-2  pb-12 rounded-b-xl  bg-[#006838]`}
        ></div>
        {/* MObile visivility */}
        <div className="block md:hidden">
          <AnimatePresence>
            {openindex == isOpenIndex && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="px-4 pb-4"
              >
                <motion.h2
                  className="text-3xl md:text-4xl font-heavy uppercase font-futura-pt text-[#006838]  mt-12 md:mt-0 mb-4 text-center relative inline-block left-1/2 transform -translate-x-1/2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  {title}
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-[#98B475] mx-auto w-1/3"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </motion.h2>
                <div
                  className="text-gray-600"
                  dangerouslySetInnerHTML={{ __html: productDescription ?? "" }}
                />
                <div
                  className="text-gray-600"
                  dangerouslySetInnerHTML={{
                    __html: productEspecifications ?? "",
                  }}
                />
                <div className="flex justify-center mt-12">
                  {buttonLinkFamily && (
                    <AnimatedButton
                      href={buttonLinkFamily ?? ""}
                      text={buttonTextFamily ?? "Quiero mas información"}
                      light={true}
                    ></AnimatedButton>
                  )}
                </div>
                <div className="flex justify-center mt-12">
                  <AnimatedButton
                    href={buttonLinkTeachers ?? "/contacto"}
                    text={buttonTextTeachers ?? "Quiero mas información"}
                    light={true}
                  ></AnimatedButton>
                </div>

                {/* <div className="text-sm text-gray-700">{buttonLink}</div> */}
                {/* <div className="text-sm text-gray-700">{imageUrl}</div> */}
                <div>Test</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
