import DashboardLayout from "../../components/layout/DashboardLayout";
import { FaUser, FaEnvelope, FaPhone, FaBirthdayCake, FaIdCard } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Nutriologo() {
  return (
    <DashboardLayout>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-100 p-4">
        
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-lg bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-8 space-y-6"
        >
          {/* Title */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#00008B]">
              Registro de Usuario
            </h2>
            <p className="text-sm text-slate-500">Datos Personales</p>
          </div>

          {/* Nombre completo */}
          <div className="relative">
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Nombre completo
            </label>
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              <FaUser />
            </span>
            <input
              type="text"
              placeholder="Juan Pérez"
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 text-slate-700
                focus:outline-none focus:ring-2 focus:ring-[#00008B] focus:border-[#00008B] transition"
            />
          </div>

          {/* Primer Apellido */}
          <div className="relative">
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Primer Apellido
            </label>
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              <FaUser />
            </span>
            <input
              type="text"
              placeholder="Pérez"
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 text-slate-700
                focus:outline-none focus:ring-2 focus:ring-[#00008B] focus:border-[#00008B] transition"
            />
          </div>

          {/* Segundo Apellido */}
          <div className="relative">
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Segundo Apellido
            </label>
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              <FaUser />
            </span>
            <input
              type="text"
              placeholder="García"
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 text-slate-700
                focus:outline-none focus:ring-2 focus:ring-[#00008B] focus:border-[#00008B] transition"
            />
          </div>

          {/* CURP */}
          <div className="relative">
            <label className="block text-sm font-medium text-slate-700 mb-1">
              CURP
            </label>
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              <FaIdCard />
            </span>
            <input
              type="text"
              placeholder="CURP"
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 text-slate-700
                focus:outline-none focus:ring-2 focus:ring-[#00008B] focus:border-[#00008B] transition"
            />
          </div>

          {/* Correo electrónico */}
          <div className="relative">
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Correo electrónico
            </label>
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              <FaEnvelope />
            </span>
            <input
              type="email"
              placeholder="correo@email.com"
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 text-slate-700
                focus:outline-none focus:ring-2 focus:ring-[#00008B] focus:border-[#00008B] transition"
            />
          </div>

          {/* Grid Teléfono + Fecha Nacimiento */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative">
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Teléfono
              </label>
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                <FaPhone />
              </span>
              <input
                type="number"
                placeholder="999999999"
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 text-slate-700
                  focus:outline-none focus:ring-2 focus:ring-[#00008B] focus:border-[#00008B] transition"
              />
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Fecha Nacimiento
              </label>
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                <FaBirthdayCake />
              </span>
              <input
                type="date"
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 text-slate-700
                  focus:outline-none focus:ring-2 focus:ring-[#00008B] focus:border-[#00008B] transition"
              />
            </div>
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full py-3 rounded-xl text-white font-semibold
              bg-gradient-to-r from-[#00008B] to-blue-500
              hover:from-blue-600 hover:to-[#00008B]
              transition shadow-lg hover:shadow-2xl"
          >
            Guardar Información
          </motion.button>
        </motion.form>
      </div>
    </DashboardLayout>
  );
}
