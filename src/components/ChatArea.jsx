import { useState } from "react";
import {socket} from '../api/socketInstance'
import { useStore } from "../store/store";
import { sendMessage } from "../api/socketFunctions";
import { useEffect } from "react";
const ChatArea = () => {

  const [messages,setMessages] = useState([])
  const [msg,setMsg] = useState('')
  const {user} = useStore()

  const handleMessage = (msg,user) =>{
    setMessages((messages) => {return [...messages,{msg,user}]})
    sendMessage(msg,user)
    setMsg('')
  }

  useEffect(()=>{
    
    socket.on('receive-msg',(data)=>{
      console.log(data)
      setMessages((messages) => {return [...messages,JSON.parse(data)]})
    })

    socket.on('disconnect',()=>{
      console.log('disss')
    })

  },[socket])


  return (

    <div className="w-1/3 p-2 rounded-md flex flex-col bg-neutral-200 max-sm:w-full max-sm:h-full">
      {/* messages */}
      <div className="w-full flex-grow p-2 mb-2 rounded-md bg-white overflow-scroll">
        {
          messages.map((data,index)=>{
            console.log(msg.user)
            return <p key={index} className="p-2 bg-neutral-100 mb-2">
                      <div className="font-semibold">{data.user.username}</div>
                      {data.msg}
                   
                   </p> 
          })
        }
      </div>
      {/*  */}
      <div className="w-full rounded-md flex">
        <input value={msg} onChange={(e)=>{setMsg(e.target.value)}} type="text" className="rounded-md p-1 flex-grow"  />
        <button onClick={()=>handleMessage(msg,user)} className="rounded-md  p-1 text-sm bg-blue-500 text-white ml-2 px-2">Send</button>
      </div>
      

    </div>
  );
};

export default ChatArea;
