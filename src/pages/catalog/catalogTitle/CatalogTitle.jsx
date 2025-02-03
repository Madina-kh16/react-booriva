import Subtitle from "../../../components/subtitle/Subtitle";
import Title from "../../../components/title/Title";

import styles from "./CatalogTitle.module.sass";

const CatalogTitle = ({ title, subtitle }) => {
  return (
    <div className={styles.catalogMainTitle}>
      <Title title={title} />
      <Subtitle subtitle={subtitle} />
    </div>
  );
};

export default CatalogTitle;
