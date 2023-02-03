import { useEffect } from "react";
import { BarChart, Bar, Cell, XAxis } from "recharts";
import { useActions } from "../hooks/actions";
import { useAppSelector } from "../hooks/redux";
import { IObject } from "../models/interfaces";

export default function Chart() {
  const {
    graphic,
    activeCompany,
    transferRangeValue,
    storageRangeValue,
    radioChangeCounter,
  } = useAppSelector((state) => state.graphic);
  const {
    setActiveCompany,
    changeRadioInput,
    setDefaultPriceForMultipleOptions,
    onChangeAnyRange,
  } = useActions();

  useEffect(() => {
    setActiveCompany(graphic[0].provider);
    // eslint-disable-next-line
  }, [graphic]);

  const handleClick = (provider: string) => {
    setActiveCompany(provider);
  };

  useEffect(() => {
    setDefaultPriceForMultipleOptions();
    // eslint-disable-next-line
  }, []);

  const radioClickHandler = (object: IObject) => {
    changeRadioInput(object);
  };

  useEffect(() => {
    onChangeAnyRange();
    // eslint-disable-next-line
  }, [transferRangeValue, storageRangeValue, radioChangeCounter]);

  return (
    <div className="mb-6">
      <BarChart width={400} height={400} data={graphic}>
        <XAxis dataKey="price" />
        <Bar dataKey="price">
          {graphic.map((entry, index) => (
            <Cell
              onClick={() => handleClick(entry.provider)}
              cursor="pointer"
              fill={entry.provider === activeCompany ? "#82ca9d" : "#8884d8"}
              key={`cell-${index}`}
            />
          ))}
        </Bar>
      </BarChart>
      <div className="flex w-full justify-between">
        {graphic.map((entry) => (
          <div key={entry.provider} className="w-[25%] text-center m-1 text-xs">
            <img
              className="w-[20px] h-[20px] mx-auto mb-1"
              src={entry.icon}
              alt={entry.provider}
            ></img>
            <span>{entry.provider}</span>
            <p className="mt-1">
              {entry.isOptions &&
                entry.options?.map((opt, index) => (
                  <label className="text-xs" key={index}>
                    <input
                      type="checkbox"
                      checked={opt.checked}
                      onChange={() => radioClickHandler(entry)}
                    />
                    <span
                      style={{
                        fontSize: "10px",
                        marginLeft: "2px",
                        marginRight: "2px",
                      }}
                    >
                      {opt.provider}
                    </span>
                  </label>
                ))}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
