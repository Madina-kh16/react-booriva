import { Link } from "react-router-dom";
import footerImg from "../../../assets/img/images/footerImg.png";

import styles from "./NewCollection.module.sass";

const NewCollection = () => {
  return (
    <Link to={"/catalog?menuId=000"} className={styles.newCollection}>
      <img src={footerImg} />
    </Link>
  );
};

export default NewCollection;
