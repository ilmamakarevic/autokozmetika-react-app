import {Routes, Route} from "react-router-dom";

import './App.css';

//pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";

//components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Vodic from './components/Vodic';
import Autokozmetika from './components/Autokozmetika';

const App = () => {
  const products = [
    {
      id: 1,
      image: 'images/1.jpg',
      title: 'ACTIVE FOAM GREEN',
      price: '20,00',
    },
    {
      id: 2,
      image: 'images/2.jpg',
      title: 'ACTIVE FOAM RED',
      price: '20,00',
    },
    {
      id: 3,
      image: 'images/3.jpg',
      title: 'ACTIVE FOAM VIOLET',
      price: '20,00',
    },
  ];

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products products={products}  />} />
        <Route path="/product/:id" element={<Product products={products} />} />
      </Routes>

      <Vodic />
      <Autokozmetika />
      <Footer />
    </div>
  );
}

export default App;
