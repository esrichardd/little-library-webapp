import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react'
import Cookies from 'js-cookie'
import { User } from '@/domain/models'
import { useLoginMutation } from '@/infraestructure/services'

type AuthContextType = {
  user: User | null
  token: string | null
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [loginMutation] = useLoginMutation()

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

  const login = async (email: string, password: string) => {
    try {
      const loggedInUser = await loginMutation({ email, password }).unwrap()
      setUser(loggedInUser)
      setToken(loggedInUser.token)
    } catch (error) {
      console.error('Login failed', error)
      throw error
    }
  }

  const logout = () => {
    setUser(null)
    setToken(null)
    Cookies.remove('authorization-token')
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,
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
