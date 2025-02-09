import HeaderBooriva from "./headerBooriva/HeaderBooriva";
import HeaderSearch from "./headerSearch/HeaderSearch";
import HeaderLogo from "./headerLogo/HeaderLogo";
import HeaderDate from "./headerDate/HeaderDate";

import styles from "./HeaderWrap.module.sass";

const HeaderWrap = ({ setIsBasketOpen}) => {
  return (
    <div className={styles.headerWrap}>
      <HeaderDate />
      <HeaderBooriva />
      <HeaderSearch />
      <HeaderLogo  setIsBasketOpen={setIsBasketOpen} />
    </div>
  );
};

export default HeaderWrap;
