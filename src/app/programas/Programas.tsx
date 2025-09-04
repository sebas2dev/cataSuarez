"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import ProgramsDigitalProducts from "@/components/ProgramsDigitalProducts";
import ProgramsPresencialProducts from "@/components/ProgramsPresencialProducts";
import ConferencesSection from "@/components/conferencesSection";

const Programas = () => {
  const { scrollY } = useScroll();
  const mobileScale = useTransform(scrollY, [0, 300], [1, 1.05]);
  const [isTouch, setIsTouch] = useState(false);
  const lastScrollY = useSpring(0);

  useEffect(() => {
    setIsTouch("ontouchstart" in window);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    lastScrollY.set(latest);
  });

  const mobileAnimationProps = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      mass: 0.5,
    },
  };

  return (
    <>
      <motion.main
        className="min-h-screen bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Hero Section */}
        <section className="relative h-screen overflow-hidden">
          <motion.div
            className="absolute inset-0"
            style={{
              scale: isTouch ? mobileScale : undefined,
            }}
          >
            <motion.div
              className="absolute inset-0"
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image
                src="https://res.cloudinary.com/dqgqrvnnw/image/upload/v1746046767/3_cejb0v.png"
                alt="Programas Hero"
                fill
                className="object-cover object-[70%_35%] md:object-center "
                quality={100}
                priority
              />
              <div className="absolute inset-0 bg-black/30"></div>
            </motion.div>
          </motion.div>

          <div className="relative h-full flex flex-col justify-center">
            <div className="container mx-auto px-6 md:px-8">
              <div className="max-w-[800px]">
                <motion.div
                  className="overflow-hidden mb-4 md:mb-6"
                  {...(isTouch
                    ? mobileAnimationProps
                    : {
                        initial: { opacity: 0, y: 20 },
                        animate: { opacity: 1, y: 0 },
                        transition: { duration: 1.2, delay: 0.8 },
                      })}
                >
                  <p className="text-white/70 font-futura-pt font-book tracking-[0.15em] md:tracking-[0.2em] uppercase text-xs md:text-sm">
                    Nuestros Programas
                  </p>
                </motion.div>

                <div className="space-y-4 md:space-y-6">
                  <motion.h1
                    className="text-5xl md:text-8xl font-futura-pt font-heavy text-white leading-[1.1] tracking-tight"
                    {...(isTouch
                      ? {
                          ...mobileAnimationProps,
                          transition: {
                            ...mobileAnimationProps.transition,
                            delay: 0.2,
                          },
                        }
                      : {
                          initial: { opacity: 0, y: 40 },
                          animate: { opacity: 1, y: 0 },
                          transition: { duration: 1.2, delay: 1 },
                        })}
                  >
                    Transformando
                    <br />
                    Vidas
                  </motion.h1>

                  <motion.p
                    className="text-base md:text-xl font-book font-futura-pt text-white/90  max-w-[65%] md:max-w-xl"
                    {...(isTouch
                      ? {
                          ...mobileAnimationProps,
                          transition: {
                            ...mobileAnimationProps.transition,
                            delay: 0.4,
                          },
                        }
                      : {
                          initial: { opacity: 0, y: 40 },
                          animate: { opacity: 1, y: 0 },
                          transition: { duration: 1.2, delay: 1.2 },
                        })}
                  >
                    Programas especializados diseñados para padres, educadores y
                    profesionales, enfocados en el desarrollo integral y la
                    transformación positiva.
                  </motion.p>
                </div>
              </div>
            </div>
          </div>

          {isTouch && (
            <motion.div
              className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-20"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <motion.div
                className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2"
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                <motion.div
                  className="w-1 h-2 bg-white/80 rounded-full"
                  animate={{ y: [0, 4, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                />
              </motion.div>
              <motion.span
                className="text-white/60 text-xs md:text-sm mt-2 font-futura-pt font-book"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                Desliza hacia abajo
              </motion.span>
            </motion.div>
          )}
        </section>
        <div>
          <ProgramsDigitalProducts />
          <ProgramsPresencialProducts />
          <ConferencesSection />
        </div>

        {/* </section> */}

        {/* Call to Action */}
        {/* <section className="py-16 md:py-24 bg-[#006838]/5">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-4xl font-heavy font-futura-pt text-[#006838] mb-6">
              ¿Listo para iniciar la transformación?
            </h2>
            <p className="text-base md:text-lg text-gray-700 font-book font-futura-pt mb-8">
              Contacta conmigo para obtener más información sobre mis programas
              y cómo puedo ayudarte.
            </p>
            <Link
              href="/contacto"
              className="inline-block bg-[#006838] text-white font-futura-pt font-book py-3 px-8 rounded-full hover:bg-[#00532c] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Contáctame Ahora
            </Link>
          </motion.div>
        </div>
      </section> */}
      </motion.main>
    </>
  );
};

export default Programas;
