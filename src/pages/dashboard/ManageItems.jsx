import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Styles.css";
import { Link } from 'react-router-dom';

const ManageItems = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get('http://localhost:8090/Items')
      .then((res) => {console.log(res.data);setData(res.data)})
      .catch(err => console.log(err));
  };

  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:8090/Items/delete/${id}`, {
      method: "DELETE",
    })
    .then(res => res.json())
    .then(data => {
      alert("Item is Deleted Successfully");
    });
  };

  const generateInventoryReport = () => {
    const electronicsItems = data.filter(item => item.itemCategory === "Electronics");
    let report = `
      <div class='report-container'>
        <h2>Electronics Inventory Report</h2>
        <table class='report-table'>
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Item Description</th>
              <th>Item Quantity</th>
              <th>Item Price</th>
              <th>Image Url</th>
            </tr>
          </thead>
          <tbody>
    `;
    electronicsItems.forEach(item => {
      report += `
        <tr>
          <td>${item.itemName}</td>
          <td>${item.itemDescription}</td>
          <td>${item.itemQty}</td>
          <td>${item.ItemPrice}</td>
          <td>${item.imageUrl}</td>
        </tr>
      `;
    });
    report += `
          </tbody>
        </table>
      </div>
    `;
  
    // Open the report in a new window
    const newWindow = window.open('', '_blank');
    newWindow.document.write(`<html><head><title>Electronics Inventory Report</title><link rel="stylesheet" type="text/css" href="styles.css"></head><body>${report}</body></html>`);
    newWindow.document.close();
  };

  return (
    <div className='container'>
      <h2 className='mb-8 text-3xl font-bold'>Manage Items</h2>
      <button onClick={generateInventoryReport} className='generate-report-button'>Generate Inventory Report</button>

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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.itemName}</td>
                <td>{item.itemDescription}</td>
                <td>{item.itemQty}</td>
                <td>{item.itemCategory}</td>
                <td>{item.ItemPrice}</td>
                <td>{item.imageUrl}</td>
                <td>
                  <Link className='edit-button' to={`/admin/dashboard/update/${item._id}`}>Edit</Link>
                  <button onClick={() => handleDelete(item._id)} className='delete-button'>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;
