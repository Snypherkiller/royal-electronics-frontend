import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiXCircle } from "react-icons/fi";
import axios from 'axios';



function ReviewPops(props) {


  const[category, setCategory] = useState('');
  const[comments, setComments] = useState('');
  const[errorMessage, setErrorMessage] = useState('');
  const navigate=useNavigate();
  

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    console.log(props.closePop)
  };

  const handleCommentsChange = (event) => {
    setComments(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Reset error message
    setErrorMessage('');


    if(!category.trim()&& !comments.trim()){
      setErrorMessage('Category and comment cannot be empty');
      return; // Exit the function early
    }


    // Check if category and comments are empty
    if (!category.trim()) {
      setErrorMessage('Category cannot be empty');
      return; // Exit the function early
    }

    if (!comments.trim()) {
      setErrorMessage('Comments cannot be empty');
      return; // Exit the function early
    }

  
    // If no errors, proceed with form submission
    axios.post('http://localhost:5000/review/reviewAdd', {
      review: comments,
      reviewCatagory: category,
      reviewUser: 'shanu@gmail.com',
      productID: '001'
    })
    .then((response) => {
      console.log("Data sent successfully:", response.data);
      // Optionally navigate to another page after successful submission
      navigate('/comments')
    })
    .catch((error) => {
      console.error("Error occurred while sending data:", error);
    });
  };
  /// update review function......./////

  const updateReview = (event) => {
   event.preventDefault();
    
    // Reset error message
    setErrorMessage('');


    if(!category.trim()&& !comments.trim()){
      setErrorMessage('Category and comment cannot be empty');
      return; // Exit the function early
    }


    // Check if category and comments are empty
    if (!category.trim()) {
      setErrorMessage('Category cannot be empty');
      return; // Exit the function early
    }

    if (!comments.trim()) {
      setErrorMessage('Comments cannot be empty');
      return; // Exit the function early
    }


        axios.put('http://localhost:5000/review/reviewUpdate',{
            data:{
              reviewId:props.data,
              review:comments,
              reviewCatagory:category,
            }
        })
        .then((response) => {
          console.log("Data sent successfully:", response.data);
           navigate('/comments')
        })
        .catch((error) => {
          console.error("Error occurred while sending data:", error);
          
        });
    
};

  return (
    <div className="border border-gray-300 p-4 rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-700 h-200">
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <h2 className="text-lg  mt-4 font-bold mb-4">Review</h2>
        <button onClick={props.closePop} >
              <i>< FiXCircle size={25} className=" mr-2 ml-1 mt-1  hover:scale-75 duration-300"/></i>
           </button>
      </div>
      {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
      <form onSubmit={ (props.buttonName==="Update")?updateReview:handleSubmit}>
        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={handleCategoryChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          > 
             <option value="" disabled hidden>Comments category</option>
             <option value="Bad Review">Bad Review</option>
             <option value="Good Review">Good Review</option>
            
          </select>
           
        </div>
        <div className="mb-4">
          <label htmlFor="comments" className="block text-sm font-medium text-gray-700">
            Comments
          </label>
          <textarea
            id="comments"
            value={comments}
            onChange={handleCommentsChange}
            rows="3"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          {props.buttonName}
        </button>
      </form>
    </div>
  );
}
 
export default ReviewPops;
