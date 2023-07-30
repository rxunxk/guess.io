import React from 'react'
import { useStore } from '../store/store'
const JoinRoom = () => {

  const {room,setRoom} = useStore()
  
  return (
    <div className='mt-16 w-full h-full px-4 bg-neutral-100 '>
        <div className='w-[300px] h-[300px] bg-blue-500 p-4 rounded '>
            {room}
            <input onChange={(e)=>{setRoom(e.target.value)}} type="text" />
            <button>Join room</button>
        </div>

    </div>
  )
}

export default JoinRoom