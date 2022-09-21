import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import CheckoutPage from './Pages/CheckoutPage';
import ContactPage from './Pages/ContactPage';
import WishlistPage from './Pages/WishlistPage';
import CartPage from './Pages/CartPage';
import Home from "./Pages/Home"
import Product from './Pages/Product';

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Product />} />
            <Route path='/checkout' element={<CheckoutPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/wishlist' element={<WishlistPage />} />
            <Route path='/cart' element={<CartPage />} />
          </Routes>
        </Layout>
      </Router>

    </>
  );
}

export default App;
