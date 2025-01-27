
import Heart from "../../assets/img/icons/heart";
import styles from "./Card.module.sass";

const Card = () => {
  return (
    <div className={styles.newItemsCardItem}>
      <div className={styles.newItemsCardItemCommon}>
        <div className={styles.newItemsCardItemSwiter}>
          <img src={Sweater} />
          <div className={styles.newItemsCardItemLine}></div>
        </div>
        <div className={styles.newItemsCardItemHeart}>
          <Heart />
        </div>
      </div>
      <div className={styles.newItemsCardItemSubtitle}>
        <div className={styles.newItemsCardItemText}>
          Cвитшот вставка клетка
        </div>
        <div className={styles.newItemsCardItemPrice}>1 099₴</div>
      </div>
    </div>
  );
};

export default Card;
