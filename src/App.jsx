import Instagram from "./components/instagram/Instagram";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/footer/footer";
import Header from "./components/header/Header";
import Catalog from "./pages/catalog/Catalog";

function App() {
  return (
    <div className="div">
      <Header />
      <HomePage />;{/* <Catalog /> */}
      <Instagram />
      <Footer />
    </div>
  );
}

export default App;
