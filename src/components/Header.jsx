/* eslint-disable react/prop-types */
const Header = ({user}) => {
  return (
    <div className='absolute p-2 w-full h-12 max-w-[1300px] bg-black text-white text-lg font-bold flex justify-between items-center'>
      Guess.io

      <div className='text-sm flex  font-light '>
        <p className="mr-4 p-1 px-2 bg-neutral-800 rounded-md"> Username : {user?.username} </p>
        <p className="p-1 px-2 bg-neutral-800 rounded-md"> Room : {user?.room} </p>
      </div>
    </div>
  )
}

export default Header