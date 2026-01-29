import DashboardLayout from "../../components/layout/DashboardLayout";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import type { IUsuario } from "../../types/IUsuario";
import Swal from "sweetalert2";
import { FaUser, FaIdBadge, FaPhoneVolume } from "react-icons/fa";
import type { fusuario } from "../../types/filtros";
import { useNavigate } from 'react-router-dom';
import { AdministradorService } from '../../services/administrador/adminsitrador.service'
import ScreenBlock from '../../components/ui/ScreenBlock'
export default function AdminPaciente() {

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const navigate = useNavigate();
    const [pacientes, setPacientes] = useState([]);
  const [formData, setFormData] = useState<IUsuario>({

    nombre: "",
    curp: "",
    telefono: ""

  });





  // 2. useEffect para hacer la petición al montar el componente
useEffect(() => {
  const fetchPatients = async () => {
    try {
      setLoading(true);

      const response = await AdministradorService.allPatient();

       setPacientes(response.data);

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
  };

  fetchPatients();
}, []);

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};

const redirigeRegistroPaciente = () => {

  navigate('/nutriologo-registro-paciente');
}

  const clickDetalle = async (param:any) => {
    setLoading(true);
    setError(null);

    try {
      navigate('/detalle-paciente', { state: { pacienteItem: param } });
    } catch (err: unknown) {
      if (err instanceof Error) {
        Swal.fire({
          icon: "error",
          title: "",
          text: err.message
        });
      } else {
        setError('Error inesperado');
      }
    } finally {
      setLoading(false);
    }
  }
return (
  <DashboardLayout>
    <div className="space-y-6">
      <ScreenBlock show={loading} text="Cargando Informacion..." />

  {/* Error */}
                {error && (
                  <p className="text-sm text-red-600 text-center">
                    {error}
                  </p>
                )}

      {/* Título */}
      <h2 className="text-2xl font-bold text-gray-800">
        Paciente
      </h2>

      <motion.button onClick={redirigeRegistroPaciente}
        type="submit"
        className="
    w-1/3
    mx-auto
    py-3
    rounded-xl
    text-white
    font-semibold
    bg-gradient-to-r from-[#00008B] to-blue-500
    shadow-lg
  "
      >
        Agregar Paciente
      </motion.button>
      {/* Filtros */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Filtros</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          <Input label="Nombre" name="nombre" icon={<FaUser />} value={formData.nombre} onChange={handleChange} />

          <Input label="CURP" name="curp" icon={<FaIdBadge />} value={formData.curp} onChange={handleChange} />

          <Input label="Telefono" name="telefono" type="number" icon={<FaPhoneVolume />} value={formData.telefono} onChange={handleChange} />

          <motion.button
            type="submit"
            className="
    w-2/3
    mx-auto

    rounded-xl
    text-white
    font-semibold
    bg-gradient-to-r from-[#00008B] to-blue-500
    shadow-lg
  "
          >
            Buscar
          </motion.button>
        </div>
      </div>

      {/* Listado */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gradient-to-r from-[#00008B] to-blue-500">
            <tr>
              <th className="px-6 py-4 text-sm font-semibold text-white text-left">
                Nombre
              </th>
              <th className="px-6 py-4 text-sm font-semibold text-white text-center">
                CURP
              </th>
              <th className="px-6 py-4 text-sm font-semibold text-white text-center">
                Estado
              </th>
              <th className="px-6 py-4 text-sm font-semibold text-white text-center">
                Acciones
              </th>
            </tr>
          </thead>

          <tbody className="divide-y">

               {pacientes && pacientes.map(item => (
<tr className="hover:bg-blue-50 transition-colors">
              <td className="px-6 py-4 text-slate-700 text-left">
                     {item.nombre} {item.primer_apellido} {item.segundo_apellido}
              </td>

              <td className="px-6 py-4 text-slate-700 text-center">
                      {item.curp}
              </td>

              <td className="px-6 py-4 text-center">
                <span className="inline-block px-3 py-1 text-sm rounded-full bg-green-100 text-green-700">
                         {item.estatus}
                </span>
              </td>

              <td className="px-6 py-4 text-center">
                <button onClick={() => clickDetalle(item)}
                  className="
    px-3 py-1
    text-sm
    font-medium
    text-blue-600
    hover:text-white
    hover:bg-blue-600
    rounded-lg
    transition
  "
                >
                  Ver
                </button>
              </td>
            </tr>

                  ))}
            
          </tbody>

        </table>
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
