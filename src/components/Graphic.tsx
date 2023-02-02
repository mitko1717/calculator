import { FC } from "react";
import { useActions } from "../hooks/actions";
import { useAppSelector } from "../hooks/redux";
import Chart from "./Chart";
import StorageRange from "./StorageRange";
import TransferRange from "./TransferRange";

const Graphic: FC = ({}) => {
  const { storageRangeValues, transferRangeValues } = useAppSelector((state) => state.graphic);
  const { setStorageRangeValues, setTransferRangeValues } = useActions();

  return (
    <div className="w-[400px] mx-auto md:w-full h-[100vh]">
      <Chart />
      <StorageRange
        rtl={false}
        rangeValue={storageRangeValues}
        setRangeValue={setStorageRangeValues}
      />
      <TransferRange
        rtl={false}
        rangeValue={transferRangeValues}
        setRangeValue={setTransferRangeValues}
      />
    </div>
  );
};

export default Graphic;
