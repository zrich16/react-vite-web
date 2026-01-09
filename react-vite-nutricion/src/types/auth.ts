
import type { IUsuario } from '../types/IUsuario';
export interface UserData  {
  username: string
  password: string
}

export interface AuthContextType  {
 user: UserData  | null;
  token: string | null;
  data: IUsuario| null;
  login: (userData: UserData , token: string,data:IUsuario) => void;
  logout: () => void;
}