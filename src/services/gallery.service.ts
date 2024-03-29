import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";

const API_URL =
  (import.meta.env.VITE_API_URL as string) || "https://api.rawg.io/api/games";
const API_KEY =
  (import.meta.env.VITE_API_KEY as string) ||
  "f41a693f62804575964a122779c0e983";

const params = {
  key: API_KEY,
};

const MK2_ID = 29426;

export async function getGameScreenshots() {
  const response = await axios.get(`${API_URL}/${MK2_ID}/screenshots`, {
    params,
  });
  return response.data;
}

export const galleryApi = createApi({
  reducerPath: "galleryApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getScreenshots: builder.query({
      query: () => `${MK2_ID}/screenshots?key=${API_KEY}`,
    }),
  }),
});

export const { useGetScreenshotsQuery } = galleryApi;
