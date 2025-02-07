import { useState } from "react";

import Dress from "../../../assets/img/images/dressTransparent.png";
import Sweater from "../../../assets/img/images/sweatshirt.png";
import Bomber from "../../../assets/img/images/bomber.png";
import Heart from "../../../assets/img/icons/heart";
import Card from "../../../components/card/Card";
import Headline from "./headline/Headline";

import styles from "./NewItems.module.sass";

const NewItems = () => {
  const [card, setCard] = useState([
    {
      id: "001",
      name: "Бомбер Gone Crazy хаки",
      price: "1 099₴",
      images: Sweater,
    },
    {
      id: "002",
      name: "Бомбер Gone Crazy хаки",
      price: "1 299₴",
      images: Dress,
    },
    {
      id: "003",
      name: "Бомбер Gone Crazy хаки",
      price: "2 499₴",
      images: Bomber,
    },
  ]);
  
  return (
    <div className={styles.newItems}>
      <Headline />
      <div className={styles.newItemsCards}>
        {card.map(({ name, id, price, images }) => {
          return (
            <Card
              name={name}
              key={id}
              price={price}
              images={images}
              widthImg={"350px"}
            />
          );
        })}
        <div className={styles.newItemsCardItemNone}>
          <div className={styles.newItemsCardItemCommon}>
            <div className={styles.newItemsCardItemImg}>
              <img src={Dress} />
            </div>
            <div className={styles.newItemsCardItemHeart}>
              <Heart />
            </div>
          </div>
          <div className={styles.newItemsCardItemSubtitle}>
            <div className={styles.newItemsCardItemText}>
              Бомбер Gone Crazy хаки
            </div>
            <div className={styles.newItemsCardItemPrice}>899 ₴</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewItems;
