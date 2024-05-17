import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Styles.css";
import { Link } from 'react-router-dom';

export default function ManageItems  () {
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


  function Updateitems(){

    const[furniture,setfurniture]=useState([]);
    const[furnituren,setfurnituren]=useState([]);
    


  useEffect(()=>{
    axios.get("http://localhost:8090/furniture/")
    .then(res=>setfurniture(res.data))
    .catch((err)=>{console.log(err)})
  },[])

}

  const handleDownload = () => {
    axios.get("http://localhost:8090/furniture/")
        .then(res => {
            setfurniture(res.data);

            var doc = new jsPDF();
            const headers = ["Number", "Furniture Name", "Type", "Purchase price", "Status", "Quantity", "Selling Price", "Description", "Profit"];
            const data = res.data.map((item, index) => [
                index + 1,
                item.name,
                item.type,
                item.pprice,
                item.status,
                item.quantity,
                item.sprice,
                item.description,
                (item.sprice - item.pprice) * item.quantity
            ]);

            doc.autoTable({
                head: [headers],
                body: data,
                styles: { fontSize: 8, cellPadding: 1, overflow: 'linebreak' },
                theme: 'grid'
            });

            doc.save("Furniture_Report.pdf");
        })
        .catch((err) => {
            console.log(err);
        });

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