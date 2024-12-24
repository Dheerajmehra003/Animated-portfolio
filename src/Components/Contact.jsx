import React, { useRef } from 'react'
import { IoPhonePortraitOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";

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
            publicKey: 'SAwfA3cczW60aTeOV5xSn',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

  return (
    <div className='mt-20'>
        <div className='flex justify-center items-center gap-[30vh]'>
            <div>
                <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-7'>
                    <input className='p-1 w-[70vh] rounded-md' type="text" name='your_name' placeholder='Your name...'  />
                    <input className='p-1 w-[70vh] rounded-md' type="text" name='your_email' placeholder='Email Address...'  />
                     <textarea className='p-1 w-[70vh] text-black rounded-md' name="message" placeholder='Enter your message' rows={4}/>
                     <button className='border-2 border-white hover:bg-gray-800'>Send</button>
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
            <a href='/Resume.pdf'>
            <button className=' hover:bg-gray-800 border-2 border-white rounded-md w-fit p-2'> Download Resume</button>
            </a>
            </div>      
        </div>
    </div>
  )
}

export default Contact