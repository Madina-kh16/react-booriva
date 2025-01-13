import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import HeaderLine from "../../components/header/headerWrap/headerLine/headerLine";
import NewCollection from "./newCollection/newCollection";
import TopProducts from "./topProducts/TopProducts";
import Instagram from "../../components/instagram/Instagram";

import styles from "./homePage.module.sass";

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <Header />
      <HeaderLine />
      <NewCollection />
      <TopProducts />
      <Instagram />
      <Footer />
    </div>
  );
};

export default HomePage;
