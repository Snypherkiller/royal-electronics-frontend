import React,{useState} from "react";
import axios from "axios";


export default function AddFurniture(){    


    const[furniturenames,setfurniturenames]=useState([]);
    const[fName,setfName]=useState("");
    const[fType,setfType]=useState("");
    const[pprice,setpprice]=useState("");
    const[status,setstatus]=useState("");
    const[quantity,setquantity]=useState("");
    const[sprice,setsprice]=useState("");
    const[description,setdescription]=useState("");
   
   async function sendData(e){
        e.preventDefault();

        const newItem ={    
            name :fName,
            type:fType,
            pprice :pprice,
            status :status,
            quantity :quantity,
            sprice :sprice,
            description:description 
        }
        window.location.href="/Furniturelist";
       

      try { await axios.post("http://localhost:8090/furniture/add",newItem);
        alert("New Item inserted");
            setfName(" ");
            setfType(" ");
            setpprice(" ");
            setstatus(" ");
            setquantity(" ");
            setsprice(" ");
            setdescription(" ");

    }catch(err){
        alert(err.message);
       }
    }
    return(
        <div className="container">
<h1>New Furniture</h1>
    <form onSubmit={sendData} className="form-group" action="/submit" method="post">
        <div>
            <label for="furnitureName">Furniture Name:</label><br/>
            <input type="text" id="furnitureName" name="furnitureName" placeholder="Enter furniture name" 
            onChange={(e)=>{
                setfName(e.target.value);
            }}
            /><br/><br/>
        </div>
        <div>
            <label for="furnitureType">Type:</label><br/>
            <select id="furnitureType" name="furnitureType" onChange={(e)=>{
                setfType(e.target.value);
            }}>
                <option value="Desks">Select</option>
                <option value="Desks">Desks</option>
                <option value="Chair">Chair</option>
                <option value="Container">Container</option>
                <option value="Beds">Beds</option>
            </select><br/><br/>
        </div>
        <div>
            <label for="purchasePrice">Purchase Price (LKR):</label><br/>
            <input type="number" id="purchasePrice" name="purchasePrice" min="0.00" max="100000000000.00" step="0.01" 
            onChange={(e)=>{
                setpprice(e.target.value);
            }}/><br/><br/>
        </div>
        <div>
            <label for="status">Status:</label><br/>
            <select id="status" name="status"            
            onChange={(e)=>{
                setstatus(e.target.value);
            }}> 
                <option value="Available">Select</option>
                <option value="Available">Available</option>
                <option value="Out of Stock">Out of Stock</option>
                <option value="Obsolete">Obsolete</option>
            </select><br/><br/>
        </div>
        <div>
            <label for="quantity">Quantity:</label><br/>
            <input type="number" id="quantity" name="quantity" min="0" max="10000" step="1" 
            onChange={(e)=>{
                setquantity(e.target.value);
            }}
                /><br/><br/>
        </div>
        <div>
            <label for="sellingPrice">Selling Price (LKR):</label><br/>
            <input type="number" id="sellingPrice" name="sellingPrice" min="0.00" max="1000000000.00" step="0.01"
            onChange={(e)=>{
                setsprice(e.target.value);
            }}
            /><br/><br/>
        </div>
        <div>
            <label for="furnituredescription">Furniture Description:</label><br/>
            <input type="text" id="furnituredescription" name="furnituredescription" placeholder="Enter Furniture Description" 
            onChange={(e)=>{
                setdescription(e.target.value);
            }}
            /><br/><br/>
        </div>
        <input type="submit" value="Submit"/>
    </form>
    </div>

    )
    
}
