import HeaderMapLogo from "../../../../../assets/img/icons/headerMapLogo";

import styles from "./HeaderAdress.module.sass";

const HeaderAdress = () => {
  return (
    <div className={styles.headerAdress}>
      <HeaderMapLogo />
      <a
        href="https://maps.app.goo.gl/Tsj7uVjBsnUTFzif9"
        target="_blank"
        className={styles.headerAdressStreet}
      >
        Пролетар. кечесу Гр.
      </a>
    </div>
  );
};

export default HeaderAdress;
