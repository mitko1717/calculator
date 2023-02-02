import { useEffect } from "react";
import { BarChart, Bar, Cell, XAxis } from "recharts";
import { useActions } from "../hooks/actions";
import { useAppSelector } from "../hooks/redux";
import { IObject } from "../models/interfaces";

export default function Chart() {
  const { graphic, activeCompany } = useAppSelector((state) => state.graphic);
  const { setActiveCompany, changeRadioInput } = useActions();

  useEffect(() => {
    setActiveCompany(graphic[0].provider);
  }, [graphic]);

  const handleClick = (provider: string) => {
    setActiveCompany(provider);
  };

  const radioClickHandler = (object: IObject) => {
    changeRadioInput(object)
  }

  return (
    <div>
      <BarChart width={400} height={200} data={graphic}>
        <XAxis dataKey="price" />
        <Bar dataKey="minPayment">
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
            <img className="w-[20px] h-[20px] mx-auto" src={entry.icon}></img>
            <span>{entry.provider}</span>
            <p>
              {entry.isOptions &&
                entry.options?.map((opt, index) => (
                  <label className="text-xs" key={index}>
                    <input type="checkbox" checked={opt.checked} onChange={() => radioClickHandler(entry)}/>
                    <span style={{ fontSize: "10px" }}>{opt.provider}</span>
                  </label>
                ))}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
