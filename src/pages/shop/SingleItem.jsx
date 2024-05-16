import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SingleItem = ({ searchTerm }) => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    // Fetch item data based on id and search term
    fetch(`http://localhost:8090/Items/get/${id}?search=${searchTerm}`)
      .then(res => res.json())
      .then(data => setItem(data.item))
      .catch(error => console.log("Error fetching item:", error));
  }, [id, searchTerm]);

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
