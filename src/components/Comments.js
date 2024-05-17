import React,{useEffect, useState} from "react";
import Nav from "../components/Nav";
import SiderBar from "../components/SiderBar";
import ViewReview from "./ViewReview";
import axios from "axios";

export default function Comments(){
  const[reviews,setReviews] = useState();
  const [triggerFetch, setTriggerFetch] = useState(false);


  useEffect(()=>{
    axios.get('http://localhost:5000/review/reviewGet').then((response)=>{
      setReviews(response.data)
      setTriggerFetch(false)
    }).catch((error)=>{
      console.log("Error:",error)
    })
  },[triggerFetch])


  const deleteReview=(value)=>{
    
    //console.log("valueeeeeeeee",props.data.review)
    //let reviewID=props.data._id;

    //console.log("deleteeeeeee",value)

    axios.delete('http://localhost:5000/review/reviewDelete',{
        data:{ id:value }
    })
    
    .then((response)=>{
       console.log("response",response)
       setTriggerFetch(true)
    })
    .catch((error)=>{
       console.log("Error",error) 
    })

   
}
  


   return(

   <div className=" flex-col">
      <Nav/>
      <div class="flex h-screen border-spacing-3 border border-white   shadow-xl">
        <SiderBar/>
          <div class="flex-grow p-10 grid grid-cols-2 overflow-auto">
            {reviews && reviews.map((item,index)=>(
                <ViewReview delete={deleteReview} key={index} data={item}/>
            ))}
               
               {/* <ViewReview/>
               <ViewReview/> */}
          </div>
      </div>
      
  </div>

)


}