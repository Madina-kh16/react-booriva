import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import qs from "qs";

import HeartCrowd from "../../assets/img/icons/heartCrowd";
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
  
  const [crowd, setCrowd] = useState(false);
  const location = useLocation();

  return (
    <div
    className={styles.newItemsCardItem}
    style={{ width: widthItem, maxWidth: maxWidthItem }}
    >
      <div
        className={styles.newItemsCardItemCommon}
        style={{ maxWidth: maxWidth }}
      >
        <Link 
        to={qs.parse(location.search.substring(1)).menuId ? `/productPage?id=${id}` : `/catalog?menuId=000`} 
        className={styles.newItemsCardItemImg}>
          <img src={images} style={{ width: widthImg, height: higthImg}} />
        </Link>
        {
          crowd ? 
          <div className={styles.newItemsCardItemHeart} onClick={() => setCrowd(false)}>
            <HeartCrowd />
          </div>
          :
          <div className={styles.newItemsCardItemHeart} onClick={() => setCrowd(true)}>
            <Heart />
          </div>
        }
      </div>
      <Link to={`/productPage?id=${id}`} className={styles.newItemsCardItemSubtitle}>
        <div className={styles.newItemsCardItemText}>{name}</div>
        <div className={styles.newItemsCardItemPrice}>{price + " ₽"}</div>
      </Link>
    </div>
  );
};

export default Card;
