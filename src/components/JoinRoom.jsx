import { useStore } from '../store/store'
import { useNavigate } from 'react-router-dom'
import { joinRoom } from '../api/socketFunctions'
const JoinRoom = () => {

  const {user,setUser} = useStore()

  const handleChange = (e) => {
    setUser({...user,[e.target.name]:e.target.value})
  }
  const navigate = useNavigate()
  return (
    <div className='pt-16 h-screen w-full px-4 flex justify-center items-center'>
        <div className='w-[300px] bg-neutral-100 border-2 p-4 rounded-lg '>
            
                <div className='w-full mb-2'>
                
                    {user.room || "Room Name"}
                
                </div>
            
            <div className='flex  flex-col'>
                <input 
                name="username"
                placeholder='username'
                className='mb-4 border-2 rounded-md p-2' 
                onChange={handleChange}
                type="text" />
                <input 
                name="room"
                placeholder='room'
                className='mb-4 border-2 rounded-md p-2' 
                onChange={handleChange}
                type="text" />
                
                <button 
                    onClick={()=>{
                        joinRoom(user)
                        navigate('/canvas')
                    }}
                    className='w-full border-2 bg-blue-500  text-white rounded-md p-2' >
                        Join room
                    </button>
            
            </div>

        </div>

    </div>
  )
}

export default JoinRoom