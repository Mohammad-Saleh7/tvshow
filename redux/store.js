import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./cardSlice";

export const store = configureStore({
  reducer: {
    cards: filterReducer,
  },
});
