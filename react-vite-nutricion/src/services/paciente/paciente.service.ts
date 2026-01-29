import { http } from '../core/http'
import type { UsuarioApi, IUsuario } from '../../types/IUsuario'


export const savePatient = {
  login: (data: UsuarioApi) =>
    http<IUsuario>('nutritionist/savePatient', {
      method: 'POST',
      body: JSON.stringify(data),
      auth: false,
    }),

  logout: () =>
    http<void>('/auth/logout', { method: 'POST' }),
};