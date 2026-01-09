import { createContext, useContext, useState } from 'react'
import { authService } from '../services/auth/auth.service'
import type { UserData, AuthContextType } from '../types/auth'


const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setUser] = useState<AuthContextType['user'] | null>(null)
  const [token, setToken] = useState<string | null>(null)

  const login = async (data: UserData) => {
    const response = await authService.login(data)
console.log(response);
    setUser(response.data)
    setToken(response.token)

    // opcional (recomendado)
    localStorage.setItem('token', response.token)
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  const logout = () => {
    authService.logout()
    setUser(null)
    setToken(null)
    localStorage.clear()
  }

  return (
    <AuthContext.Provider value={{ data, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth debe usarse dentro de AuthProvider')
  return context
}