import { useState } from "react";

import Subtitle from "../../components/subtitle/Subtitle";
import Delivery from "../../components/delivery/Delivery";
import Title from "../../components/title/Title";
import Card from "../../components/card/Card";

import Sweater from "../../assets/img/images/sweatshirt.png";

import styles from "./WishList.module.sass";

const WishList = () => {
  const [card, setCard] = useState([
    {
      id: "001",
      descriptoin: "Бомбер Gone Crazy хаки",
      price: "1 099₴",
      photo: Sweater,
    },
    {
      id: "002",
      descriptoin: "Бомбер Gone Crazy хаки",
      price: "1 099₴",
      photo: Sweater,
    },
    {
      id: "003",
      descriptoin: "Бомбер Gone Crazy хаки",
      price: "1 099₴",
      photo: Sweater,
    },
  ]);
  return (
    <div className={styles.wishList}>
      <div className={styles.wishListTitle}>
        <Title title={"список желаний"} />
        <Subtitle subtitle={"твой тайный список желаний"} />
      </div>
      <div className={styles.wishListWrap}>
        {card.map(({ descriptoin, id, price, photo }) => {
          return (
            <div className={styles.wishListWrapPage}>
              <Card
                descriptoin={descriptoin}
                key={id}
                price={price}
                photo={photo}
                widthImg={"350px"}
              />
            </div>
          );
        })}
      </div>
      <div className={styles.wishListDelivery}>
        <Delivery />
      </div>
    </div>
  );
};

export default WishList;
