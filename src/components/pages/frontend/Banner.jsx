import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Header from './Header';
import { ChevronLeft, ChevronRight } from "lucide-react";


const Banner = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button
      className='absolute top-1/2 -translate-y-1/2 right-0 z-50'
        onClick={onClick}
      ><ChevronRight stroke={"#111"} size={30}/>
      </button>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button
        className='absolute top-1/2 -translate-y-1/2  left-0  z-50'
         onClick={onClick}
       ><ChevronLeft stroke={"#111"}size={30}/>
       </button>
    );
  }
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500 ,
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow/>,
   
  };


  return (
    <Slider {...settings} className="relative">
    <section className="bg-[url('./public/img/banner.jpg')] bg-cover bg-no-repeat bg-[right_top_-50px] min-h-screen relative ">
    <div className="container">
   
      <div className="absolute  top-[14vw] left-1/4 -translate-x-1/2 text-center uppercase translate-y-28 ">
        <h1 className="text-black mb-1 text-[clamp(50px,_6vw,_75px)]">
          BlACK COAT Y3
        </h1>
        <p className="text-white flex  font-bold text-[clamp(18px,_6vw,_20px)]">
          IN STORES NOW
        </p>
        <button className='btn  self-start mt-5  px-5 pt-2 pb-2'>SHOPNOW</button>
      </div>
    </div>
  </section>

  <section className="bg-[url('./public/img/banner.jpg')] bg-cover bg-no-repeat bg-[right_top_-50px] min-h-screen relative ">
    <div className="container">
      <div className="absolute  top-[14vw] left-1/4 -translate-x-1/2 text-center uppercase translate-y-28 ">
        <h1 className="text-black mb-1 text-[clamp(50px,_6vw,_75px)]">
          BlACK COAT Y3
        </h1>
        <p className="text-white flex  font-bold text-[clamp(18px,_6vw,_20px)]">
          IN STORES NOW
        </p>
        <button className='btn  self-start mt-5  px-5 pt-2 pb-2'>SHOPNOW</button>
      </div>
    </div>
  </section>

  <section className="bg-[url('./public/img/banner.jpg')] bg-cover bg-no-repeat bg-[right_top_-50px] min-h-screen relative ">
    <div className="container">
      <div className="absolute  top-[14vw] left-1/4 -translate-x-1/2 text-center uppercase translate-y-28 ">
        <h1 className="text-black mb-1 text-[clamp(50px,_6vw,_75px)]">
          BlACK COAT Y3
        </h1>
        <p className="text-white flex  font-bold text-[clamp(18px,_6vw,_20px)]">
          IN STORES NOW
        </p>
        <button className='btn  self-start mt-5  px-5 pt-2 pb-2'>SHOPNOW</button>
      </div>
    </div>
  </section>

  </Slider>
  )
}

export default Banner