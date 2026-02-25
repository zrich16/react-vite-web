import { http } from '../../../services/core/http'
import type {  UsuarioApi } from '../../../types/IUsuario';
import type { IUsuario } from '../../../types/IDetallePAciente';
import type { IFiltrossuario } from '../../../types/IFiltros';
import type { IApiResponse } from '../../../types/IApiResponse';

const BASE_URL = 'nutritionist';

export const NutriologoService = {

  savePatient(data: UsuarioApi) {
    return http<IUsuario>(`${BASE_URL}/savePatient`, {
      method: 'POST',
      body: JSON.stringify(data),
      auth: false,
    });
  },

   allPatient() {
    return http<IUsuario[]>(`${BASE_URL}/allPatients`, {
      method: 'GET',
      auth: false,
    });

  },

  patientByParam(filtro:IFiltrossuario) {
    return http<IApiResponse<IUsuario>>(`${BASE_URL}/patientByParam`, {
      method: 'POST',
            body: JSON.stringify(filtro),
      auth: false,
    });

  }

};
