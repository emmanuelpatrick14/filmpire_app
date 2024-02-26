// redux tootlkt configuration is done here

import { configureStore } from "@reduxjs/toolkit";
import { tmdbApi } from "../services/TMDB";
// import genreOrCategoryReducer from '../features/currentGenreOrCategory';
import  genreOrCategoryReducer from "../features/currentGenreOrCategory";
// create n eport store
export default configureStore({
  // provide configure store options
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    // connect reducer to store
    currentGenreOrCategory: genreOrCategoryReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbApi.middleware),
});
