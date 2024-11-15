import { imgPath } from '@/components/helpers/functions-general';
import { Play, PlayCircle, ShoppingCartIcon } from 'lucide-react';
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
const Popular = ({result, isLoading}) => {

   
  const getAllPopular = result?.data.length > 0 && result?.data.filter((item) => item.items_category === "Popular" )


    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
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
        {!isLoading && getAllPopular.map((item, key)=>(
        <div className='relative group ' key={key}>
            <span className='grid place-content-center w-full bg-gray-200 bg-opacity-20 h-[400px] scale-0 absolute top-0 left-0 group-hover:scale-100 transition-all origin-center duration-1000'>
            <button><ShoppingCartIcon className='size-40 '/></button>
            </span>
        
                <img
                src={`${imgPath}/${item.items_photo}`}
                alt=""
                className=" w-full h-[400px] object-cover px-[2.5rem] mx-auto "
                />
                <div className='text-center'>
                <h1>{item.items_title}</h1>
                <h2>{item.items_price}</h2>
                
                </div>  
            
        </div>
        ))}
      </Slider>
   </div>
  )
}

export default Popular