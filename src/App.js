// import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout'
// import Slider from './components/Slider/Slider';
import Home from './Pages/Home';
import Product from './Pages/Product';
import ProductDetails from './Pages/ProductDetails';


function App() {
  return (
    <>
      <Layout>
        <Home />
        <Product />
        <ProductDetails />
      </Layout>
    </>
  );
}

export default App;
