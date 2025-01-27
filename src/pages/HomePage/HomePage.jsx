import NewCollection from "./newCollection/newCollection";
import BoorivaStore from "./boorivaStore/boorivaStore";
import TopProducts from "./topProducts/TopProducts";
import Categories from "./categories/Categories";
import NewItems from "./newItems/NewItems";
import MiniMenu from "./miniMenu/MiniMenu";

import styles from "./homePage.module.sass";

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <Categories />
      <MiniMenu />
      <NewItems />
      <NewCollection />
      <BoorivaStore />
      <TopProducts />
    </div>
  );
};

export default HomePage;
