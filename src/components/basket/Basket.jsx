import { Link } from "react-router-dom";
import { useState } from "react";

import SmallCross from "../../assets/img/icons/smallCross";
import bomber from '../../assets/img/images/bomber.png'
import Cross from "../../assets/img/icons/cross";

import Button from "../button/Button";

import styles from "./Basket.module.sass";


const Basket = ({isBasketOpen, setIsBasketOpen}) => {
    const [basketProductCard, setBasketProductCard] = useState([
      {
        id: "001",
        name: "Бомбер Gone Crazy хаки",
        price: "2 499₽",
        size: "S — M",
        images: bomber,
      },
      {
        id: "002",
        name: "Бомбер Gone Crazy хаки",
        size: "S — M",
        price: "2 499₽",
        images: bomber,
      },
      {
        id: "003",
        name: "Бомбер Gone Crazy хаки",
        size: "S — M",
        price: "2 499₽",
        images: bomber,
      },
    ])

    return (
        <div className={styles.basketWrap}>
            <div className={styles.backdrop  + ' ' + (isBasketOpen && styles.backdropOpen)} onClick={() => setIsBasketOpen(false)}></div>
            <div className={styles.basket  + ' ' + (isBasketOpen && styles.basketOpen)}>
                <div className={styles.basketCross} onClick={() => setIsBasketOpen(false)}>
                    <Cross />
                </div>
                <div className={styles.basketMain}>
                    <h2 className={styles.basketTitle}>Корзина</h2>
                    <div className={styles.basketCommon}>
                        {basketProductCard.map(({id, name, price, images, size}) => (
                            <div className={styles.basketProducts} key={id}>
                                <div className={styles.basketImg}>
                                    <img src={images} />
                                </div>
                                <div className={styles.basketDesc}>
                                    <div className={styles.basketDescTitle}>
                                        {name}
                                    </div>
                                    <div className={styles.basketDescSubtitle}>
                                        {size}
                                    </div>
                                    <div className={styles.basketDescPrice}>
                                        {price}
                                    </div>
                                </div>
                                <div className={styles.basketSmallCross}>
                                    <SmallCross/>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.basketPayment}>
                    <div className={styles.basketPaymentWrap}>
                        <div className={styles.basketPaymentTitleOrder}>
                            Cумма заказа: <span className={styles.basketPaymentSubtitle}>4 998 ₴</span>
                        </div>
                        <div className={styles.basketPaymentTitleDelivery}>
                            Стоимость доставки: <span className={styles.basketPaymentSubtitle}>бесплатоно</span>
                        </div>
                    </div>
                    <div className={styles.basketPaymentMain}>
                    К оплате: . . . . . . . . . . <span className={styles.basketPaymentMainPrice}>4 998 ₽</span>
                    </div>
                </div>
                <Link className={styles.basketBtn} to={'/'} >
                    <Button margin={'0 auto'} widthImg={'160px'} text={'Оформить заказ'} fontSize={'12px'}/>
                </Link>
            </div>
        </div>
    )
}

export default Basket;