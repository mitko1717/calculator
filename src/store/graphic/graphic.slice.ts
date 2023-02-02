import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IObject } from "../../models/interfaces";
import { DATA } from "../../../DATA"

interface GraphicState {
  graphic: IObject[];
}

const initialState: GraphicState = {
  graphic: DATA,
};

export const graphicSlice = createSlice({
  name: "graphic",
  initialState,
  reducers: {
    
  },
});

export const graphicActions = graphicSlice.actions;
export const graphicReducer = graphicSlice.reducer;
