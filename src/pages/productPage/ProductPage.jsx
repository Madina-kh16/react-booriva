import  { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import { getProductCard } from '../../services/productCard';
import { useLocation } from 'react-router-dom';
import qs from 'qs';

import Delivery from "../../components/delivery/Delivery";
import Button from "../../components/button/Button";

import styles from "./ProductPage.module.sass";


const ProductPage = () => {
  const [productCard, setProductCard] = useState([]);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (qs.parse(location.search.substring(1)).id) {
      const data = getProductCard(qs.parse(location.search.substring(1)).id)
      data.then((res) => setProductCard(res))}
    }, [location])
  
  return (
    <div className={styles.productPage}>
        {productCard.map(({ images, id, name, price, desc, details }) => {
          return (
            <div className={styles.productPageSwip} key={id}>
              <div className={styles.productPageSwipers} >
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
              <div className={styles.productPageDesc}>
                <div className={styles.productPageTitle}>{name}</div>
                <div className={styles.productPagePrice}>{price + " ₽"}</div>
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
            </div>
          );
        })}
      <Delivery />
    </div>
  );
};

export default ProductPage;