import HeaderBooriva from "./headerBooriva/headerBooriva";
import HeaderSearch from "./headerSearch/headerSearch";
import HeaderLogo from "./headerLogo/headerLogo";
import HeaderDate from "./headerDate/headerdate";

import styles from "./headerWrap.module.sass";

const HeaderWrap = () => {
  return (
    <div className={styles.headerWrap}>
      <HeaderDate />
      <HeaderBooriva />
      <HeaderSearch />
      <HeaderLogo />
    </div>
  );
};

export default HeaderWrap;
