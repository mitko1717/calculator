import { Dispatch, SetStateAction } from "react";

export interface IOption {
  provider: string;
  priceStorage: number;
  priceTransfer: number;
  freeSize?: number;
  checked: boolean;
}

export interface IObject {
  provider: string;
  icon: string;
  minPayment: number;
  priceStorage?: number;
  priceTransfer?: number;
  isOptions: boolean;
  options?: IOption[];
  slug: string;
  diapason: number[];
  price: number;
}

export interface IRange {
  graph: IObject;
}

export type TwoThumbsProps = {
  rtl: boolean;
  rangeValue: number[];
  setRangeValue: Dispatch<SetStateAction<number[]>>;
};
