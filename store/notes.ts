import { createSlice } from "@reduxjs/toolkit";

type State = { notes: string[] }

const initialState: State = { notes: ['first note', 'second note'] }

export const slice = createSlice({
  name: 'notes',
  initialState,
  selectors: {
    selectNotes: (state): string[] => state.notes,
  },
  reducers: {
    newNote: (state, { payload }: { payload: string }) => {
      state.notes.push(payload)
    }
  }
})
