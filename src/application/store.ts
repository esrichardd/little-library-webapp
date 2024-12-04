import { configureStore } from '@reduxjs/toolkit'
import {
  authApiRepository,
  booksApiRepository,
} from '@/infraestructure/repository'
import readingTimeReducer from './slices/reading-time'

export const store = configureStore({
  reducer: {
    [authApiRepository.reducerPath]: authApiRepository.reducer,
    [booksApiRepository.reducerPath]: booksApiRepository.reducer,
    readingTime: readingTimeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApiRepository.middleware,
      booksApiRepository.middleware
    ),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
