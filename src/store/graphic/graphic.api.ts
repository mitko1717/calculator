import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const graphicApi = createApi({
  reducerPath: "github/api",
  baseQuery: fetchBaseQuery({
    // baseUrl: "https://api.spaceflightnewsapi.net/v3/",
  }),
  refetchOnFocus: true,
  endpoints: (build) => ({

  }),
});

export const { } = graphicApi;
