import HeaderWrap from "./headerWrap/HeaderWrap";
import Menu from "./menu/Menu";

import styles from "./header.module.sass";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerWrapper}>
        <HeaderWrap />
        <Menu />
      </div>
    </div>
  );
};

export default Header;
