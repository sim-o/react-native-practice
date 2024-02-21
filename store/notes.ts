import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Note = { id: number; value: string };
export type State = { nextId: number; notes: Note[] };

const initialState: State = {
  nextId: 3,
  notes: [
    { id: 1, value: "first note" },
    { id: 2, value: "second note" },
  ],
};

export const slice = createSlice({
  name: "notes",
  initialState,
  selectors: {
    selectNotes: (state): Note[] => state.notes,
  },
  reducers: {
    newNote: (state, { payload }: PayloadAction<string>) => {
      const nextId = state.nextId++;
      state.notes.push({ id: nextId, value: payload });
    },
    updateNote: (state, { payload }: PayloadAction<Note>) => {
      const note = state.notes.find(({ id }) => id === payload.id);
      if (note) {
        note.value = payload.value;
      }
    }
  },
});

