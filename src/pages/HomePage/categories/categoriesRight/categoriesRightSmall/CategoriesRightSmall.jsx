import pinkDress from "../../../../../assets/img/images/pinkDress.png";
import pinkSuit from "../../../../../assets/img/images/pinkSuit.png";
import dresses from "../../../../../assets/img/images/dresses.png";
import suits from "../../../../../assets/img/images/suits.png";

import styles from "./CategoriesRightSmall.module.sass";

const CategoriesRightSmall = () => {
  return (
    <div className={styles.categoriesRightSmall}>
      <div className={styles.categoriesRightSmallDresses}>
        <div className={styles.categoriesRightSmallDressesImg}>
          <img src={dresses} />
        </div>
        <div className={styles.categoriesRightSmallPinkDresses}>
          <div className={styles.categoriesRightSmallPinkImg}>
            <img src={pinkDress} />
          </div>
          <div className={styles.categoriesRightSmallPinkDressesText}>
            ПЛАТЬЯ
          </div>
        </div>
      </div>
      <div className={styles.categoriesRightSmallSuits}>
        <div className={styles.categoriesRightSmallSuitsImg}>
          <img src={suits} />
        </div>
        <div className={styles.categoriesRightSmallPinkSuits}>
          <div className={styles.categoriesRightSmallPinkImg}>
            <img src={pinkSuit} />
          </div>
          <div className={styles.categoriesRightSmallPinkSuitsText}>
            КОСТЮМЫ
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesRightSmall;
