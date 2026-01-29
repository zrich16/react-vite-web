import { motion } from "framer-motion";

export default function Card({ title, value, url }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="
        relative overflow-hidden
        rounded-2xl
        bg-white
        p-6
        border border-blue-100
        shadow-md
        w-full
        max-w-md
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      {/* Glow */}
      <div className="
        absolute inset-0
        bg-gradient-to-br from-[#00008B]/15 via-blue-300/10 to-transparent
        opacity-0 hover:opacity-100 transition-opacity
      " />

      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <span className="
            flex items-center justify-center
            w-11 h-11
            rounded-xl
          
            text-white
            shadow-md
          ">
            <img     src={url}/>
          </span>
        </div>

        <h2 className="mt-4 text-3xl font-bold text-slate-800">
          {value}
        </h2>
      </div>
    </motion.div>
  );
}
