import React from 'react';
import BannerCard from '../pages/home/BannerCard';
import './banner.css'; 

const Banner = () => {
  return (
    <div className='banner'> 
      <div className='banner-content'>
        <div >

          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <h2 className='banner-text'>Buy as you wish...<span> for the best prices</span></h2>
          <p className='banner-description '>Welcome to Royal Electronics and Furniture, your one-stop destination for all your electronic and furniture needs. At Royal, we combine the latest innovations in electronics with stylish and functional furniture pieces to create spaces that are both modern and comfortable.</p>

          <div>
            <input type='search' name='search' id='search' placeholder='Search an Item' className='banner-input' />
            <button className='banner-button'>Search</button>
          </div>
        </div>
        <div><BannerCard /></div>
      </div>
    </div>
  );
};

export default Banner;