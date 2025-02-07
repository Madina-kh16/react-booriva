import CategoriesRightSmall from "./categoriesRightSmall/CategoriesRightSmall";
import hoodiPink from "../../../../assets/img/images/hoodiPink.png";
import smallHoodi from "../../../../assets/img/images/smallHoodi.png";
import hoodies from "../../../../assets/img/images/hoodies.png";
import smallTop from "../../../../assets/img/images/smallTop.png";
import pinkTop from "../../../../assets/img/images/pinkTop.png";

import styles from "./CategoriesRight.module.sass";
import { Link } from "react-router-dom";

const CategoriesRight = () => {
  return (
    <div className={styles.categoriesRight}>
      <CategoriesRightSmall />
      <div className={styles.categoriesRightSmallWrap}>
        <Link to={'/catalog?menuId=ab002'} className={styles.categoriesRightSmallTop}>
          <div className={styles.categoriesRightSmallTopImg}>
            <img src={smallTop} />
          </div>
          <div className={styles.categoriesRightSmallPinkTop}>
            <div className={styles.categoriesRightSmallPinkImg}>
              <img src={pinkTop} />
            </div>
            <div className={styles.categoriesRightSmallPinkTopText}>ВЕРХ</div>
          </div>
        </Link>
        <Link to={'/catalog?categoryId=ab003'} className={styles.categoriesRightBig}>
          <div className={styles.categoriesRightHoodi}>
            <img src={hoodies} />
          </div>
          <div className={styles.categoriesRightHoodiSmall}>
            <img src={smallHoodi} />
          </div>
          <div className={styles.categoriesRightPink}>
            <div className={styles.categoriesRightPinkImg}>
              <img src={hoodiPink} />
            </div>
            <div className={styles.categoriesRightPinkText}>ХУДИ</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CategoriesRight;
