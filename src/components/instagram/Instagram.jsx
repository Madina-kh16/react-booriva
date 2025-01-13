import InstagramBlock from "./instagramBlock/InstagramBlock";
import Hoodies from "./hoodies/Hoodies";
import BoorivaGirls from "./boorivagirls/BoorivaGirls";

import styles from "./Instagram.module.sass";

const Instagram = () => {
  return (
    <div className={styles.instagramMain}>
      <div className={styles.wrapper}>
        <div className={styles.instagramMainWrap}>
          <InstagramBlock />
          <Hoodies />
          <BoorivaGirls />
        </div>
      </div>
    </div>
  );
};

export default Instagram;
