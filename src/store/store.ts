import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../services/slices/cartSlice";
import charactersReducer from "../services/slices/charactersSlice";
import galleryReducer from "../services/slices/gallerySlice";
import userReducer from "../services/slices/userSlice";
import { userApi } from "../services/user.service";

export const store = configureStore({
  reducer: {
    shopCart: cartReducer,
    characters: charactersReducer,
    gallery: galleryReducer,
    [userApi.reducerPath]: userApi.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
