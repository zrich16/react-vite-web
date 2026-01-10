import DashboardLayout from "../../components/layout/DashboardLayout";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBirthdayCake,
  FaIdCard,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import Swal from 'sweetalert2';

export default function Nutriologo() {
  const tabs = ["personales", "direccion", "historial", "contacto"];
  const [activeTab, setActiveTab] = useState("personales");

  const currentStep = tabs.indexOf(activeTab) + 1;
  const totalSteps = tabs.length;

  const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const currentIndex = tabs.indexOf(activeTab);
    if (currentIndex < tabs.length - 1) {
      setActiveTab(tabs[currentIndex + 1]);
    }
  };

  // Título dinámico por tab
  const getTabTitle = (tab = activeTab) => {
    switch (tab) {
      case "personales":
        return "Datos Personales";
      case "direccion":
        return "Dirección";
      case "historial":
        return "Historial Clínico";
      case "contacto":
        return "Datos de Contacto";
      default:
        return "";
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí puedes manejar tu lógica de envío (API, validaciones, etc.)
    Swal.fire({
      icon: "success",
      title: "Registro Guardado",
      text: "¡La información se ha enviado correctamente!",
    });
  };

  return (
    <DashboardLayout>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-100 p-4">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-lg bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-10 space-y-6"
        >
          {/* PROGRESO */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-medium text-slate-500">
              <span>Paso {currentStep} de {totalSteps}</span>
              <span>{getTabTitle()}</span>
            </div>
            <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
                transition={{ duration: 0.4 }}
                className="h-full bg-gradient-to-r from-[#00008B] to-blue-500"
              />
            </div>
          </div>

          {/* TABS */}
          <div className="flex border-b border-slate-200">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-2 text-sm font-semibold ${
                  activeTab === tab
                    ? "text-[#00008B] border-b-2 border-[#00008B]"
                    : "text-slate-400"
                }`}
              >
                {getTabTitle(tab)}
              </button>
            ))}
          </div>

          {/* TÍTULO */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#00008B]">
              Registro de Usuario
            </h2>
            <p className="text-sm text-slate-500">{getTabTitle()}</p>
          </div>

          {/* CONTENIDO POR TAB */}
          <AnimatePresence mode="wait">
            {activeTab === "personales" && (
              <motion.div
                key="personales"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <Input label="Nombre completo" icon={<FaUser />} />
                <Input label="Primer Apellido" icon={<FaUser />} />
                <Input label="Segundo Apellido" icon={<FaUser />} />
                <Input label="CURP" icon={<FaIdCard />} />
                <Input label="Correo electrónico" icon={<FaEnvelope />} type="email" />
                <Input label="Teléfono" icon={<FaPhone />} type="number" />
                <Input label="Fecha Nacimiento" icon={<FaBirthdayCake />} type="date" />
              </motion.div>
            )}

            {activeTab === "direccion" && (
              <motion.div
                key="direccion"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <Input label="Calle y Número" icon={<FaUser />} />
                <Input label="Colonia" icon={<FaUser />} />
                <Input label="Ciudad" icon={<FaUser />} />
                <Input label="Código Postal" icon={<FaIdCard />} />
              </motion.div>
            )}

            {activeTab === "historial" && (
              <motion.div
                key="historial"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <Input label="Alergias" icon={<FaUser />} />
                <Input label="Enfermedades Crónicas" icon={<FaUser />} />
                <Input label="Medicamentos Actuales" icon={<FaUser />} />
              </motion.div>
            )}

            {activeTab === "contacto" && (
              <motion.div
                key="contacto"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <Input label="Correo electrónico" icon={<FaEnvelope />} type="email" />
                <Input label="Teléfono" icon={<FaPhone />} type="number" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* BOTÓN */}
          {currentStep < totalSteps ? (
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="button"
              onClick={handleNext}
              className="w-full py-3 rounded-xl text-white font-semibold
                bg-gradient-to-r from-[#00008B] to-blue-500
                hover:from-blue-600 hover:to-[#00008B]
                transition shadow-lg hover:shadow-2xl"
            >
              Siguiente
            </motion.button>
          ) : (
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit" // ✅ llama a handleSubmit
              className="w-full py-3 rounded-xl text-white font-semibold
                bg-gradient-to-r from-[#00008B] to-blue-500
                hover:from-blue-600 hover:to-[#00008B]
                transition shadow-lg hover:shadow-2xl"
            >
              Guardar Información
            </motion.button>
          )}
        </motion.form>
      </div>
    </DashboardLayout>
  );
}

/* ---------- INPUT REUTILIZABLE ---------- */
function Input({ label, icon, type = "text" }) {
  return (
    <div className="relative">
      <label className="block text-sm font-medium text-slate-700 mb-1">
        {label}
      </label>
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
        {icon}
      </span>
      <input
        type={type}
        className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300
          focus:outline-none focus:ring-2 focus:ring-[#00008B]"
      />
    </div>
  );
}
