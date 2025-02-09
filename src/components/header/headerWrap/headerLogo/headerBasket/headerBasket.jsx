import HeaderBascetLogo from "../../../../../assets/img/icons/headerBascetLogo";

import styles from "./HeaderBasket.module.sass";

const HeaderBasket = ({setIsBasketOpen}) => {
  return (
    <span className={styles.headerBasket} onClick={() => setIsBasketOpen(true)}>
      <HeaderBascetLogo />
    </span>
  );
};

export default HeaderBasket;
