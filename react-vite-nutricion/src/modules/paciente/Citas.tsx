import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from 'react-router-dom';

import Swal from "sweetalert2";
export default function Citas() {

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
     <div className="bg-white rounded-xl shadow p-6 flex flex-wrap gap-4">
  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow transition">
    Nueva Consulta
  </button>

  <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow transition">
    Recetar Medicamento
  </button>

  <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg shadow transition">
    Ver Historial Clínico
  </button>
</div>
     </>
  
  );
}
