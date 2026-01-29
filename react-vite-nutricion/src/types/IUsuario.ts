export interface UsuarioApi {
    id_user?: string
    username?: string
    nombre?: string
    primer_apellido?: string
    segundo_apellido?: string
    email?: string
    curp?: string
    activo?: boolean,
    estatusUsuario?: string
    edad?: string,
    sexo?: string
    telefono?: string
    password?: string
    fk_tipo_usuario?: number
    fecha_nacimiento?: string
    fecha_registroUsuario?: Date

    id_direccion?: string
    calle_numero?: string
    colonia?: string
    ciudad?: string
    cp?: string
    fecha_registroDireccion?: Date

    id_historial_clinico?: string
    peso?: string
    estatura?: string,
    estatus_historial_clinico?: string
    indice_masa_corporal?: string
    grasa_corporal?: string
    porcentaje_grasa_corporal?: string
    masa_musculo_esqueletico?: string
    cintura?: string
    cadera?: string
    antecedentes_medico?: string
    antecedentes_familiares?: string
    medicamentos_suplementos?: string
    estilo_vida?: string
    fecha_registro_historial_clinico?: string

    id_datos_contacto?: string
    nombre_contacto: string
    primer_apellido_contacto?: string
    segundo_apellido_contacto?: string
    correo_contacto?: string
    telefono_contacto?: string
    estatus_contacto?: boolean
    fecha_registro_contacto?: Date

}



export interface IUsuario {
    id_user?: string
    username?: string
    password?: string
    nombre?: string
    primer_apellido?: string
    segundo_apellido?: string
    email?: string
    curp?: string
    estatusUsuario?: string
    id_estatus?: string
    tipo_usuario?: string
    fk_tipo_usuario?: number
    edad?: string
    sexo?: string
    telefono?: string
    fecha_nacimiento?: string


}