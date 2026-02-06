import Header from './components/Header';
import NavBar from './components/NavBar';
import BannerCarousel from './components/BannerCarousel';
import HomeSections from './components/HomeSections';
import ProductCarousel from './components/ProductCarousel';
import PromoBanners from './components/PromoBanners';
import FavoritesCarousel from './components/FavoritesCarousel';
import DealAndOffers from './components/DealAndOffers';

function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <BannerCarousel />
      <HomeSections />
      <ProductCarousel />
      <PromoBanners />
      <FavoritesCarousel />
      <DealAndOffers />
    </div>
  );
}

export default App;
