import HeaderAdress from "./headerAdress/headerAdress";
import HeaderBasket from "./headerLogo/headerBasket/headerBasket";
import HeaderBooriva from "./headerBooriva/headerBooriva";
import HeaderHeart from "./headerLogo/headerHeart/headerHeart";
import HeaderNumber from "./headerNumber/headerNumber";
import HeaderSearch from "./headerSearch/headerSearch";
import HeaderLogo from "./headerLogo/headerLogo";

import styles from "./headerWrap.module.sass";

const HeaderWrap = () => {
  return (
    <div className={styles.headerWrap}>
      <HeaderAdress />
      <HeaderNumber />
      <HeaderBooriva />
      <HeaderSearch />
      <HeaderLogo />
    </div>
  );
};

export default HeaderWrap;
