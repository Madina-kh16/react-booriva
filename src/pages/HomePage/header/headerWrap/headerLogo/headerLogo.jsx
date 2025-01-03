import HeaderBasket from "./headerBasket/headerBasket";
import HeaderHeart from "./headerHeart/headerHeart";

import styles from "./headerLogo.module.sass";

const HeaderLogo = () => {
  return (
    <div className={styles.headerLogo}>
      <HeaderHeart />
      <HeaderBasket />
    </div>
  );
};

export default HeaderLogo;
