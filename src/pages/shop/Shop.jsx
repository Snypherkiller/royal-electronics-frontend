import React, { useEffect, useState } from 'react';
import { Card } from "flowbite-react";
import "./shop.css"; // Importing external CSS file

const Shop = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8090/Items/")
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(error => console.log("Error fetching items:", error));
  }, []);


  return (
    <div className='layout'>
      <h2 className='text-5xl '>Electronics</h2>

      <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
        {items.map(item => (
          <Card key={item.id} className="my-card">
            <img src={item.imageUrl} alt={item.itemName} className='my-card-image' />
            <div className="my-card-content">
              <h5 className="my-card-title">{item.itemName}</h5>
              <p className="my-card-info">
                LKR {item.ItemPrice}<br />
                Category: {item.itemCategory}<br/>
                Review:
              </p>
              <button className='shop-now-btn'>
                Shop now
              </button>
              <a href='/addReview'>
              <button className='review-now-btn'>
                Add review
              </button></a>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Shop;
