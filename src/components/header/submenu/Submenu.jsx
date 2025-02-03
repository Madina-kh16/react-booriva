import { Link } from "react-router-dom";
import { useState } from "react";

import styles from "./Submenu.module.sass";

const Submenu = ({ isShow, setIsShow }) => {
  // const [submenu, setSubmenu] = useState([
  //   {
  //     id: "a000",
  //     menuId: "000",
  //     nameMenu: "новинки",
  //     categories: [],
  //   },
  //   {
  //     id: "a001",
  //     menuId: "001",
  //     nameMenu: "платья",
  //     categories: [],
  //   },
  //   {
  //     id: "a002",
  //     menuId: "002",
  //     nameMenu: "Верх",
  //     categories: [
  //       {
  //         name: "Пиджаки",
  //         id: "ab001",
  //       },
  //       {
  //         name: "Рубашки",
  //         id: "ab002",
  //       },
  //       {
  //         name: "Свитшоты",
  //         id: "ab003",
  //       },
  //       {
  //         name: "Футболки",
  //         id: "ab0005",
  //       },
  //       {
  //         name: "Блузки",
  //         id: "ab006",
  //       },
  //     ],
  //   },
  //   {
  //     id: "a003",
  //     menuId: "003",
  //     nameMenu: "Юбки",
  //     categories: [
  //       {
  //         name: "Джинсовые",
  //         id: "ac001",
  //       },
  //       {
  //         name: "Кожаные",
  //         id: "ac002",
  //       },
  //       {
  //         name: "Макси",
  //         id: "ac004",
  //       },
  //       {
  //         name: "Атласные",
  //         id: "ac0005",
  //       },
  //     ],
  //   },
  //   {
  //     id: "a004",
  //     menuId: "004",
  //     nameMenu: "Верхняя одежда",
  //     categories: [
  //       {
  //         name: "Куртки",
  //         id: "aс001",
  //       },
  //       {
  //         name: "Пальто",
  //         id: "aс002",
  //       },
  //       {
  //         name: "Плащи",
  //         id: "aс003",
  //       },
  //       {
  //         name: "Косухи",
  //         id: "aс004",
  //       },
  //     ],
  //   },
  //   {
  //     id: "a005",
  //     menuId: "005",
  //     nameMenu: "Мелочи",
  //     categories: [],
  //   },
  //   {
  //     id: "a006",
  //     menuId: "006",
  //     nameMenu: "Костюмы",
  //     categories: [
  //       {
  //         name: "Костюмы с юбкой",
  //         id: "af001",
  //       },
  //       {
  //         name: "Классические",
  //         id: "af002",
  //       },
  //       {
  //         name: "Трикотажные",
  //         id: "af003",
  //       },
  //     ],
  //   },
  // ]);
  return (
    <div
      className={
        styles.submenu + " wrapper " + (isShow ? styles.show : styles.hidden)
      }
      onMouseEnter={() => setIsShow(true)}
      onMouseLeave={() => setIsShow(false)}
    >
      <ul className={styles.submenuItems}>
        <Link to="/catalog" className={styles.submenuItem}>
          Пиджаки
        </Link>
        <Link to="/catalog" className={styles.submenuItem}>
          Рубашки
        </Link>
        <Link to="/catalog" className={styles.submenuItem}>
          Свитшоты
        </Link>
        <Link to="/catalog" className={styles.submenuItem}>
          Футболки
        </Link>
        <Link to="/catalog" className={styles.submenuItem}>
          Блузки
        </Link>
        <Link to="/catalog" className={styles.submenuItem}>
          Джинсовые
        </Link>
        <Link to="/catalog" className={styles.submenuItem}>
          Кожаные
        </Link>
      </ul>
    </div>
  );
};

export default Submenu;
