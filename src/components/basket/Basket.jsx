import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { BasketOpen } from "../../App";
import { getProductCard } from "../../services/productCard";

import SmallCross from "../../assets/img/icons/smallCross";
import Cross from "../../assets/img/icons/cross";

import Button from "../button/Button";

import styles from "./Basket.module.sass";

const Basket = ({ setCart, cart }) => {
  const [products, setProducts] = useState([]);
  const { isBasketOpen, setIsBasketOpen } = useContext(BasketOpen);

  const sendData = async (cart, i, products) => {
    if (i < cart.length) {
      const data = await getProductCard(cart[i]);
      products.push(data);
      if (i < cart.length - 1) {
        return sendData(cart, i + 1, products);
      } else {
        return products;
      }
    } else {
      return [];
    }
  };

  useEffect(() => {
    const items = sendData(cart, 0, []);
    items.then((res) => setProducts(res));
  }, [cart]);

  return (
    <div className={styles.basketWrap}>
      <div
        className={
          styles.backdrop + " " + (isBasketOpen && styles.backdropOpen)
        }
        onClick={() => setIsBasketOpen(false)}
      ></div>
      <div
        className={styles.basket + " " + (isBasketOpen && styles.basketOpen)}
      >
        <div
          className={styles.basketCross}
          onClick={() => setIsBasketOpen(false)}
        >
          <Cross />
        </div>
        <div className={styles.basketMain}>
          <h2 className={styles.basketTitle}>Корзина</h2>
          <div className={styles.basketCommon}>
            {products.map(([item]) => {
              return (
                <div className={styles.basketProducts} key={item.id}>
                  <div className={styles.basketImg}>
                    <img src={item.images} />
                  </div>
                  <div className={styles.basketDescWrap}>
                    <div className={styles.basketDesc}>
                      <div className={styles.basketDescTitle}>{item.name}</div>
                      <div className={styles.basketDescSubtitle}>S — M</div>
                      <div className={styles.basketDescPrice}>
                        {item.price + " ₽"}
                      </div>
                    </div>
                    <div
                      className={styles.basketSmallCross}
                      onClick={() =>
                        setCart(cart.filter((id) => id !== item.id))
                      }
                    >
                      <SmallCross />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.basketPayment}>
          <div className={styles.basketPaymentWrap}>
            <div className={styles.basketPaymentTitleOrder}>
              Cумма заказа:{" "}
              <span className={styles.basketPaymentSubtitle}>4 998 ₴</span>
            </div>
            <div className={styles.basketPaymentTitleDelivery}>
              Стоимость доставки:{" "}
              <span className={styles.basketPaymentSubtitle}>бесплатоно</span>
            </div>
          </div>
          <div className={styles.basketPaymentMain}>
            К оплате: . . . . . . . . . .{" "}
            <span className={styles.basketPaymentMainPrice}>4 998 ₽</span>
          </div>
        </div>
        <Link className={styles.basketBtn} to={"/"}>
          <Button
            margin={"0 auto"}
            widthImg={"160px"}
            text={"Оформить заказ"}
            fontSize={"12px"}
          />
        </Link>
      </div>
    </div>
  );
};

export default Basket;

// <div className={styles.basketProducts} key={item.id}>
//     <div className={styles.basketImg}>
//         <img src={item.images} />
//     </div>
//     <div className={styles.basketDesc}>
//         <div className={styles.basketDescTitle}>
//             {item.name}
//         </div>
//         <div className={styles.basketDescSubtitle}>
//             kg;l
//         </div>
//         <div className={styles.basketDescPrice}>
//             {item.price}
//         </div>
//     </div>
//     <div className={styles.basketSmallCross}>
//         <SmallCross/>
//     </div>
// </div>

// {
//     id: "001",
//     name: "Бомбер Gone Crazy хаки",
//     price: "2 499₽",
//     size: "S — M",
//     images: bomber,
//   },
//   {
//     id: "002",
//     name: "Бомбер Gone Crazy хаки",
//     size: "S — M",
//     price: "2 499₽",
//     images: bomber,
//   },
//   {
//     id: "003",
//     name: "Бомбер Gone Crazy хаки",
//     size: "S — M",
//     price: "2 499₽",
//     images: bomber,
//   },
