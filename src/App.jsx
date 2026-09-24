import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import LandingPage from './pages/LandingPage.jsx';
import CorporatePage from './pages/CorporatePage.jsx';
import PersonalPage from './pages/PersonalPage.jsx';
import ShopPage from './pages/ShopPage.jsx';
import ProductPage from './pages/ProductPage.jsx';
import CurationPage from './pages/CurationPage.jsx';
import FaqPage from './pages/FaqPage.jsx';
import CorporateStoryPage from './pages/CorporateStoryPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import CartPage from './pages/CartPage.jsx';
import CheckoutPage from './pages/CheckoutPage.jsx';
import OrderConfirmationPage from './pages/OrderConfirmationPage.jsx';
import SiteChrome from './components/shared/SiteChrome.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <SiteChrome>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/corporate" element={<CorporatePage />} />
          <Route path="/personal" element={<PersonalPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/curate" element={<CurationPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/corporate-story" element={<CorporateStoryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
        </Routes>
      </SiteChrome>
    </>
  );
}
