import DashboardLayout from "../../components/layout/DashboardLayout";
import Card from "../../components/ui/Card";


export default function Recepcionista() {
  return (
    <DashboardLayout>
      <br></br>
          <div className="
  grid
  grid-cols-2
  sm:grid-cols-2
  lg:grid-cols-3

  justify-items-center
">
  <Card title="Citas por Dia" value="120" url='../../../public/img/calendario.png' />
  <Card title="Pacintes Nuevo" value="45" url='./../../../public/img/agregar-usuario.png' />
  <Card title="Totoal Pacientes" value="98" url='./../../../public/img/usuario.png'  />
</div>
        </DashboardLayout>
  );
}
