import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { QRCodeCanvas } from "qrcode.react";
import SignatureCanvas from "react-signature-canvas";
import Swal from "sweetalert2";

import DashboardLayout from "../../shared/components/layout/DashboardLayout";
import ScreenBlock from "../../shared/components/ui/ScreenBlock";
import InfoGeneral from "./InfoGeneral";
import HistorialClinico from "./HistorialClinico";
import DatosContacto from "./DatosContacto";
import Citas from "./Citas";
import styles_info_paciente from "../../shared/components/ui/ui_info_paciente";


const tabs = [
  { id: "general", label: "Información General" },
    { id: "contacto", label: "Datos de Contacto" },
  { id: "historial", label: "Citas" },
  { id: "citas", label: "Recetas" },
];

export default function PacienteDetalle() {
  const location = useLocation();
  const { pacienteItem } = location.state || {};

  const [paciente, setPaciente] = useState({});
  const [activeTab, setActiveTab] = useState("general");
  const [loading, setLoading] = useState(false);

  const expedienteRef = useRef(null);
  const sigRef = useRef(null);

  useEffect(() => {
    setLoading(true);
    try {

      
      setPaciente(pacienteItem || {});
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo cargar el paciente",
      });
    } finally {
      setLoading(false);
    }                                                                                         
  }, [pacienteItem]);

  const handlePrint = useReactToPrint({
    content: () => expedienteRef.current,
    documentTitle: `Expediente_${paciente.curp}`,
  });

  return (
    <DashboardLayout>
     <div className={styles_info_paciente.card}>
  <ScreenBlock show={loading} text="Cargando información..." />

  {/* HEADER */}
  <div className={styles_info_paciente.header}>
    <h2 className={styles_info_paciente.headerTitle}>
      {paciente.nombre} {paciente.primer_apellido} {paciente.segundo_apellido}
    </h2>
    <p className={styles_info_paciente.headerSubtitle}>Paciente @{paciente.username}</p>
  </div>

  {/* TABS */}
  <div className={styles_info_paciente.tabsContainer}>
    <nav className="flex flex-wrap">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`${styles_info_paciente.tabButton} ${
            activeTab === tab.id ? styles_info_paciente.tabActive : styles_info_paciente.tabInactive
          }`}
        >
          {tab.label}
          {activeTab === tab.id && (
            <motion.div layoutId="tab-indicator" className={styles_info_paciente.tabIndicator} />
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
        {activeTab === "general" && <InfoGeneral paciente={paciente} />}
        {activeTab === "historial" && <HistorialClinico paciente={paciente} />}
        {activeTab === "contacto" && <DatosContacto paciente={paciente} />}
        {activeTab === "citas" && <Citas paciente={paciente} />}
      </motion.div>
    </AnimatePresence>
  </div>


</div>
    </DashboardLayout>
  );
}
