import React from "react";
import {Route , Routes} from 'react-router-dom';
import About from "./components/About";
import Contacts from "./components/Contacts";
import Delivery from "./components/Delivery";
import Nopage from "./components/Nopage";
import Order from "./components/Order";
import Reviews from "./components/Reviews";
import Layout from "./components/Layout.jsx";
import "./style/global.css"
import Catalog from "./components/Catalog.jsx";
import Basket from "./components/Basket.jsx";
import Checkout from "./components/Checkout.jsx";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<About />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="delivery" element={<Delivery />} />
          <Route path="order" element={<Order />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="basket" element={<Basket />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
  );
}

export default App;
