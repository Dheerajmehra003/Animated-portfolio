import React from 'react'
import Project from '../Components/Project'

const Page03 = () => {
    
  return (
    <div className='bg-black  text-white lg:p-10 p-8 '>
      <div> 
        <div className='flex flex-col justify-center items-center'>
         <h1 className='lg:text-6xl text-3xl uppercase font-bold'>Projects</h1>
         <span className='lg:text-3xl text-lg uppercase text-gray-500'>Here, some of my latest Projects</span>
        </div>
          <Project />
        </div>
    </div>
  )
}

export default Page03