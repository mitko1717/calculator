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
    <div className="mx-auto w-full h-[100vh]">
      <h1 className="font-bold py-2 text-2xl text-center">CALCULATOR</h1>
      <div className="w-[400px] mx-auto">
        <Chart />
      </div>

      <div className="w-full h-auto flex flex-col md:flex-row md:justify-center">
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
    </div>
  );
};

export default Graphic;
