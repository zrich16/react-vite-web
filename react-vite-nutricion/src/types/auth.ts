export interface LoginRequest {
  username: string
  password: string
}

export interface LoginResponse {
  token: string
  data: {
    id: number
    name: string
    username: string
  }
}
