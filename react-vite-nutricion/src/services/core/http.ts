import { API_BASE_URL } from './config'
import { getToken } from '../../utils/storage'

interface RequestOptions extends RequestInit {
  auth?: boolean
}

export const http = async <T>(
  endpoint: string,
  { auth = true, ...options }: RequestOptions = {}
): Promise<T> => {

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options.headers as Record<string, string>),
  }

  if (auth) {
    const token = getToken()
    if (token) {
      headers['Authorization'] = `Bearer ${token}`
    }
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  })
  if (!response.ok) {
    let errorMessage = 'Error en la petición'

    try {
      const errorData = await response.json()
      errorMessage = errorData.msg || errorMessage
    } catch {
      errorMessage = response.statusText
    }

    throw new Error(errorMessage)
  }

  return response.json()
}
