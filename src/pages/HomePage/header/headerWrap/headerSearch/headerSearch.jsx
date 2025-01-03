import HeaderSearchLogo from "../../../../../assets/img/icons/headerSearchLogo";

import styles from "./headerSearch.module.sass";

const HeaderSearch = () => {
  return (
    <div className={styles.headerSearch}>
      <HeaderSearchLogo />
      <div className={styles.headerSearchText}>Поиск</div>
    </div>
  );
};

export default HeaderSearch;
