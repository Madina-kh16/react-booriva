import button from "../../assets/img/images/button.png";

import styles from "./Button.module.sass";

const Button = ({ text, widthImg, margin, fontSize, height }) => {
  return (
    <div className={styles.button} style={{ width: widthImg, margin: margin, height: height }}>
      <div className={styles.buttonImg} style={{ height: height }}>
        <img src={button} />
      </div>
      <div className={styles.buttonText} style={{fontSize: fontSize}}>{text}</div>
    </div>
  );
};

export default Button;
