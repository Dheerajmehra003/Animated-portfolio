import React, { useRef, useState } from 'react'
import Page1Bottom from '../Components/Page1Bottom'
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import Lottie from "lottie-react"

const Page01 = () => {

    const tiltRef = useRef(null)
    const [xval, setXval] = useState(0)
    const [yval, setYval] = useState(0)

    const mouseMoving = (e) => {
        setXval((e.clientX - tiltRef.current.getBoundingClientRect().x - tiltRef.current.getBoundingClientRect().width/2)/10)
        setYval(-(e.clientY - tiltRef.current.getBoundingClientRect().y - tiltRef.current.getBoundingClientRect().height/2)/5)
        tiltRef.current.style.transform = `rotateX(${yval}deg) rotateY(${xval}deg)`
    }

    useGSAP(function() {
      gsap.to(tiltRef.current, {
        transform: `rotateX(${yval}deg) rotateY(${xval}deg)`,
        duration: 3,
        ease: 'elastic.out(1,0,0)'
      }
      )
    },[xval, yval])

  return (
    <div  className='h-screen lg:p-7   bg-black'>
        <div  id='hero-section'  className='lg:h-full relative  lg:pt-40 pt-20 lg:pl-32 pl-16 lg:w-full rounded-3xl bg-black'>
         <div id='page1-in' onMouseMove={(e)=>{mouseMoving(e)}} className='relative lg:max-w-fit'>
          <div ref={tiltRef} id='titltDiv' className='text-white flex font-semibold flex-col uppercase'>
              <h1 className='lg:text-3xl text-md'>
              I am <span className='lg:text-4xl text-2xl text-gray-600'>frontend</span>
              </h1>  
              <h1 className='lg:text-6xl text-3xl'>WEBDEVELOPER</h1>
              <h1 className='lg:text-3xl text-md'>
                fresher
              </h1>
          </div>
         </div>
         <Page1Bottom />
        </div> 
    </div>
  )
}

export default Page01