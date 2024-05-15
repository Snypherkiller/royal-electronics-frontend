import FavItemImg from "../../assets/favItems2.jpg"

const FavItem = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
        <div  className='md:w-1/2'>
            <img src={ FavItemImg } alt="" className='rounded md:w-10/12'/>


        </div>
        <div className='md:w-1/2 space-y-6'>
                <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug'>Find your Favourite <span
                className='text-blue-700'>Electronic Applicance Here!</span></h2>
                <p className='mb-10 text-lg md:w-5/6'> Welcome to Royal Electronics, your premier destination for purchasing your favorite electronics items! At Royal Electronics, we pride ourselves on offering a wide range of high-quality electronics products to meet all your needs and preferences  </p>
                <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
                    <div>
                        <h3 className='text-3xl font-bold'>50+</h3>
                        <p className='text-base'>Item listning</p>
                    </div>
                    <div>
                        <h3 className='text-3xl font-bold'>550+</h3>
                        <p className='text-base'>Registered Users</p>
                    </div>
                    <div>
                        <h3 className='text-3xl font-bold'>Upto 75%</h3>
                        <p className='text-base'>Monthly Discounts</p>
                    </div>
       
                </div>


                <a href="/shop" className='mt-12 block'>
  <button style={{ 
    backgroundColor: '#007bff', 
    color: 'white', 
    fontWeight: 'bold', 
    padding: '0.5rem 1rem', 
    borderRadius: '5px', 
    border: 'none', 
    cursor: 'pointer', 
    transition: 'background-color 0.3s, color 0.3s' 
  }} className='hover:bg-black hover:text-white transition-all duration-300'>Explore more</button>
</a>


        </div>
    
    </div>
  )
}

export default FavItem
