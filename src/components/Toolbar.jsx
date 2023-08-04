import { useToolbar } from "../store/store";

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
      <div className="flex flex-col m-4">
        <div className="flex flex-row justify-between gap-4">
          <div
            className="h-12 w-12 rounded-md bg-red-600"
            onClick={setColor}
          ></div>
          <div
            className="h-12 w-12 rounded-md bg-blue-600"
            onClick={setColor}
          ></div>
          <div
            className="h-12 w-12 rounded-md bg-yellow-500"
            onClick={setColor}
          ></div>
          <div
            className="h-12 w-12 rounded-md bg-black"
            onClick={setColor}
          ></div>
          <div
            className="h-12 w-12 rounded-md bg-green-600"
            onClick={setColor}
          ></div>
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
            className="rounded-md bg-blue-400 text-white px-4 py-2 active:translate-y-px"
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
        </div>
      </div>
    </>
  );
};

export default Toolbar;
