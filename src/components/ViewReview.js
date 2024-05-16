import React,{useState,useEffect} from "react";
import avatar from '../../assets/avatar.jpg';
import { FiXCircle } from "react-icons/fi";
import ReviewPops from "./ReviewPops";
import axios from 'axios';



export default function ViewReview(props){

const [propsType,setpropType]=useState(false);




const editReview=()=>{
    setpropType(true)
}

const close=()=>{
    console.log("hiiiiiiiiiiiiiiii")
    setpropType(false)
}



 return(
    <div style={{height:'200px',width:'400px',boxShadow: "1px 3px 1px #9E9E9E",borderRadius:'10px',outline:'2px solid Black',marginBottom: '40px'}}>
    <div style={{height:'50px',display:'flex',flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',padding:'3px'}}>
        <div style={{height:'45px',width:'45px',borderRadius:'45px'}}>
            <img src={avatar}></img>
        </div>
        <div style={{height:'45px',width:'280px',color:'black',display:'flex', flexDirection: 'column'}}>
            
            <div>{props.data.reviewUser}</div>
            <div>{props.data.reviewCatagory}</div> 
            
            </div>
        <div  style={{height:'45px',width:'45px'}}>
           <button onClick={()=>props.delete(props.data._id)}>
              <i>< FiXCircle size={35} className=" mr-2 ml-1 mt-1  hover:scale-75 duration-300"/></i>
           </button>
        </div>
    </div>
    <div style={{height:'2px',width:'100%',paddingLeft:'5%',paddingRight:'5%'}}>
        <div style={{width:'98%',height:'1px',backgroundColor:'black'}}></div>
        </div>
    <div style={{width:'100%',height:'100px',overflowY:'auto',wordWrap:'break-word',padding:'16px'}}>{props.data.review}</div>
    <div style={{height:'48px',width:'100%',display:'flex',alignItems:'center',justifyContent:'space-around'}}>
        <button onClick={editReview} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Edit
        </button>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          More
        </button>
    </div>
    {propsType&&<ReviewPops closePop={close} buttonName="Update" data={props.data._id}/>}
 </div>
 )
    
}