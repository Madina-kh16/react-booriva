import CategoriesLeftSmall from "./categoriesLeftSmall/CategoriesLeftSmall";
import pinkShirt from "../../../../assets/img/images/pinkShirt.png";
import longShirt from "../../../../assets/img/images/longShirt.png";
import shirts from "../../../../assets/img/images/shirts.png";

import styles from "./CategoriesLeft.module.sass";
import { Link } from "react-router-dom";

const CategoriesLeft = () => {
  return (
    <Link to={"catalog?categoryId=ab0005"} className={styles.categoriesLeft}>
      <div className={styles.categoriesLeftBig}>
        <div className={styles.categoriesLeftShirt}>
          <img src={shirts} />
        </div>
        <div className={styles.categoriesLeftShirtLong}>
          <img src={longShirt} />
        </div>
        <div className={styles.categoriesLeftPink}>
          <div className={styles.categoriesLeftPinkImg}>
            <img src={pinkShirt} />
          </div>
          <div className={styles.categoriesLeftPinkText}>ФУТБОЛКА</div>
        </div>
      </div>
      <CategoriesLeftSmall />
    </Link>
  );
};

export default CategoriesLeft;
