import React from 'react'
import "./cusVal.css"


export default function CusVal(){
  return (
    <div className='container'>
      <h2>Are you a previledge Customer?</h2>
      <button>Yes</button>
      <a href="/customer/login">
      <button>No</button>
      </a>
    
    </div>
  )
}


