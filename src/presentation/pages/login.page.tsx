import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
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

export const LoginPage: React.FC = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Email:', email)
    console.log('Password:', password)

    navigate('/catalog')
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <Card className="w-full max-w-md bg-gray-800 text-gray-100 mx-4 sm:mx-0">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Inicia sesión
          </CardTitle>
          <CardDescription className="text-center text-gray-400">
            Ingresa tus credenciales para acceder a tu cuenta
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
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
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-gray-700 text-gray-100 border-gray-600 focus:border-gray-500"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              Iniciar sesión
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
