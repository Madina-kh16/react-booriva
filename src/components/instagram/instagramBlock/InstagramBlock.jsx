import clothes from "../../../assets/img/images/boorivaInstagramClothes.png";
import jacket from "../../../assets/img/images/boorivaInstagramJacket.png";
import shirt from "../../../assets/img/images/boorivaInstagramShirt.png";
import cloak from "../../../assets/img/images/boorivaInstagramCloak.png";

import styles from "./InstagramBlock.module.sass";

const InstagramBlock = () => {
  return (
    <div className={styles.instagramBlock}>
      <div className={styles.instagramFirst}>
        <div className={styles.instagramTitle}>Instagram</div>
        <div className={styles.instagramText}>
          Мы в экстазе, когда ты нас отмечаешь) Отмечай плз чаще
        </div>
      </div>
      <div className={styles.instagramImagesWrap}>
        <div className={styles.instagramShirt}>
          <img src={shirt} />
        </div>
        <div className={styles.instagramRaincoat}>
          <img src={cloak} />
        </div>
      </div>
      <div className={styles.instagramImagesWrapTwo}>
        <div className={styles.instagramThings}>
          <img src={clothes} />
        </div>
        <div className={styles.instagramJacket}>
          <img src={jacket} />
        </div>
      </div>
      <div className={styles.instagramThingsTwo}>
        <img src={clothes} />
      </div>
    </div>
  );
};

export default InstagramBlock;
