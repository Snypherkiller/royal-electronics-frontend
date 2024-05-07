import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./Styles.css"
import { Link } from 'react-router-dom'


const ManageItems = () => {
  const[data,setData]= useState([])
  useEffect(()=> {
    axios.get('http://localhost:8080/Items')
    .then(res => setData(res.data))
    .catch(err => console.log(err));
  },[])

  
  const handleDelete = (itemName) => {
    console.log(itemName);
    fetch(`http://localhost:8080/Items/delete/${itemName}`, {
      method: "DELETE",
    })
    .then(res => res.json())
    .then(data => {
      alert("Item is Deleted Successfully");
      //setData(data);
    });

    


  
  };
  
  return (
    <div className='container'>
      <h2 className='mb-8 text-3xl font-bold'>Manage Items</h2>

      <div>
        <table className='table'>
          <thead>
            <tr>
              
              <th>Item Name</th>
              <th>Item Description</th>
              <th>Item Quantity</th>
              <th>Item Category</th>
              <th>Item Price</th>
              <th>Image Url</th>
             

            </tr>
          </thead>
          <tbody>
            {
              data.map((item,index) => {
                return <tr key={index}>
                  
                  <td>{item.itemName}</td>
                  <td>{item.itemDescription}</td>
                  <td>{item.itemQty}</td>
                  <td>{item.itemCategory}</td>
                  <td>{item.ItemPrice}</td>
                  <td>{item.imageUrl}</td>
                  <Link className='text-cyan-600 hover:underline dark:text-cyan-500 mr-5' to ={'/admin/dashboard/update/:id'} >Edit</Link>
                  <button onClick={()=> handleDelete(item.itemName)} className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600' >Delete</button>

                </tr>
              })
            }
            

          </tbody>
        </table>
      </div>
      
      </div>
  )
}

export default ManageItems
