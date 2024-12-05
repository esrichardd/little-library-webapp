import { CatalogBook } from '@/domain/models'
import { BookCard } from '@/presentation/components/molecules/book-card'
import { ScrollArea } from '@/presentation/components/ui/scroll-area'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/presentation/components/ui/card'

interface CatalogContentProps {
  books?: CatalogBook[]
  isLoading: boolean
}

export const CatalogContent: React.FC<CatalogContentProps> = ({
  books,
  isLoading,
}) => {
  return (
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
            {books?.map((book) => (
              <BookCard book={book} key={book.id} isLoading={isLoading} />
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
