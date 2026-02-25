import DashboardLayout from "../../../shared/components/layout/DashboardLayout";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import type { IUsuario } from "../../../types/IUsuario";
import Swal from "sweetalert2";
import { FaUser, FaPhone, FaEye, FaPrint,FaIdBadge } from "react-icons/fa";
import type { fusuario } from "../../../types/IFiltros";
import { useNavigate } from 'react-router-dom';

export default function NutriologoInicio() {


  const navigate = useNavigate();
   const [page, setPage] = useState(1);
   const [filtros, setFiltros] = useState({
  nombre: "",
  curp: "",
  telefono: "",
});
  const [formData, setFormData] = useState<IUsuario>({

    nombre: "",
    curp: "",
    telefono: ""

  });

  const [loading, setLoading] = useState(true);

  // 2. useEffect para hacer la petición al montar el componente
  useEffect(() => {

    setLoading(false);
  }, []); // El array vacío [] asegura que se ejecute solo una vez

  // 3. Renderizado condicional
  if (loading) {
    return <div>Cargando...</div>;
  }
  if (loading) {
    return <div>Cargando...</div>;
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const detallePaciente = () => {

    navigate('/detalle-paciente');
  }

   const redirigeRegistroPaciente = () => {

    navigate('/nutriologo-registro-paciente');
  }

  const imprimir = () => {
  window.print();
};

const pacientes = [
    { id: 1, nombre: "Juan Pérez", edad: 30, estado: "Activo" },
    { id: 2, nombre: "María López", edad: 45, estado: "Inactivo" },
    { id: 3, nombre: "Carlos Ruiz", edad: 52, estado: "Activo" },
  ];

  return (
    <DashboardLayout>
     <div className="space-y-6 print-container">

      {/* HEADER */}
      <div className="flex justify-between items-center no-print">
        <h2 className="text-xl font-semibold text-slate-800 tracking-wide">
          Búsqueda de Pacientes
        </h2>

        <button
          onClick={imprimir}
          className="
            flex items-center gap-2
            px-4 py-2 rounded-lg
            text-white text-sm font-semibold
            bg-gradient-to-r from-[#00008B] to-blue-500
            shadow-md
            hover:shadow-lg
            transition
          "
        >
          <FaPrint />
          Imprimir / PDF
        </button>
      </div>

      {/* FILTROS */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 no-print">
        <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wider mb-4">
          Filtros
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <SearchInput
  icon={<FaUser />}
  placeholder="Nombre del paciente"
  value={filtros.nombre}
  onChange={e => setFiltros({ ...filtros, nombre: e.target.value })}
/>
          <SearchInput
  icon={<FaIdBadge />}
  placeholder="CURP"
  value={filtros.curp}
  onChange={e =>
    setFiltros({ ...filtros, curp: e.target.value })
  }
/>
       <SearchInput
  icon={<FaPhone />}
  placeholder="Teléfono"
  value={filtros.telefono}
  onChange={e =>
    setFiltros({ ...filtros, telefono: e.target.value })
  }
/>

          <button className="
            py-2.5 rounded-lg
            text-white text-sm font-semibold
            bg-gradient-to-r from-[#00008B] to-blue-500
            shadow-md
          ">
            Buscar
          </button>
        </div>
      </div>

      {/* TABLA */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full text-sm">
          <thead className="bg-gradient-to-r from-[#00008B] to-blue-500 text-white">
            <tr>
              <th className="px-4 py-3 text-left">Paciente</th>
              <th className="px-4 py-3 text-center">Edad</th>
              <th className="px-4 py-3 text-center">Estado</th>
              <th className="px-4 py-3 text-center no-print">Acciones</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {pacientes.map(p => (
              <tr key={p.id} className="hover:bg-blue-50">
                <td className="px-4 py-3 text-slate-700">
                  {p.nombre}
                </td>

                <td className="px-4 py-3 text-center text-slate-700">
                  {p.edad}
                </td>

                <td className="px-4 py-3 text-center">
                  {p.estado === "Activo" ? (
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-700">
                      Activo
                    </span>
                  ) : (
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-700">
                      Inactivo
                    </span>
                  )}
                </td>

                <td className="px-4 py-3 text-center no-print">
                  <button
                    className="
                      inline-flex items-center gap-1
                      px-3 py-1 text-sm
                      text-[#00008B]
                      hover:bg-blue-50
                      rounded-md
                      transition
                    "
                  >
                    <FaEye />
                    Ver
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* PAGINACIÓN */}
      <div className="flex justify-end gap-2 no-print">
        <button
          onClick={() => setPage(p => Math.max(p - 1, 1))}
          className="px-3 py-1 border rounded-md text-sm"
        >
          Anterior
        </button>

        <span className="px-3 py-1 text-sm font-medium">
          Página {page}
        </span>

        <button
          onClick={() => setPage(p => p + 1)}
          className="px-3 py-1 border rounded-md text-sm"
        >
          Siguiente
        </button>
      </div>

    </div>
    </DashboardLayout>
  );
}
/* ================== INPUT ================== */
interface InputProps {
  label: string;
  icon: React.ReactNode;
  name: keyof fusuario;
  value: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({ label, icon, name, value, type = "text", onChange }: InputProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-1">
        {label}
      </label>

      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
          {icon}
        </span>

        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 
                     focus:ring-2 focus:ring-[#00008B] focus:outline-none"
        />
      </div>
    </div>
  );

  
}
const SearchInput = ({ icon, placeholder, value, onChange }: any) => (
  <div className="
    flex items-center gap-2
    px-3 py-2
    rounded-lg
    border border-slate-300
    bg-white
    focus-within:border-[#00008B]
    focus-within:ring-1 focus-within:ring-[#00008B]/40
    transition
  ">
    <span className="text-slate-400">{icon}</span>
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="
        w-full
        text-sm
        text-slate-800
        placeholder-slate-400
        bg-transparent
        outline-none
      "
    />
  </div>
);