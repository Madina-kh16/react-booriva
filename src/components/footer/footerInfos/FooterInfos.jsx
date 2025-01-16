import Instagram from "../../../assets/img/icons/footerInstagram";
import Facebook from "../../../assets/img/icons/footerFacebook";

import styles from "./FooterInfos.module.sass";

const FooterInfos = () => {
  return (
    <div className={styles.footerInfos}>
      <div className={styles.footerInfo}>ИНФО</div>
      <div className={styles.footerDataIitems}>
        <div className={styles.footerDataIitemContact}>Контакты</div>
        <div className={styles.footerDataIitem}>Система лояльности</div>
        <div className={styles.footerDataIitem}>Обмен и возврат</div>
        <div className={styles.footerDataIitem}>Доставка и оплата</div>
        <div className={styles.footerLogoItemsBlocks}>
          <div className={styles.footerLogoInst}>
            <Instagram />
          </div>
          <div className={styles.footerLogoFacebook}>
            <Facebook />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterInfos;
