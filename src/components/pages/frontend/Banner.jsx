import React from 'react'
import Header from './Header'
import { Dot, Play } from 'lucide-react'

const Banner = () => {
  return (
    <section className="bg-[url('./public/img/banner.jpg')] bg-cover bg-no-repeat bg-[right_top_-50px] min-h-screen relative ">
    <div className="container">
      <Header/>
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
  )
}

export default Banner