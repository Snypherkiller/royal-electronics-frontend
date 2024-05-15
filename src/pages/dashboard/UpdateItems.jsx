import React, { useState } from 'react';
import { Button, Label, TextInput, Textarea } from 'flowbite-react';
import { useLoaderData, useParams } from 'react-router-dom';
import './updateItem.css'; // Import your CSS file

const UpdateItems = () => {
  const { id } = useParams();
  const { itemName, itemQty, itemCategory, ItemPrice, imageUrl } = useLoaderData();

  const Category = ["Mobile", "Electronics", "Outdoor"];
  const [selectedItemCategory, setSelectedItemCategory] = useState(itemCategory);

  const handleChangeSelectedValue = (event) => {
    setSelectedItemCategory(event.target.value);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const updateItemObj = {
      itemName: form.itemName.value,
      itemQty: form.itemQty.value,
      itemCategory: form.itemCategory.value,
      ItemPrice: form.ItemPrice.value,
      imageUrl: form.imageUrl.value
    };

    console.log(updateItemObj);

    fetch(`http://localhost:8090/Items/update/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(updateItemObj)
    })
    .then(res => res.json())
    .then(() => {
      alert("Updated successfully!");
      form.reset();
    });
  };

  return (
    <div className='update-item-container'>
      <h2 className='update-item-heading'>Update the Item</h2>
      <form onSubmit={handleUpdate}>
        <div className="form-section">
          <div className="form-input">
            <Label htmlFor="itemName" value="Item name" className="form-label" />
            <TextInput id="itemName" name="itemName" type="text" sizing="lg" placeholder="Enter the Item name" required defaultValue={itemName} />
          </div>

          <div className="form-input">
            <Label htmlFor="itemQty" value="Item Quantity" className="form-label" />
            <TextInput id="itemQty" name="itemQty" type="number" pattern="[0-10000]*" sizing="lg" placeholder="Enter the Item Quantity" required className="w-full" defaultValue={itemQty} />
          </div>

          <div className="form-input">
            <Label htmlFor="itemCategory" value="Select Item Category" className="form-label" />
            <select id="itemCategory" name="itemCategory" required className="select-input" value={selectedItemCategory} onChange={handleChangeSelectedValue}>
              <option value="">Select an Item Category</option>
              {Category.map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
          </div>

          <div className="form-input">
            <Label htmlFor="ItemPrice" value="Item Price" className="form-label" />
            <TextInput id="ItemPrice" name="ItemPrice" type="number" sizing="lg" placeholder="Enter the Item Price" required defaultValue={ItemPrice} />
          </div>

          <div className="form-input">
            <Label htmlFor="imageUrl" value="Image URL" className="form-label" />
            <TextInput id="imageUrl" name="imageUrl" type="text" sizing="lg" placeholder="Enter the Item Image URL" required defaultValue={imageUrl} />
          </div>
        </div>

        <Button type="submit" className='submit-button'>Submit The Edits</Button>
      </form>
    </div>
  );
};

export default UpdateItems;
