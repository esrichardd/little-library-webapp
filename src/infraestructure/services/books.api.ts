import { CatalogBook, DetailedBook } from '@/domain/models'
import { apiRequest } from './config.api'

const getCatalog = async (): Promise<CatalogBook[]> => {
  return apiRequest<CatalogBook[]>('/books', 'GET')
}

const getBook = async (id: number): Promise<DetailedBook> => {
  return apiRequest<DetailedBook>(`/books/${id}`, 'GET')
}

export default { getCatalog, getBook }
