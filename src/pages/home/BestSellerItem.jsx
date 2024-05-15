import { useEffect, useState } from 'react';
import ItemCards from '../../components/ItemCards';

const BestSellerItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8090/Items/")
    .then(res => res.json())
      .then(data => 
           setItems(data.slice(0,8))
      )
  }, []); 
  return (
    <div>
      
      <ItemCards items={items} headline="Best Seller Items"/>
    </div>
  )
}

export default BestSellerItems;
