import { Link } from "react-router-dom";

import HeaderBoorivaLogo from "../../../../../assets/img/icons/headerBoorivaLogo";
import HeaderPhoneLogo from "../../../../../assets/img/icons/headerPhoneLogo";

import styles from "./HeaderNumber.module.sass";

const HeaderNumber = () => {
  return (
    <div className={styles.m}>
      <div className={styles.headerNumber}>
        <div className={styles.headerNumberLogo}>
          <HeaderPhoneLogo />
        </div>
        <a href="tel:+79999999999" className={styles.headerPhoneNumber}>
          +7(999) 999 99 99
        </a>
      </div>
      <Link to={"/"} className={styles.headerBooriva}>
        <HeaderBoorivaLogo />
      </Link>
    </div>
  );
};

export default HeaderNumber;
