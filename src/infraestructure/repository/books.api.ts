import { CatalogBook, DetailedBook } from '@/domain/models'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const BASE_URL = import.meta.env.VITE_BASE_API_URL

export const booksApiRepository = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL || 'http://localhost:4000' }),
  endpoints: (builder) => ({
    getBooks: builder.query<CatalogBook[], void>({
      query: () => '/catalog',
    }),
    getBookById: builder.query<DetailedBook, number>({
      query: (id) => `/books/${id}`,
    }),
  }),
})

export const { useGetBooksQuery, useGetBookByIdQuery } = booksApiRepository
