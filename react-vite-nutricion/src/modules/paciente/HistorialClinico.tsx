import type { IUsuario } from "../../types/IUsuario";


interface InfoGeneralProps {
  paciente: IUsuario;
}


export default function HistorialClinico({ paciente }: InfoGeneralProps) {



  return (

    <>
    <div className="bg-white rounded-2xl shadow-lg p-8">

  <h2 className="text-2xl font-bold text-[#00008B] mb-6">
    Historial Clínico
  </h2>

  <div className="relative border-l-4 border-green-600 ml-4">

    {!paciente?.historialClinico?.length ? (

      /* Estado vacío */
      <div className="flex flex-col items-center justify-center py-14 text-center">
        <div className="bg-blue-50 p-6 rounded-full shadow-inner mb-4">
          📋
        </div>
        <p className="text-gray-500 text-lg font-semibold">
          Sin información
        </p>
        <p className="text-gray-400 text-sm mt-2">
          Aún no existen registros clínicos para este paciente.
        </p>
      </div>

    ) : (

      paciente.historialClinico.map((historial, index) => (
        <div
          key={index}
          className={`p-6 rounded-2xl shadow-lg transition-all duration-300 mb-6 ${
            index === 0
              ? "bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100"
              : "bg-gradient-to-r from-blue-50 to-blue-200"
          }`}
        >
          <h3 className="font-semibold text-xl mb-6 text-blue-900">
            📅 Fecha: {historial.fecha_registro_historial_clinico}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

            <div className="bg-white rounded-xl p-4 shadow-md">
              <p className="text-sm text-blue-600">Peso</p>
              <p className="text-lg font-bold text-blue-900">{historial.peso}</p>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-md">
              <p className="text-sm text-blue-600">Estatura</p>
              <p className="text-lg font-bold text-blue-900">{historial.estatura}</p>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-md">
              <p className="text-sm text-blue-600">IMC</p>
              <p className="text-lg font-bold text-blue-900">{historial.indice_masa_corporal}</p>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-md">
              <p className="text-sm text-blue-600">Grasa Corporal</p>
              <p className="text-lg font-bold text-blue-900">{historial.grasa_corporal}</p>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-md">
              <p className="text-sm text-blue-600">% Grasa Corporal</p>
              <p className="text-lg font-bold text-blue-900">{historial.porcentaje_grasa_corporal}</p>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-md">
              <p className="text-sm text-blue-600">Masa Muscular</p>
              <p className="text-lg font-bold text-blue-900">{historial.masa_musculo_esqueletico}</p>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-md">
              <p className="text-sm text-blue-600">Cintura</p>
              <p className="text-lg font-bold text-blue-900">{historial.cintura}</p>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-md">
              <p className="text-sm text-blue-600">Cadera</p>
              <p className="text-lg font-bold text-blue-900">{historial.cadera}</p>
            </div>

          </div>
        </div>
      ))

    )}

  </div>

  {/* Botón solo si hay información */}
  {paciente?.historialClinico?.length > 0 && (
    <div className="flex justify-center mt-10">
      <button
        className="
          px-8 py-3
          bg-gradient-to-r from-blue-600 to-blue-700
          text-white font-semibold
          rounded-xl
          shadow-md
          transition-all duration-300
          hover:shadow-xl
          hover:-translate-y-1
          hover:scale-105
          active:scale-95
        "
      >
        Ver todo
      </button>
    </div>
  )}

</div>
    </>

  );
}
