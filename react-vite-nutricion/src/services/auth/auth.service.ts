import { http } from '../core/http'
import type { UserData, AuthContextType } from '../../types/auth'
const BASE_URL = 'auth';
export const authService = {
  login(data: UserData) {

  return http<AuthContextType>(`${BASE_URL}/login`, {
      method: 'POST',
      body: JSON.stringify(data),
      auth: false,
    });
  },
 

}
