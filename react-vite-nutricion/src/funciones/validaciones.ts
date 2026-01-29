import type { UsuarioApi } from '../types/IUsuario'
import messages from "./messages";

export const validacionPaciente = (form: UsuarioApi) => {

    let msg = "";

    if (form.nombre == "") {
        msg += messages.nombre;
    }

    if (form.primer_apellido == "") {
        msg += messages.primer_apellido;
    }

    if (form.segundo_apellido == "") {
        msg += messages.segundo_apellido;
    }

    if (form.username == "") {
        msg += messages.username;
    } if (form.password == "") {
        msg += messages.password;
    }

    if (form.telefono == "") {
        msg += messages.telefono;
    }

    if (form.peso == "") {
        msg += messages.peso;
    }

    if (form.estatura == "") {
        msg += messages.estatura;
    }

    if (form.indice_masa_corporal == "") {
        msg += messages.indice_masa_corporal;
    }

    if (form.grasa_corporal == "") {
        msg += messages.grasa_corporal;
    }

    if (form.porcentaje_grasa_corporal == "") {
        msg += messages.porcentaje_grasa_corporal;
    }

    if (form.masa_musculo_esqueletico == "") {
        msg += messages.masa_musculo_esqueletico;
    }

    if (form.cintura == "") {
        msg += messages.cintura;
    }

    if (form.cadera == "") {
        msg += messages.cadera;
    }

    return msg;

}