import { Link } from "react-router-dom";
import styles from "./CatalogFilter.module.sass";

const CatalogFilter = () => {
  return (
    <div className={styles.catalogFilter}>
      <div className={styles.catalogFilterCategory}>
        <div className={styles.catalogFilterCategoryTitle}>КАТЕГОРИИ:</div>
        <ul className={styles.catalogFilterCategoryItems}>
          <Link to="/catalog" className={styles.catalogFilterCategoryItem}>
            Худи
          </Link>
          <Link to="/catalog" className={styles.catalogFilterCategoryItem}>
            Рубашки
          </Link>
          <Link to="/catalog" className={styles.catalogFilterCategoryItem}>
            Пиджаки
          </Link>
          <Link to="/catalog" className={styles.catalogFilterCategoryItem}>
            Свитшоты
          </Link>
          <Link to="/catalog" className={styles.catalogFilterCategoryItem}>
            Футболки
          </Link>
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
      <div className={styles.catalogFilterSize}>
        <div className={styles.catalogFilterCategoryTitle}>РАЗМЕР:</div>
        <ul className={styles.catalogFilterCategoryItems}>
          <Link to="/catalog" className={styles.catalogFilterCategoryItem}>
            XS — S
          </Link>
          <Link to="/catalog" className={styles.catalogFilterCategoryItem}>
            S — M
          </Link>
          <Link to="/catalog" className={styles.catalogFilterCategoryItem}>
            M — L
          </Link>
          <Link to="/catalog" className={styles.catalogFilterCategoryItem}>
            L — XL
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default CatalogFilter;
