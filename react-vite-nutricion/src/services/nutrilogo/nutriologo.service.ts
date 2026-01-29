import { http } from '../core/http';
import type { IUsuario, UsuarioApi } from '../../types/IUsuario';

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
    return http<IUsuario>(`${BASE_URL}/allPatients`, {
      method: 'POST',
      auth: false,
    });
  },


 


};
