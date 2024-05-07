import React from 'react';
import BannerCard from '../pages/home/BannerCard';

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'> 
      <div className ='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
        <div className='md:w-1/2 space-y-8 h-full'>
          <h2 className='text-5xl font-bold leading-snug text-black'>Buy as you wish...<span className='text-blue-700'> for the best prices</span></h2>
          <p className='md:w-4/5 bg-teal-100'>Welcome to Royal Electronics and Furniture, your one-stop destination for all your electronic and furniture needs. At Royal, we combine the latest innovations in electronics with stylish and functional furniture pieces to create spaces that are both modern and comfortable.</p>
          <div>
            <input type='search' name='search' id='search' placeholder='Search an Item' className='py-2 px-2 rounded-s-sm outline-none' />
            <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>Search</button>
          </div>
        </div>

        <div><BannerCard></BannerCard></div>
      </div>
    </div>
  );
};

export default Banner;