import HeaderBasket from "./headerBasket/HeaderBasket";
import HeaderHeart from "./headerHeart/HeaderHeart";

import styles from "./HeaderLogo.module.sass";

const HeaderLogo = () => {
  return (
    <div className={styles.headerLogo}>
      <HeaderHeart />
      <HeaderBasket />
    </div>
  );
};

export default HeaderLogo;
