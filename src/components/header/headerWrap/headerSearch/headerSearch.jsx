import HeaderSearchLogo from "../../../../assets/img/icons/headerSearchLogo";

import styles from "./HeaderSearch.module.sass";

const HeaderSearch = () => {
  return (
    <div className={styles.headerSearch}>
      <HeaderSearchLogo />
      <div className={styles.headerSearchText}>Поиск</div>
    </div>
  );
};

export default HeaderSearch;
