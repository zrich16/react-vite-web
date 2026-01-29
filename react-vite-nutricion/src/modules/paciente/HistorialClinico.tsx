import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from 'react-router-dom';

import Swal from "sweetalert2";

export default function HistorialClinico() {

  const location = useLocation();
      const [loading, setLoading] = useState(false)
      const [error, setError] = useState<string | null>(null)
      const { pacienteItem } = location.state || {};
       const [paciente, setPaciente] = useState([]);
  
  
         useEffect(() => {
           setLoading(true);
           try {
             setPaciente(pacienteItem);
           } catch (err: unknown) {
                 if (err instanceof Error) {
                   Swal.fire({
                     icon: "error",
                     title: "Credenciales",
                     text: err.message
                   });
                 } else {
                   setError('Error inesperado');
                 }
               } finally {
                 setLoading(false);
               }
         }, []);
       
  return (

    <>
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-6">

  <div className="bg-white rounded-xl shadow p-6">
    <h3 className="text-lg font-semibold text-blue-800 mb-3">
      Signos Vitales
    </h3>
    <ul className="text-blue-900 space-y-2">
      <li>Presión: 120/80</li>
      <li>Frecuencia cardiaca: 72 bpm</li>
      <li>Temperatura: 36.5 °C</li>
    </ul>
  </div>

  <div className="bg-white rounded-xl shadow p-6">
    <h3 className="text-lg font-semibold text-blue-800 mb-3">
      Alergias
    </h3>
    <p className="text-blue-900">
      {paciente.alergias || "No registradas"}
    </p>
  </div>

  <div className="bg-white rounded-xl shadow p-6">
    <h3 className="text-lg font-semibold text-blue-800 mb-3">
      Diagnóstico Actual
    </h3>
    <p className="text-blue-900">
      {paciente.diagnostico || "Sin diagnóstico"}
    </p>
  </div>

</div>

    </>
  
  );
}
