import { Link } from "react-router-dom";
import HeaderHeartLogo from "../../../../../assets/img/icons/headerHeartLogo";

import styles from "./HeaderHeart.module.sass";

const HeaderHeart = () => {
  return (
    <div className={styles.headerHeart}>
      <Link to={"/wishList"}>
        <HeaderHeartLogo />
      </Link>
    </div>
  );
};

export default HeaderHeart;
