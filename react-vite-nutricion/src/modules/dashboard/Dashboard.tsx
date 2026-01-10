import DashboardLayout from "../../components/layout/DashboardLayout";
import Card from "../../components/ui/Card";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        <Card title="Usuarios Citas por Dia" value="1,245" icon="👤" />
        <Card title="Usuarios Nuevo por Mes" value="$32,500" icon="💰" />
        <Card title="Usuarios Total" value="320" icon="📦" />

      </div>
    </DashboardLayout>
  );
}
