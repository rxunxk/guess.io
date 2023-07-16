import "./App.css";
import { useRef, useEffect, useState } from "react";
import Header from "./components/Header"
import { Route, Routes } from "react-router-dom";
import MainContainer from "./components/MainContainer";
function App() {

 return (
      <div>

        <Header/>


        <Routes>

          
              <Route path="/canvas" element={<MainContainer/>}></Route>
             
            
        
        </Routes>  
     
      </div>


  
   );
}

export default App;
