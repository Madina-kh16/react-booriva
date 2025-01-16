import styles from "./Menu.module.sass";

const Menu = () => {
  return (
    <div className={styles.menuItems}>
      <div className={styles.menuItem}>НОВИНКИ</div>
      <div className={styles.menuItem}>ПЛАТЬЯ</div>
      <div className={styles.menuItem}>ВЕРХ</div>
      <div className={styles.menuItem}>НИЗ</div>
      <div className={styles.menuItem}>КУРТКИ</div>
      <div className={styles.menuItem}>МЕЛОЧИ</div>
      <div className={styles.menuItem}>КОСТЮМЫ</div>
      <div className={styles.menuItem}>#BOORIVAGERLS</div>
    </div>
  );
};

export default Menu;
