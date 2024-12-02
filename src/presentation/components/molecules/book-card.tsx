import { Link } from 'react-router-dom'
import { CatalogBook } from '@/domain/models'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card'

type BookCardProps = {
  book: CatalogBook
  isLoading: boolean
}

export const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <Link to={`/book/${book.id}`} key={book.id} className="block">
      <Card className="bg-gray-700 transition-colors hover:bg-gray-600 cursor-pointer">
        <CardHeader>
          <CardTitle className="text-xl text-gray-100">{book.title}</CardTitle>
          <CardDescription className="text-gray-300">
            por {book.author}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-400">{book.description}</p>
        </CardContent>
      </Card>
    </Link>
  )
}
