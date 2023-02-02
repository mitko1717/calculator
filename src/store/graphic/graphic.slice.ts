import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import { IObject } from "../../models/interfaces";
import { DATA } from "../../DATA";

interface GraphicState {
  graphic: IObject[];
  activeCompany: string | null;
  storageRangeValues: number[],
  transferRangeValues: number[],
}

const initialState: GraphicState = {
  graphic: DATA,
  activeCompany: null,
  storageRangeValues: [0],
  transferRangeValues: [0],
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
      findObj?.options?.forEach(o => o.checked = !o.checked)
    },
    setDefaultPriceForMultipleOptions(state) {
      state.graphic.forEach((gr, index) => {
        // if(gr.sales) {
        //   state.graphic[index].price 
        // }
        if (gr.minPayment) {
          state.graphic[index].price = gr.minPayment
        }
      })
    },
    onChangeAnyRange(state, action) {

    },
    setStorageRangeValues(state, action) {
      state.storageRangeValues = action.payload
    },
    setTransferRangeValues(state, action) {
      state.transferRangeValues = action.payload
    },
  },
});

export const graphicActions = graphicSlice.actions;
export const graphicReducer = graphicSlice.reducer;
