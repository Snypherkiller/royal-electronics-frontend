
import React from "react";

export default function Button1(props){

  return(
    <button onClick={props.click} class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  bg-white hover:bg-indigo-500 duration-300 border border-white tex-black font-light px-4 py-2 rounded  text-sm">
      {props.buttonName}
   </button>

 
  );

}