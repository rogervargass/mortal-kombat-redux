import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slices/cartSlice";
import charactersReducer from "../slices/charactersSlice";
import galleryReducer from "../slices/gallerySlice";

export const store = configureStore({
  reducer: {
    shopCart: cartReducer,
    characters: charactersReducer,
    gallery: galleryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
