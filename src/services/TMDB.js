import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const tmdbApiKey = "19e2c1f711e1c8cb8cb77f6fd5d646c6";
const page = 1;

export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3" }),
  endpoints: (builder) => {
    // get movies by [type]
    getMovies: builder.query({
      query: () => `movie/popular?api_key=${tmdbApiKey}&language=en-US&page=1`,
    });
  },
});

export const { getMoviesQuery } = tmdbApi;
