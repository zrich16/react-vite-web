import { motion } from "framer-motion";

export default function Card({ title, value, url }) {
  return (
   <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, ease: "easeOut" }}
  className="
    relative overflow-hidden
    w-full max-w-md
    rounded-2xl
    bg-white
    p-6

    /* Contorno azul más visible */
    border-2 border-blue-500/40

    /* Sombra azul profesional */
    shadow-[0_10px_25px_rgba(37,99,235,0.15)]

    transition-all duration-300
    hover:-translate-y-1
    hover:border-blue-600
    hover:shadow-[0_15px_35px_rgba(37,99,235,0.25)]
  "
>
  {/* Glow interno elegante */}
  <div
    className="
      absolute inset-0
      bg-gradient-to-br
      from-blue-600/10
      via-blue-400/5
      to-transparent
      opacity-0
      transition-opacity duration-300
      hover:opacity-100
    "
  />

  <div className="relative z-10 space-y-4">
    <div className="flex items-center justify-between">
      <p className="text-sm font-medium text-slate-500">
        {title}
      </p>

      <span
        className="
          flex items-center justify-center
          w-11 h-11
          rounded-xl
          bg-gradient-to-br from-blue-600 to-blue-500
          shadow-md
        "
      >
        <img
          src={url}
          alt={title}
          className="w-6 h-6 object-contain"
        />
      </span>
    </div>

    <h2 className="text-3xl font-bold text-slate-800">
      {value}
    </h2>
  </div>
</motion.div>

  );
}
