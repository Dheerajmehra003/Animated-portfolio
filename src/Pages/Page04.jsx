import React from 'react'
import Contact from '../Components/Contact'

const Page04 = () => {
  return (
       <div className='bg-black  h-screen text-white p-10  '>
      <div> 
        <div className='flex flex-col justify-center items-center mt-10'>
         <h1 className='text-6xl uppercase font-bold'>Contact Me</h1>
         <span className='text-3xl uppercase text-gray-500'>Here, some of my information to contact</span>
        </div>
         <Contact />
        </div>
    </div>
  )
}

export default Page04