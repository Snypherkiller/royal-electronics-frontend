
import { Button, Label, TextInput, } from "flowbite-react";
import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const UpdateSupplier = () => {

    const { supplierNIC } = useParams();
    const { supplierName, itemName, itemCategory} = useLoaderData();
    const [itemPrice, setItemPrice] = useState(0);
    const [itemQty, setItemQty] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const handleItemPriceChange = (event) => {
        const price = parseFloat(event.target.value);
        setItemPrice(price);
        calculateTotalPrice(price, itemQty);
      };
    
      const handleItemQtyChange = (event) => {
        const qty = parseInt(event.target.value);
        setItemQty(qty);
        calculateTotalPrice(itemPrice, qty);
      };
    
      const calculateTotalPrice = (price, qty) => {
        const total = price * qty;
        setTotalPrice(total);
      };
    

    const Category = [
        "Mobile",
        "Electronics",
        "Outdoor"
    
      ]
      const[selectedItemCategory,setSelectedItemCategory]= useState(itemCategory);
    
      const handleChangeSelectedValue =(event)=>{
        //console.log(event.target.value);
        setSelectedItemCategory(event.target.value);
      }
      const handleSupplierUpdating =(event) =>{
        event.preventDefault();
        const form =event.target;
    
        const supplierName=form.supplierName.value;
        const supplierNIC=form.supplierNIC.value;
        const itemName=form.itemName.value;
        const itemQty=form.itemQty.value;
        const ItemPrice=form.ItemPrice.value;
        const itemCategory=form.itemCategory.value;
        const totalPrice=form.totalPrice.value;
        const supplierObj={
            supplierName,supplierNIC,itemName,itemQty,ItemPrice,itemCategory,totalPrice
    
        }
        console.log(supplierObj);
    
        fetch(`http://localhost:8090/suppliers/update/${supplierNIC}`,{
          method: "PUT",
          headers:{
            "content-type":"application/json",
    
          },
          body: JSON.stringify(supplierObj)
        }).then(res => res.json()).then(data=> {
    
        alert("Supplier Updated successfully!")
        form.reset();
        setTotalPrice(0);
    
    
        })
    }
    


    return (
        <div className='px-4 my-12'>
          <h2 className='mb-8 text-3xl font-bold'>Update Supplier</h2>
          
         
          <form onSubmit={handleSupplierUpdating} className="flex lg:w-[1180px] flex-col flex-wrap gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="supplierName" value="Supplier Name" />
            </div>
            <TextInput id="supplierName" name="supplierName" type="text" sizing="lg" placeholder="Enter the supplierName" required className="w-full" />
          </div>
          <div>
           </div>
          
          
    
    
    
    
          <div className="flex gap-8">
           <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="supplierNIC" value="Supplier NIC" />
            </div>
            <TextInput id="supplierNIC" placeholder="Enter Supplier NIC" required rows={4} />
          </div>
          </div>
    
    
          <div className="flex gap-8">
      <div className="lg:w-1/2">
        <div className="mb-2 block">
          <Label htmlFor="itemName" value="Item Name" />
        </div>
        <TextInput id="itemName" name="itemName" type="text"  sizing="lg" placeholder="Enter the Item Name" required className="w-full" />
      </div>
    </div> 
    
    <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="itemQty" value="Item Quantity" />
            </div>
            <TextInput id="itemQty" name="itemQty" type="number" pattern="[0-10000]*" sizing="lg" placeholder="Enter the Item Quantity" required className="w-full" onChange={handleItemQtyChange} />
          </div>
        </div>  
    
    
    <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="ItemPrice" value="Item Price" />
            </div>
            <TextInput id="ItemPrice" name="ItemPrice" type="number" sizing="lg" placeholder="Item price" required className="w-full" onChange={handleItemPriceChange} />
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
              <Label htmlFor="totalPrice" value="Total Price" />
            </div>
            <TextInput id="totalPrice" name="totalPrice" type="number" sizing="lg" placeholder="Total price" required className="w-full" value={totalPrice} readOnly />
          </div>
        </div>

    
          <Button type="submit" className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Update the Supplier</Button>
        
        </form>
    
        </div>
      )
}

export default UpdateSupplier
 