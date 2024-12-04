import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react'
import Cookies from 'js-cookie'
import { useAuthService } from '@/application/services'
import { User } from '@/domain/models'
import { AuthContextType } from './types'

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const { login, logout } = useAuthService()

  useEffect(() => {
    const storedToken = Cookies.get('authorization-token')
    if (storedToken) {
      setToken(storedToken)
    }
  }, [])

  useEffect(() => {
    if (token) {
      Cookies.set('authorization-token', token, { expires: 7, secure: true })
    } else {
      Cookies.remove('authorization-token')
    }
  }, [token])

  const handleLogin = async (email: string, password: string) => {
    try {
      const loggedInUser = await login(email, password)
      setUser(loggedInUser)
      setToken(loggedInUser.token)
    } catch (error) {
      console.error('Login failed', error)
      throw error
    }
  }

  const handleLogout = () => {
    logout()
    setUser(null)
    setToken(null)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login: handleLogin,
        logout: handleLogout,
        isAuthenticated: !!token,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth debe usarse dentro de un AuthProvider')
  }

  return context
}
