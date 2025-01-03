import HeaderBoorivaLogo from "../../../../../../assets/img/icons/headerBoorivaLogo";
import HeaderPhoneLogo from "../../../../../../assets/img/icons/headerPhoneLogo";

import styles from "./headerNumber.module.sass";

const HeaderNumber = () => {
  return (
    <div className={styles.m}>
      <div className={styles.headerNumber}>
        <HeaderPhoneLogo />
        <div className={styles.headerPhoneNumber}>+7(999) 999 99 99</div>
      </div>
      <div className={styles.headerBooriva}>
        <HeaderBoorivaLogo />
      </div>
    </div>
  );
};

export default HeaderNumber;
