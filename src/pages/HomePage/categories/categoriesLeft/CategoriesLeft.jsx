import CategoriesLeftSmall from "./categoriesLeftSmall/CategoriesLeftSmall";
import pinkShirt from "../../../../assets/img/images/pinkShirt.png";
import longShirt from "../../../../assets/img/images/longShirt.png";
import shirts from "../../../../assets/img/images/shirts.png";
import Button from "../../../../assets/img/images/button.png";

import styles from "./CategoriesLeft.module.sass";
import { Link } from "react-router-dom";

const CategoriesLeft = () => {
  return (
    <div className={styles.categoriesLeft}>
      <div className={styles.categoriesLeftBig}>
        <Link className={styles.categoriesLeftShirt}>
          <img src={shirts} />
        </Link>
        <Link className={styles.categoriesLeftShirtLong}>
          <img src={longShirt} />
        </Link>
        <Link className={styles.categoriesLeftPink}>
          <div className={styles.categoriesLeftPinkImg}>
            <img src={pinkShirt} />
          </div>
          <div className={styles.categoriesLeftPinkText}>ФУТБОЛКА</div>
        </Link>
      </div>
      <CategoriesLeftSmall />
    </div>
  );
};

export default CategoriesLeft;
