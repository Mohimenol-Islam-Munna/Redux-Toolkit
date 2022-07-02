import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const playersApi = createApi({
  reducerPath: "playerApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://reqres.in/api" }),
  endpoints: (builder) => ({
    getPlayers: builder.query({
      query: () => "/users",
    }),
  }),
});

export const { useGetPlayersQuery } = playersApi;
export default playersApi;
