import { imgPath } from "@/components/helpers/functions-general";
import {
  LayoutDashboard,
  Shirt,
  Soup
} from "lucide-react";
import { Link } from "react-router-dom";


const Navigation = ({ menu= "" }) => {
  return (
    <div className="p-4 ">
      <div className="mb-5 flex gap-2 items-center">
        <img src={`${imgPath}/image.jpg`} alt="" className="w-[30%]" />
        <h5 className="uppercase mb-0">
         FASHION<br /> <span className="text-sm">APPAREL</span>
        </h5>
      </div>


      <nav>
        <ul className="space-y-5">
          <li>
            <Link
              to="/admin/dashboard"
              className={`${menu === "dashboard" ? "active" : ""} nav-link`}
            >
              {" "}
              <LayoutDashboard size={18} strokeWidth={1} /> Dashboard{" "}
            </Link>
          </li>


          <li>
            <Link
              to="/admin/Items"
              className={`${menu === "items" ? "active" : ""} nav-link`}
            >
              {" "}
              <Shirt size={18} strokeWidth={1} /> Items{" "}
            </Link>
          </li>


        </ul>
      </nav>
    </div>
  );
};


export default Navigation;




