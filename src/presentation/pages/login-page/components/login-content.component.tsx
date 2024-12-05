import { Loader2 } from 'lucide-react'
import { Input } from '@/presentation/components/ui/input'
import { Label } from '@/presentation/components/ui/label'
import { Button } from '@/presentation/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/presentation/components/ui/card'

interface LoginContentProps {
  email: string
  password: string
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  loading: boolean
}

export const LoginContent: React.FC<LoginContentProps> = ({
  email,
  password,
  onEmailChange,
  onPasswordChange,
  onSubmit,
  loading,
}) => {
  return (
    <Card className="w-full max-w-md bg-gray-800 text-gray-100 mx-4 sm:mx-0">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Inicia sesión
        </CardTitle>
        <CardDescription className="text-center text-gray-400">
          Ingresa tus credenciales para acceder a tu cuenta
        </CardDescription>
      </CardHeader>
      <form onSubmit={onSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-200">
              Correo electrónico
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              value={email}
              onChange={onEmailChange}
              required
              className="bg-gray-700 text-gray-100 border-gray-600 focus:border-gray-500"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-gray-200">
              Contraseña
            </Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={onPasswordChange}
              required
              className="bg-gray-700 text-gray-100 border-gray-600 focus:border-gray-500"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            disabled={loading}
          >
            {loading ? <Loader2 className="animate-spin" /> : 'Iniciar sesión'}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
