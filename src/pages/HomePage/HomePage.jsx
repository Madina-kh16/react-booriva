import Header from "../../components/header/header";
import HeaderLine from "../../components/header/headerWrap/headerLine/headerLine";

import styles from "./homePage.module.sass";

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <Header />
      <HeaderLine />
    </div>
  );
};

export default HomePage;
