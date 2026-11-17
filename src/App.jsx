
import { Routes, Route } from "react-router-dom";

import { CartProvider } from "./context/CartContext";

import Navbar from "./componenets/layout/Navbar";
import Footer from "./componenets/layout/Footer";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

import "./App.css";

function App() {
  return (
    <CartProvider>
      <div className="app">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
