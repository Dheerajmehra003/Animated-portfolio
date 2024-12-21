import React, { useEffect, useState } from 'react'
import image from '../assets/forever.png'
import Contact from '../Components/Contact'
import Carousel from '../Components/Carousel'
import { useParams } from 'react-router-dom'
import data from '../Data/Data.js'

const ProjectShow = () => {
   const {id} = useParams() 
   const [project, setProject] = useState([])
   
   const applyfilter = () => {
    let projectcopy = data.slice();
    if(id.length >0){
      projectcopy = projectcopy.filter((item)=>
        id.includes(item.id)
      )
    }
    setProject(projectcopy)
   }

   useEffect(()=>{
    applyfilter()
   },[])


  return (
    <div className=' text-white bg-black'>
      {
        project.map((item, index)=>{
          return (
            <>
            <div key={index} className=' flex flex-col items-center pt-10'>
            <Carousel image={item.image} image01={item.image01} image02={item.image02} image03={item.image03} image04={item.image04} image05={item.image05}/>
            <p key={index} className='text-3xl font-semibold mt-2'>{item.title}</p>
            </div>
            <div className='mx-16 mt-10 '>
            <p className='w-auto'>{item.description}</p>
            <button className='text-white border-2 mt-5 border-white px-2 py-1 rounded-sm hover:bg-gray-800'>View Site</button>
            <button className='text-white border-2 mt-5 border-white px-2 py-1 rounded-sm hover:bg-gray-800 ml-5'>View Code</button>
            </div>
            </>
          )
        })
      }
    <div className='bg-black  h-screen text-white p-10 mt-10  '>
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