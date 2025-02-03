import send from "../../assets/img/images/sending.png";
import exchange from "../../assets/img/images/exchange.png";
import done from "../../assets/img/images/done.png";

import styles from "./Delivery.module.sass";

const Delivery = () => {
  return (
    <div className={styles.delivery}>
      <div className={styles.deliveryItems}>
        <div className={styles.deliveryItem}>
          <div className={styles.deliveryItemImg}>
            <img src={send} />
          </div>
          <div className={styles.deliveryItemText}>
            <div className={styles.deliveryItemSend}>Отправка день в день</div>
            <div className={styles.deliveryItemSubtitle}>
              ПРИ ЗАКАЗЕ ДО 1800
            </div>
          </div>
        </div>
        <div className={styles.deliveryItem}>
          <div className={styles.deliveryItemImg}>
            <img src={exchange} />
          </div>
          <div className={styles.deliveryItemText}>
            <div className={styles.deliveryItemEnchange}>
              Легкий возврат/обмен
            </div>
            <div className={styles.deliveryItemSubtitle}>
              {"В течении 14 дней".toUpperCase()}
            </div>
          </div>
        </div>
        <div className={styles.deliveryItem + " posit"}>
          <div className={styles.deliveryItemImg}>
            <img src={done} />
          </div>
          <div className={styles.deliveryItemText}>
            <div className={styles.deliveryItemDone}>Сделано в Москве</div>
            <div className={styles.deliveryItemSubtitle}>ПРЯМ В ГРОЗНОМ</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
