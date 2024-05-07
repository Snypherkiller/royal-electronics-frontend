import React, { useEffect, useState } from 'react'

import { Card } from "flowbite-react";

const Shop = () => {

  const [items,setItems]=useState([]);

  useEffect( ()=> {
    fetch("http://localhost:8080/Items/").then(res => res.json()).then(data =>setItems(data));
  }, [])

  return (
    <div className='mt-28 px-4 lg:px24'>
      <h2 className='text-5xl font-bold text-center'>Electronics</h2>

      <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
        {
          items.map(item =><Card
            className="max-w-sm"
            
          >
            <img src={item.imageUrl} alt='' className='h-96'/>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-Black">
               {item.itemName}
              
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
             LKR{item.ItemPrice}<br></br>
             Category:{item.itemCategory}
            </p>

            <button className='bg-blue-700 font-semibold text-white py-2 rounded '>Shop now</button>
          </Card> )
        }
      </div>
    </div>
  )
}

export default Shop
