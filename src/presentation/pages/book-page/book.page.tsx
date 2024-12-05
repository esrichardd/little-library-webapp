import { Navbar } from '@/presentation/components/molecules/navbar'
import { useBookLogic } from './hooks/use-book-logic'
import { BookPageContent } from './components'

export const BookPage: React.FC = () => {
  const { book, currentPage, goToPreviousPage, goToNextPage } = useBookLogic()

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center p-4">
        <BookPageContent
          book={book}
          currentPage={currentPage}
          onPreviousPage={goToPreviousPage}
          onNextPage={goToNextPage}
        />
      </main>
    </div>
  )
}
