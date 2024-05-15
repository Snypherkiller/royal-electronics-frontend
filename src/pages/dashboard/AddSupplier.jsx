import React, { useState } from 'react';
import { Button, Label, TextInput } from 'flowbite-react';
import "./addSupplier.css"

const AddSupplier = () => {
  const itemCategory = ["Mobile", "Electronics", "Outdoor"];
  const [selectedItemCategory, setSelectedItemCategory] = useState(itemCategory[0]);
  const [itemPrice, setItemPrice] = useState(0);
  const [itemQty, setItemQty] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleChangeSelectedValue = (event) => {
    setSelectedItemCategory(event.target.value);
  };

  const handleItemPriceChange = (event) => {
    const price = parseFloat(event.target.value);
    setItemPrice(price);
    calculateTotalPrice(price, itemQty);
  }
  

  const handleItemQtyChange = (event) => {
    const qty = parseInt(event.target.value);
    setItemQty(qty);
    calculateTotalPrice(itemPrice, qty);
  };

  const calculateTotalPrice = (price, qty) => {
    const total = price * qty;
    setTotalPrice(total);
  };

  const handleSupplierAdding =(event) =>{
    event.preventDefault();
    const form =event.target;

    const supplierName=form.supplierName.value;
    const supplierNIC=form.supplierNIC.value;
    const itemName=form.itemName.value;
    const itemQty=form.itemQty.value;
    const itemPrice=form.itemPrice.value;
    const itemCategory=form.itemCategory.value;
    const totalPrice=form.totalPrice.value;

    const supplierObj={
        supplierName,supplierNIC,itemName,itemQty,itemPrice,itemCategory,totalPrice
    };

    console.log(supplierObj);

    fetch("http://localhost:8090/suppliers/add",{
      method: "POST",
      headers:{
        "content-type":"application/json",
      },
      body: JSON.stringify(supplierObj)
    }).then(res => res.json()).then(data=> {
      alert("Supplier added successfully!");
      form.reset();
      setTotalPrice(0);
    });
  };

  return (
    <div className='add-supplier-container'>
      <h2 className='add-supplier-heading'>Add a Supplier</h2>
      
      <form onSubmit={handleSupplierAdding} className="add-supplier-form">
        <div className="form-group">
          <Label htmlFor="supplierName" value="Supplier Name" />
          <TextInput id="supplierName" name="supplierName" type="text" sizing="lg" placeholder="Enter the supplierName" required style={{ width: '100%', padding: '15px' }} />
        </div>
        
        <div className="form-group">
          <Label htmlFor="supplierNIC" value="Supplier NIC" />
          <TextInput id="supplierNIC" placeholder="Enter Supplier NIC" required style={{ width: '100%', padding: '15px' }} />
        </div>

        <div className="form-group">
          <Label htmlFor="itemName" value="Item Name" />
          <TextInput id="itemName" name="itemName" type="text" sizing="lg" placeholder="Enter the Item Name" required style={{ width: '100%', padding: '15px' }}  />
        </div> 

        <div className="form-group">
          <Label htmlFor="itemQty" value="Item Quantity" />
          <TextInput id="itemQty" name="itemQty" type="number" pattern="[0-10000]*" sizing="lg" placeholder="Enter the Item Quantity" required onChange={handleItemQtyChange} />
        </div> 

        <div className="form-group">
          <Label htmlFor="itemPrice" value="item Price" />
          <TextInput id="itemPrice" name="itemPrice" type="number" sizing="lg" placeholder="item price" required onChange={handleItemPriceChange} />
        </div>

        <div className="form-group">
          <Label htmlFor="itemCategory" value="Select Item Category" />
          <select id="itemCategory" name="itemCategory" required className="upload-item-select" value={selectedItemCategory} onChange={handleChangeSelectedValue}>
            <option value="">Select an Item Category</option>
            <option value="Mobile">Mobile</option>
            <option value="Electronics">Electronics</option>
            <option value="Outdoor">Outdoor</option>
          </select>
        </div>

        <div className="form-group">
          <Label htmlFor="totalPrice" value="Total Price" />
          <TextInput id="totalPrice" name="totalPrice" type="number" sizing="lg" placeholder="Total price" required readOnly value={totalPrice} />
        </div>

        <Button type="submit" className='submit-button'>Upload Supplier</Button>
      </form>
    </div>
  );
};

export default AddSupplier;
