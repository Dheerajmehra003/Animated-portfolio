import React from 'react'
import Project from '../Components/Project'

const Page03 = () => {
    
  return (
    <div className='bg-black  text-white p-10 '>
      <div> 
        <div className='flex flex-col justify-center items-center'>
         <h1 className='text-6xl uppercase font-bold'>Projects</h1>
         <span className='text-3xl uppercase text-gray-500'>Here, some of my latest Projects</span>
        </div>
          <Project />
        </div>
    </div>
  )
}

export default Page03