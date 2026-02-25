import DashboardLayout from "../../../shared/components/layout/DashboardLayout";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import type { IUsuario } from "../../../types/IUsuario";
import Swal from "sweetalert2";
import { FaUser, FaIdBadge, FaPhoneVolume } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { NutriologoService } from "../services/nutriologo.service";
import ScreenBlock from "../../../shared/components/ui/ScreenBlock";
import styles from "../../../shared/components/ui/ui";
import InputFiltros from "../../../shared/components/ui/Input";

export default function ListaPacientesNutriologo() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pacientes, setPacientes] = useState<any[]>([]);

  const navigate = useNavigate();

  const [formData, setFormData] = useState<IUsuario>({
    nombre: "",
    curp: "",
    telefono: "",
  });

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        setLoading(true);
        const response = await NutriologoService.allPatient();
         // Validar que sea un array
      if (Array.isArray(response.data)) {
      setPacientes(Array.isArray(response.data) ? response.data : []);
      } else {
        console.warn("Respuesta de pacientes no es un array:", response);
        setPacientes([]);
        setError("No se pudieron cargar los pacientes");
      }
      } catch (err: unknown) {
        if (err instanceof Error) {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: err.message,
          });
        } else {
          setError("Error inesperado");
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
    navigate("/nutriologo-registro-paciente");
  };

  const clickDetalle = (item: any) => {
    navigate("/nutriologo-detalle-paciente", { state: { pacienteItem: item } });
  };

  return (
    <DashboardLayout> 
      <div className="space-y-6">
        <ScreenBlock show={loading} text="Cargando Información..." />

        {error && (
          <p className="text-sm text-red-600 text-center">{error}</p>
        )}

        {/* Título */}
        <h2 className={styles.title}>Paciente</h2>

        {/* Botón agregar */}
        <motion.button
          onClick={redirigeRegistroPaciente}
          type="button"
          className={styles.primaryButton}
        >
          Agregar Paciente
        </motion.button>

        {/* Filtros */}
        <div className={styles.card}>
          <h3 className="text-lg font-semibold mb-4">Filtros</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            <InputFiltros
              label="Nombre"
              name="nombre"
              icon={<FaUser />}
              value={formData.nombre}
              onChange={handleChange}
            />

            <InputFiltros
              label="CURP"
              name="curp"
              icon={<FaIdBadge />}
              value={formData.curp}
              onChange={handleChange}
            />

            <InputFiltros
              label="Teléfono"
              name="telefono"
              type="number"
              icon={<FaPhoneVolume />}
              value={formData.telefono}
              onChange={handleChange}
            />

            <motion.button
              type="submit"
              className={styles.primaryButtonSmall}
            >
              Buscar
            </motion.button>
          </div>
        </div>

        {/* Tabla */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-gradient-to-r from-[#00008B] to-blue-500">
              <tr>
                <th className={`${styles.tableHeader} text-left`}>Nombre</th>
                <th className={`${styles.tableHeader} text-center`}>CURP</th>
                <th className={`${styles.tableHeader} text-center`}>Estado</th>
                <th className={`${styles.tableHeader} text-center`}>Acciones</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {pacientes.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-blue-50 transition-colors"
                >
                  <td className={`${styles.tableCell} text-left`}>
                    {item.nombre} {item.primer_apellido}{" "}
                    {item.segundo_apellido}
                  </td>

                  <td className={`${styles.tableCell} text-center`}>
                    {item.curp}
                  </td>

                  <td className="px-6 py-4 text-center">
                    <span className={styles.badgesuccesss}>
                      {item.estatus}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => clickDetalle(item.id_user)}
                      className={styles.actionButton}
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
