import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { graphicReducer } from "./graphic/graphic.slice";

export const store = configureStore({
  reducer: {
    graphic: graphicReducer,
  },
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
