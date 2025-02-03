import button from "../../assets/img/images/button.png";

import styles from "./Button.module.sass";

const Button = ({ text, widthImg, margin }) => {
  return (
    <div className={styles.button} style={{ width: widthImg, margin: margin }}>
      <div className={styles.buttonImg}>
        <img src={button} />
      </div>
      <div className={styles.buttonText}>{text}</div>
    </div>
  );
};

export default Button;
