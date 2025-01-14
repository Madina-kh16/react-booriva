import HeaderLine from "../../components/header/headerWrap/headerLine/headerLine";
import Instagram from "../../components/instagram/Instagram";
import NewCollection from "./newCollection/newCollection";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import TopProducts from "./topProducts/TopProducts";
import Categories from "./categories/Categories";

import styles from "./homePage.module.sass";

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <Header />
      <HeaderLine />
      <Categories />
      <NewCollection />
      <TopProducts />
      <Instagram />
      <Footer />
    </div>
  );
};

export default HomePage;
