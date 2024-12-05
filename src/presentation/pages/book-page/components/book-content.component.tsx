import { ScrollArea } from '@/presentation/components/ui/scroll-area'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/presentation/components/ui/card'
import { BookPageNavigation } from './book-navigation.component'

interface BookPageContentProps {
  book: any
  currentPage: number
  onPreviousPage: () => void
  onNextPage: () => void
}

export const BookPageContent: React.FC<BookPageContentProps> = ({
  book,
  currentPage,
  onPreviousPage,
  onNextPage,
}) => {
  return (
    <Card
      className="w-full max-w-2xl bg-white flex flex-col"
      style={{ height: 'calc(100vh - 8rem)' }}
    >
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center text-gray-800">
          {book?.title}
        </CardTitle>
        <p className="text-center text-gray-600">{book?.author}</p>
      </CardHeader>
      <CardContent className="flex-grow overflow-hidden">
        <ScrollArea className="h-full">
          <p className="text-lg text-gray-800 p-6">
            {book?.pages[currentPage]}
          </p>
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <BookPageNavigation
          currentPage={currentPage}
          totalPages={book?.pages.length}
          onPreviousPage={onPreviousPage}
          onNextPage={onNextPage}
        />
      </CardFooter>
    </Card>
  )
}