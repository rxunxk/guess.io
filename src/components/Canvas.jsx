import { useRef, useEffect, useState } from "react";
import { socket } from "../api/socketInstance";
import {
  broadcastPoint,
  StartBroadcastPoint,
  EndBroadcastPoint,
} from "../api/socketFunctions";
import { useToolbar } from "../store/store";
import Toolbar from "../components/Toolbar";
const STROKEWIDTH = 2;
const LINECAP = "round";

const Canvas = () => {
  const [isDrawing, setIsDrawing] = useState(false);
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  const { strokeColor, strokeWidth } = useToolbar();

  function getMousePos(evt) {
    var rect = canvasRef.current.getBoundingClientRect(); // abs. size of element
    var scaleX = canvasRef.current.width / rect.width; // relationship bitmap vs. element for x
    var scaleY = canvasRef.current.height / rect.height; // relationship bitmap vs. element for y

    return {
      x: (evt.clientX - rect.left) * scaleX, // scale mouse coordinates after they have
      y: (evt.clientY - rect.top) * scaleY, // been adjusted to be relative to element
    };
  }

  // canvas init
  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 500;
    canvas.height = 500;

    const context = canvas.getContext("2d");
    context.linecap = LINECAP;
    context.strokeStyle = strokeColor;
    context.lineWidth = STROKEWIDTH;
    contextRef.current = context;
  }, []);

  useEffect(() => {
    socket.on("points", (data) => {
      contextRef.current.lineTo(data.x, data.y);
      contextRef.current.stroke();
    });

    socket.on("startpoints", (data) => {
      console.log(data);
      contextRef.current.beginPath();
      contextRef.current.moveTo(data.x, data.y);
      contextRef.current.stroke();
    });

    socket.on("endpoints", () => {
      contextRef.current.closePath();
    });
  }, [socket]);

  const startDrawing = (e) => {
    //creating a path on canvas
    contextRef.current.beginPath();

    //move to mouse click position
    StartBroadcastPoint(getMousePos(e).x, getMousePos(e).y);
    contextRef.current.moveTo(getMousePos(e).x, getMousePos(e).y);

    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) {
      return;
    }

    //getting the current mouse click position

    contextRef.current.strokeStyle = strokeColor;
    contextRef.current.lineWidth = strokeWidth;
    broadcastPoint(getMousePos(e).x, getMousePos(e).y);
    contextRef.current.lineTo(getMousePos(e).x, getMousePos(e).y);
    contextRef.current.stroke();
  };

  const finishDrawing = () => {
    EndBroadcastPoint();
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    contextRef.current.clearRect(
      0,
      0,
      contextRef.current.canvas.width,
      contextRef.current.canvas.height
    );
  };

  return (
    <div className="flex-col w-3/5 max-sm:w-full max-sm:m-0 max-sm:mb-4 mx-4 bg-neutral-200 flex">
      <canvas
        className="w-full h-[400px] bg-white rounded-md border-2 border-neutral-300"
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={draw}
        ref={canvasRef}
      ></canvas>
      <Toolbar clearCanvas={clearCanvas} />
    </div>
  );
};

export default Canvas;
