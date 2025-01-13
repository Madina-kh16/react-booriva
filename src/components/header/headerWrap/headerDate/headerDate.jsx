import HeaderAdress from "./headerAdress/HeaderAdress";
import HeaderNumber from "./headerNumber/HeaderNumber";

import styles from "./HeaderDate.module.sass";

const HeaderDate = () => {
  return (
    <div className={styles.headerDate}>
      <HeaderAdress />
      <HeaderNumber />
    </div>
  );
};

export default HeaderDate;
