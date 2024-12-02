import { configureStore } from '@reduxjs/toolkit'
import { authApiService, booksApiService } from '@/infraestructure/services'
import readingTimeReducer from './slices/reading-time'

export const store = configureStore({
  reducer: {
    [authApiService.reducerPath]: authApiService.reducer,
    [booksApiService.reducerPath]: booksApiService.reducer,
    readingTime: readingTimeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApiService.middleware,
      booksApiService.middleware
    ),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
