import { Dot, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="py-8 bg-[#433d3c] text-black">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <ul className="flex items-center gap-4">
            <li>
              <Link to="/">
                <Facebook className="stroke-orange" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <Twitter className="stroke-orange" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <Instagram className="stroke-orange" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <Youtube className="stroke-orange" />
              </Link>
            </li>
          </ul>


          <p className="flex mb-0 text-black">
            (512) 386-1908 <Dot /> 6519 N. Lamar, Austin TX 78752
          </p>


          <button className="btn px-2 py-1.5 text-light rounded-md text-sm ">
            Order Online
          </button>
        </div>
      </div>
    </footer>
  );
};


export default Footer;