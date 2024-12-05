import { useGetBooksQuery } from '@/infraestructure/repository'

export const useCatalogLogic = () => {
  const { data: books, isLoading } = useGetBooksQuery()

  return {
    books,
    isLoading,
  }
}
