import Header from "./header/header";

import styles from "./homePage.module.sass";

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <Header />
    </div>
  );
};

export default HomePage;
