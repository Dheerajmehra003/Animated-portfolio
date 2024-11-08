import React from 'react'
import { IoPhonePortraitOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";


const Contact = () => {
    const arr = [
        {
            icon:  <IoPhonePortraitOutline />,
            info: '8295920415',
        },
        {
            icon: <CiMail />,
            info: 'dheerajsinghmehra0405@gamil.com',
        },
        {
            icon:  <CiLocationOn />,
            info: 'Panchkula, Chandigarh',
        },
    ]
  return (
    <div className='mt-20'>
        <div className='flex justify-center items-center gap-[30vh]'>
            <div>
                <form className='flex flex-col gap-7'>
                    <input className='p-1 w-[70vh] rounded-md' type="text" name='name' placeholder='Your name...'  />
                    <input className='p-1 w-[70vh] rounded-md' type="text" name='email' placeholder='Email Address...'  />
                     <textarea className='p-1 w-[70vh] rounded-md' name="message" placeholder='Enter your message' rows={4}/>
                     <button className='border-2 border-white'>Send</button>
                </form>
            </div>
            <div className='flex flex-col gap-7'>
            {
                arr.map((item, index)=>{
                    return(
                        <div key={index} className='flex gap-3 text-xl  items-center p-2'>
                          {item.icon}
                          <span>{item.info}</span>
                        </div>
                    )
                })
            }
            <button className='border-2 border-white rounded-md w-fit p-2'> Download Resume</button>
            </div>      
        </div>
    </div>
  )
}

export default Contact