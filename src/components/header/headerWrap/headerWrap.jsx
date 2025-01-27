import HeaderBooriva from "./headerBooriva/HeaderBooriva";
import HeaderSearch from "./headerSearch/HeaderSearch";
import HeaderLogo from "./headerLogo/HeaderLogo";
import HeaderDate from "./headerDate/HeaderDate";

import styles from "./HeaderWrap.module.sass";

const HeaderWrap = () => {
  return (
    <div className={styles.headerWrap}>
      {/* <HeaderBooriva /> */}
      <HeaderDate />
      <HeaderBooriva />
      <HeaderSearch />
      <HeaderLogo />
    </div>
  );
};

export default HeaderWrap;
