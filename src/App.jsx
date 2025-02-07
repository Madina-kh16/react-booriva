import { Route, Routes } from "react-router-dom";

import Instagram from "./components/instagram/Instagram";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/footer/footer";
import Header from "./components/header/Header";
import Catalog from "./pages/catalog/Catalog";
import WishListEmpty from "./pages/wishListEmpty/WishListEmpty";
import ProductPage from "./pages/productPage/ProductPage";

function App() {
  console.log('gffff');
  
  return (
    <div className="div">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/wishList" element={<WishListEmpty />} />
        <Route path="/productPage" element={<ProductPage />} />
      </Routes>
      <Instagram />
      <Footer />
    </div>
  );
}

export default App;
