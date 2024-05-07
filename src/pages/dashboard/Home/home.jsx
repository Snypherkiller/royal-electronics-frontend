
import Banner from '../components/Banner';
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
    
    </div>
  );
};

export default Home;