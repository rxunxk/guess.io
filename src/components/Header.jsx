/* eslint-disable react/prop-types */
const Header = ({room}) => {
  return (
    <div className='absolute p-2 w-full h-12 max-w-[1300px] bg-black text-white text-lg font-bold flex justify-between items-center'>
      Guess.io
      <div className='text-sm font-light p-1 px-2 bg-neutral-800 rounded-md'>
        Room : {room}
      </div>
    </div>
  )
}

export default Header