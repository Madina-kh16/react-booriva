import HeaderAdress from "./headerAdress/headerAdress";
import HeaderNumber from "./headerNumber/headerNumber";

import styles from "./headerDate.module.sass";

const HeaderDate = () => {
  return (
    <div className={styles.headerDate}>
      <HeaderAdress />
      <HeaderNumber />
    </div>
  );
};

export default HeaderDate;
