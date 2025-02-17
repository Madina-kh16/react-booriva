import { Route, Routes } from "react-router-dom";
import { createContext, useEffect, useState } from "react";

import WishListEmpty from "./pages/wishListEmpty/WishListEmpty";
import ProductPage from "./pages/productPage/ProductPage";
import Instagram from "./components/instagram/Instagram";
import MiniMenu from "./components/miniMenu/MiniMenu";
import HomePage from "./pages/HomePage/HomePage";
import WishList from "./pages/wishList/WishList";
import Footer from "./components/footer/footer";
import Header from "./components/header/Header";
import Basket from "./components/basket/Basket";
import Catalog from "./pages/catalog/Catalog";

import "./index.css";

export const BasketOpen = createContext();
export const Select = createContext();
export const Active = createContext();

const App = () => {
  const [isBasketOpen, setIsBasketOpen] = useState(false);
  const [active, setActive] = useState(false);
  const [select, setSelect] = useState(
    localStorage.getItem("select")
      ? JSON.parse(localStorage.getItem("select"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("select", JSON.stringify(select));
  }, [select]);

  const [cart, setCart] = useState(
    localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleChange = (id) => {
    if (!select.includes(id)) {
      setSelect([...select, id]);
    } else {
      setSelect(select.filter((data) => data !== id));
    }
  };

  return (
    <div className={`${isBasketOpen && "no-scroll"}`}>
      <BasketOpen.Provider value={{ isBasketOpen, setIsBasketOpen }}>
        <Basket cart={cart} setCart={setCart} />
        <Header />
      </BasketOpen.Provider>
      <Select.Provider value={{ select, setSelect }}>
        <Active.Provider value={{ active, setActive }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<Catalog />} />

            <Route path="/wishList" element={<WishList />} />
            <Route path="/wishListEmpty" element={<WishListEmpty />} />
            <Route
              path="/productPage"
              element={
                <ProductPage
                  cart={cart}
                  setCart={setCart}
                  handleChange={handleChange}
                />
              }
            />
          </Routes>
        </Active.Provider>
      </Select.Provider>
      <Instagram />
      <Footer />
      <MiniMenu setIsBasketOpen={setIsBasketOpen} />
    </div>
  );
};

export default App;
