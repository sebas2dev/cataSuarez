// components/CardItem.tsx
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

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
};

export default function CardFoldable({
  title,
  imageUrl,
  comingSoon = false,
  productDescription,
  productEspecifications,
  buttonLink,
  openindex,
  logoUrl,
  onClick,
  isOpenIndex,
}: CardItemProps) {
  return (
    <div className=" relative  font-futura-pt font-book">
      <div className=" mb-[-16px]  w-[300px] rounded-2xl shadow-lg overflow-hidden">
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
        className={`w-full text-white font-bold px-4 pt-2  pb-12 rounded-b-xl  bg-[#006838]`}
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
              <div className="text-sm text-gray-700">{productDescription}</div>
              <div className="text-sm text-gray-700">
                {productEspecifications}
              </div>

              <div className="text-sm text-gray-700">{buttonLink}</div>
              <div className="text-sm text-gray-700">{imageUrl}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
