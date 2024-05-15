import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./supplierManagement.css"
import { Link } from 'react-router-dom'

const SuppliersManage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get('http://localhost:8090/suppliers')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  };

  const handleDelete = (supplierNIC) => {
    console.log(supplierNIC);
    fetch(`http://localhost:8090/suppliers/delete/${supplierNIC}`, {
      method: "DELETE",
    })
    .then(res => res.json())
    .then(data => {
      alert("Item is Deleted Successfully");
    });
  }

  const generateReport = () => {
    let report = '<h2>Supplier Report</h2>';
    data.forEach(supplier => {
      report += `
        <div class="supplier-report">
          <h3>${supplier.supplierName}</h3>
          <p><strong>NIC:</strong> ${supplier.supplierNIC}</p>
          <p><strong>Item Name:</strong> ${supplier.itemName}</p>
          <p><strong>Item Quantity:</strong> ${supplier.itemQty}</p>
          <p><strong>Item Price:</strong> ${supplier.ItemPrice}</p>
          <p><strong>Item Category:</strong> ${supplier.itemCategory}</p>
          <p><strong>Total Price:</strong> ${supplier.totalPrice}</p>
        </div>
      `;
    });

    // Open a new window and display the report
    const newWindow = window.open();
    newWindow.document.write(`<html><head><title>Supplier Report</title></head><body>${report}</body></html>`);
    newWindow.document.close();
  };

  return (
    <div className='container'>
      <h2 className='mb-8 text-3xl font-bold'>Manage Suppliers</h2>
      <div className='button-container'>
        <a href="/admin/dashboard/suppliers/add" className='mt-12 block'>
          <button className='add-supplier'>
            Add Supplier
          </button>
        </a>
        <button onClick={generateReport} className='generate-report-button'>
          Generate Report
        </button>
      </div>
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
              data.map((suppliers, index) => {
                return <tr key={index}>
                  <td>{suppliers.supplierName}</td>
                  <td>{suppliers.supplierNIC}</td>
                  <td>{suppliers.itemName}</td>
                  <td>{suppliers.itemQty}</td>
                  <td>{suppliers.ItemPrice}</td>
                  <td>{suppliers.itemCategory}</td>
                  <td>{suppliers.totalPrice}</td>
                  <Link className='edit-btn' to ={'/admin/dashboard/suppliers/update/:supplierNIC'} >Edit</Link>
                  <button className='delete-btn' onClick={() => handleDelete(suppliers.supplierNIC)}  >Delete</button>
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
