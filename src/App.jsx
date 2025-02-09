import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import WishListEmpty from "./pages/wishListEmpty/WishListEmpty";
import ProductPage from "./pages/productPage/ProductPage";
import Instagram from "./components/instagram/Instagram";
import HomePage from "./pages/HomePage/HomePage";
import WishList from "./pages/wishList/WishList";
import Footer from "./components/footer/footer";
import Header from "./components/header/Header";
import Basket from "./components/basket/basket";
import Catalog from "./pages/catalog/Catalog";

import './index.css'

const App = () => {
  const [isBasketOpen, setIsBasketOpen] = useState(false)
  
  return (
    <div className={`${isBasketOpen && 'no-scroll' }`}>
      <Basket isBasketOpen={isBasketOpen} setIsBasketOpen={setIsBasketOpen} />
      <Header setIsBasketOpen={setIsBasketOpen} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/wishList" element={<WishList />} />
        <Route path="/wishListEmpty" element={<WishListEmpty />} />
        <Route path="/productPage" element={<ProductPage />} />
      </Routes>
      <Instagram />
      <Footer />
    </div>
  );
}

export default App;
