import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { GameScreenshot } from "../types/Image";

interface CartState {
  screenshots: GameScreenshot[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: CartState = {
  screenshots: [],
  status: "idle",
  error: null,
};

const API_URL = "https://api.rawg.io/api/games";
const API_KEY = "f41a693f62804575964a122779c0e983";

const params = {
  key: API_KEY,
};

const MK2_ID = 29426;

export const fetchScreenshots = createAsyncThunk(
  "screenshots/fetchScreenshots",
  async () => {
    try {
      const response = await axios.get(`${API_URL}/${MK2_ID}/screenshots`, {
        params,
      });
      return response.data.results;
    } catch (error) {
      return error;
    }
  }
);

export const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchScreenshots.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchScreenshots.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.screenshots = action.payload.map((screenshot: any) => ({
          id: screenshot.id,
          image: screenshot.image,
        }));
      })
      .addCase(fetchScreenshots.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

export default gallerySlice.reducer;
