import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import Delivery from "../../components/delivery/Delivery";
import Button from "../../components/button/Button";

import styles from "./ProductPage.module.sass";

const ProductPage = () => {
  const [productCard, setProductCard] = useState([
    {
      id: "y005",
      name: "Рубашка оверсайз",
      price: "2 599" + " ₴",
      news: true,
      categoryId: "ab002",
      menuId: "002",
      desc: "Уход: Ручная стирка при максимальной температуре 40ºС, Не отбеливать, Машинная сушка запрещена, Глажение при 110ºС, Профессиональная сухая чистка. Мягкий режим.",
      details: " 65% полиэстер, 35% хлопок. Страна-производитель: ВЬЕТНАМ",
      images: [
        "https://i.ibb.co/7rv6xWm/1.jpg",
        "https://i.ibb.co/4t6DcJz/2.jpg",
        "https://i.ibb.co/0nT7QWx/3.jpg",
        "https://i.ibb.co/vhyJDdK/4.jpg",
      ],
    },
  ]);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [direc, setDirec] = useState(window.length < 811);
  return (
    <div className={styles.productPage}>
      <div className={styles.productPageSwip}>
        {productCard.map(({ images }) => {
          return (
            <div className={styles.productPageSwipers}>
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
              >
                <SwiperSlide className={styles.slideBig}>
                  <img src={images[0]} style={{ width: "100vw" }} />
                </SwiperSlide>
                <SwiperSlide className={styles.slideBig}>
                  <img src={images[1]} style={{ width: "100vw" }} />
                </SwiperSlide>
                <SwiperSlide className={styles.slideBig}>
                  <img src={images[2]} style={{ width: "100vw" }} />
                </SwiperSlide>
                <SwiperSlide className={styles.slideBig}>
                  <img src={images[3]} style={{ width: "100vw" }} />
                </SwiperSlide>
              </Swiper>
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                direction={"vertical"}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className={styles.mySwiper}
                style={{ width: "100%", maxWidth: "96px" }}
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
          );
        })}
        {productCard.map(({ id, name, price, desc, details }) => {
          return (
            <div className={styles.productPageDesc} id={id}>
              <div className={styles.productPageTitle}>{name}</div>
              <div className={styles.productPagePrice}>{price}</div>
              <div className={styles.productPageSizes}>
                <div className={styles.productPageSizesText}>
                  Выбрать размер:
                </div>
                <div className={styles.productPageSizesItems}>
                  <div className={styles.productPageSizesItem}>XS — S</div>
                  <div className={styles.productPageSizesItem}>S — M</div>
                  <div className={styles.productPageSizesItem}>M — L</div>
                  <div className={styles.productPageSizesItem}>L — XL</div>
                </div>
              </div>
              <div className={styles.productPageBtn}>
                <Button text={"в корзину"} widthImg={"219px"} />
              </div>
              <div className={styles.productPageText}>{desc}</div>
              <div className={styles.productPageCompound}>
                <span className={styles.productPageSpan}>Состав:</span>
                {details}
              </div>
            </div>
          );
        })}
      </div>
      <Delivery />
    </div>
  );
};

export default ProductPage;
