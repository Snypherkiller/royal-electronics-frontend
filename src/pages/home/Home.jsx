
import Banner from '../../components/Banner';
import furnitureHome from '../../components/furnitureHome';


import BestSellerItems from './BestSellerItem';
import FavItem from './FavItem';
import OtherItems from './OtherItems';




const Home = () => {
  return (
    <div>
      <Banner />
      <BestSellerItems/>
      <FavItem/>
      <OtherItems/>
      <furnitureHome/>
      
      
    
    </div>
  );
};

export default Home;