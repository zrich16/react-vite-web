
/**
 * @category Interfaces
 */

/**
 * 
 * Usuario - Modelo de Dominio
 * 
 * Modelo de Dominio Usuario
 * Modelo de Dominio Dirección
 * Modelo de Dominio Historial Clinico
 * Modelo de Dominio Datos Contacto
 * 
 * @author @rich-developer
 */

export interface IUsuario {
    id_user?: number
    username?: string
    nombre?: string
    primer_apellido?: string
    segundo_apellido?: string
    email?: string
    curp?: string
    activo?: boolean,
    estatusUsuario?: number
    estatus: string
    edad?: number,
    sexo?: string
    telefono?: string
    password?: string
    fk_tipo_usuario?: number
    tipo_usuario: string
    fecha_nacimiento?: string
    fecha_registroUsuario?: string

    direccion: IDireccion | null;
    historialClinico: IClinicalHistory | null;
    datosContacto: IDatosContacto | null;
    citas:ICitas[] | [];

}

export interface IDireccion {
    id_direccion?: number
    fk_usuario?:number
    calle_numero?: string
    colonia?: string
    ciudad?: string
    cp?: string
    fecha_registroDireccion?: Date
}

export interface IClinicalHistory {
    id_historial_clinico?: number
    fk_usuario?:number
    peso?: number
    estatura?: number,
    estatus_historial_clinico?: string
    indice_masa_corporal?: number
    grasa_corporal?: number
    porcentaje_grasa_corporal?: number
    masa_musculo_esqueletico?: number
    cintura?: number
    cadera?: number
    antecedentes_medico?: string
    antecedentes_familiares?: string
    medicamentos_suplementos?: string
    estilo_vida?: string
    fecha_registro_historial_clinico?: string
}

export interface IDatosContacto {
    id_datos_contacto?: number
    fk_usuario?:number
    nombre_contacto?: string
    contacto_primer_apellido?: string
    contacto_segundo_apellido?: string
    correo_contacto?: string
    telefono_contacto?: string
    estatus_contacto?: boolean
    fecha_registro_contacto?: Date
}

export interface ICitas {
     id_cita?: number
    estatus?: string
    comentarios?: string
    fk_usuario?: number
    fecha_registro_cita?: string
    fecha_reagenda_cita?: string
}
