import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FetchStatus } from "../../types/Fetch";
import { GameScreenshot } from "../../types/Image";
import { getGameScreenshots } from "../gallery.service";

interface GalleryState {
  screenshots: GameScreenshot[];
  status: FetchStatus;
  error: string | null;
}

const initialState: GalleryState = {
  screenshots: [],
  status: FetchStatus.IDLE,
  error: null,
};

export const fetchScreenshots = createAsyncThunk(
  "screenshots/fetchScreenshots",
  async () => {
    try {
      const response = await getGameScreenshots();
      return response.results;
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
        state.status = FetchStatus.LOADING;
      })
      .addCase(fetchScreenshots.fulfilled, (state, action) => {
        state.status = FetchStatus.SUCCEEDED;
        state.screenshots = action.payload.map((screenshot: any) => ({
          id: screenshot.id,
          image: screenshot.image,
        }));
      })
      .addCase(fetchScreenshots.rejected, (state, action) => {
        state.status = FetchStatus.ERROR;
        state.error = action.error.message || null;
      });
  },
});

export default gallerySlice.reducer;
