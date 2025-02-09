import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getMenuItems } from "../../../services/menu";

import styles from "./Menu.module.sass";

const Menu = ({ setIsShow, setMenuId }) => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    getMenuItems().then((res) => setMenu(res));
  }, []);

  return (
    <ul className={styles.menuItems}>
      {menu.map(({ id, name }) => (
          <Link 
          to={`/catalog?menuId=${id}`} 
          className={styles.menuItem}
          key={id}
          onMouseEnter={() => {setIsShow(true); setMenuId(id)}}
          onMouseLeave={() => setIsShow(false)}
          >
            {name}
          </Link>
      ))}
      <div className={styles.menuItem}>
        <Link to="/about_us" className={styles.list} >
          #BOORIVAGERLS
        </Link>
      </div>
    </ul>
  );
};

export default Menu;
