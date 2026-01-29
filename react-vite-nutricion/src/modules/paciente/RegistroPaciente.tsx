import DashboardLayout from "../../components/layout/DashboardLayout";
import ScreenBlock from '../../components/ui/ScreenBlock'
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBirthdayCake,
  FaIdCard,
  FaWeight
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import { GiMuscleFat } from "react-icons/gi";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { NutriologoService } from '../../services/nutrilogo/nutriologo.service'
import { validacionPaciente } from '../../funciones/validaciones'
import type { UsuarioApi } from '../../types/IUsuario'


export default function Nutriologo() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)
  const tabs = ["personales", "direccion", "historial", "contacto"] as const;
  const [activeTab, setActiveTab] = useState<typeof tabs[number]>("personales");

  const currentStep = tabs.indexOf(activeTab) + 1;
  const totalSteps = tabs.length;

  // Inicializar useForm con valores vacíos
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<UsuarioApi>({
    defaultValues: {
      nombre: "",
      primer_apellido: "",
      segundo_apellido: "",
      username: "",
      password: "",
      sexo: "",
      curp: "",
      email: "",
      telefono: "",
      fecha_nacimiento: "",
      edad: "",
      fk_tipo_usuario: 4,
      calle_numero: "",
      colonia: "",
      ciudad: "",
      cp: "",

      peso: "",
      estatura: "",
      indice_masa_corporal: "",
      grasa_corporal: "",
      porcentaje_grasa_corporal: "",
      masa_musculo_esqueletico: "",
      cintura: "",
      cadera: "",

      antecedentes_medico: "",
      antecedentes_familiares: "",
      medicamentos_suplementos: "",
      estilo_vida: "",

      nombre_contacto: "",
      primer_apellido_contacto: "",
      segundo_apellido_contacto: "",
      correo_contacto: "",
      telefono_contacto: ""
    }
  });



  // Manejar envío final
  const onSubmit = async (data: UsuarioApi) => {
    try {
      setLoading(true)


      const msg = validacionPaciente(data);

      if (msg == "") {

        const respuesta = await NutriologoService.savePatient(data);

        navigate('/nutriologo-inicio');
        Swal.fire({
          icon: "success",
          title: "Registro Guardado",
          text: "¡La información se ha enviado correctamente!"
        });
      } else {
        Swal.fire({
          icon: "info",
          title: "info",
          html: msg + "<br/>"
        });
      }

    } catch (error: unknown) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: (error as Error).message || "Error inesperado"
      });
    } finally {
      setLoading(false);
    }
  };

  const getTabTitle = (tab = activeTab) => {
    switch (tab) {
      case "personales":
        return "Datos Personales";
      case "direccion":
        return "Dirección";
      case "historial":
        return "Historial Clínico";
      case "contacto":
        return "Datos de Contacto";
      default:
        return "";
    }
  };

  return (

    <>
      <ScreenBlock show={loading} text="Enviando información..." />
      <DashboardLayout>
        <button
          onClick={() => document.documentElement.classList.toggle("dark")}
          className="absolute top-4 right-4 text-sm text-slate-500 dark:text-slate-300"
        >
          🌙 Modo oscuro
        </button>
        <div className="min-h-screen flex items-center justify-center
  bg-gradient-to-br from-slate-50 to-blue-100
  dark:from-slate-900 dark:to-slate-800
  p-4 transition-colors duration-300"
        >
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="
    w-full max-w-6xl
    bg-white/90 dark:bg-slate-900/90
    backdrop-blur-lg
    rounded-2xl
    shadow-2xl dark:shadow-black/40
    p-10 space-y-8
    border border-slate-200 dark:border-slate-700
    transition-colors duration-300
  "
          >
            {/* PROGRESO */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-medium text-sm font-medium text-slate-300 mb-1">
                <span>Paso {currentStep} de {totalSteps}</span>
                <span>{getTabTitle()}</span>
              </div>

              <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                <motion.div
                  animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-5"
                />
              </div>
            </div>

            {/* TABS */}
            <div className="flex border-b border-slate-200 dark:border-slate-700 ">
              {tabs.map(tab => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`
        flex-1 py-3 text-sm font-semibold transition-all
        ${activeTab === tab
                      ? "text-[#00008B] border-b-2 border-[#00008B]"
                      : "text-slate-400 dark:text-slate-500 hover:text-slate-600"
                    }
      `}
                >
                  {getTabTitle(tab)}
                </button>
              ))}
            </div>

            {/* CONTENIDO */}
            <AnimatePresence mode="wait">
              {activeTab === "personales" && (
                  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    className="grid grid-cols-1 md:grid-cols-3 gap-5"
  >
    {/* ───── IDENTIDAD DEL PACIENTE ───── */}
<h3 className="
  md:col-span-3
  text-sm font-semibold tracking-wide
  text-slate-200
  border-b border-slate-700
  pb-2
">
      Información del Paciente
    </h3>

    <Input
      label="Nombre completo"
      name="nombre"
      icon={<FaUser />}
      register={register("nombre")}
    />

    <Input
      label="Primer Apellido"
      name="primer_apellido"
      icon={<FaUser />}
      register={register("primer_apellido")}
    />

    <Input
      label="Segundo Apellido"
      name="segundo_apellido"
      icon={<FaUser />}
      register={register("segundo_apellido")}
    />

    {/* ───── ACCESO AL SISTEMA ───── */}
    <h3 className="md:col-span-3 text-sm font-semibold text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700 pb-2 pt-4">
      Credenciales
    </h3>

    <Input
      label="Usuario"
      name="username"
      icon={<FaIdCard />}
      register={register("username")}
    />

    <Input
      label="Contraseña"
      type="password"
      name="password"
      icon={<FaIdCard />}
      register={register("password")}
    />

    <div className="flex flex-col">
      <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
        Sexo
      </label>
      <select
        {...register("sexo")}
        className="
          w-full px-4 py-2.5 rounded-lg
          border border-slate-300 dark:border-slate-600
          bg-white dark:bg-slate-800
          text-slate-700 dark:text-slate-200
          focus:ring-2 focus:ring-[#00008B]
          transition
        "
      >
        <option value="">Seleccione una opción</option>
        <option value="M">Mujer</option>
        <option value="H">Hombre</option>
        <option value="X">No binario</option>
      </select>
    </div>

    {/* ───── CONTACTO ───── */}
    <h3 className="md:col-span-3 text-sm font-semibold text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700 pb-2 pt-4">
      Información de Contacto
    </h3>

    <Input
      label="CURP"
      name="curp"
      icon={<FaIdCard />}
      register={register("curp")}
    />

    <Input
      label="Correo electrónico"
      name="email"
      type="email"
      icon={<FaEnvelope />}
      register={register("email")}
    />

    <Input
      label="Teléfono"
      name="telefono"
      type="tel"
      icon={<FaPhone />}
      register={register("telefono")}
    />

    {/* ───── DATOS CLÍNICOS BÁSICOS ───── */}
    <h3 className="md:col-span-3 text-sm font-semibold text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700 pb-2 pt-4">
      Datos Clínicos Básicos
    </h3>

    <Input
      label="Fecha de Nacimiento"
      name="fecha_nacimiento"
      type="date"
      icon={<FaBirthdayCake />}
      register={register("fecha_nacimiento")}
    />

    <Input
      label="Edad"
      name="edad"
      type="number"
      icon={<FaBirthdayCake />}
      register={register("edad")}
    />
  </motion.div>
              )}

              {activeTab === "direccion" && (
                <motion.div     className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <Input
                    label="Calle y Número"
                    name="calle_numero"
                    icon={<FaMapLocation />}
                    register={register("calle_numero")}
                  />
                  <Input
                    label="Colonia"
                    name="colonia"
                    icon={<FaMapLocation />}
                    register={register("colonia")}
                  />
                  <Input
                    label="Ciudad"
                    name="ciudad"
                    icon={<FaMapLocation />}
                    register={register("ciudad")}
                  />
                  <Input
                    label="Código Postal"
                    name="cp"
                    icon={<FaMapLocation />}
                    register={register("cp")}
                  />
                </motion.div>
              )}

              {activeTab === "historial" && (
                <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-5">

  {/* ───── TÍTULO ───── */}
  <h3 className="md:col-span-3 text-sm font-semibold text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700 pb-2">
    Evaluación Antropométrica y Clínica
  </h3>

  {/* ───── MEDIDAS ANTROPOMÉTRICAS ───── */}
  <Input
    label="Peso"
    name="peso"
    icon={<FaWeight />}
    register={register("peso")}
  />

  <Input
    label="Estatura"
    name="estatura"
    icon={<FaWeight />}
    register={register("estatura")}
  />

  <Input
    label="Índice de Masa Corporal (IMC)"
    name="indice_masa_corporal"
    icon={<FaWeight />}
    register={register("indice_masa_corporal")}
  />

  <Input
    label="Grasa Corporal"
    name="grasa_corporal"
    icon={<FaWeight />}
    register={register("grasa_corporal")}
  />

  <Input
    label="Porcentaje de Grasa Corporal"
    name="porcentaje_grasa_corporal"
    icon={<FaWeight />}
    register={register("porcentaje_grasa_corporal")}
  />

  <Input
    label="Masa de Músculo Esquelético"
    name="masa_musculo_esqueletico"
    icon={<GiMuscleFat />}
    register={register("masa_musculo_esqueletico")}
  />

  <Input
    label="Cintura"
    name="cintura"
    icon={<FaWeight />}
    register={register("cintura")}
  />

  <Input
    label="Cadera"
    name="cadera"
    icon={<FaWeight />}
    register={register("cadera")}
  />

  {/* ───── ANTECEDENTES ───── */}
  <div className="md:col-span-3">
    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
      Antecedentes Médicos
    </label>
    <textarea
      {...register("antecedentes_medico")}
      rows={3}
      className="
        w-full px-4 py-3 rounded-lg
        border border-slate-300 dark:border-slate-600
        bg-white dark:bg-slate-800
        text-slate-700 dark:text-slate-200
        focus:ring-2 focus:ring-[#00008B]
        transition
      "
    />
  </div>

  <div className="md:col-span-3">
    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
      Antecedentes Familiares
    </label>
    <textarea
      {...register("antecedentes_familiares")}
      rows={3}
      className="
        w-full px-4 py-3 rounded-lg
        border border-slate-300 dark:border-slate-600
        bg-white dark:bg-slate-800
        text-slate-700 dark:text-slate-200
        focus:ring-2 focus:ring-[#00008B]
        transition
      "
    />
  </div>

  <div className="md:col-span-3">
    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
      Medicamentos y Suplementos
    </label>
    <textarea
      {...register("medicamentos_suplementos")}
      rows={3}
      className="
        w-full px-4 py-3 rounded-lg
        border border-slate-300 dark:border-slate-600
        bg-white dark:bg-slate-800
        text-slate-700 dark:text-slate-200
        focus:ring-2 focus:ring-[#00008B]
        transition
      "
    />
  </div>

  <div className="md:col-span-3">
    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
      Estilo de Vida
    </label>
    <textarea
      {...register("estilo_vida")}
      rows={3}
      className="
        w-full px-4 py-3 rounded-lg
        border border-slate-300 dark:border-slate-600
        bg-white dark:bg-slate-800
        text-slate-700 dark:text-slate-200
        focus:ring-2 focus:ring-[#00008B]
        transition
      "
    />
  </div>

</motion.div>

              )}

              {activeTab === "contacto" && (
                <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <Input
                    label="Nombre Contacto"
                    name="nombre_contacto"
                    icon={<FaEnvelope />}
                    register={register("nombre_contacto")}

                  />
                  <Input
                    label="Primer Apellido Contacto"
                    name="primer_apellido_contacto"
                    icon={<FaEnvelope />}
                    register={register("primer_apellido_contacto")}
                  />
                  <Input
                    label="Segundo Apellido Contacto"
                    name="segundo_apellido_contacto"
                    icon={<FaEnvelope />}
                    register={register("segundo_apellido_contacto")}
                  />
                  <Input
                    label="Teléfono"
                    name="telefono_contacto"
                    type="tel"
                    icon={<FaPhone />}
                    register={register("telefono_contacto")}
                  />
                  <Input
                    label="Correo"
                    name="correo_contacto"
                    type="email"
                    icon={<FaEnvelope />}
                    register={register("correo_contacto")}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* BOTÓN */}
            {currentStep < totalSteps ? (
              <motion.button
                type="button"
                onClick={() => {
                  const currentIndex = tabs.indexOf(activeTab);
                  if (currentIndex < tabs.length - 1) {
                    setActiveTab(tabs[currentIndex + 1]);
                  }
                }}
                className="w-full py-3 rounded-xl text-white font-semibold bg-[#00008B] hover:bg-blue-600"
              >
                Siguiente
              </motion.button>
            ) : (
              <motion.button
                type="submit"
                className="
  w-full py-3 rounded-xl
  text-white font-semibold
  bg-[#00008B] hover:bg-blue-600
  dark:hover:bg-blue-500
  transition-all
"
                whileTap={{ scale: 0.97 }}
                whileHover={{ scale: 1.03 }}
              >
                Enviar
              </motion.button>
            )}
          </motion.form>
        </div>
      </DashboardLayout>
    </>

  );
}

// Componente Input reutilizable para los inputs simples
function Input({
  label,
  icon,
  register,
  name,
  type = "text",
  error
}: {
  label: string;
  icon: React.ReactNode;
  register: ReturnType<typeof useForm>["register"];
  name: string;
  type?: string;
  error?: string;
}) {
  return (
    <div className="relative">
      <label htmlFor={name} className="text-sm font-medium text-slate-300 mb-1">
        {label}
      </label>
      <div className="relative text-slate-400 focus-within:text-[#00008B]">
        
        <input
          id={name}
          type={type}
          {...register}
       className="
  w-full px-4 py-3 rounded-lg
  bg-slate-900
  border border-slate-600
  text-slate-100 placeholder-slate-500
  focus:outline-none
  focus:ring-2 focus:ring-[#00008B]
  focus:border-[#00008B]
  hover:border-slate-400
  transition
"
          autoComplete="off"
        />
      </div>
      {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
    </div>
  );
}
