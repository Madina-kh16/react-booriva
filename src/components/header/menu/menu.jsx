import { useState } from "react";
import styles from "./Menu.module.sass";

const Menu = ({ isShow, setIsShow }) => {
  const [menu, setMenu] = useState([
    {
      id: "000",
      name: "Новинки",
      categories: 0,
    },
    {
      id: "001",
      name: "Платья",
      categories: 6,
    },
    {
      id: "002",
      name: "Верх",
      categories: 6,
    },
    {
      id: "003",
      name: "Юбки",
      categories: 5,
    },
    {
      id: "004",
      name: "Верхняя одежда",
      categories: 6,
    },
    {
      id: "005",
      name: "Мелочи",
      categories: 0,
    },
    {
      id: "006",
      name: "Костюмы",
    },
  ]);

  return (
    <div className={styles.menuItems}>
      {menu.map(({ id, name }) => (
        <div
          className={styles.menuItem}
          key={id}
          onMouseEnter={() => setIsShow(true)}
          onMouseLeave={() => setIsShow(false)}
        >
          {name.toUpperCase()}
        </div>
      ))}

      <div className={styles.menuItem}>#BOORIVAGERLS</div>
    </div>
  );
};

export default Menu;
