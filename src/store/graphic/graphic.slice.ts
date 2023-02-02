import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import { IObject } from "../../models/interfaces";
import { DATA } from "../../DATA";

interface GraphicState {
  graphic: IObject[];
  activeCompany: string | null;
}

const initialState: GraphicState = {
  graphic: DATA,
  activeCompany: null,
};

export const graphicSlice = createSlice({
  name: "graphic",
  initialState,
  reducers: {
    setActiveCompany(state, action: PayloadAction<string>) {
      state.activeCompany = action.payload;
    },
    changeRadioInput(state, action: PayloadAction<IObject>) {
      let findObj = state.graphic.find(o => o.slug === action.payload.slug)
      console.log(current(findObj));
    }
  },
});

export const graphicActions = graphicSlice.actions;
export const graphicReducer = graphicSlice.reducer;
