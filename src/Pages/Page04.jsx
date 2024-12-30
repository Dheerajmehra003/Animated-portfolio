import React from 'react'
import Contact from '../Components/Contact'

const Page04 = (props) => {
  return (
       <div id={props.id} className='bg-black  lg:h-screen pt-10 lg:pt-10 text-white   '>
      <div> 
        <div className='flex flex-col justify-center items-center lg:mt-10'>
         <h1 className='lg:text-6xl text-3xl uppercase font-bold'>Contact Me</h1>
         <span className='lg:text-3xl text-lg uppercase text-gray-500'>Here, some of my information to contact</span>
        </div>
         <Contact /> 
        </div>
    </div>
  )
}

export default Page04