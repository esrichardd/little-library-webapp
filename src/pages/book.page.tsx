import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import Navbar from '@/components/molecules/navbar'

const book = {
  id: '1',
  title: 'El principito',
  author: 'Antoine de Saint-Exupéry',
  pages: [
    'Lorem ipsum dolor sit amet. '.repeat(25).trim(),
    'Sed ut perspiciatis unde omnis iste natus error sit '.repeat(10).trim(),
    'At vero eos et accusamus et iusto odio dignissimos. '.repeat(10).trim(),
  ],
}

export default function BookViewer() {
  const [currentPage, setCurrentPage] = useState(0)

  const goToPreviousPage = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1))
  }

  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(book.pages.length - 1, prev + 1))
  }

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center p-4">
        <Card
          className="w-full max-w-2xl bg-white flex flex-col"
          style={{ height: 'calc(100vh - 8rem)' }}
        >
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-gray-800">
              {book.title}
            </CardTitle>
            <p className="text-center text-gray-600">{book.author}</p>
          </CardHeader>
          <CardContent className="flex-grow overflow-hidden">
            <ScrollArea className="h-full">
              <p className="text-lg text-gray-800 p-6">
                {book.pages[currentPage]}
              </p>
            </ScrollArea>
          </CardContent>
          <CardFooter className="flex justify-between mt-auto">
            <Button
              onClick={goToPreviousPage}
              disabled={currentPage === 0}
              variant="outline"
              className="text-gray-800 border-gray-300 hover:bg-gray-100"
            >
              <ChevronLeft className="mr-2 h-4 w-4" /> Anterior
            </Button>
            <span className="text-sm text-gray-600">
              Página {currentPage + 1} de {book.pages.length}
            </span>
            <Button
              onClick={goToNextPage}
              disabled={currentPage === book.pages.length - 1}
              variant="outline"
              className="text-gray-800 border-gray-300 hover:bg-gray-100"
            >
              Siguiente <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}
