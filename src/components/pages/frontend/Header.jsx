import { imgPath } from '@/components/helpers/functions-general'
import { ShoppingBag } from 'lucide-react'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <header
    className=" px-4 py-2 transition-all z-50 fixed top-0 left-0 w-full bg-black bg-opacity-70" 
  >
    <div className="flex justify-between items-center ">
      <div className="">
        <Link to="/">
          <img
            src={`${imgPath}/logo.png`}
            alt=""
            className= "w-[80px]"
          />
        </Link>
      </div>


      <ul className="flex gap-10 items-center">
        <li>
          <NavLink to="/" className="text-base font-bold text-white">
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className="text-base font-bold text-white">
            Location
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className="text-base font-bold text-white">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className="text-base font-bold text-white">
            Blog
          </NavLink>
        </li>
      </ul>


      <button className="relative">
        <ShoppingBag stroke={"#fff"} />
      </button>
    </div>
  </header>

  </>
  )
}

export default Header