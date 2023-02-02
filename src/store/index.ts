import { configureStore } from "@reduxjs/toolkit";
import { graphicApi } from "./graphic/graphic.api";
import { setupListeners } from "@reduxjs/toolkit/query";
import { graphicReducer } from "./graphic/graphic.slice";

export const store = configureStore({
  reducer: {
    [graphicApi.reducerPath]: graphicApi.reducer,
    graphic: graphicReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(graphicApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
