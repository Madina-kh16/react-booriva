import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { getSubmenuItems } from "../../../services/submenu";

import styles from "./Submenu.module.sass";

const Submenu = ({ isShow, setIsShow, menuId }) => {
  const [submenu, setSubmenu] = useState([]);

  useEffect(() => {
   const data = getSubmenuItems(menuId);
   data.then((res) => setSubmenu(res))
  }, [menuId]);

  return (
    <ul
      className={styles.submenu + " wrapper " + (isShow ? styles.show : styles.hidden)}
      onMouseEnter={() => setIsShow(true)}
      onMouseLeave={() => setIsShow(false)}
    >
      <div className={styles.submenuItems}>
        {submenu.map(({ id,  name}) => (
          <li key={id}>
            <Link to={`/catalog?categoryId=${id}`} className={styles.submenuItem} key={id}>
              {name}
            </Link>
          </li>
        ))}
      </div>
    </ul>
  );
};

export default Submenu;
