import { Link } from "react-router-dom";
import HeaderBascetLogo from "../../../../../assets/img/icons/headerBascetLogo";

import styles from "./HeaderBasket.module.sass";

const HeaderBasket = () => {
  return (
    <Link to="/" className={styles.headerBasket}>
      <HeaderBascetLogo />
    </Link>
  );
};

export default HeaderBasket;
