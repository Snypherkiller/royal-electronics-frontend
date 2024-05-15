import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { useState } from "react";
import "./uploadItem.css";

const UploadItem = () => {
  const [selectedItemCategory, setSelectedItemCategory] = useState("Mobile");

  const handleChangeSelectedValue = (event) => {
    setSelectedItemCategory(event.target.value);
  };

  const handleItemUpload = (event) => {
    event.preventDefault();
    const form = event.target;

    const itemName = form.itemName.value;
    const itemDescription = form.itemDescription.value;
    const itemQty = form.itemQty.value;
    const itemCategory = form.itemCategory.value;
    const ItemPrice = form.ItemPrice.value;
    const imageUrl = form.imageUrl.value;

    const itemObj = {
      itemName,
      itemDescription,
      itemQty,
      itemCategory,
      ItemPrice,
      imageUrl,
    };

    fetch("http://localhost:8090/Items/add", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(itemObj),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Item added successfully!");
        form.reset();
      });
  };

  return (
    <div className="upload-item-container">
      <h2 className="upload-item-heading">Upload An Item</h2>
      <form onSubmit={handleItemUpload} className="upload-item-form">
        <div className="upload-item-group">
          <Label htmlFor="itemName" value="Item name" className="upload-item-label" />
          <TextInput id="itemName" name="itemName" type="text" sizing="lg" placeholder="Enter the Item name" required className="upload-item-input" style={{ width: '100%', padding: '15px' }} />        </div>

        <div className="upload-item-group">
          <Label htmlFor="itemDescription" value="Item Description" className="upload-item-label" />
          <Textarea id="itemDescription" placeholder="Enter the Description" required rows={4} className="upload-item-textarea" />
        </div>

        <div className="upload-item-group">
          <Label htmlFor="itemQty" value="Item Quantity" className="upload-item-label" />
          <TextInput id="itemQty" name="itemQty" type="number" pattern="[0-10000]*" sizing="lg" placeholder="Enter the Item Quantity" required className="upload-item-input" />
        </div>

        <div className="upload-item-group">
          <Label htmlFor="itemCategory" value="Select Item Category" className="upload-item-label" />
          <select id="itemCategory" name="itemCategory" required className="upload-item-select" value={selectedItemCategory} onChange={handleChangeSelectedValue}>
            <option value="">Select an Item Category</option>
            <option value="Mobile">Mobile</option>
            <option value="Electronics">Electronics</option>
            <option value="Outdoor">Outdoor</option>
          </select>
        </div>

        <div className="upload-item-group">
          <Label htmlFor="ItemPrice" value="Item Price" className="upload-item-label" />
          <TextInput id="ItemPrice" name="ItemPrice" type="number" sizing="lg" placeholder="Enter the Item Price" required className="upload-item-input" />
        </div>

        <div className="upload-item-group">
          <Label htmlFor="imageUrl" value="Image URL" className="upload-item-label" />
          <TextInput id="imageUrl" name="imageUrl" type="text" sizing="lg" placeholder="Enter the Item Image URL" required className="upload-item-input" style={{ width: '100%', padding: '15px' }}/>
        </div>

        <Button type="submit" className="upload-item-button">Upload Item</Button>
      </form>
    </div>
  );
};

export default UploadItem;
