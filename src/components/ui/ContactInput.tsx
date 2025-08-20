"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { JSX } from "react/jsx-runtime";

interface ContactInputProps {
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  as?: "input" | "textarea" | "select";
}

export default function ContactInput({
  label,
  type = "text",
  value,
  onChange,
  required = true,
  as = "input",
}: ContactInputProps): JSX.Element {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(value.length > 0);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const newValue = e.target.value;
    onChange(newValue);
    setHasValue(newValue.length > 0);
  };

  const labelClass = `absolute left-3 transition-all duration-300 pointer-events-none font-futura-pt font-book ${
    isFocused || hasValue
      ? "text-xs -top-2 bg-white px-2 text-[#006838]"
      : "text-gray-500 top-3"
  }`;

  const baseClass =
    "w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-[#006838] font-futura-pt font-book transition-all duration-300 text-sm md:text-base";

  return (
    <motion.div
      className="relative mb-4 md:mb-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <label className={labelClass}>{label}</label>

      {as === "select" ? (
        <select
          value={value}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          required={required}
          className={`${baseClass} bg-white`}
        >
          <option value="">Selecciona una opción</option>
          <option value="padre">Padre/Madre</option>
          <option value="educador">Educador</option>
          <option value="otro">Otro</option>
        </select>
      ) : as === "textarea" ? (
        <textarea
          value={value}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          required={required}
          rows={4}
          className={`${baseClass} resize-none`}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          required={required}
          className={baseClass}
        />
      )}
    </motion.div>
  );
}
