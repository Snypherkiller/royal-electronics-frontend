import React,{useState} from "react";
import axios from "axios";


export default function AddDelivery(){   
    
    const[fdeliveryid,setfdeliveryid]=useState("");
    const[fcustomername,setfcustomername]=useState("");
    const[items,setitems]=useState("");
    const[transactionid,settransactionid]=useState("");
    const[address,setaddress]=useState("");
    const[status,setstatus]=useState("");
    const[createdAt,setcreatedAt]=useState("");
   
   async function sendData(e){
        e.preventDefault();

        const newItem ={    
            deliveryid :fdeliveryid,
            customername:fcustomername,
            items :items,
            status :status,
            transactionid :transactionid,
            address :address,
            createdAt:createdAt 
        }
        window.location.href="/Deliverylist";
       

      try { await axios.post("http://localhost:8090/delivery/add",newItem);
        alert("New Item inserted");
        setfdeliveryid(" ");
        setfcustomername(" ");
        setitems(" ");
        settransactionid(" ");
        setaddress(" ");
        setstatus(" ");
        setcreatedAt(" ");

    }catch(err){
        alert(err.message);
       }
    }
    return(
        <div className="container">
<h1>New Delivery</h1>
    <form onSubmit={sendData} className="form-group" action="/submit" method="post">
        <div>
            <label for="deliveryid">DeliveryID:</label><br/> 
            <input type="text" id="deliveryid" name="deliveryid" placeholder="Enter deliveryID" 
            onChange={(e)=>{
                setfdeliveryid(e.target.value);
            }}
            /><br/><br/>
        </div>
        <div>
            <label for="setstatus">Status:</label><br/>
            <select id="setstatus" name="setstatus" onChange={(e)=>{
                setstatus(e.target.value);
            }}>
                <option value="Initiated">Initiated</option>
                <option value="Delivered">Delivered</option>
                <option value="Address Not found">Address Not found</option>
                <option value="Canceled">Canceled</option>
            </select><br/><br/>
        </div>
        <div>
            <label for="purchasePrice">Customer Name:</label><br/>
            <input type="text" id="purchasePrice" name="purchasePrice"  
            onChange={(e)=>{
                setfcustomername(e.target.value);
            }}/><br/><br/>
        </div>
        <div>
            <label for="purchasePrice">Items bought:</label><br/>
            <input type="text" id="purchasePrice" name="purchasePrice"  
            onChange={(e)=>{
                setitems(e.target.value);
            }}/><br/><br/>
        </div>
        <div>
            <label for="quantity">Transaction Id :</label><br/>
            <input type="text" id="quantity" name="quantity" 
            onChange={(e)=>{
                settransactionid(e.target.value);
            }}
                /><br/><br/>
        </div>
        <div>
            <label for="Address">Address:</label><br/>
            <input type="text" id="Address" name="Address" 
            onChange={(e)=>{
                setaddress(e.target.value);
            }}
            /><br/><br/>
        </div>
        <div>
            <label for="DeliveryDate">Delivery Created Date:</label><br/>
            <input 
                type="date" 
                id="furnituredescription" 
                name="furnituredescription" 
                value={new Date().toISOString().substr(0, 10)} 
                onChange={(e)=>{
                    setcreatedAt(e.target.value);
                }}
                readOnly
            /><br/><br/>
        </div>

        <input type="submit" value="Submit"/>
    </form>
    </div>

    )
    
}
