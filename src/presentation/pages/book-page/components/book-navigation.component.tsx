import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/presentation/components/ui/button'

type BookPageNavigationProps = {
  currentPage: number
  totalPages: number | undefined
  onPreviousPage: () => void
  onNextPage: () => void
}

export const BookPageNavigation: React.FC<BookPageNavigationProps> = ({
  currentPage,
  totalPages,
  onPreviousPage,
  onNextPage,
}) => {
  return (
    <div className="flex justify-between mt-auto">
      <Button
        onClick={onPreviousPage}
        disabled={currentPage === 0}
        variant="outline"
        className="text-gray-800 border-gray-300 hover:bg-gray-100"
      >
        <ChevronLeft className="mr-2 h-4 w-4" /> Anterior
      </Button>
      <span className="text-sm text-gray-600">
        Página {currentPage + 1} de {totalPages}
      </span>
      <Button
        onClick={onNextPage}
        disabled={currentPage === (totalPages ?? 0) - 1}
        variant="outline"
        className="text-gray-800 border-gray-300 hover:bg-gray-100"
      >
        Siguiente <ChevronRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  )
}
