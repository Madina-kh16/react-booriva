import { Link } from "react-router-dom";

import WishListHeart from "../../assets/img/icons/wishListHeart";
import Subtitle from "../../components/subtitle/Subtitle";
import Delivery from "../../components/delivery/Delivery";
import Button from "../../components/button/Button";
import Title from "../../components/title/Title";

import styles from "./WishListEmpty.module.sass";

const WishListEmpty = () => {
  return (
    <div className={styles.wishListEmpty}>
      <div className={styles.wishListTitle}>
        <Title title={"список желаний"} />
        <Subtitle subtitle={"твой тайный список желаний"} />
      </div>
      <div className={styles.wishListWrap}>
        <div className={styles.wishListHeart}>
          <WishListHeart />
        </div>
        <div className={styles.wishListSubtitle}>
          Похоже тебе еще ничего не запало в сердечко....
        </div>
      </div>
      <Link to={"/"} className={styles.wishListBtn}>
        <Button text={"На главную"} widthImg={"273px"} margin={"0 auto"} />
      </Link>
      <div className={styles.wishListDelivery}>
        <Delivery />
      </div>
    </div>
  );
};

export default WishListEmpty;
