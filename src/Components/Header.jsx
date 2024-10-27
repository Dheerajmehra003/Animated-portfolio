import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";

export const Header = () => {
  return (
    <>
    
    <div className='fixed top-20 right-10 max-w-fit flex items-center justify-end w-full z-10 px-10'>
        <button className='bg-black border-2 border-[#00D8FF] text-xl hover:bg-gray-600 font-semibold text-white px-4 py-1 rounded-full '>Hire Me</button>
        <BsThreeDotsVertical className='text-white size-5' />
    </div>
    </>
  )
}
