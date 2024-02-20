import { configureStore } from "@reduxjs/toolkit";
import { slice } from "./notes";

export const store = configureStore({
  reducer: {
    notes: slice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
