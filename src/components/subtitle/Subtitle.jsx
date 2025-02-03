import Vector from "../../assets/img/icons/new_items_vector";

import styles from "./Subtitle.module.sass";

const Subtitle = ({ subtitle }) => {
  return (
    <div className={styles.catalogSubtitle}>
      <span className={styles.catalogSubtitleText}>{subtitle}</span>
      <div className={styles.catalogSubtitleVector}>
        <Vector />
      </div>
    </div>
  );
};

export default Subtitle;
