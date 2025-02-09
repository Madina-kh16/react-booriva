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
      name: "Бомбер Gone Crazy хаки",
      price: "1 099",
      images: Sweater,
    },
    {
      id: "002",
      name: "Бомбер Gone Crazy хаки",
      price: "1 099",
      images: Sweater,
    },
    {
      id: "003",
      name: "Бомбер Gone Crazy хаки",
      price: "1 099",
      images: Sweater,
    },
  ]);
  
  return (
    <div className={styles.wishList}>
      <div className={styles.wishListTitle}>
        <Title title={"список желаний"} />
        <Subtitle subtitle={"твой тайный список желаний"} />
      </div>
      <div className={styles.wishListWrap}>
        {card.map(({ name, id, price, images }) => {
          return (
            <div className={styles.wishListWrapPage} key={id}>
              <Card
                widthItem={'calc(50% - -160px)'}
                id={id}
                name={name}
                price={price}
                images={images}
                widthImg={"350px"}
                maxWidthItem={'inherit'}
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
