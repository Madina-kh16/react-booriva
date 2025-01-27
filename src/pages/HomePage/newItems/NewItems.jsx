import Dress from "../../../assets/img/images/dressTransparent.png";
import Sweater from "../../../assets/img/images/sweatshirt.png";
import Bomber from "../../../assets/img/images/bomber.png";
import tShirtDress from "../../../assets/img/images/tShirtDresses.png";
import Heart from "../../../assets/img/icons/heart";
import Headline from "./headline/Headline";
import Button from "../../../components/button/Button";

import styles from "./NewItems.module.sass";

const NewItems = () => {
  return (
    <div className={styles.newItems}>
      <Headline />
      <div className={styles.newItemsCards}>
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
        <div className={styles.newItemsCardItem}>
          <div className={styles.newItemsCardItemCommon}>
            <div className={styles.newItemsCardItemSwiter}>
              <img src={Dress} />
              <div className={styles.newItemsCardItemLine}></div>
            </div>
            <div className={styles.newItemsCardItemHeart}>
              <Heart />
            </div>
          </div>
          <div className={styles.newItemsCardItemSubtitle}>
            <div className={styles.newItemsCardItemText}>
              Платье прозрачное в цветочек черное
            </div>
            <div className={styles.newItemsCardItemPrice}>1299₴</div>
          </div>
        </div>
        <div className={styles.newItemsCardItem}>
          <div className={styles.newItemsCardItemCommon}>
            <div className={styles.newItemsCardItemSwiter}>
              <img src={Bomber} />
              <div className={styles.newItemsCardItemLine}></div>
            </div>
            <div className={styles.newItemsCardItemHeart}>
              <Heart />
            </div>
          </div>
          <div className={styles.newItemsCardItemSubtitle}>
            <div className={styles.newItemsCardItemText}>
              Бомбер Gone Crazy хаки
            </div>
            <div className={styles.newItemsCardItemPrice}>2 499₴</div>
          </div>
        </div>
        <div className={styles.newItemsCardItemNone}>
          <div className={styles.newItemsCardItemCommon}>
            <div className={styles.newItemsCardItemSwiter}>
              <div className={styles.mg}>
                <img src={tShirtDress} />
              </div>
              <div className={styles.newItemsCardItemLine}></div>
            </div>
            <div className={styles.newItemsCardItemHeart}>
              <Heart />
            </div>
          </div>
          <div className={styles.newItemsCardItemSubtitle}>
            <div className={styles.newItemsCardItemText}>
              Платье-футболка рыбы в аквариуме
            </div>
            <div className={styles.newItemsCardItemPrice}>899 ₴</div>
          </div>
        </div>
      </div>
      <div className={styles.button}>
        <Button />
      </div>
    </div>
  );
};

export default NewItems;
