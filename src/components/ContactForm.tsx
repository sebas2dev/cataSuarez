"use client";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import ContactInput from "./ui/ContactInput";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("meozbkpe");
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    type: "padre",
  });

  if (state.succeeded) {
    formRef.current?.reset();
    //     console.log(state.errors);
    //     // return (
    //     //   <p className="text-red-400">
    //     //     Opps a ocurrido un error, intentalo de nuevo!
    //     //   </p>
    //   );
  }

  return (
    // <form onSubmit={handleSubmit} className=" space-y-1 md:space-y-2">
    //   <div className=" mb-4 md:mb-6 relative">
    //     <label
    //       htmlFor="email"
    //       className={`absolute left-3 transition-all duration-300 pointer-events-none font-futura-pt font-book
    //       ${
    //         isFocused
    //           ? "text-xs -top-2 bg-white px-2 text-[#006838]"
    //           : "text-gray-500 top-3"
    //       }`}
    //     >
    //       Nombre Completo
    //     </label>
    //     <input
    //       id="name"
    //       type="text"
    //       name="Nombre"
    //       className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-[#006838] font-futura-pt font-book transition-all duration-300 text-sm md:text-base "
    //       onFocus={() => setIsFocused(true)}
    //       onBlur={() => setIsFocused(false)}
    //     />
    //     <ValidationError prefix="Name" field="Nombre" errors={state.errors} />
    //   </div>
    //   <div className=" mb-4 md:mb-6 relative">
    //     <label
    //       htmlFor="email"
    //       className={`absolute left-3 transition-all duration-300 pointer-events-none font-futura-pt font-book
    //       ${
    //         isFocused
    //           ? "text-xs -top-2 bg-white px-2 text-[#006838]"
    //           : "text-gray-500 top-3"
    //       }`}
    //     >
    //       Email Address
    //     </label>
    //     <input id="email" type="email" name="email" />
    //   </div>
    //   <ValidationError prefix="Email" field="email" errors={state.errors} />
    //   <textarea id="message" name="message" />
    //   <ValidationError prefix="Message" field="message" errors={state.errors} />
    //   <motion.button
    //     type="submit"
    //     disabled={state.submitting}
    //     className="w-full mt-4 md:mt-6 bg-[#006838] text-white py-3 md:py-4 rounded-lg hover:bg-[#005830] transition-all duration-300 font-heavy font-futura-pt relative overflow-hidden group text-sm md:text-base"
    //     whileHover={{ scale: 1.02 }}
    //     whileTap={{ scale: 0.98 }}
    //     initial={{ opacity: 0 }}
    //     whileInView={{ opacity: 1 }}
    //     viewport={{ once: true }}
    //     transition={{ duration: 0.5 }}
    //   >
    //     <span className="relative z-10">Enviar mensaje</span>
    //     <motion.div
    //       className="absolute inset-0 bg-[#98B475] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    //       initial={false}
    //       animate={{ scale: [0.9, 1], opacity: [0, 1] }}
    //       exit={{ scale: 0.9, opacity: 0 }}
    //     />
    //   </motion.button>
    //   {/* <button type="submit" disabled={state.submitting}>
    //     Submit
    //   </button> */}
    //   <ValidationError errors={state.errors} />
    // </form>
    <form
      onSubmit={handleSubmit}
      ref={formRef}
      className="space-y-1 md:space-y-2"
    >
      <ContactInput
        label="Nombre completo"
        type="text"
        value={formData.name}
        onChange={(value) => setFormData({ ...formData, name: value })}
      />
      <ValidationError prefix="Name" field="Nombre" errors={state.errors} />

      <ContactInput
        label="Email"
        type="email"
        value={formData.email}
        onChange={(value) => setFormData({ ...formData, email: value })}
      />
      <ValidationError prefix="Email" field="Email" errors={state.errors} />

      <ContactInput
        label="Teléfono"
        type="tel"
        value={formData.phone}
        onChange={(value) => setFormData({ ...formData, phone: value })}
      />
      <ValidationError prefix="Phone" field="Phone" errors={state.errors} />

      <ContactInput
        label=""
        value={formData.type}
        onChange={(value) => setFormData({ ...formData, type: value })}
        as="select"
      />
      <ValidationError prefix="Me" field="Me" errors={state.errors} />

      <ContactInput
        label="Mensaje"
        value={formData.message}
        onChange={(value) => setFormData({ ...formData, message: value })}
        as="textarea"
      />
      <ValidationError prefix="Message" field="Message" errors={state.errors} />

      <motion.button
        type="submit"
        className="w-full mt-4 md:mt-6 bg-[#006838] text-white cursor-pointer py-3 md:py-4 rounded-lg hover:bg-[#005830] transition-all duration-300 font-heavy font-futura-pt relative overflow-hidden group text-sm md:text-base"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="relative z-10">Enviar mensaje</span>
        <motion.div
          className="absolute inset-0 bg-[#98B475] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
          animate={{ scale: [0.9, 1], opacity: [0, 1] }}
          exit={{ scale: 0.9, opacity: 0 }}
        />
      </motion.button>
      <ValidationError errors={state.errors} />
      {state.succeeded && (
        <div className="max-w-xl mx-auto mt-6 p-4 bg-green-50 border border-green-200 rounded-lg shadow-sm flex items-center space-x-3">
          <svg
            className="w-6 h-6 text-green-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <p className="text-green-800 font-medium">
            ¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.
          </p>
        </div>
      )}
    </form>
  );
}
