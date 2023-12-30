import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
import Cart from "./components/Cart.jsx";
import Home from "./components/Home.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import { CartContext, CartProvider } from "./context/CartContext.jsx";
import Checkout from "./components/Checkout.jsx";

const App = () => {
  return (
    <Router>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/linea/:linea" element={<ItemListContainer />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        </Routes>
      </CartProvider>
    </Router>
  );
};

export default App;
