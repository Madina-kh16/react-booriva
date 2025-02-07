import { useState } from "react";

import HeaderWrap from "./headerWrap/HeaderWrap";
import Submenu from "./submenu/Submenu";
import Menu from "./menu/Menu";

import styles from "./Header.module.sass";

const Header = () => {
  const [isShow, setIsShow] = useState(false);
  const [menuId, setMenuId] = useState(0)
  
  return (
    <div className={styles.header}>
      <div className={styles.headerWrapper}>
        <HeaderWrap />
        <div className={styles.menuWrap}>
          <Menu setIsShow={setIsShow} setMenuId={setMenuId}/>
        </div>
      </div>
      <Submenu isShow={isShow} setIsShow={setIsShow} menuId={menuId}/>
    </div>
  );
};

export default Header;
