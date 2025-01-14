import pinkBottom from "../../../../../assets/img/images/pinkBottom.png";
import pinkTop from "../../../../../assets/img/images/pinkTop.png";
import bottoms from "../../../../../assets/img/images/bottoms.png";
import tops from "../../../../../assets/img/images/tops.png";

import styles from "./CategoriesLeftSmall.module.sass";

const CategoriesLeftSmall = () => {
  return (
    <div className={styles.categoriesLeftSmall}>
      <div className={styles.categoriesLeftSmallBottom}>
        <div className={styles.categoriesLeftSmallBottomImg}>
          <img src={bottoms} />
        </div>
        <div className={styles.categoriesLeftSmallPinkBottom}>
          <div className={styles.categoriesLeftSmallPinkImg}>
            <img src={pinkBottom} />
          </div>
          <div className={styles.categoriesLeftSmallPinkBottomText}>НИЗ</div>
        </div>
      </div>
      <div className={styles.categoriesLeftSmallTop}>
        <div className={styles.categoriesLeftSmallTopImg}>
          <img src={tops} />
        </div>
        <div className={styles.categoriesLeftSmallPinkTop}>
          <div className={styles.categoriesLeftSmallPinkImg}>
            <img src={pinkTop} />
          </div>
          <div className={styles.categoriesLeftSmallPinkTopText}>ВЕРХ</div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesLeftSmall;
