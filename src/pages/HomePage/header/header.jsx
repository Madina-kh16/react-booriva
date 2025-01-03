import HeaderWrap from "./headerWrap/headerWrap";
import Menu from "./menu/menu";

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
