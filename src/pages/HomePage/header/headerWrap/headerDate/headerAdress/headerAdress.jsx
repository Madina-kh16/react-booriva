import HeaderMapLogo from "../../../../../../assets/img/icons/headerMapLogo";

import styles from "./headerAdress.module.sass";

const HeaderAdress = () => {
  return (
    <div className={styles.headerAdress}>
      <HeaderMapLogo />
      <div className={styles.headerAdressStreet}>Киев, Нижний вал, 37</div>
    </div>
  );
};

export default HeaderAdress;
