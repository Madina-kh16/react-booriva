import { useEffect, useState } from "react";
import styles from "./Menu.module.sass";
import { Link } from "react-router-dom";
import { getMenuItems } from "../../../services/menu";

const Menu = ({ setIsShow }) => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    getMenuItems().then((res) => setMenu(res));
  }, []);

  return (
    <ul className={styles.menuItems}>
      {menu.map(({ id, name }) => (
        <li
          className={styles.menuItem}
          key={id}
          onMouseEnter={() => setIsShow(true)}
          onMouseLeave={() => setIsShow(false)}
        >
          <Link to="/catalog" className={styles.list}>
            {name.toUpperCase()}
          </Link>
        </li>
      ))}

      <div className={styles.menuItem}>
        <Link to="/about_us" className={styles.list}>
          #BOORIVAGERLS
        </Link>
      </div>
    </ul>
  );
};

export default Menu;
