import { Link } from 'react-router-dom'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/presentation/components/ui/card'
import { ScrollArea } from '@/presentation/components/ui/scroll-area'
import { Navbar } from '@/presentation/components/molecules/navbar'

interface Book {
  id: number
  title: string
  author: string
  description: string
}

const books: Book[] = [
  {
    id: 1,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    description:
      'A classic of modern American literature about racial injustice.',
  },
  {
    id: 2,
    title: '1984',
    author: 'George Orwell',
    description:
      'A dystopian social science fiction novel and cautionary tale.',
  },
  {
    id: 3,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    description: 'A romantic novel of manners set in Georgian England.',
  },
  {
    id: 4,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    description:
      'A tragic story of the American dream in the Roaring Twenties.',
  },
  {
    id: 5,
    title: 'One Hundred Years of Solitude',
    author: 'Gabriel García Márquez',
    description: 'A landmark of magical realism and epic family saga.',
  },
]

export const CatalogPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center p-4">
        <Card className="w-full max-w-4xl bg-gray-800 text-gray-100">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Catálogo de libros
            </CardTitle>
            <CardDescription className="text-center text-gray-400">
              Explora nuestra colección de clásicos literarios
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[70vh]">
              <div className="space-y-4">
                {books.map((book) => (
                  <Link to={`/book/${book.id}`} key={book.id} className="block">
                    <Card className="bg-gray-700 transition-colors hover:bg-gray-600 cursor-pointer">
                      <CardHeader>
                        <CardTitle className="text-xl text-gray-100">
                          {book.title}
                        </CardTitle>
                        <CardDescription className="text-gray-300">
                          por {book.author}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-400">{book.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
