import { createSlice } from "@reduxjs/toolkit";

export const filterCards = createSlice({
  name: "cards",
  initialState: [],
  reducers: {
    seriesBtn: (state, action) => {
      const exists = state.find((item) => item.id === action.payload.id);
      if (exists) {
        return state.filter((item) => item.id !== action.payload.id);
      } else {
        state.push({ ...action.payload, type: "series" });
      }
    },
    personBtn: (state, action) => {
      const exists = state.find((item) => item.id === action.payload.id);
      if (exists) {
        return state.filter((item) => item.id !== action.payload.id);
      } else {
        state.push({ ...action.payload, type: "person" });
      }
    },
    filmBtn: (state, action) => {
      const exists = state.find((item) => item.id === action.payload.id);
      if (exists) {
        return state.filter((item) => item.id !== action.payload.id);
      } else {
        state.push({ ...action.payload, type: "film" });
      }
    },
    clearBtns: () => [],
  },
});

export const { seriesBtn, personBtn, filmBtn, clearBtns } = filterCards.actions;
export default filterCards.reducer;
