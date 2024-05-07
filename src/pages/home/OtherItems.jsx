import React, { useEffect, useState } from 'react'
import ItemCards from '../../components/ItemCards';

const OtherItems = () => {
    
    const [items,setItems]=useState([])

    useEffect(() => {

        fetch("http://localhost:8080/Items/")
        .then(res => res.json())
          .then(data => 
               setItems(data.slice(0,20))
          )
      }, []); 
      return (
        <div>
          
          <ItemCards items={items} headline="Other Items"/>
        </div>
      )
}

export default OtherItems
