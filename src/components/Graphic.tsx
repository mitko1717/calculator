import { FC } from "react";
import { useActions } from "../hooks/actions";
import { useAppSelector } from "../hooks/redux";
import Chart from "./Chart";
import StorageRange from "./StorageRange";
import TransferRange from "./TransferRange";

const Graphic: FC = ({}) => {
  const { storageRangeValue, transferRangeValue } = useAppSelector(
    (state) => state.graphic
  );
  const { setStorageRangeValue, setTransferRangeValue } = useActions();

  return (
    <div className="w-[400px] mx-auto md:w-full h-[100vh]">
      <h1 className="font-bold py-2 text-2xl text-center">CALCULATOR</h1>
      <Chart />

      <StorageRange
        rtl={false}
        rangeValue={storageRangeValue}
        setRangeValue={setStorageRangeValue}
      />
      <TransferRange
        rtl={false}
        rangeValue={transferRangeValue}
        setRangeValue={setTransferRangeValue}
      />
    </div>
  );
};

export default Graphic;
