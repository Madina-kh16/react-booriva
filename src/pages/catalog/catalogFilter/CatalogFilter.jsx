import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { getMenuItems } from "../../../services/menu";

import styles from "./CatalogFilter.module.sass";


const CatalogFilter = () => {
  const [item, setItem] = useState([])

  useEffect(() => {
       getMenuItems().then((res) => setItem(res))
  }, [])

  return (
    <div  className={styles.catalogFilter } >
      <div className={styles.catalogFilterCategory}>
        <div className={styles.catalogFilterCategoryTitle}>КАТЕГОРИИ:</div>
        <ul className={styles.catalogFilterCategoryItems}>
          {item.map(({id, name}) => {
            return (
              <Link to={`/catalog?menuId=${id}`} key={id} className={styles.catalogFilterCategoryItem}>
                {name}
              </Link>
            )
          })}
        </ul>
      </div>
      <div className={styles.catalogFilterPrice}>
        <div className={styles.catalogFilterCategoryTitle}>ЦЕНЫ:</div>
        <ul className={styles.catalogFilterCategoryItems}>
          <Link to="/catalog" className={styles.catalogFilterCategoryItem}>
            Все цены
          </Link>
          <Link to="/catalog" className={styles.catalogFilterCategoryItem}>
            до 500
          </Link>
          <Link to="/catalog" className={styles.catalogFilterCategoryItem}>
            500 — 1000
          </Link>
          <Link to="/catalog" className={styles.catalogFilterCategoryItem}>
            1000 — 1500
          </Link>
          <Link to="/catalog" className={styles.catalogFilterCategoryItem}>
            от 1500
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default CatalogFilter;
