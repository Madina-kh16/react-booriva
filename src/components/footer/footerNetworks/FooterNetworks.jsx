import FooterInstagram from "../../../assets/img/icons/footerInstagram";
import Facebook from "../../../assets/img/icons/footerFacebook";

import styles from "./FooterNetworks.module.sass";

const FooterNetworks = () => {
  return (
    <div className={styles.footerNetworks}>
      <div className={styles.footerCommon}>СОЦ.СЕТИ</div>
      <div className={styles.footerLogoItems}>
        <div className={styles.footerLogoInst}>
          <FooterInstagram />
        </div>
        <div className={styles.footerLogoFacebook}>
          <Facebook />
        </div>
      </div>
    </div>
  );
};

export default FooterNetworks;
