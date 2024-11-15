
import { imgPath } from "@/components/helpers/functions-general";
import React from "react";


import useQueryData from "@/components/custom-hook/useQueryData";
import Popular from "./carousel-group/Popular";
import Sales from "./carousel-group/Sales";
import Trend from "./carousel-group/Trend";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Carousel = () => {
  const [index, setIndex] = React.useState(0)
  const [currentTab, setCurrentTab] = React.useState(0)
  
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button
      className='  z-50'
        onClick={onClick}
      ><ChevronRight stroke={"#111"} size={30}/>
      </button>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button
        className='  z-50'
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

  const {
    isLoading,
    isFetching,
    error,
    data: result,
  } = useQueryData (
    `/v1/items`, // endpoint
    "get", // method
    "items",
  );

    
const sliders = [
    <Popular result={result} isLoading={isLoading}/>,
    <Sales result={result} isLoading={isLoading}/>,
    <Trend result={result} isLoading={isLoading}/>,
]

const handleTab = (idx) => setIndex(idx)


return (
    <section className="overflow-x-hidden bg-gray-50 pt-10 pb-10 mt-10">
        <ul className="flex justify-center gap-5">
            <li className={`uppercase text-2xl font-bold ${currentTab === 0 ? "text-dark" : "opacity-50"}`}><button onClick={() => setCurrentTab(0)}>Popular</button></li>

            <li className={`uppercase text-2xl font-bold ${currentTab === 1 ? "text-dark" : "opacity-50"}`}><button onClick={() => setCurrentTab(1)}>// New Arrival</button></li>

            <li className={`uppercase text-2xl font-bold ${currentTab === 2 ? "text-dark" : "opacity-50"}`}><button onClick={() => setCurrentTab(2)}>// On Sale</button></li>
        </ul>
  
        {sliders[currentTab]}

    </section>
  );
};


export default Carousel;