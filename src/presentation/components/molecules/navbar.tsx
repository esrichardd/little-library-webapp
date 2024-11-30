import { useNavigate } from 'react-router-dom'
import { BookOpen, LogOut, Menu } from 'lucide-react'
import { useAuth } from '@/application/contexts'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/presentation/components/ui/dropdown-menu'
import { Button } from '@/presentation/components/ui/button'

export const Navbar: React.FC = () => {
  const navigate = useNavigate()
  const { logout } = useAuth()

  const goToCatalog = () => {
    navigate('/catalog')
  }

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Lector de Libros</h1>
        <nav>
          <ul className="hidden md:flex space-x-4">
            <li>
              <Button variant="ghost" onClick={goToCatalog}>
                <BookOpen className="mr-2 h-4 w-4" />
                Ir al catálogo
              </Button>
            </li>
            <li>
              <Button variant="ghost" onClick={logout}>
                <LogOut className="mr-2 h-4 w-4" />
                Cerrar sesión
              </Button>
            </li>
          </ul>
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={goToCatalog}>
                <BookOpen className="mr-2 h-4 w-4" />
                <span>Ir al catálogo</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={logout}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Cerrar sesión</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
    </header>
  )
}
