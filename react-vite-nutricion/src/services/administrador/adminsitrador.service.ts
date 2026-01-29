import { http } from '../core/http'
import type { IUsuario } from '../../types/IUsuario'


export const AdministradorService = {

    allPatient: () =>
        http<IUsuario>('admin/allPatients', {
            method: 'GET',
            auth: false,
        }),
};