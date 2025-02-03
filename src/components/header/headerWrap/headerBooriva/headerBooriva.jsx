import { Link } from "react-router-dom";
import HeaderBoorivaLogo from "../../../../assets/img/icons/headerBoorivaLogo";

import styles from "./HeaderBooriva.module.sass";

const HeaderBooriva = () => {
  return (
    <Link to="/" className={styles.headerBooriva}>
      <HeaderBoorivaLogo />
    </Link>
  );
};

export default HeaderBooriva;
