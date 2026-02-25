import type { IUsuario } from "../../types/IUsuario";


 interface InfoGeneralProps {
    paciente: IUsuario;
  }


export default function Citas({ paciente }: InfoGeneralProps) {


 
  return (
      <>
    <div className="bg-white rounded-2xl shadow-lg p-8">

  <h2 className="text-2xl font-bold text-[#00008B] mb-6">
    Citas
  </h2>

  <div className="relative border-l-4 border-green-600 ml-4">

    {!paciente?.citas?.length ? (

      /* Estado vacío */
      <div className="flex flex-col items-center justify-center py-14 text-center">
        <div className="bg-blue-50 p-6 rounded-full shadow-inner mb-4">
          📅
        </div>
        <p className="text-gray-500 text-lg font-semibold">
          Sin información
        </p>
        <p className="text-gray-400 text-sm mt-2">
          No existen citas registradas para este paciente.
        </p>
      </div>

    ) : (

      paciente.citas.map((cita, index) => (
        <div key={cita.id_cita} className="relative mb-10 ml-6">

          {/* Punto */}
          <span
            className={`absolute -left-3 w-6 h-6 rounded-full ring-4 ring-white ${
              index === 0
                ? "bg-gradient-to-r from-blue-500 to-blue-700"
                : "bg-gradient-to-r from-blue-800 to-blue-900"
            }`}
          ></span>

          {/* Tarjeta */}
          <div
            className={`p-6 rounded-xl shadow-lg text-white transition-all duration-300 ${
              index === 0
                ? "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700"
                : "bg-gradient-to-r from-blue-800 to-blue-900 opacity-90"
            }`}
          >
            <h3 className="font-semibold text-lg">
              {cita.comentarios}
            </h3>

            <p className="text-sm opacity-90">
              {cita.fecha_registro_cita}
            </p>
          </div>
        </div>
      ))

    )}

  </div>

  {/* Botón solo si hay citas */}
  {paciente?.citas?.length > 0 && (
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
