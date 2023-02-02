import { FC, useState } from "react";
import Chart from "./Chart";
import { useAppSelector } from "../hooks/redux";
import StorageRange from "./StorageRange";
import TransferRange from "./TransferRange";

const Graphic: FC = ({}) => {
  const { graphic } = useAppSelector((state) => state.graphic);
  const [storageRangeValues, setStorageRangeValues] = useState([1]);
  const [transferRangeValues, setTransferRangeValues] = useState([1]);

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
