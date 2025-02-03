import { Link } from "react-router-dom";
import Heart from "../../assets/img/icons/heart";

import styles from "./Card.module.sass";

const Card = ({
  id,
  price,
  photo,
  widthImg,
  higthImg,
  maxWidth,
  widthItem,
  descriptoin,
  maxWidthItem,
}) => {
  return (
    <Link
      to={"/productPage"}
      className={styles.newItemsCardItem}
      id={id}
      style={{ width: widthItem, maxWidth: maxWidthItem }}
    >
      <div
        className={styles.newItemsCardItemCommon}
        style={{ maxWidth: maxWidth }}
      >
        <div className={styles.newItemsCardItemImg}>
          <img src={photo} style={{ width: widthImg, higthImg: higthImg }} />
        </div>
        <div className={styles.newItemsCardItemHeart}>
          <Heart />
        </div>
      </div>
      <div className={styles.newItemsCardItemSubtitle}>
        <div className={styles.newItemsCardItemText}>{descriptoin}</div>
        <div className={styles.newItemsCardItemPrice}>{price}</div>
      </div>
    </Link>
  );
};

export default Card;
