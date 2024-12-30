import React from 'react'
import { Link } from 'react-router-dom'
import data from '../Data/Data.js'

const Project = (props) => {
  return (
    <div className='lg:p-5 p-0  flex flex-wrap gap-7 lg:mt-10 '>
        {
            data.map((item,index)=>{
                return(
                    <div key={index} className='bg-gray-500 lg:h-[35vh] h-[25vh]   rounded-md mt-5 lg:w-[60vh]'>
                     <Link to={`/project-show/${item.id}`}>
                        <img src={item.image} className='h-[100%]' />
                     </Link>
                   </div>
                )
            })
        }
    </div>
  )
}

export default Project