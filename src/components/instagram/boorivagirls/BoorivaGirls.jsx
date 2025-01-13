import clothes from "../../../assets/img/images/boorivaInstagramClothes.png";
import jacket from "../../../assets/img/images/boorivaInstagramJacket.png";

import styles from "./BoorivaGirls.module.sass";

const BoorivaGirls = () => {
  return (
    <div className={styles.instagramBoorivaGirls}>
      <div className={styles.instagramBoorivaGirlsImages}>
        <div className={styles.instagramBoorivaGirlsImagesThings}>
          <img src={clothes} />
        </div>
        <div className={styles.instagramBoorivaGirlsImagesJacket}>
          <img src={jacket} />
        </div>
      </div>
      <div className={styles.instagramBoorivaGirlsDesc}>
        <div className={styles.instagramBoorivaGirlsTitle}>#boorivagirls</div>
        <div className={styles.instagramBoorivaGirlsText}>
          Ставь тэг чтобы быть в нашей тусовке.
        </div>
      </div>
    </div>
  );
};

export default BoorivaGirls;
