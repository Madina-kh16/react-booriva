import { useContext } from "react";
import HeaderBascetLogo from "../../../../../assets/img/icons/headerBascetLogo";

import styles from "./HeaderBasket.module.sass";
import { BasketOpen } from "../../../../../App";

const HeaderBasket = () => {
  const { setIsBasketOpen } = useContext(BasketOpen);
  return (
    <span className={styles.headerBasket} onClick={() => setIsBasketOpen(true)}>
      <HeaderBascetLogo />
    </span>
  );
};

export default HeaderBasket;
