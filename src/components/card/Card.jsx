import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import Heart from "../../assets/img/icons/heart";

import styles from "./Card.module.sass";
import { Select } from "../../App";

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
  const [active, setActive] = useState(false);
  const { select, setSelect } = useContext(Select);

  const onSetActive = () => {
    setActive((prev) => !prev);
    if (!select.includes(id)) {
      setSelect([...select, id]);
    } else {
      setSelect(select.filter((data) => data !== id));
    }
  };

  useEffect(() => {
    setActive(select.some((item) => item === id));
  }, [select, id]);

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
          to={`/productPage?id=${id}`}
          className={styles.newItemsCardItemImg}
        >
          <img src={images} style={{ width: widthImg, height: higthImg }} />
        </Link>
        <div className={styles.newItemsCardItemHeart} onClick={onSetActive}>
          <Heart active={active} />
        </div>
      </div>
      <Link
        to={`/productPage?id=${id}`}
        className={styles.newItemsCardItemSubtitle}
      >
        <div className={styles.newItemsCardItemText}>{name}</div>
        <div className={styles.newItemsCardItemPrice}>{price + " ₽"}</div>
      </Link>
    </div>
  );
};

export default Card;
