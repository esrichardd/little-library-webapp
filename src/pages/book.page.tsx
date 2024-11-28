import React, { useState } from 'react'
import { Card } from '@/components/ui/card'
import { useLocation, useParams } from 'react-router-dom'

const book = {
  id: '1',
  title: 'El principito',
  author: 'Antoine de Saint-Exupéry',
  pages: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.',
  ],
}

const BookPage: React.FC = () => {
  const { id } = useParams()
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const initialPage = parseInt(queryParams.get('page') || '1', 10) - 1
  const [currentPage, setCurrentPage] = useState(initialPage)

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % book.pages.length)
  }

  const handlePreviousPage = () => {
    setCurrentPage(
      (prevPage) => (prevPage - 1 + book.pages.length) % book.pages.length
    )
  }

  return (
    <div className="flex justify-center min-h-screen bg-gray-900 p-6">
      <Card className="w-full max-w-4xl bg-white text-gray-100">
        <p className="text-gray-900">{book.pages[currentPage]}</p>
        <button
          onClick={handlePreviousPage}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Página anterior
        </button>
        <button
          onClick={handleNextPage}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Siguiente página
        </button>
      </Card>
    </div>
  )
}

export default BookPage
