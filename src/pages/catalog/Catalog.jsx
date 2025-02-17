import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import qs from "qs";

import { getCatalogData, getCategory } from "../../services/catalog";

import CatalogFilter from "./catalogFilter/CatalogFilter";
import MiniMenu from "../../components/miniMenu/MiniMenu";
import CatalogTitle from "./catalogTitle/CatalogTitle";
import CatalogImg from "./catalogImg/CatalogImg";
import Card from "../../components/card/Card";

import styles from "./Catalog.module.sass";
import { getProductCardAll } from "../../services/productCard";

const Catalog = () => {
  const [card, setCard] = useState([]);
  const [title, setTitle] = useState([]);
  const [subtitle, setSubtitle] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (location.search.length > 0) {
      if (qs.parse(location.search.substring(1)).menuId) {
        const data = getCatalogData(
          qs.parse(location.search.substring(1)).menuId
        );
        data.then((res) => {
          res.products ? setCard(res.products) : setCard([]);
          res.menuName ? setTitle(res.menuName) : setTitle("Пусто");
          res.menuName ? setSubtitle(res.menuName) : setSubtitle("Пусто");
        });
      } else {
        const data = getCategory(
          qs.parse(location.search.substring(1)).categoryId
        );
        data.then((res) => {
          res.products ? setCard(res.products) : setCard([]);
          res ? setTitle(res.menuName) : setTitle("Пусто");
          res ? setSubtitle(res.categoryName) : setSubtitle("Пусто");
        });
      }
    } else {
      getProductCardAll().then((res) => {
        setCard(res);
        setTitle("Всё");
        setSubtitle("Всё");
      });
    }
  }, [location]);

  return (
    <div className="div">
      <div className={styles.catalog + " wrapper"}>
        <div className={styles.catalogTopTitle}>
          <div className={styles.dispMain}>
            <CatalogTitle title={title} subtitle={subtitle} />
          </div>
          <CatalogImg />
          <div className={styles.disp}>
            <CatalogTitle />
          </div>
        </div>
        <div className={styles.hb}>
          <div
            className={
              card.length > 0
                ? qs.parse(location.search.substring(1)).menuId
                  ? styles.catalogFilter
                  : styles.disp2
                : styles.disp2
            }
          >
            <CatalogFilter />
          </div>
          <div className={styles.catalogWraps}>
            {card.length > 0 ? (
              card.map(({ name, price, images, id }) => {
                return card.length != 1 ? (
                  <div className={styles.catalogWrap} key={id}>
                    <Card
                      id={id}
                      name={name}
                      price={price}
                      images={images}
                      widthImg={"100%"}
                      maxWidth={"410px"}
                      maxWidthItem={"inherit"}
                      widthItem={"100%"}
                    />
                  </div>
                ) : (
                  <div className={styles.catalogWrap2} key={id}>
                    <Card
                      id={id}
                      name={name}
                      price={price + " ₽"}
                      images={images}
                      widthImg={"100%"}
                      maxWidth={"410px"}
                      maxWidthItem={"inherit"}
                      widthItem={"100%"}
                    />
                  </div>
                );
              })
            ) : (
              <div className={styles.catalogEmpty}>
                Товаров данной категорий нет
              </div>
            )}
          </div>
        </div>
      </div>
      <MiniMenu />
    </div>
  );
};

export default Catalog;
