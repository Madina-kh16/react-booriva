import { Link } from "react-router-dom";

import NewCollection from "./newCollection/newCollection";
import MiniMenu from "../../components/miniMenu/MiniMenu";
import BoorivaStore from "./boorivaStore/BoorivaStore";
import TopProducts from "./topProducts/TopProducts";
import Button from "../../components/button/Button";
import Categories from "./categories/Categories";
import NewItems from "./newItems/NewItems";

import styles from "./HomePage.module.sass";

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <Categories />
      <MiniMenu />
      <NewItems />
      <Link to={"/catalog"} className={styles.button}>
        <Button text={"Смотреть всё"} widthImg={"180px"} margin={"0 auto"} />
      </Link>
      <NewCollection />
      <BoorivaStore />
      <TopProducts />
    </div>
  );
};

export default HomePage;
