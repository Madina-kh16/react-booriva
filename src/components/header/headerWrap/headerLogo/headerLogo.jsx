import HeaderBasket from "./headerBasket/HeaderBasket";
import HeaderHeart from "./headerHeart/HeaderHeart";

import styles from "./HeaderLogo.module.sass";

const HeaderLogo = ({ setIsBasketOpen}) => {
  return (
    <div className={styles.headerLogo}>
      <HeaderHeart />
      <HeaderBasket  setIsBasketOpen={setIsBasketOpen}/>
    </div>
  );
};

export default HeaderLogo;
