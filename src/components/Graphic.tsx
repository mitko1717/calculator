import { FC, useState } from "react";
import { useActions } from "../hooks/actions";
import StorageRange from "./StorageRange";
import TransferRange from "./TransferRange";

const Graphic: FC = ({}) => {
  const { } = useActions();

  const [storageRangeValues, setStorageRangeValues] = useState([1]);
  const [transferRangeValues, setTransferRangeValues] = useState([1]);

  return <div className="w-[400px] mx-auto md:w-full h-[100vh]">
    

    <StorageRange rtl={false} 
                  rangeValue={storageRangeValues}
                  setRangeValue={setStorageRangeValues}/>
    <TransferRange rtl={false}
                  rangeValue={transferRangeValues}
                  setRangeValue={setTransferRangeValues}/>
  </div>;
};

export default Graphic;
