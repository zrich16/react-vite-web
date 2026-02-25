import type { IUsuario } from "../../types/IUsuario";
import { QRCodeCanvas } from "qrcode.react";
interface InfoGeneralProps {
  paciente: IUsuario;
}

export default function InfoGeneral({ paciente }: InfoGeneralProps) {
  return (
    <>
 <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
  {/* ================== DATOS PERSONALES ================== */}
  <h2 className="text-2xl font-bold text-[#00008B] mb-6">
    Datos Personales
  </h2>

  <div className="bg-gradient-to-r from-[#00008B]/10 to-blue-100 rounded-2xl p-6 shadow-inner border border-blue-100 flex flex-col lg:flex-row gap-8">

    {/* IZQUIERDA */}
    <div className="flex flex-col sm:flex-row gap-6 flex-1">

{/* Imagen */}
<div className="text-center">

  <span className="relative inline-block group">

    {/* Marco degradado */}
    <div className="p-1 rounded-full bg-gradient-to-tr from-blue-500 via-blue-600 to-blue-800 shadow-xl transition-all duration-300 group-hover:scale-105">

      {/* Imagen */}
      <img
        src="/img/feliz.png"
        alt="Paciente"
        className="object-cover w-40 h-40 rounded-full border-4 border-white"
      />

    </div>

    {/* Indicador activo */}
    <span className="absolute bottom-3 right-3 w-5 h-5 bg-green-500 border-4 border-white rounded-full animate-pulse"></span>

  </span>

  {/* Estatus */}
  <span className="mt-4 inline-block rounded-full bg-emerald-500 px-4 py-1 text-sm font-semibold text-white shadow-md">
    {paciente.estatus}
  </span>

</div>

      {/* Información */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-700 flex-1">
        <p><strong>Nombre:</strong> {paciente.nombre} {paciente.primer_apellido}</p>
        <p><strong>CURP:</strong> {paciente.curp}</p>
        <p><strong>Fecha Nacimiento:</strong> {paciente.fecha_nacimiento}</p>
        <p><strong>Edad:</strong> {paciente.edad}</p>
        <p><strong>Sexo:</strong> {paciente.sexo}</p>
        <p><strong>Correo:</strong> {paciente.email}</p>
      </div>

    </div>

    {/* DERECHA - QR */}
    <div className="bg-white rounded-2xl p-5 shadow-lg flex flex-col items-center justify-center min-w-[180px]">
      <QRCodeCanvas
        value={`${window.location.origin}/paciente/${paciente.curp}`}
        size={150}
        bgColor="#ffffff"
        fgColor="#00008B"
        level="H"
        includeMargin
      />
      <p className="mt-3 text-sm font-semibold text-[#00008B]">
        Ficha digital
      </p>
    </div>

  </div>

  {/* ================== MEDIDAS ACTUALES ================== */}
  <h3 className="text-xl font-semibold text-[#00008B] mt-8 mb-3">
    Medidas Actuales
  </h3>

  <div className="bg-gradient-to-r from-[#00008B]/10 to-blue-100 rounded-2xl p-6 shadow-inner border border-blue-100">
    <div className="text-slate-700 space-y-2">
      <p><strong>Peso:</strong> {paciente.peso || "N/A"}</p>
      <p><strong>Índice masa corporal:</strong> {paciente.imc || "N/A"}</p>
      <p><strong>Grasa corporal:</strong> {paciente.grasa_corporal || "N/A"}</p>
      <p><strong>% Grasa corporal:</strong> {paciente.porcentaje_grasa || "N/A"}</p>
    </div>
  </div>

  {/* ================== DIRECCIÓN ================== */}
  <h2 className="text-2xl font-bold text-[#00008B] mt-10 mb-6">
    Datos Dirección
  </h2>

  <div className="bg-gradient-to-r from-[#00008B]/10 to-blue-100 rounded-2xl p-6 shadow-inner border border-blue-100">
    <div className="text-slate-700 space-y-2">
      <p><strong>Calle:</strong> {paciente.direccion?.calle_numero || "N/A"}</p>
      <p><strong>Colonia:</strong> {paciente.direccion?.colonia || "N/A"}</p>
      <p><strong>Código Postal:</strong> {paciente.direccion?.cp || "N/A"}</p>
      <p><strong>Ciudad:</strong> {paciente.direccion?.ciudad || "N/A"}</p>
    </div>
  </div>

  {/* ================== CONTACTO ================== */}
  <h2 className="text-2xl font-bold text-[#00008B] mt-10 mb-6">
    Datos Contacto
  </h2>

  <div className="bg-gradient-to-r from-[#00008B]/10 to-blue-100 rounded-2xl p-6 shadow-inner border border-blue-100">
    <div className="text-slate-700 space-y-2">
      <p><strong>Nombre contacto:</strong> {paciente.datosContacto?.nombre_contacto || "N/A"}</p>
      <p><strong>Primer apellido:</strong> {paciente.datosContacto?.primer_apellido || "N/A"}</p>
      <p><strong>Segundo apellido:</strong> {paciente.datosContacto?.segundo_apellido || "N/A"}</p>
      <p><strong>Teléfono:</strong> {paciente.datosContacto?.telefono_contacto || "N/A"}</p>
      <p><strong>Correo:</strong> {paciente.datosContacto?.correo_contacto || "N/A"}</p>
    </div>
  </div>

</div>
    </>
  );
}