import { FC } from "react";
import { Range, getTrackBackground } from "react-range";
import { TwoThumbsProps } from "../models/interfaces";

const STEP = 1;
const MIN = 0;
const MAX = 1000;

const Basic: FC<TwoThumbsProps> = ({ rtl, rangeValue, setRangeValue }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        margin: "0 auto",
      }}
    >
      <Range
        values={rangeValue}
        step={STEP}
        min={MIN}
        max={MAX}
        rtl={rtl}
        onChange={(rangeValue) => setRangeValue(rangeValue)}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
            }}
            className="h-[48px] flex w-full mx-4 relative"
          >
            <div
              ref={props.ref}
              style={{
                background: getTrackBackground({
                  values: rangeValue,
                  colors: ["#979090", "#2153ae"],
                  min: MIN,
                  max: MAX,
                  rtl,
                }),
                alignSelf: "center",
              }}
              className="h-[5px] w-full rounded self-center"
            >
              {children}
            </div>
            <output
              className="absolute top-0 w-full flex text-center justify-between"
              id="output"
              style={{ fontSize: "12px" }}
            >
              <span>{MIN}</span>
              <span>Storage: {rangeValue[0]} GB</span>
              <span>{MAX}</span>
            </output>
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            className="h-[12px] w-[12px] rounded bg-white flex justify-center items-center"
            style={{
              ...props.style,
              boxShadow: "0px 2px 6px #AAA",
            }}
          >
            <div
              className="h-[6px] w-[3px]"
              style={{ backgroundColor: isDragged ? "#548BF4" : "#CCC" }}
            />
          </div>
        )}
      />
    </div>
  );
};

export default Basic;
