import BoorivaStoreBigText from "./boorivaStoreBigText/BoorivaStoreBigText";
import BoorivaStoreIcons from "./boorivaStoreIcons/BoorivaStoreIcons";
import BoorivaStoreText from "./boorivaStoreText/BoorivaStoreText";
import BoorivaStoreImg from "./boorivaStoreImg/boorivaStoreImg";
import Subtitle from "./subtitle/Subtitle";

import styles from "./boorivaStore.module.sass";

const BoorivaStore = () => {
  return (
    <div className={styles.boorivaStore + " wrapper"}>
      <div className={styles.boorivaStoreCommon}>
        <BoorivaStoreText />
        <div className={styles.boorivaStoreCommon2}>
          <Subtitle />
          <BoorivaStoreIcons />
        </div>
      </div>
      <div className={styles.boorivaStoreCommDisp}>
        <BoorivaStoreImg />
        <BoorivaStoreBigText />
      </div>
    </div>
  );
};

export default BoorivaStore;
