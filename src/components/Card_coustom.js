import React from "react";
import logo from "../assets/logo.jpg";
import fiture from "../assets/f1.jpeg"



   
  export default function CardCoustom(props) {
    return (
          <div class="max-w-sm   mt-10 ml-6 mb-5 bg-white border  hover:mt-5 duration-500 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <img src={fiture} alt="alat" className=" rounded-t-lg  w-fit "/>  
                 <hr></hr>                
              <div class="p-5">
                  <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Item</h5>

                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Information</p>
                  <button  onClick={props.eventFunction} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    {props.buttonName}
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                  </button>
              </div>
          </div>

    );
  }