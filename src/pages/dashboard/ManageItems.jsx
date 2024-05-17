import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Styles.css";
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf';
require('jspdf-autotable')


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

  const createPDF = () => {
    const unit = "pt";
    const size = "A4"; 
    const orientation = "portrait";
    const doc = new jsPDF(orientation, unit, size);

    const title = ` Royal Electronic - Electronics inventory report`;

    //logo
    const left = 50;
    const top = 50;
    const imgWidth = 100;
    const imgHeight = 100;

    doc.setFontSize(15);
    doc.setTextColor(40);
    doc.text(70, 93, title);

    doc.setFontSize(12);
    doc.text(40, 200, `Total Items: ${data.length}`);

    const tableColumn = ["Name", "Description", "Qty", "Category", "Price", "Image URL"];
    const tableRows = [];

    data.forEach(item => {
        const itemData = [
            item.itemName,
            item.itemDescription,
            item.itemQty,
            item.itemCategory,
            item.ItemPrice,
            item.imageUrl
        ];
        tableRows.push(itemData);
    });

    // Define table style options
    const tableOptions = {
        startY: 250,
        theme: 'striped',
        headStyles: {
            fillColor: [41, 128, 185], 
            textColor: [255, 255, 255],
            fontSize: 12
        },
        bodyStyles: {
            textColor: [51, 51, 51], 
            fontSize: 10
        },
       
        margin: { top: 10 },
        styles: {
            overflow: 'linebreak',
            cellPadding: 10, 
        },
        columnStyles: {
            0: { cellWidth: 70 }, 
            1: { cellWidth: 150 },
            2: { cellWidth: 40 },
            3: { cellWidth: 70 },
            4: { cellWidth: 70 },
            5: { cellWidth: 100 }
        }
    };

    doc.autoTable({
        head: [tableColumn],
        body: tableRows,
        ...tableOptions
    });


    doc.save(`Electronics.pdf`);
}


  
  return (
    <div className='container'>
      <h2 className='mb-8 text-3xl font-bold'>Manage Items</h2>
      <button onClick={createPDF} className='generate-report-button'>Generate Inventory Report</button>

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
