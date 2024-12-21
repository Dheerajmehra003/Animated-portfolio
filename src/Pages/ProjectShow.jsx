import React from 'react'
import image from '../assets/forever.png'
import Contact from '../Components/Contact'

const ProjectShow = () => {
  return (
    <div className=' text-white bg-black'>
    <div className=' flex flex-col items-center pt-10'>
      <img className='h-1/2 w-1/2' src={image} alt="" />
      <p className='text-3xl font-semibold mt-2'>Frontend of Ecommerce site - Forever</p>
    </div>
    <div className='mx-16 mt-10 '>
      <p className='w-auto '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, obcaecati corporis
         a ab quod dicta animi delectus velit recusandae laboriosam consequuntur tempore
          optio iste eos mollitia nesciunt qui molestias quo inventore earum sequi ducimus 
          temporibus? Enim, necessitatibus perferendis illo, dolorem aliquid eveniet similique
           nobis cumque qui sequi repellat non esse. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Delectus ut laudantium ipsa, neque quis voluptas, aliquid 
            architecto aut officiis voluptates amet nemo soluta incidunt rem omnis facilis
             quo excepturi? Ad, accusantium laborum. Laboriosam, mollitia ea repellat consequatur
              blanditiis neque. Ut fugiat voluptatum non vitae eaque soluta minus a optio. Obcaecati.</p>
       <button className='text-white border-2 mt-5 border-white px-2 py-1 rounded-sm hover:bg-gray-800'>View Site</button>
       <button className='text-white border-2 mt-5 border-white px-2 py-1 rounded-sm hover:bg-gray-800 ml-5'>View Code</button>
    </div>
    <div className='bg-black  h-screen text-white p-10  '>
      <div> 
        <div className='flex flex-col justify-center items-center mt-10'>
         <h1 className='text-6xl uppercase text-white font-bold'>Hire Me</h1>
         <span className='text-3xl uppercase text-gray-500'>Here, some of my information to connect</span>
        </div>
         <Contact /> 
        </div>
    </div>
    </div>
  )
}

export default ProjectShow