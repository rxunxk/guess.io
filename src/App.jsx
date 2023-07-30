import "./App.css";
import Header from "./components/Header"
import { Route, Routes } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import JoinRoom from "./components/JoinRoom";
import { useStore } from './store/store'

function App() {
  const {room} = useStore()

 return (

    <div className="w-screen h-screen flex justify-center">

      <div className="w-full h-screen max-h-[200px] max-w-[1300px]  ">

        <Header room = {room}/>

        <Routes>
          
              <Route path="/" element={<JoinRoom/>}></Route>
              <Route path="/canvas" element={<MainContainer/>}></Route>
                        
        </Routes>  
     
      </div>

  </div>
  
   );
}

export default App;
