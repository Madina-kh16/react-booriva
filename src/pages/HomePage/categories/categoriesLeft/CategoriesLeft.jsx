import CategoriesLeftSmall from "./categoriesLeftSmall/CategoriesLeftSmall";
import pinkShirt from "../../../../assets/img/images/pinkShirt.png";
import shirts from "../../../../assets/img/images/shirts.png";

import styles from "./CategoriesLeft.module.sass";

const CategoriesLeft = () => {
  return (
    <div className={styles.categoriesLeft}>
      <div className={styles.categoriesLeftBig}>
        <div className={styles.categoriesLeftShirt}>
          <img src={shirts} />
        </div>
        <div className={styles.categoriesLeftPink}>
          <div className={styles.categoriesLeftPinkImg}>
            <img src={pinkShirt} />
          </div>
          <div className={styles.categoriesLeftPinkText}>ФУТБОЛКА</div>
        </div>
      </div>
      <CategoriesLeftSmall />
    </div>
  );
};

export default CategoriesLeft;
