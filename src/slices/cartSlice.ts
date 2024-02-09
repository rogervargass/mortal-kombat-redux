import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import CHARACTERS from "../data/characters.json";
import { Character } from "../types/Character";

interface CartState {
  cart: Character[];
}

const initialState: CartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<number>) => {
      const newCharacter = CHARACTERS.find(
        (character) => character.id === action.payload
      );

      state.cart.push(newCharacter as Character);
    },

    removeToCart: (state, action: PayloadAction<number>) => {
      const newCart = state.cart.filter((item) => item.id !== action.payload);
      state.cart = newCart;
    },
  },
});

export const { addToCart, removeToCart } = cartSlice.actions;
export default cartSlice.reducer;
