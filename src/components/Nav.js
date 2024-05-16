import React, { useState } from 'react';
import { TbBrandElectronicArts } from "react-icons/tb";

export default function Nav(){


  const [searchTerm, setSearchTerm] = useState('');
  const [items, setItems] = useState([
    'Apple',
    'Banana',
    'Orange',
    'Strawberry',
    'Grapes'
  ]);
  const [suggestions, setSuggestions] = useState([]);

  // Handler for updating search term and suggestions
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Filter items based on the search term and update suggestions
    const filtered = items.filter(item =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filtered);
  };

  // Handler for selecting a suggestion
  const handleSuggestionClick = (value) => {
    setSearchTerm(value);
    setSuggestions([]); // Clear suggestions when a suggestion is clicked
  };
 
   const Logout=()=>{
      console.log("click me!")
   }

    return(
      <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
           
          
                <div className=''>
                  <input
                    className=' border-blue-400 outline-none p- rounded-md pl-3 font-semibold'
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                        />
                  {suggestions.length > 0 &&searchTerm.length>0 && (
                    <ul className=' absolute'>
                      {suggestions.map((suggestion, index) => (
                         
                          <div>
                              <li className='  w-64 ml-1 pl-5 h-6 bg-gray-800 font-semibold text-white ' key={index} onClick={() => handleSuggestionClick(suggestion)}>
                                {suggestion}
          
                            </li>
                             <hr></hr>
                          </div>  
                    
                      ))}
                    </ul>
                  )}
              </div>
          
        </div>
      </div>
    </nav>
    );
}