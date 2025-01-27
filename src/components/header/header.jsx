import { useState } from "react";
import HeaderWrap from "./headerWrap/HeaderWrap";
import Submenu from "./submenu/Submenu";
import Menu from "./menu/Menu";

import styles from "./Header.module.sass";

const Header = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className={styles.header}>
      <div className={styles.headerWrapper}>
        <HeaderWrap />
        <div className={styles.menuWrap}>
          <Menu isShow={isShow} setIsShow={setIsShow} />
        </div>
      </div>
      <Submenu isShow={isShow} setIsShow={setIsShow} />
    </div>
  );
};

export default Header;
