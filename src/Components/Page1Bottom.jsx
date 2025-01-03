import React from 'react'
import react from '../assets/react.png'
import { FaReact } from "react-icons/fa";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Page1Bottom = () => {

  useGSAP(function() {
    gsap.to('#banner',{
      rotate:360,
      duration:4,
      repeat:-1,
      ease:'linear'
    })
  })
  return (
    <div className='max-w-fit'>
    <div className='text-white lg:mt-40 mt-24 pb-10 max-w-fit'>
        <h1 className='lg:text-2xl uppercase font-semibold '>Skill tech</h1>
        <span className='lg:text-xl text-gray-500'>React js</span>
        <span className='ml-5 lg:text-xl text-gray-500'>Tailwlind</span>
        <span className='ml-5 lg:text-xl text-gray-500'>Material Ui</span>
        <span className='ml-5 lg:text-xl text-gray-500'>Figma</span>
        <span className='ml-5 lg:text-xl text-gray-500'>Framer Motion</span>
    </div>
    <div>
    <FaReact id='banner' className=' fixed lg:right-24 right-10 lg:bottom-20 bottom-10 z-10 size-20 text-[#00D8FF]' />
    </div>

    </div>
    
  )
}

export default Page1Bottom