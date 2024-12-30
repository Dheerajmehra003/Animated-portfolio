import React, { useRef } from 'react'
import { IoPhonePortraitOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import emailjs from '@emailjs/browser'

const Contact = () => {
    const arr = [
        {
            icon:  <IoPhonePortraitOutline />,
            info: '9911820415',
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

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_b04kixh', 'template_p8pm1w6', form.current, {
            publicKey: 'Kb0Eno69QKgeUVas4',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              e.target.reset();
              alert('Email Sent')
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

  return (
    <div className='lg:mt-20 mt-10 pb-20 '>
        <div className='flex flex-wrap justify-center items-center lg:gap-[30vh] gap-10'>
            <div className='lg:pl-0'>
                <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-7'>
                    <input className='p-1 lg:w-[70vh] w-[50vh] text-black rounded-md' type="text" name='from_name' placeholder='Your name...'  />
                    <input className='p-1 lg:w-[70vh] w-[50vh] text-black rounded-md' type="text" name='from_email' placeholder='Email Address...'  />
                     <textarea className='p-1 lg:w-[70vh] w-[50vh] text-black rounded-md' name="message" placeholder='Enter your message' rows={4}/>
                     <button className='border-2 w-[50vh] lg:w-full border-white hover:bg-gray-800' type='submit' value='Send' >Send</button>
                </form>
            </div>
            <div className='flex flex-col lg:gap-7 gap-3'>
            {
                arr.map((item, index)=>{
                    return(
                        <div key={index} className='flex gap-3 lg:text-xl  items-center p-2'>
                          {item.icon}
                          <span>{item.info}</span>
                        </div>
                    )
                })
            }
            <a href='/Resume.pdf'>
            <button className=' hover:bg-gray-800 border-2 border-white rounded-md w-fit p-2'> Download Resume</button>
            </a>
            </div>      
        </div>
    </div>
  )
}

export default Contact