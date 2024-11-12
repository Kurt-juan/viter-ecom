
import { imgPath } from "@/components/helpers/functions-general";
import React from "react";

import Popular from "./carousel-group/Popular";
import Sales from "./carousel-group/Sales";
import Trend from "./carousel-group/Trend";
const Carousel = () => {
 const [currentTab, setCurrentTab] = React.useState(0)
const sliders = [
    <Popular/>,
    <Sales/>,
    <Trend/>,
]



return (
    <section className="overflow-x-hidden bg-gray-50 pt-10 pb-10">
        <ul className="flex justify-center gap-5">
            <li className={`uppercase text-2xl font-bold ${currentTab === 0 ? "text-dark" : "opacity-50"}`}><button onClick={() => setCurrentTab(0)}>Popular</button></li>
            <li className={`uppercase text-2xl font-bold ${currentTab === 0 ? "text-dark" : "opacity-50"}`}>//</li>
            <li className={`uppercase text-2xl font-bold ${currentTab === 1 ? "text-dark" : "opacity-50"}`}><button onClick={() => setCurrentTab(1)}>New Arrival</button></li>
            <li className={`uppercase text-2xl font-bold ${currentTab === 1 ? "text-dark" : "opacity-50"}`}>//</li>
            <li className={`uppercase text-2xl font-bold ${currentTab === 2 ? "text-dark" : "opacity-50"}`}><button onClick={() => setCurrentTab(2)}>On Sale</button></li>
        </ul>
  
        {sliders[currentTab]}
    </section>
  );
};


export default Carousel;