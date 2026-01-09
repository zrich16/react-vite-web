import { http } from '../core/http'
import type { UserData, AuthContextType } from '../../types/auth'

export const authService = {
  login: (data: UserData) =>
    http<AuthContextType>('auth/login', {
      method: 'POST',
      body: JSON.stringify(data),
      auth: false,
    }),

  logout: () =>
    http<void>('/auth/logout', { method: 'POST' }),
};