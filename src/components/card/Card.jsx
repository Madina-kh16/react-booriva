import { Link } from "react-router-dom";

import Heart from "../../assets/img/icons/heart";

import styles from "./Card.module.sass";
const Card = ({
  id,
  name,
  price,
  images,
  widthImg,
  higthImg,
  maxWidth,
  widthItem,
  maxWidthItem,
}) => {
  return (
    <Link
    to={`/productPage?id=${id}`}
    className={styles.newItemsCardItem}
    style={{ width: widthItem, maxWidth: maxWidthItem }}
    >
      <div
        className={styles.newItemsCardItemCommon}
        style={{ maxWidth: maxWidth }}
      >
        <div className={styles.newItemsCardItemImg}>
          <img src={images} style={{ width: widthImg, height: higthImg}} />
        </div>
        <div className={styles.newItemsCardItemHeart}>
          <Heart />
        </div>
      </div>
      <div className={styles.newItemsCardItemSubtitle}>
        <div className={styles.newItemsCardItemText}>{name}</div>
        <div className={styles.newItemsCardItemPrice}>{price}</div>
      </div>
    </Link>
  );
};

export default Card;
