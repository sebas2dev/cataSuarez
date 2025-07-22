// components/CardItem.tsx
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import AnimatedButton from "./button";

type CardItemProps = {
  title: string;
  imageUrl: string;
  tag: string;
  comingSoon?: boolean;
  productDescription?: string;
  productEspecifications?: string;
  buttonLink?: string;
  onClick: () => void;
  openindex?: number;
  isOpenIndex?: number | null;
  buttonText?: string;
};

export default function ProgramasCardFoldable({
  title,
  imageUrl,
  tag,
  comingSoon = false,
  productDescription,
  productEspecifications,
  buttonText,
  buttonLink,
  openindex,
  onClick,
  isOpenIndex,
}: CardItemProps) {
  return (
    <div className="">
      <div className=" relative  font-futura-pt font-book">
        <div className="w-[300px] relative mx-auto">
          <div
            className={`inline-block text-white font-bold px-4 pt-2  pb-5 rounded-t-lg bg-[#006838]`}
          >
            {tag}
          </div>
        </div>
        <div className=" mt-[-14px] w-[300px] mx-auto rounded-2xl shadow-lg overflow-hidden">
          {/* Etiqueta superior */}

          {/* Imagen */}
          <div className="relative h-110 w-full">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover absolute center "
            />

            {/* Gradiente y título */}
            {title && (
              <div className="absolute z-10 bottom-0 w-full p-4 rounded-t-lg backdrop-blur-sm bg-white/30">
                <h3 className="text-white font-bold text-2xl uppercase">
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
                className="bg-[#006838]  rounded-full p-2 text-white cursor-pointer hover:scale-110 "
              >
                {openindex == isOpenIndex ? (
                  <FaArrowUp className="-500 text-2xl" />
                ) : (
                  <FaArrowDown className=" text-2xl" />
                )}
              </button>
            )}
          </div>

          {/* Próximamente */}
        </div>
      </div>
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
                <AnimatedButton
                  href={buttonLink ?? ""}
                  text={buttonText ?? ""}
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
  );
}
