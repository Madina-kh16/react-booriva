import { useEffect, useState } from "react";

import { getMenuItem } from "../../../services/menu";

import Card from "../../../components/card/Card";
import Headline from "./headline/Headline";

import styles from "./NewItems.module.sass";

const NewItems = () => {
  const [card, setCard] = useState([]);

  useEffect(() => {
    getMenuItem().then((res) => setCard(res.slice(0, 4)))
  }, [])

  return (
    <div className={styles.newItems}>
      <Headline />
      <div className={styles.newItemsCards}>
        {card.map(({ name, id, price, images }) => {
            return (
              <Card
                name={name}
                key={id}
                id={'000'}
                price={price}
                images={images}
                widthImg={"350px"}
              />
            );
          }) 
        }
      </div>
    </div>
  );
};

export default NewItems;