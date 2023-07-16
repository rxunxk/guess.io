import "./App.css";
import { useRef, useEffect, useState } from "react";
import Canvas from "./components/Canvas";
import Header from "./components/Header"
import { Route, Routes } from "react-router-dom";
function App() {

 return (

      <Routes>
        <Route path="/" element={<Header/>}></Route>
        <Route path="/canvas" element={<Canvas/>}></Route>

      </Routes>  
     


  
   );
}

export default App;
