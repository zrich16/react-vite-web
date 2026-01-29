import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from 'react-router-dom';

import Swal from "sweetalert2";

export default function InfoGeneral() {

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
<div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
  <h2 className="text-xl font-semibold text-blue-800 mb-4">
    Información del Paciente
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

    <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-600">
      <span className="text-xs font-semibold uppercase text-blue-600">
        CURP
      </span>
      <p className="text-blue-900 font-medium mt-1">
        {paciente.curp}
      </p>
    </div>

    <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-600">
      <span className="text-xs font-semibold uppercase text-blue-600">
        Correo
      </span>
      <p className="text-blue-900 font-medium mt-1">
        {paciente.email}
      </p>
    </div>

    <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-600">
      <span className="text-xs font-semibold uppercase text-blue-600">
        Fecha de Nacimiento
      </span>
      <p className="text-blue-900 font-medium mt-1">
        {paciente.fecha_nacimiento}
      </p>
    </div>

    <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-600">
      <span className="text-xs font-semibold uppercase text-blue-600">
        Edad
      </span>
      <p className="text-blue-900 font-medium mt-1">
        {paciente.edad} años
      </p>
    </div>

  </div>
</div>
</>
    );
}
