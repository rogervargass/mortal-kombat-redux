import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AuthUser, CreateUser } from "../types/User";

const API_URL = "https://reqres.in/api";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    login: builder.mutation<{ token: string }, AuthUser>({
      query: (body) => ({
        url: "/login",
        method: "POST",
        body,
      }),
    }),
    register: builder.mutation<{ token: string; id: number }, CreateUser>({
      query: (body) => ({
        url: "/register",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = userApi;
