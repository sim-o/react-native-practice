import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { notes } from "./notes";

export const rootReducer = combineReducers({
  notes: notes.reducer,
})

export const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
