import { createSlice } from "@reduxjs/toolkit";

const initialState = { cards: {} };

const options = {
  name: "cards",
  initialState: initialState,
  reducers: {
    addCard: (state, action) => {
      const { id } = action.payload;
      state.cards[id] = action.payload;
    },
  },
};

const cardsSlice = createSlice(options);

export const selectCard = (id) => (state) => state.cards.cards[id];

export const cardsReducer = cardsSlice.reducer;
export const addCard = cardsSlice.actions.addCard;
