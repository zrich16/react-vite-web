import { API_BASE_URL } from './config'
import { getToken } from '../../utils/storage'

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

  let json: any
  try {
    json = await response.json()
  } catch {
    json = null
  }

  if (!response.ok) {
    const errorMessage = json?.msg || response.statusText || 'Error en la petición'
    throw new Error(errorMessage)
  }

  return json as T
}
