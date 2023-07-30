import { useEffect } from 'react'

import {useStore} from '../store/store'

const UserList = () => {

  const {usersArray} = useStore()
  
  useEffect(()=>{
    
    console.log(usersArray)

  },[])



  return (
    <div className='w-1/3 bg-red-400 max-sm:w-full max-md:w-16 max-sm:h-[180px] max-sm:mb-4  '>
      {
 

        usersArray?.map((user,index)=>{
          return <div key={index}>{user?.username}</div>
        })

      }

      {
               console.log(usersArray)
      }
    </div>
  )
}

export default UserList