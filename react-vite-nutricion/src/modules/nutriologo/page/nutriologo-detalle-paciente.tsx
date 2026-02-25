import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";

import { NutriologoService } from "../services/nutriologo.service";

import DashboardLayout from "../../../shared/components/layout/DashboardLayout";
import ScreenBlock from "../../../shared/components/ui/ScreenBlock";
import InfoGeneral from "../../paciente/InfoGeneral";
import HistorialClinico from "../../paciente/HistorialClinico";
import DatosContacto from "../../paciente/DatosContacto";
import Citas from "../../paciente/Citas";
import styles_info_paciente from "../../../shared/components/ui/ui_info_paciente";

import type { IFiltrossuario } from "../../../types/IFiltros";
import type { IUsuario } from "../../../types/IDetallePAciente";

const tabs = [
  { id: "general", label: "Información General" },
    { id: "citas", label: "Citas" },
  { id: "contacto", label: "Dietas" },

  { id: "historial", label: "Historial Clinico" },
];

export default function NutrioloPacienteDetalle() {
  const location = useLocation();
  const pacienteItem = location.state?.pacienteItem;

  const [paciente, setPaciente] = useState<IUsuario | null>(null);
  const [activeTab, setActiveTab] = useState("general");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!pacienteItem) return;

    const fetchDetailPatients = async () => {
      try {
        setLoading(true);

        const filtro: IFiltrossuario = {
          nombre: "",
          curp: "",
          telefono: "",
          id_user: pacienteItem,
        };

        const response = await NutriologoService.patientByParam(filtro);

        if (response.success) {
          setPaciente(response.data);
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Información no encontrada",
          });
        }
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text:
            err instanceof Error
              ? err.message
              : "Error inesperado al obtener paciente",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchDetailPatients();
  }, [pacienteItem]);

  // 🔒 Mientras carga
  if (loading) {
    return (
      <DashboardLayout>
        <ScreenBlock show={true} text="Cargando información..." />
      </DashboardLayout>
    );
  }

  // 🔒 Si no hay paciente aún
  if (!paciente) {
    return null;
  }

  return (
    <DashboardLayout>
      <div className={styles_info_paciente.card}>
        {/* HEADER */}
        <div className={styles_info_paciente.header}>
          <h2 className={styles_info_paciente.headerTitle}>
            {paciente.nombre} {paciente.primer_apellido}{" "}
            {paciente.segundo_apellido}
          </h2>
          <p className={styles_info_paciente.headerSubtitle}>
            Paciente @{paciente.username}
          </p>
        </div>

        {/* TABS */}
        <div className={styles_info_paciente.tabsContainer}>
          <nav className="flex flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`${styles_info_paciente.tabButton} ${
                  activeTab === tab.id
                    ? styles_info_paciente.tabActive
                    : styles_info_paciente.tabInactive
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="tab-indicator"
                    className={styles_info_paciente.tabIndicator}
                  />
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* CONTENIDO TABS */}
        <div className={styles_info_paciente.tabContent}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === "general" && (
                <InfoGeneral paciente={paciente} />
              )}
              {activeTab === "historial" && (
                <HistorialClinico paciente={paciente} />
              )}
              {activeTab === "contacto" && (
                <DatosContacto paciente={paciente} />
              )}
              {activeTab === "citas" && <Citas paciente={paciente} />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </DashboardLayout>
  );
}