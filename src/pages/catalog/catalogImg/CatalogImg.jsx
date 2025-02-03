import jacket from "../../../assets/img/images/jacketWord.png";

import styles from "./CatalogImg.module.sass";

const CatalogImg = () => {
  return (
    <div className={styles.catalogImg}>
      <img src={jacket} alt="" />
    </div>
  );
};

export default CatalogImg;
