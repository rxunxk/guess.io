import "./App.css";
import { useRef, useEffect, useState } from "react";
import Header from "./components/Header"
import { Route, Routes } from "react-router-dom";
import MainContainer from "./components/MainContainer";
function App() {

 return (
  <div className="w-full bg-white h-screen flex justify-center">

      <div className="w-full h-full max-h-[200px] max-w-[1300px]  ">

        <Header/>


        <Routes>

          
              <Route path="/canvas" element={<MainContainer/>}></Route>
             
            
        
        </Routes>  
     
      </div>

  </div>

  
   );
}

export default App;
