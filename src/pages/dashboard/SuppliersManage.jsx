import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./Styles.css"
import { Link } from 'react-router-dom'

const SuppliersManage = () => {
        const[data,setData]= useState([])
        useEffect(()=> {
          axios.get('http://localhost:8080/suppliers')
          .then(res => setData(res.data))
          .catch(err => console.log(err));
        },[])

        const handleDelete = (supplierNIC) => {
          console.log(supplierNIC);
          fetch(`http://localhost:8080/suppliers/delete/${supplierNIC}`, {
            method: "DELETE",
          })
          .then(res => res.json())
          .then(data => {
            alert("Item is Deleted Successfully");
          });
        }
      
    

    return (
        <div className='container'>
          <h2 className='mb-8 text-3xl font-bold'>Manage Suppliers</h2>
          <a href="/admin/dashboard/suppliers/add"className='mt-12 block'><button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded 
                hover:bg-black transition-all duration-300'> Add Supplier </button></a>
          <div>
            <table className='table'>
              <thead>
                <tr>
                  
                  <th>Supplier Name</th>
                  <th>Supplier NIC</th>
                  <th>Item Name</th>
                  <th>Item Quantity</th>
                  <th>Item price</th>
                  <th>Item Category</th>
                  <th>Total price</th>
                 
    
                </tr>
              </thead>
              <tbody>
                {
                  data.map((suppliers,index) => {
                    return <tr key={index}>
                      
                      <td>{suppliers.supplierName}</td>
                      <td>{suppliers.supplierNIC}</td>
                      <td>{suppliers.itemName}</td>
                      <td>{suppliers.itemQty}</td>
                      <td>{suppliers.ItemPrice}</td>
                      <td>{suppliers.itemCategory}</td>
                      <td>{suppliers.totalPrice}</td>
                      <Link className='text-cyan-600 hover:underline dark:text-cyan-500 mr-5' to ={'/admin/dashboard/suppliers/update/:supplierNIC'} >Edit</Link>
                      <button onClick={()=> handleDelete(suppliers.supplierNIC)} className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600' >Delete</button>
    
                    </tr>
                  })
                }
                
    
              </tbody>
            </table>
          </div>
          
          </div>
      )
    }


export default SuppliersManage
