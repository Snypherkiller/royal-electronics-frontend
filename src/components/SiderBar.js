import React from "react";
import {Link} from "react-router-dom";
import { FaUserGraduate } from "react-icons/fa";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { MdOutlineRateReview } from "react-icons/md";
import { RiShoppingCartLine } from "react-icons/ri";
import { BsBoxArrowUpLeft } from "react-icons/bs";


export default function SiderBar(){
 return(
      <div className="bg-gray-800 text-white w-64">
        <div className="p-4">
          <div className="flex">
            <i><FaUserGraduate size={30} className=" ml-6"/></i>
            <h1 className="text-xl font-bold mb-4 ml-4">Heshani </h1>
          </div>
          <hr />
          <ul>
            <li className="mb-2   ml-0 hover:scale-50  duration-500">
              <Link to="/" className="block px-4 py-2 rounded hover:bg-gray-700 mt-6 font-extrabold  flex"> <MdOutlineDashboardCustomize size={35} className=" mr-4"/> Dashboard</Link>
            </li>
            <li className="mb-2  ml-0 hover:scale-50  duration-500">
              <Link to="/comments" className="block px-4 py-2 rounded hover:bg-gray-700  mt-6 font-extrabold flex" ><MdOutlineRateReview  size={35} className=" mr-4"/>Review</Link>
            </li>
            <li className="mb-2 hover:scale-50  duration-500">
              <Link to="/Puchers" className="block px-4 py-2 rounded hover:bg-gray-700 mt-6 font-extrabold flex"><RiShoppingCartLine  size={35} className=" mr-4"/>Purchased Item</Link>
            </li>
            <li className=" mt-40  ml-0 hover:scale-50  duration-500 ">
              <Link to="#" className=" flex font-extrabold block px-4 py-2 rounded  hover:bg-gray-700 "><BsBoxArrowUpLeft size={25} className=" mr-5 ml-4"/>log out</Link>
            </li>
          </ul>
        </div>
      </div>
      
   
 );
}
