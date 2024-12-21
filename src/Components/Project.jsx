import React from 'react'
import project1 from '../assets/forever.png'
import project2 from '../assets/Shine cake.png'
import project3 from '../assets/rentalBro.png'
import project4 from '../assets/animated.png'
import project5 from '../assets/dashboard01.png'
import project6 from '../assets/dashboard02.png'
import project7 from '../assets/BasicProject.png'
import project8 from '../assets/ytclone.png'
import project9 from '../assets/animated.png'
import { Link } from 'react-router-dom'
import data from '../Data/Data.js'

const Project = () => {
    // const arr = [
    //     {
    //         title: 'Forever',
    //         image: project1,
    //     },
    //     {
    //         title: 'shine cake',
    //         image: project2,
    //     },
    //     {
    //         title: 'Rental bro',
    //         image: project3,
    //     },
    //     {
    //         title: 'Animated website',
    //         image: project4,
    //     },
    //     {
    //         title: 'Dashboard',
    //         image: project5,
    //     },
    //     {
    //         title: 'Dashboard-02',
    //         image: project6,
    //     },
    //     {
    //         title: 'Basic Project',
    //         image: project7,
    //     },
    //     {
    //         title: 'Youtube clone',
    //         image: project8,
    //     },
    //     {
    //         title: 'Snapgram',
    //         image: project9,
    //     },
    // ]
  return (
    <div className='p-5 flex flex-wrap gap-7 mt-10 '>
        {
            data.map((item,index)=>{
                return(
                    <div key={index} className='bg-gray-500 h-[35vh] rounded-md mt-5 w-[60vh]'>
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