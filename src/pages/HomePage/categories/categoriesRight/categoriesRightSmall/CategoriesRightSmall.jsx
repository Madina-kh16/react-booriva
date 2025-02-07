import pinkDress from "../../../../../assets/img/images/pinkDress.png";
import pinkSuit from "../../../../../assets/img/images/pinkSuit.png";
import dresses from "../../../../../assets/img/images/dresses.png";
import suits from "../../../../../assets/img/images/suits.png";
import longSuit from "../../../../../assets/img/images/longSuit.png";

import styles from "./CategoriesRightSmall.module.sass";
import { Link } from "react-router-dom";

const CategoriesRightSmall = () => {
  return (
    <div className={styles.categoriesRightSmall}>
      <Link to={'/catalog?menuId=001'} className={styles.categoriesRightSmallDresses}>
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
      </Link>
      <Link to={'/catalog?menuId=006'} className={styles.categoriesRightSmallSuits}>
        <div className={styles.categoriesRightSmallSuitsImg}>
          <img src={suits} />
        </div>
        <div className={styles.categoriesRightSmallSuitsLong}>
          <img src={longSuit} />
        </div>
        <div className={styles.categoriesRightSmallPinkSuits}>
          <div className={styles.categoriesRightSmallPinkImg}>
            <img src={pinkSuit} />
          </div>
          <div className={styles.categoriesRightSmallPinkSuitsText}>
            КОСТЮМЫ
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CategoriesRightSmall;
