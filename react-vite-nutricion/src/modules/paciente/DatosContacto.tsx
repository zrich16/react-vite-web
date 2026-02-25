export default function DatosContacto() {
  return (
    <>
     <div className="bg-white rounded-2xl shadow-lg p-8">

  <h1 className="text-3xl text-center font-bold mb-10 text-green-700">
    Citas
  </h1>

  <div className="relative border-l-4 border-green-600 ml-4">

    {/* ACTIVA */}
    <div className="mb-10 ml-6">
      <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-green-600 rounded-full ring-4 ring-white">
        <span className="w-2 h-2 bg-white rounded-full"></span>
      </span>

      <div className="bg-green-500 text-white p-6 rounded-xl shadow-lg">
        <h3 className="font-semibold text-lg">Cita Registrada</h3>
        <p className="text-sm opacity-90">
          21 Julio 2025 - 04:30 PM
        </p>
      </div>
    </div>

    {/* INACTIVA */}
    <div className="mb-10 ml-6">
      <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-green-800 rounded-full ring-4 ring-white"></span>

      <div className="bg-green-800 text-white p-6 rounded-xl shadow-md opacity-80">
        <h3 className="font-semibold text-lg">Consulta Nutricional</h3>
        <p className="text-sm opacity-80">
          25 Julio 2025 - 01:00 PM
        </p>
      </div>
    </div>

    {/* INACTIVA */}
    <div className="ml-6">
      <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-green-900 rounded-full ring-4 ring-white"></span>

      <div className="bg-green-900 text-white p-6 rounded-xl shadow-md opacity-70">
        <h3 className="font-semibold text-lg">Seguimiento</h3>
        <p className="text-sm opacity-80">
          Pendiente
        </p>
      </div>
    </div>

  </div>
<div className="flex justify-center mt-10">
  <button
    className="
      relative
      px-8 py-3
      bg-gradient-to-r from-blue-600 to-blue-700
      text-white font-semibold
      rounded-xl
      shadow-md
      transition-all duration-300 ease-in-out
      hover:shadow-xl
      hover:-translate-y-1
      hover:scale-105
      active:scale-95
    "
  >
    Ver todo
  </button>
</div>
</div>
    </>
  );
}
