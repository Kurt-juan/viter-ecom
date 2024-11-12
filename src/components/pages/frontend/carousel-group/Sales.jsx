import { imgPath } from '@/components/helpers/functions-general';
import { ShoppingCartIcon } from 'lucide-react';
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
const Sales = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500 ,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
      
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className='pt-10'>
    <Slider {...settings}>
    <div className='relative group '>
            <span className='grid place-content-center w-full bg-gray-200 bg-opacity-20 h-[400px] scale-0 absolute top-0 left-0 group-hover:scale-100 transition-all origin-center duration-1000'>
            <button><ShoppingCartIcon className='size-40 '/></button>
            </span>
                <img
                src={`${imgPath}/item8.jpg`}
                alt=""
                className=" w-full h-[400px] object-cover px-[2.5rem] mx-auto "
                />
                <div className='text-center'>
                <h1>Plain Black Hoodie</h1>
                <h2>150$</h2>
                </div>  
            
        </div>

        <div className='relative group '>
            <span className='grid place-content-center w-full  bg-gray-300 bg-opacity-20 h-[400px] scale-0 absolute top-0 left-0 group-hover:scale-100 transition-all origin-center duration-1000'>
            <button><ShoppingCartIcon className='size-40 '/></button>
            </span>
                <img
                src={`${imgPath}/item9.jpg`}
                alt=""
                className=" w-full h-[400px] object-cover px-[2.5rem] mx-auto"
                />
                 <div className='text-center'>
                <h1>Gray Sweatpants</h1>
                <h2>100$</h2>
                </div>
        </div>

        <div className='relative group '>
            <span className='grid place-content-center w-full  bg-gray-200 bg-opacity-20 h-[400px] scale-0 absolute top-0 left-0 group-hover:scale-100 transition-all origin-center duration-1000'>
            <button><ShoppingCartIcon className='size-40 '/></button>
            </span>
                <img
                src={`${imgPath}/item3.jpg`}
                alt=""
                className=" w-full h-[400px] object-cover px-[2.5rem] mx-auto"
                />
                 <div className='text-center'>
                <h1>Mac Air Headset</h1>
                <h2>450$</h2>
                </div>
        </div>

        <div className='relative group '>
            <span className='grid place-content-center w-full  bg-gray-200 bg-opacity-20 h-[400px] scale-0 absolute top-0 left-0 group-hover:scale-100 transition-all origin-center duration-1000'>
            <button><ShoppingCartIcon className='size-40 '/></button>
            </span>
                <img
                src={`${imgPath}/item4.jpg`}
                alt=""
                className=" w-full h-[400px] object-cover px-[2.5rem] mx-auto"
                />
                 <div className='text-center'>
                <h1>Oakley Shades</h1>
                <h2>175$</h2>
                </div>
        </div>

        <div className='relative group '>
            <span className='grid place-content-center w-full  bg-gray-200 bg-opacity-20 h-[400px] scale-0 absolute top-0 left-0 group-hover:scale-100 transition-all origin-center duration-1000'>
            <button><ShoppingCartIcon className='size-40 '/></button>
            </span>
                <img
                src={`${imgPath}/item7.jpg`}
                alt=""
                className=" w-full h-[400px] object-cover px-[2.5rem] mx-auto"
                />
                 <div className='text-center'>
                <h1>Oakley Bag</h1>
                <h2>150$</h2>
                </div>
        </div>

        <div className='relative group '>
            <span className='grid place-content-center w-full  bg-gray-200 bg-opacity-20 h-[400px] scale-0 absolute top-0 left-0 group-hover:scale-100 transition-all origin-center duration-1000'>
            <button><ShoppingCartIcon className='size-40 '/></button>
            </span>
                <img
                src={`${imgPath}/item6.jpg`}
                alt=""
                className=" grid place-content-center h-[400px] object-cover px-[2.5rem] mx-auto"
                />
                 <div className='text-center'>
                <h1>Stussy Bracelet</h1>
                <h2>150$</h2>
                </div>
        </div>

  </Slider>
</div>
  )
}

export default Sales