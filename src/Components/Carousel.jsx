import React from 'react'
import image from '../assets/forever.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import forever01 from '../assets/forever-01.png'
import forever02 from '../assets/forever-02.png'
import forever03 from '../assets/forever-03.png'
import forever04 from '../assets/forever-04.png'
import forever05 from '../assets/forever-05.png'

const Carousel = (props) => {
    var settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
      const arr = [
        {
            photo:props.image,
        },
        {
            photo:props.image01,
        },
        {
            photo:props.image02,
        },
        {
            photo:props.image03,
        },
        {
            photo:props.image04,
        },
        {
            photo:props.image05,
        },
      ]
  return (
    <div className=' w-3/4 m-auto'>
    <Slider  {...settings}>
        { arr.map((item, index)=>{
            return(
                <div key={index}>
                   <img src={item.photo} alt="" />
                </div>
            )
        })}
    </Slider>

    </div>
  )
}

export default Carousel