import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SingleItem = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8090/Items/get/${id}`)
      .then(res => res.json())
      .then(data => setItem(data.item))
      .catch(error => console.log("Error fetching item:", error));
  }, [id]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{item.itemName}</h2>
      <p>Description: {item.itemDescription}</p>
      <p>Category: {item.itemCategory}</p>
      <p>Price: LKR {item.ItemPrice}</p>
      <img src={item.imageUrl} alt={item.itemName} />
    </div>
  );
}

export default SingleItem;
