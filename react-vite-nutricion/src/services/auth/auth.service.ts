import { http } from '../core/http'
import type { LoginRequest, LoginResponse } from '../../types/auth'

export const authService = {
  login: (data: LoginRequest) =>
    http<LoginResponse>('autenticacion/loginUser', {
      method: 'POST',
      body: JSON.stringify(data),
      auth: false,
    }),

  logout: () =>
    http<void>('/auth/logout', { method: 'POST' }),
}
