export interface IUsuario {
    id_user?: number
    username?: string
    nombre?: string
    primer_apellido?: string
    segundo_apellido?: string
    email?: string
    curp?: string
    estatus?: string
    id_estatus?: number
    tipo_usuario?: string
    fk_tipo_usuario?: number
    edad?: number
    sexo?: string
    telefono?: string
    fecha_nacimiento?:string
    fecha_registro?:string
}