import Cookies from 'js-cookie'
import { useLoginMutation } from '@/infraestructure/repository'
import { User } from '@/domain/models'

export const useAuthService = () => {
  const [loginMutation] = useLoginMutation()

  const login = async (email: string, password: string): Promise<User> => {
    try {
      const loggedInUser = await loginMutation({ email, password }).unwrap()
      Cookies.set('authorization-token', loggedInUser.token, {
        expires: 7,
        secure: true,
      })

      return loggedInUser
    } catch (error) {
      console.error('Login failed', error)
      alert('Error al iniciar sesión. Por favor, verifica tus credenciales.')
      throw error
    }
  }

  const logout = () => {
    Cookies.remove('authorization-token')
  }

  return { login, logout }
}
