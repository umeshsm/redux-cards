import { createSlice, current } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = [];

export const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    addCard: (state, { payload }) => {
      state.push({
        id: uuidv4(),
        ...payload,
      });
    },
    copyCard: (state, { payload }) => {
      const cardToCopy = state.find((item) => item.id === payload);
      state.push({
        ...cardToCopy,
        id: uuidv4(),
      });
    },
    deleteCard: (state, { payload }) => {
      return state.filter((item) => item.id !== payload);
    },
    saveCard: (state, { payload: { id, cardDetails } }) => {
      return state.map((item) => {
        if (item.id === id) {
          return {
            id,
            ...cardDetails,
          };
        }
        return item;
      });
    },
  },
});

export const { addCard, copyCard, deleteCard, saveCard } = cardSlice.actions;

export default cardSlice.reducer;
