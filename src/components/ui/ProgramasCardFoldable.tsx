// components/CardItem.tsx
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

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
  // productEspecifications,
  // buttonText,
  buttonLink,
  openindex,
  onClick,
  isOpenIndex,
}: CardItemProps) {
  return (
    <div className=" relative  font-futura-pt font-book">
      <div
        className={`inline-block text-white font-bold px-4 pt-2  pb-5 rounded-t-lg bg-[#006838]`}
      >
        {tag}
      </div>
      <div className=" mt-[-14px] w-[300px] rounded-2xl shadow-lg overflow-hidden">
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
              <div className="text-sm text-gray-700 bg-gray-200 w-94 h-42">
                {productDescription}
              </div>
              <div
                className=""
                // dangerouslySetInnerHTML={{ __html: productDescription }}
              />

              <div className="text-sm text-gray-700">{buttonLink}</div>
              <div className="text-sm text-gray-700">{imageUrl}</div>
              <div>Test</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
