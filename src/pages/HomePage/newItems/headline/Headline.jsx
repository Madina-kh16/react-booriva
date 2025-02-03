import NewItemsPink from "../../../../assets/img/icons/new_items_pink";
import NewItemsBlack from "../../../../assets/img/icons/new_items_black";
import NewItemsVector from "../../../../assets/img/icons/new_items_vector";

import styles from "./Headline.module.sass";

const Headline = () => {
  return (
    <div className={styles.headlineBox}>
      <div className={styles.newItemsBox}>
        <NewItemsPink />
        <div className={styles.vectorBox}>
          <NewItemsBlack />
          <NewItemsVector />
        </div>
      </div>
    </div>
  );
};

export default Headline;

// import NewItemsVector from "../../../assets/img/icons/new_items_vector";
// import Tops from "../../../assets/img/icons/tops";

// import styles from "./Headline.module.sass";

// const Headline = ({ margin }) => {
//   return (
//     <div className={styles.headline} style={{ margin: margin }}>
//       <div className={styles.headlineTitleItems}>
//         <div className={styles.headlineTitleItem}>
//           <Tops />
//         </div>
//         <div className={styles.headlineSubtitle}>
//           <div className={styles.headlineSubtitleText}>ТОПЫ</div>
//           <div className={styles.headlineSubtitleVector}>
//             <NewItemsVector />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Headline;
