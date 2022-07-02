import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const singlePlayerApi = createApi({
  reducerPath: "singlePlayerApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://reqres.in/api" }),
  endpoints: (builder) => ({
    getSinglePlayer: builder.query({
      query: () => "/users/2",
    }),
  }),
});

export const {useGetSinglePlayerQuery} = singlePlayerApi;
export default singlePlayerApi;
