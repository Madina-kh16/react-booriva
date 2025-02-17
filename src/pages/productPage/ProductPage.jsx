import { useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import qs from "qs";

import { Active, Select } from "../../App";

import { getProductCard } from "../../services/productCard";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import Delivery from "../../components/delivery/Delivery";
import Button from "../../components/button/Button";

import Heart from "../../assets/img/icons/heart";

import styles from "./ProductPage.module.sass";

const ProductPage = ({ setCart, cart, handleChange }) => {
  const [productCard, setProductCard] = useState([]);
  const { select, setSelect } = useContext(Select);
  const { active, setActive } = useContext(Active);
  const [isActive, setIsActive] = useState(false);
  const [isBlanket] = useState(window.innerWidth < 800);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.search) {
      const data = getProductCard(qs.parse(location.search.substring(1)).id);
      data.then((res) => setProductCard(res));
    } else {
      Navigate("/");
    }
  }, [location]);
  const [items, setItems] = useState([
    { size: "XS — S", id: 1 },
    { size: "S — M", id: 2 },
    { size: "M — L", id: 3 },
    { size: "L — XL", id: 4 },
  ]);

  const addProductinCard = () => {
    if (location.search) {
      const id = qs.parse(location.search.substring(1)).id;
      if (!cart.includes(id)) {
        setCart([...cart, id]);
      }
    }
  };

  const onSetActive = (id) => {
    setActive((prev) => !prev);
    handleChange(id);
  };

  useEffect(() => {
    setActive(
      select.some((item) => item === qs.parse(location.search.substring(1)).id)
    );
  }, [select]);

  return (
    <div className={styles.productPage}>
      {productCard.map(({ images, id, name, price, desc, details }) => {
        return (
          <div className={styles.productPageSwip} key={id}>
            <div className={styles.productPageSwipers}>
              <Swiper
                style={
                  isBlanket
                    ? {
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff",
                        flexDirection: "inherit !important",
                      }
                    : { flexDirection: "column" }
                }
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className={styles.mySwiper2}
              >
                <SwiperSlide className={styles.slideBig}>
                  <img src={images[0]} style={{ width: "100vw" }} />
                  <div
                    className={styles.productPageHeart}
                    onClick={() => onSetActive(id)}
                  >
                    <Heart active={active} />
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.slideBig}>
                  <img src={images[1]} style={{ width: "100vw" }} />
                  <div
                    className={styles.productPageHeart}
                    onClick={() => onSetActive(id)}
                  >
                    <Heart active={active} />
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.slideBig}>
                  <img src={images[2]} style={{ width: "100vw" }} />
                  <div
                    className={styles.productPageHeart}
                    onClick={() => onSetActive(id)}
                  >
                    <Heart active={active} />
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.slideBig}>
                  <img src={images[3]} style={{ width: "100vw" }} />
                  <div
                    className={styles.productPageHeart}
                    onClick={() => onSetActive(id)}
                  >
                    <Heart active={active} />
                  </div>
                </SwiperSlide>
              </Swiper>
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                direction={isBlanket ? "horizontal" : "vertical"}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className={styles.mySwiper}
                style={
                  isBlanket
                    ? { flexDirection: "inherit !important" }
                    : { flexDirection: "column" }
                }
              >
                <SwiperSlide className={styles.slide}>
                  <img src={images[0]} style={{ width: "100vw" }} />
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                  <img src={images[1]} style={{ width: "100vw" }} />
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                  <img src={images[2]} style={{ width: "100vw" }} />
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                  <img src={images[3]} style={{ width: "100vw" }} />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className={styles.productPageDesc}>
              <div className={styles.productPageTitle}>{name}</div>
              <div className={styles.productPagePrice}>{price + " ₽"}</div>
              <div className={styles.productPageSizes}>
                <div className={styles.productPageSizesText}>
                  Выбрать размер:
                </div>

                <div className={styles.productPageSizesItems}>
                  {items.map(({ id, size }) => {
                    return (
                      <div key={id} className={styles.productPageSizesItem}>
                        {size}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className={styles.productPageBtn} onClick={addProductinCard}>
                <Button text={"в корзину"} widthImg={"100%"} height={"100%"} />
              </div>
              <div className={styles.productPageText}>{desc}</div>
              <div className={styles.productPageCompound}>
                <span className={styles.productPageSpan}>Состав:</span>
                {details}
              </div>
            </div>
          </div>
        );
      })}
      <Delivery />
    </div>
  );
};

export default ProductPage;
