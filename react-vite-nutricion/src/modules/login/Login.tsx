import { useState } from 'react'
import { authService } from '../../services/auth/auth.service'
import { saveToken } from '../../utils/storage'
import ScreenBlock from '../../components/ui/ScreenBlock'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

import { useAuth } from '../../context/AuthContext'

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsuario] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const { login } = useAuth()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (!username.trim() || !password.trim()) {
      Swal.fire({ icon: "error", title: "Credenciales", text: "Debe ingresar sus credenciales" });
      return;
    }

    setLoading(true);

    try {
      await login({ username, password });
      navigate('/dashboard'); 
    } catch (err: unknown) {
      if (err instanceof Error) {
        Swal.fire({ icon: "error", title: "Credenciales", text: err.message });
      } else {
        setError('Error inesperado');
      }
    } finally {
      setLoading(false);
    }
  }


  return (
    <>
      <ScreenBlock show={loading} text="Validando credenciales..." />
      <div className="min-h-screen bg-sky-50 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">

          {/* Fondo decorativo */}
          <div className="absolute inset-0 bg-gradient-to-r from-sky-300 to-cyan-400
                        shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6
                        sm:rounded-3xl" />

          {/* Card */}
          <div className="relative px-4 py-10 bg-white shadow-lg
                        sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">

              <h1 className="text-2xl font-semibold text-sky-600 mb-6">
                APP
              </h1>

              <form
                onSubmit={handleSubmit}
                className="space-y-6 text-gray-700"
              >

                {/* Error */}
                {error && (
                  <p className="text-sm text-red-600 text-center">
                    {error}
                  </p>
                )}

                {/* Usuario */}
                <div className="relative">
                  <input
                    id="username"
                    type="text"
                    placeholder="USUARIO"
                    autoComplete="off"
                    value={username}
                    onChange={(e) => setUsuario(e.target.value)}
                    className="peer h-10 w-full border-b-2 border-sky-200
                             text-gray-900 focus:outline-none
                             focus:border-sky-500 bg-transparent"
                  />
                </div>

                {/* Password */}
                <div className="relative">
                  <input
                    id="password"
                    type="password"
                    placeholder="CONTRASEÑA"
                    autoComplete="off"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="peer h-10 w-full border-b-2 border-sky-200
                             text-gray-900 focus:outline-none
                             focus:border-sky-500 bg-transparent"
                  />
                </div>

                {/* Botón */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-sky-500 hover:bg-sky-600
                           disabled:bg-sky-300 text-white
                           font-medium py-2 rounded-md
                           transition-colors"
                >
                  {loading ? 'INGRESANDO…' : 'INGRESAR'}
                </button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
