import NewItemsVector from "../../../../assets/img/icons/new_items_vector";
import NewItemsBlack from "../../../../assets/img/icons/new_items_black";
import NewItemsPink from "../../../../assets/img/icons/new_items_pink";

import styles from "./Headline.module.sass";

const Headline = () => {
  return (
    <div className={styles.headlineBox}>
      <div className={styles.newItemsBox}>
        <NewItemsPink />
        <div className={styles.vectorBox}>
          <NewItemsBlack />
          <NewItemsVector />
        </div>
      </div>
    </div>
  );
};

export default Headline;
