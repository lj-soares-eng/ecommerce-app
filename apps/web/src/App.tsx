import Header from './components/Header';
import PopularSearchTerms from './components/PopularSearchTerms';
import NavBar from './components/NavBar';
import BannerCarousel from './components/BannerCarousel';
import CategoriesGrid from './components/CategoriesGrid';
import HomeSections from './components/HomeSections';
import ProductCarousel from './components/ProductCarousel';
import ProductCarouselSection from './components/ProductCarouselSection';
import PromoBanners from './components/PromoBanners';
import FavoritesCarousel from './components/FavoritesCarousel';
import DealAndOffers from './components/DealAndOffers';
import Footer from './components/Footer';
import { getMockProducts } from './data/mockProducts';

function App() {
  const products = getMockProducts(24);

  return (
    <div>
      <Header />
      <PopularSearchTerms />
      <NavBar />
      <BannerCarousel />
      <HomeSections />
      <ProductCarousel />
      <ProductCarouselSection
        title="Because you viewed Home Appliances products"
        products={products}
      />
      <ProductCarouselSection
        title="Related to the last product you viewed"
        products={products}
      />
      <ProductCarouselSection
        title="Related to your last purchase"
        link={{ text: 'View orders' }}
        products={products}
      />
      <ProductCarouselSection
        title="Similar to what interests you"
        products={products}
      />
      <ProductCarouselSection
        title="Inspired by what interests you"
        products={products}
      />
      <ProductCarouselSection
        title="Your history"
        link={{ text: 'Go to my browsing history' }}
        products={products}
        bgClass="bg-gray-50"
      />
      <ProductCarouselSection
        title="Best sellers for you in Helmets"
        products={products}
      />
      <ProductCarouselSection
        title="Best sellers for you in Air Conditioners"
        products={products}
      />
      <ProductCarouselSection
        title="Best sellers for you in Supplements"
        products={products}
      />
      <PromoBanners />
      <FavoritesCarousel />
      <DealAndOffers />
      <CategoriesGrid />
      <Footer />
    </div>
  );
}

export default App;
