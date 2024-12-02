import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ReadingTimeEntry {
  bookId: number
  page: number
  time: number
}

interface ReadingTimeState {
  entries: ReadingTimeEntry[]
}

const initialState: ReadingTimeState = {
  entries: [],
}

const readingTimeSlice = createSlice({
  name: 'readingTime',
  initialState,
  reducers: {
    addReadingTime: (state, action: PayloadAction<ReadingTimeEntry>) => {
      const { bookId, page, time } = action.payload
      const existingEntryIndex = state.entries.findIndex(
        (entry) => entry.bookId === bookId && entry.page === page
      )
      if (existingEntryIndex !== -1) {
        state.entries[existingEntryIndex].time = time
      } else {
        state.entries.push(action.payload)
      }
    },
  },
})

export const { addReadingTime } = readingTimeSlice.actions
export default readingTimeSlice.reducer
