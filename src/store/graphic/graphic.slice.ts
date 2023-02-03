import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IObject } from "../../models/interfaces";
import { DATA } from "../../DATA";

interface GraphicState {
  graphic: IObject[];
  activeCompany: string | null;
  storageRangeValue: number[];
  transferRangeValue: number[];
  radioChangeCounter: number;
}

const initialState: GraphicState = {
  graphic: DATA,
  activeCompany: null,
  storageRangeValue: [0],
  transferRangeValue: [0],
  radioChangeCounter: 0,
};

export const graphicSlice = createSlice({
  name: "graphic",
  initialState,
  reducers: {
    setActiveCompany(state, action: PayloadAction<string>) {
      state.activeCompany = action.payload;
    },
    changeRadioInput(state, action: PayloadAction<IObject>) {
      let findObj = state.graphic.find((o) => o.slug === action.payload.slug);
      findObj?.options?.forEach((o) => (o.checked = !o.checked));

      state.radioChangeCounter++;
    },
    setDefaultPriceForMultipleOptions(state) {
      state.graphic.forEach((gr, index) => {
        if (gr.minPayment) {
          state.graphic[index].price = gr.minPayment;
        }
      });
    },
    onChangeAnyRange(state) {
      const round = (value: number, precision: number) => {
        let multiplier = Math.pow(10, precision || 0);
        return Math.round(value * multiplier) / multiplier;
      };

      let newGraphic = state.graphic.map((graph) => {
        if (
          graph.isOptions &&
          graph.priceTransfer === undefined &&
          graph.priceStorage === undefined &&
          !graph.sales
        ) {
          let foundActiveOption = graph.options?.find(
            (o) => o.checked === true
          );
          if (
            foundActiveOption?.priceStorage &&
            foundActiveOption.priceTransfer
          ) {
            let price =
              state.transferRangeValue[0] * foundActiveOption?.priceTransfer +
              state.storageRangeValue[0] * foundActiveOption?.priceStorage;

            if (graph.minPayment && price > graph.minPayment) {
              graph.price = round(price, 1);
            } else if (graph.maxPayment && price > graph.maxPayment) {
              graph.price = graph.maxPayment;
            } else if (graph.maxPayment && price < graph.maxPayment) {
              graph.price = round(price, 1);
            }
          }

          return graph;
        } else if (
          !graph.isOptions &&
          graph.priceTransfer &&
          graph.priceStorage &&
          !graph.sales
        ) {
          let price =
            state.transferRangeValue[0] * graph?.priceTransfer +
            state.storageRangeValue[0] * graph?.priceStorage;

          if (graph.minPayment && price > graph.minPayment) {
            graph.price = round(price, 1);
          } else if (graph.maxPayment && price > graph.maxPayment) {
            graph.price = graph.maxPayment;
          } else return graph;
        } else if (
          graph.isOptions &&
          graph.priceTransfer === undefined &&
          graph.priceStorage === undefined &&
          graph.sales
        ) {
          let foundActiveOption = graph.options?.find(
            (o) => o.checked === true
          );

          let saleForStorage;
          let saleForTransfer;
          let price;

          if (foundActiveOption?.freeSize !== undefined) {
            saleForStorage =
              foundActiveOption?.freeSize * foundActiveOption?.priceStorage;
            saleForTransfer =
              foundActiveOption?.freeSize * foundActiveOption?.priceTransfer;

            if (state.transferRangeValue[0] > foundActiveOption?.freeSize) {
              price =
                state.transferRangeValue[0] * foundActiveOption?.priceTransfer -
                saleForTransfer;
              graph.price = round(price, 1);
            } else if (
              state.storageRangeValue[0] > foundActiveOption?.freeSize
            ) {
              price =
                state.storageRangeValue[0] * foundActiveOption?.priceStorage -
                saleForStorage;
              graph.price = round(price, 1);
            }
            if (
              state.transferRangeValue[0] > foundActiveOption?.freeSize &&
              state.storageRangeValue[0] > foundActiveOption?.freeSize
            ) {
              price =
                state.transferRangeValue[0] * foundActiveOption?.priceTransfer -
                saleForTransfer +
                (state.storageRangeValue[0] * foundActiveOption?.priceStorage -
                  saleForStorage);
              graph.price = round(price, 1);
            }
          }
        }
      });
    },
    setStorageRangeValue(state, action) {
      state.storageRangeValue = action.payload;
    },
    setTransferRangeValue(state, action) {
      state.transferRangeValue = action.payload;
    },
  },
});

export const graphicActions = graphicSlice.actions;
export const graphicReducer = graphicSlice.reducer;
