import { configureStore } from "@reduxjs/toolkit";

import cardReducer from "src/redux/slices/cardSlice";

export const store = configureStore({
  reducer: {
    cards: cardReducer,
  },
});
