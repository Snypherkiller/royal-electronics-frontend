
import { Button, Checkbox, Label, TextInput,Textarea } from "flowbite-react";
import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const UpdateItems = () => {
  const { id } = useParams();
  const { itemName, itemDescription, itemQty, itemCategory, ItemPrice, imageUrl } = useLoaderData();

  const Category = [
    "Mobile",
    "Electronics",
    "Outdoor"
  ];

  const [selectedItemCategory, setSelectedItemCategory] = useState(itemCategory);

  const handleChangeSelectedValue = (event) => {
    setSelectedItemCategory(event.target.value);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const updateItemObj = {
      
      itemName: form.itemName.value,
      itemDescription: form.itemDescription.value,
      itemQty: form.itemQty.value,
      itemCategory: form.itemCategory.value,
      ItemPrice: form.ItemPrice.value,
      imageUrl: form.imageUrl.value
    };
    console.log(updateItemObj);

    fetch(`http://localhost:8080/Items/update/${id}`, {
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

    })
  }

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Update the Item</h2>
      <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-8">
      <div className="lg:w-1/2">
        <div className="mb-2 block">
          <Label htmlFor="itemName" value="Item name" />
        </div>
        <TextInput id="itemName" name="itemName" type="text" sizing="lg" placeholder="Enter the Item name" required className="w-full" defaultValue={itemName}/>
      </div>
      <div>
       </div>
      
      




      <div className="flex gap-8">
       <div className="lg:w-1/2">
        <div className="mb-2 block">
          <Label htmlFor="itemDescription" value="Item Description" />
        </div>
        <Textarea id="itemDescription" placeholder="Enter the Description" required rows={4} />
      </div>
      </div>


      <div className="flex gap-8">
  <div className="lg:w-1/2">
    <div className="mb-2 block">
      <Label htmlFor="itemQty" value="Item Quantity" />
    </div>
    <TextInput id="itemQty" name="itemQty" type="number" pattern="[0-10000]*" sizing="lg" placeholder="Enter the Item Quantity" required className="w-full" />
  </div>
</div> 



<div className="flex gap-8">
  <div className="lg:w-1/2">
    <div className="mb-2 block">
      <Label htmlFor="itemCategory" value="Select Item Category" />
    </div>
    <select id="inputState" name="itemCategory" required className="w-full rounded" value={selectedItemCategory} onChange={handleChangeSelectedValue}>

    <option value="">Select an Item Category</option>
      {
        Category.map((option)=> <option key={option} value={option}>{option}</option>)
      }
      
  </select>
  </div>
</div>


<div className="flex gap-8">
  <div className="lg:w-1/2">
    <div className="mb-2 block">
      <Label htmlFor="ItemPrice" value="Item Price" />
    </div>
    <TextInput id="ItemPrice" name="ItemPrice" type="number" sizing="lg" placeholder="Enter the Item Price" required className="w-full" />
  </div>
</div> 



<div className="flex gap-8">
       <div className="lg:w-1/2">
        <div className="mb-2 block">
          <Label htmlFor="imageUrl" value="Image URL" />
        </div>
        <TextInput id="imageUrl" name="imageUrl" type="text" sizing="lg" placeholder="Enter the Item Image URL" required className="w-full" />
      </div>
      </div>

      <Button type="submit" className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Submit The Edits</Button>
      </form>
    </div>
  );
};

export default UpdateItems
