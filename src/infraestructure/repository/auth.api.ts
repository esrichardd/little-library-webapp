import { User } from '@/domain/models'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const BASE_URL = import.meta.env.VITE_BASE_API_URL

export const authApiRepository = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL || 'http://localhost:4000' }),
  endpoints: (builder) => ({
    login: builder.mutation<User, { email: string; password: string }>({
      query: ({ email, password }) => ({
        url: '/login',
        method: 'POST',
        body: { email, password },
      }),
    }),
  }),
})

export const { useLoginMutation } = authApiRepository
