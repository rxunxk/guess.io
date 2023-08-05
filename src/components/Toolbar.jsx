import { useToolbar } from "../store/store";
import { colors, colors2 } from "../utilities/util";
import { LuEraser } from "react-icons/lu";
import { AiOutlineClear } from "react-icons/ai";
import PropTypes from "prop-types";

const Toolbar = ({ clearCanvas }) => {
  const { strokeColor, setStrokeColor, setStrokeWidth, strokeWidth } =
    useToolbar();

  const setColor = (e) => {
    setStrokeColor(e.target.classList[3].substring(4, 11));
  };

  const setPencilWidth = (e) => {
    setStrokeWidth(e.target.value);
  };

  return (
    <>
      <div className="flex flex-col mx-4 my-2">
        <div className="flex justify-between ">
          {colors.map((color, index) => {
            return (
              <div
                key={index}
                className={`h-6 w-6 rounded-md bg-[${color}]`}
                style={{ backgroundColor: color }}
                onClick={setColor}
              ></div>
            );
          })}
        </div>
        <div className="flex justify-between mt-2">
          {colors2.map((color, index) => {
            return (
              <div
                key={index}
                className={`h-6 w-6 rounded-md bg-[${color}]`}
                style={{ backgroundColor: color }}
                onClick={setColor}
              ></div>
            );
          })}
        </div>
        <div className="flex flex-row my-2 gap-2">
          <div className="flex-shrink-0">Stroke Width</div>
          <input
            id="slider"
            type="range"
            min="1"
            max="20"
            step={1}
            value={strokeWidth}
            onInput={setPencilWidth}
            className="w-full"
          />
        </div>
        <div className="flex flex-row gap-1">
          <button
            className="rounded-md bg-black text-white px-2 py-2 active:translate-y-[2px]"
            onClick={() => {
              setStrokeColor("#ffffff");
            }}
          >
            <LuEraser />
          </button>
          <input
            type="color"
            value={strokeColor}
            onChange={(e) => {
              setStrokeColor(e.target.value);
            }}
          />
          <button
            className="rounded-md bg-black text-white px-2 py-2 active:translate-y-[2px]"
            onClick={() => {
              clearCanvas();
            }}
          >
            <AiOutlineClear />
          </button>
        </div>
      </div>
    </>
  );
};

Toolbar.propTypes = {
  clearCanvas: PropTypes.any,
};

export default Toolbar;
