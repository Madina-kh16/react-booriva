import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import styles from "./Submenu.module.sass";
import { getSubmenuItems } from "../../../services/submenu";

const Submenu = ({ isShow, setIsShow }) => {
  const [submenu, setSubmenu] = useState([]);

  useEffect(() => {
    getSubmenuItems().then((res) => setSubmenu(res));
  }, []);

  return (
    <div
      className={
        styles.submenu + " wrapper " + (isShow ? styles.show : styles.hidden)
      }
      onMouseEnter={() => setIsShow(true)}
      onMouseLeave={() => setIsShow(false)}
    >
      <ul className={styles.submenuItems}>
        {submenu.map(({ name, id }) => {
          <Link to="/catalog" className={styles.submenuItem} id={id}>
            {name}
          </Link>;
        })}
      </ul>
    </div>
  );
};

export default Submenu;
