import { useGetBooksQuery } from '@/infraestructure/repository'
import { Navbar } from '@/presentation/components/molecules/navbar'
import { BookCard } from '@/presentation/components/molecules/book-card'
import { ScrollArea } from '@/presentation/components/ui/scroll-area'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/presentation/components/ui/card'

export const CatalogPage: React.FC = () => {
  const { data } = useGetBooksQuery()

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
                {data?.map((book) => (
                  <BookCard book={book} key={book.id} isLoading={true} />
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
