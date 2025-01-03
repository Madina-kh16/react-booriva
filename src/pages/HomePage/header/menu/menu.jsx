import styles from "./menu.module.sass";

const Menu = () => {
  return (
    <div className={styles.menuItems + " wrapper"}>
      <div className="menuItem">Новинки</div>
      <div className="menuItem">Платья</div>
      <div className="menuItem">Верх</div>
      <div className="menuItem">Низ</div>
      <div className="menuItem">куртки</div>
      <div className="menuItem">Мелочи</div>
      <div className="menuItem">Костюмы</div>
      <div className="menuItem">#Boorivagirls</div>
    </div>
  );
};

export default Menu;
