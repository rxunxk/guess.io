import "../styles/ToolBarStyles.css";
import { useToolbar } from "../store/store";
import { Button } from "@/components/ui/button";

const Toolbar = () => {
  const { strokeColor, setStrokeColor, setStrokeWidth, strokeWidth } =
    useToolbar();

  const setColor = (e) => {
    setStrokeColor(e.target.classList[1]);
  };

  const setPencilWidth = (e) => {
    setStrokeWidth(e.target.value);
  };

  return (
    <>
      <div className="toolBar-container">
        <div className="colors-container">
          <div className="color red" onClick={setColor}></div>
          <div className="color blue" onClick={setColor}></div>
          <div className="color yellow" onClick={setColor}></div>
          <div className="color black" onClick={setColor}></div>
          <div className="color green" onClick={setColor}></div>
        </div>
        <div className="stroke-width">
          Stroke Width
          <input
            id="slider"
            type="range"
            min="1"
            max="20"
            step={1}
            value={strokeWidth}
            onInput={setPencilWidth}
          />
        </div>
        <div className="eraser">
          <button
            id="eraser"
            onClick={() => {
              setStrokeColor("#ffffff");
            }}
          >
            Eraser
          </button>
          <input
            type="color"
            className="color-picker"
            value={strokeColor}
            onChange={(e) => {
              setStrokeColor(e.target.value);
            }}
          />
          <Button>Hi !</Button>
        </div>
      </div>
    </>
  );
};

export default Toolbar;
