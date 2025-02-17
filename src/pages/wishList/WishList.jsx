import { useContext, useEffect, useState } from "react";
import { Select } from "../../App";
import { getProductCard } from "../../services/productCard";

import Subtitle from "../../components/subtitle/Subtitle";
import Delivery from "../../components/delivery/Delivery";
import Title from "../../components/title/Title";
import Card from "../../components/card/Card";

import styles from "./WishList.module.sass";

const WishList = () => {
  const [card, setCard] = useState([]);
  const { select } = useContext(Select);

  const setData = async (select, i, product) => {
    if (i < select.length) {
      const data = await getProductCard(select[i]);
      product.push(data);
      if (i < select.length - 1) {
        return setData(select, i + 1, product);
      } else {
        return product;
      }
    } else {
      return [];
    }
  };

  useEffect(() => {
    const item = setData(select, 0, []);
    item.then((res) => setCard(res));
  }, [select]);

  return (
    <div className={styles.wishList}>
      <div className={styles.wishListTitle}>
        <Title title={"список желаний"} />
        <Subtitle subtitle={"твой тайный список желаний"} />
      </div>
      <div className={styles.wishListWrap}>
        {card.map(([item]) => {
          return (
            <div className={styles.wishListWrapPage} key={item.id}>
              <Card
                widthItem={"calc(50% - -160px)"}
                id={item.id}
                name={item.name}
                price={item.price}
                images={item.images}
                widthImg={"350px"}
                maxWidthItem={"inherit"}
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

// {
//   id: "001",
//   name: "Бомбер Gone Crazy хаки",
//   price: "1 099",
//   images: Sweater,
// },
// {
//   id: "002",
//   name: "Бомбер Gone Crazy хаки",
//   price: "1 099",
//   images: Sweater,
// },
// {
//   id: "003",
//   name: "Бомбер Gone Crazy хаки",
//   price: "1 099",
//   images: Sweater,
// },
