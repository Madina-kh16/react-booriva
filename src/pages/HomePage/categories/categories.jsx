import CategoriesRight from "./categoriesRight/CategoriesRight";
import CategoriesLeft from "./CategoriesLeft/CategoriesLeft";

import styles from "./Categories.module.sass";

const Categories = () => {
  return (
    <div className={styles.categories}>
      <div className={styles.wrapper}>
        <div className={styles.categoriesWrap}>
          <CategoriesLeft />
          <CategoriesRight />
        </div>
      </div>
    </div>
  );
};

export default Categories;
