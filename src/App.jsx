import "./App.css";
import { useRef, useEffect, useState } from "react";

const STROKECOLOR = "black";
const STROKEWIDTH = 5;
const LINECAP = "round";

function App() {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 500;
    canvas.height = 500;
    canvas.style.border = "1px solid red";

    const context = canvas.getContext("2d");
    context.linecap = LINECAP;
    context.strokeStyle = STROKECOLOR;
    context.lineWidth = STROKEWIDTH;
    contextRef.current = context;
  }, []);

  const startDrawing = (e) => {
    //getting the current mouse click position
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;
    //creating a path on canvas
    contextRef.current.beginPath();
    //move to mouse click position
    contextRef.current.moveTo(x, y);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = (e) => {
    if (!isDrawing) {
      return;
    }
    //getting the current mouse click position
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    console.log(x, y);
    contextRef.current.lineTo(x, y);
    contextRef.current.stroke();
  };

  return (
    <>
      <h1>Guess.io</h1>
      <canvas
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={draw}
        ref={canvasRef}
      ></canvas>
    </>
  );
}

export default App;
