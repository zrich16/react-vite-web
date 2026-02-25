import DashboardLayout from "../../shared/components/layout/DashboardLayout";
import Card from "../../shared/components/ui/Card";
import "./css/recepcionista.css";
import ListaPacienteRecepcionista from "./pages/Lista-pacientes-recepcionista";

export default function Recepcionista() {
  return (
   <DashboardLayout>
  <div className="dashboard-container">
    <div className="dashboard-row">
      <Card title="Citas por Día" value="120" url="/img/calendario.png" />
      <Card title="Pacientes Nuevos" value="45" url="/img/agregar-usuario.png" />
      <Card title="Total Pacientes" value="98" url="/img/usuario.png" />
    </div>
    <ListaPacienteRecepcionista/>
  </div>
</DashboardLayout>

  );
}
