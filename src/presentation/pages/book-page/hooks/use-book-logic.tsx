import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useGetBookByIdQuery } from '@/infraestructure/repository'
import { useAuth } from '@/application/contexts/auth.context'
import { addReadingTime } from '@/application/slices/reading-time'

export const useBookLogic = () => {
  const { user } = useAuth()
  const [currentPage, setCurrentPage] = useState<number>(0)
  const [startTime, setStartTime] = useState<number | null>(null)
  const dispatch = useDispatch()
  const { id } = useParams()
  const { data: book, isLoading } = useGetBookByIdQuery(Number(id))

  useEffect(() => {
    setStartTime(Date.now())

    if (startTime !== null && book) {
      const timeSpent = Date.now() - startTime
      console.log('Gatillar Evento a Ecosistema con la siguiente data', {
        userId: user?.id,
        bookId: book.id,
        page: currentPage,
        time: timeSpent,
      })

      dispatch(
        addReadingTime({
          bookId: book.id,
          page: currentPage,
          time: timeSpent,
        })
      )
    }
  }, [currentPage, book])

  const goToPreviousPage = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1))
  }

  const goToNextPage = () => {
    setCurrentPage((prev) => {
      return book?.pages ? Math.min(book.pages.length - 1, prev + 1) : 0
    })
  }

  return {
    book,
    isLoading,
    currentPage,
    goToPreviousPage,
    goToNextPage,
  }
}
