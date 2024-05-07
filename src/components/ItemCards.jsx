import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import './ItemCard.css';
import { FaCartShopping } from 'react-icons/fa6'


const ItemCards = ({ headline, items }) => {
  return (
    <div className='my-16 px-4 lg:px-24'>
      <h2 className='text-5xl text-center font-bold text-black my-5'>{headline}</h2>
      <div>
        <Swiper
           slidesPerView={4}
           centeredSlides={true}
           spaceBetween={30}
           grabCursor={true}
           pagination={{
             clickable: true,
           }}
           modules={[Pagination]}
           className="mySwiper w-full h-full"
        >
          {
          items.map(item => <SwiperSlide key={item.id}>
              <a href={`/Items/get/${item.id}`}> 
                <div className='relative'>
                  <img src={item.imageUrl} alt=""/>
                  <div className='absolute top-3 right-3 bg-blue-600 hover:bg-black p-2 rounded'>
                    <FaCartShopping className='w-4 h-4 text-white'/>
                  </div>
                </div>
                <div>
                  <div>
                  <h3>{item.itemName}</h3>
                  <p>LKR {item.ItemPrice}</p>
                  </div>
                </div>
                
              </a>
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    </div>
  );
}

export default ItemCards;
