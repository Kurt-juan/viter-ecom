import { Dot } from 'lucide-react'
import React from 'react'


const CallToAction = () => {
  return (
    <section className="bg-[url('./public/img/3.png')] bg-cover bg-no-repeat min-h-screen bg-center relative  ">
    <div className="container">

      <div className="absolute  uppercase right-[300px] top-[200px]">
        <h1 className="text-black mb-1 text-[clamp(50px,_6vw,_75px)] ">
          OPIUM JACKET Y-8
        </h1>
        <p className="text-black ">
        Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Aenean commodo ligula eget dolor. Aenean massa.
        </p>
        <button className='btn  self-start mt-5 px-5 pt-2 pb-2'>SHOPNOW</button>
      </div>
      
      <div className="absolute  uppercase left-[300px] bottom-[100px]">
        <h1 className="text-black mb-1 text-[clamp(50px,_6vw,_75px)]">
          NEW FASHION
        </h1>
        <p className="text-black">
        Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Aenean commodo ligula eget dolor. Aenean massa.
        </p>
        <button className='btn  self-start mt-5  px-5 pt-2 pb-2'>SHOPNOW</button>
      </div>

    </div>
  
  </section>

  )
}


export default CallToAction
