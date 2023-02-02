import { configureStore } from "@reduxjs/toolkit";
import { articlesApi } from "./graphic/graphic.api";
import { setupListeners } from "@reduxjs/toolkit/query";
import { articleReducer } from "./graphic/graphic.slice";

export const store = configureStore({
  reducer: {
    [articlesApi.reducerPath]: articlesApi.reducer,
    article: articleReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articlesApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
