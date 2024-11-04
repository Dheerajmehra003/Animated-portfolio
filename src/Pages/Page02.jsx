import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'

const Page02 = () => {
 
    gsap.registerPlugin(ScrollTrigger)
    

    useGSAP(function(){
        gsap.from('.rotateText',{
          transform: 'rotateX(90deg)',
          opacity:0,
          duration:2,
          stagger:1,
          scrollTrigger:{
            trigger:'.rotateText',
             start:'top 100%',
             end:'top -110%',
             scrub:2
          }
        })
    })
  return (
    <div id='section02' className='bg-black text-center text-white p-10 '>
        <div className='rotateText'>
            <h1 className='text-[18vw] uppercase font-bold tracking-tighter leading-[19vw] '>Fresher</h1>
        </div>
        <div className='rotateText'>
            <h1 className='text-[18vw] uppercase font-bold tracking-tighter leading-[19vw]'>Eager</h1>
        </div>
        <div className='rotateText'>
            <h1 className='text-[18vw] uppercase font-bold tracking-tighter leading-[19vw]'>To start</h1>
        </div>
        <div className='rotateText'>
            <h1 className='text-[18vw] uppercase font-bold tracking-tighter leading-[19vw]'>his</h1>
        </div>
        <div className='rotateText'>
            <h1 className='text-[18vw] uppercase font-bold tracking-tighter leading-[19vw]'>Career</h1>
        </div>
    </div>
  )
}

export default Page02