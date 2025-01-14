import CategoriesRightSmall from "./categoriesRightSmall/CategoriesRightSmall";
import hoodiPink from "../../../../assets/img/images/hoodiPink.png";
import hoodies from "../../../../assets/img/images/hoodies.png";

import styles from "./CategoriesRight.module.sass";

const CategoriesRight = () => {
  return (
    <div className={styles.categoriesRight}>
      <CategoriesRightSmall />
      <div className={styles.categoriesRightBig}>
        <div className={styles.categoriesRightHoodi}>
          <img src={hoodies} />
        </div>
        <div className={styles.categoriesRightPink}>
          <div className={styles.categoriesRightPinkImg}>
            <img src={hoodiPink} />
          </div>
          <div className={styles.categoriesRightPinkText}>ХУДИ</div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesRight;
