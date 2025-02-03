import { useState } from "react";

import CatalogFilter from "./catalogFilter/CatalogFilter";
import MiniMenu from "../../components/miniMenu/MiniMenu";
import CatalogTitle from "./catalogTitle/CatalogTitle";
import CatalogImg from "./catalogImg/CatalogImg";
import Card from "../../components/card/Card";

import Sweater from "../../assets/img/images/sweatshirt.png";

import styles from "./Catalog.module.sass";

const Catalog = () => {
  const [card, setCard] = useState([
    {
      id: "001",
      descriptoin: "Бомбер Gone Crazy хаки",
      price: "2 499₴",
      photo: Sweater,
    },
    {
      id: "002",
      descriptoin: "Бомбер Gone Crazy хаки",
      price: "2 499₴",
      photo: Sweater,
    },
    {
      id: "003",
      descriptoin: "Бомбер Gone Crazy хаки",
      price: "2 499₴",
      photo: Sweater,
    },
    {
      id: "004",
      descriptoin: "Бомбер Gone Crazy хаки",
      price: "2 499₴",
      photo: Sweater,
    },
    {
      id: "005",
      descriptoin: "Бомбер Gone Crazy хаки",
      price: "2 499₴",
      photo: Sweater,
    },
    {
      id: "006",
      descriptoin: "Бомбер Gone Crazy хаки",
      price: "2 499₴",
      photo: Sweater,
    },
  ]);
  return (
    <div className="div">
      <div className={styles.catalog + " wrapper"}>
        <div className={styles.catalogTopTitle}>
          <div className={styles.dispMain}>
            <CatalogTitle title={"Верх"} subtitle={"Топы"} />
          </div>
          <CatalogImg />
          <div className={styles.disp}>
            <CatalogTitle />
          </div>
        </div>
        <div className={styles.hb}>
          <div className={styles.catalogFilter}>
            <CatalogFilter />
          </div>
          <div className={styles.catalogWraps}>
            {card.map(({ id, price, descriptoin, photo }) => {
              return (
                <div className={styles.catalogWrap}>
                  <Card
                    descriptoin={descriptoin}
                    key={id}
                    price={price}
                    photo={photo}
                    widthImg={"100%"}
                    higthImg={"499px"}
                    maxWidth={"410px"}
                    maxWidthItem={"inherit"}
                    widthItem={"100%"}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <MiniMenu />
    </div>
  );
};

export default Catalog;
