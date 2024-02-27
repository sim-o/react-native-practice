import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Note = { id: number; value: string };
export type State = { nextId: number; editing: number | null; notes: Note[] };

export const initialNotesState: State = {
  nextId: 3,
  editing: null,
  notes: [
    { id: 1, value: "first note" },
    { id: 2, value: "second note" },
  ],
};

export const notes = createSlice({
  name: "notes",
  initialState: initialNotesState,
  selectors: {
    selectNotes: (state): Note[] => state.notes,
    editing: (state) => state.editing,
  },
  reducers: {
    newNote: (state, { payload }: PayloadAction<string>) => {
      const nextId = state.nextId++;
      state.editing = nextId;
      state.notes.push({ id: nextId, value: payload });
    },
    edit: (state, { payload }: PayloadAction<number>) => {
      state.editing = payload;
    },
    updateNote: (state, { payload }: PayloadAction<Note>) => {
      const note = state.notes.find(({ id }) => id === payload.id);
      if (note) {
        note.value = payload.value;
      }
    },
  },
});
