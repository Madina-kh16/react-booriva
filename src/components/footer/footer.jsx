import FooterOurAddress from "./footerOurAddress/FooterOurAddress";
import FooterNetworks from "./footerNetworks/FooterNetworks";
import FooterFeedback from "./footerFeedback/FooterFeedback";
import FooterInfos from "./footerInfos/FooterInfos";
import FooterLogo from "./footerLogo/FooterLogo";

import styles from "./Footer.module.sass";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerWrap + " wrapper"}>
        <FooterLogo />
        <FooterInfos />
        <FooterOurAddress />
        <FooterNetworks />
        <FooterFeedback />
      </div>
    </div>
  );
};

export default Footer;
