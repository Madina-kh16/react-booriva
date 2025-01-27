import button from "../../assets/img/images/button.png";

import styles from "./Button.module.sass";

const Button = () => {
  return (
    <div className={styles.button}>
      <div className={styles.buttonImg}>
        <img src={button} />
      </div>
      <div className={styles.buttonText}>СМОТРЕТЬ ВСЕ</div>
    </div>
  );
};

export default Button;
