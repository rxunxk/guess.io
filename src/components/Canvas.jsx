import React from 'react'
import { useRef, useEffect, useState } from "react";
import { socket } from '../api/socketInstance';
import { broadcastPoint , StartBroadcastPoint ,EndBroadcastPoint } from '../api/socketFunctions';
const Canvas = () => {

    const STROKECOLOR = "black";
    const STROKEWIDTH = 2;
    const LINECAP = "round";
    
    const canvasRef = useRef(null);
    const contextRef = useRef(null);

    const [isDrawing, setIsDrawing] = useState(false);


    function  getMousePos(evt) {
        var rect = canvasRef.current.getBoundingClientRect() // abs. size of element
        var scaleX = canvasRef.current.width / rect.width   // relationship bitmap vs. element for x
        var scaleY = canvasRef.current.height / rect.height;  // relationship bitmap vs. element for y
      
        return {
          x: (evt.clientX - rect.left) * scaleX,   // scale mouse coordinates after they have
          y: (evt.clientY - rect.top) * scaleY     // been adjusted to be relative to element
        }
      }
      


    // canvas init
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

      useEffect(()=>{
        socket.on("points",(data)=>{
            contextRef.current.lineTo(data.x, data.y);
            contextRef.current.stroke();
        })

        socket.on("startpoints",(data)=>{
            console.log(data)
            contextRef.current.beginPath();
            contextRef.current.moveTo(data.x, data.y);
            contextRef.current.stroke();
        })

        socket.on("endpoints",()=>{
            contextRef.current.closePath();

        })
    
      },[socket])

      const startDrawing = (e) => {


        //creating a path on canvas
        contextRef.current.beginPath();

        //move to mouse click position
        StartBroadcastPoint(getMousePos(e).x, getMousePos(e).y)
        contextRef.current.moveTo(getMousePos(e).x, getMousePos(e).y);

        setIsDrawing(true);

      };
  
      const draw = (e) => {

        if (!isDrawing) {
          return;
        }
        
        //getting the current mouse click position


        broadcastPoint(getMousePos(e).x, getMousePos(e).y)
        contextRef.current.lineTo(getMousePos(e).x, getMousePos(e).y);
        contextRef.current.stroke();

      };

      const finishDrawing = () => {
        EndBroadcastPoint()
        contextRef.current.closePath();
        setIsDrawing(false);


      };



    return (
    
    <div>

      <canvas
        className='w-full max-w-[400px]  h-[400px]'
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={draw}
        ref={canvasRef}
      >

      </canvas>

    </div>
  
    )
}

export default Canvas