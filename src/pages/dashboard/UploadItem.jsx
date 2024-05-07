import { Button, Checkbox, Label, TextInput,Textarea } from "flowbite-react";
import { useState } from "react";

const UploadItem = () => {
  const itemCategory = [
    "Mobile",
    "Electronics",
    "Outdoor"

  ]
  const[selectedItemCategory,setSelectedItemCategory]= useState(itemCategory[0]);

  const handleChangeSelectedValue =(event)=>{
    //console.log(event.target.value);
    setSelectedItemCategory(event.target.value);
  }
  const handleItemUpload =(event) =>{
    event.preventDefault();
    const form =event.target;


    const itemName=form.itemName.value;
    const itemDescription=form.itemDescription.value;
    const itemQty=form.itemQty.value;
    const itemCategory=form.itemCategory.value;
    const ItemPrice=form.ItemPrice.value;
    const imageUrl=form.imageUrl.value;

    const itemObj={
      itemName,itemDescription,itemQty,itemCategory,ItemPrice,imageUrl

    }
    console.log(itemObj);

    fetch("http://localhost:8080/Items/add",{
      method: "POST",
      headers:{
        "content-type":"application/json",

      },
      body: JSON.stringify(itemObj)
    }).then(res => res.json()).then(data=> {

    alert("Item added successfully!")
    form.reset();


    })

  }
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Upload An Item</h2>
      
     
      <form onSubmit={handleItemUpload} className="flex lg:w-[1180px] flex-col flex-wrap gap-8">
      <div className="lg:w-1/2">
        <div className="mb-2 block">
          <Label htmlFor="itemName" value="Item name" />
        </div>
        <TextInput id="itemName" name="itemName" type="text" sizing="lg" placeholder="Enter the Item name" required className="w-full" />
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
        itemCategory.map((option)=> <option key={option} value={option}>{option}</option>)
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

      <Button type="submit" className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Upload Item</Button>
    
    </form>

    </div>
  )
}

export default UploadItem
