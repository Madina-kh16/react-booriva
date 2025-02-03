import { Link } from "react-router-dom";
import HeaderBascetLogo from "../../assets/img/icons/headerBascetLogo";
import HeaderHeartLogo from "../../assets/img/icons/headerHeartLogo";
import IconsMenu from "../../assets/img/icons/IconsMenu";
import IconsSend from "../../assets/img/icons/IconsSend";

import styles from "./MiniMenu.module.sass";

const MiniMenu = () => {
  return (
    <div className={styles.miniMenu}>
      <div className={styles.wrapper}>
        <div className={styles.miniMenuItems}>
          <div className={styles.miniMenuItem}>
            <div className={styles.miniMenuItemImg}>
              <IconsMenu />
            </div>
            <div className={styles.miniMenuItemText}>Меню</div>
          </div>
          <div className={styles.miniMenuItem}>
            <div className={styles.miniMenuItemImg}>
              <IconsSend />
            </div>
            <div className={styles.miniMenuItemText}>Написать</div>
          </div>
          <div className={styles.miniMenuItem}>
            <div className={styles.miniMenuItemImg}>
              <HeaderBascetLogo />
            </div>
            <div className={styles.miniMenuItemText}>Корзина</div>
          </div>
          <Link to={"/wishList"} className={styles.miniMenuItem}>
            <div className={styles.miniMenuItemImg}>
              <HeaderHeartLogo />
            </div>
            <div className={styles.miniMenuItemText}>Wish list</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MiniMenu;
