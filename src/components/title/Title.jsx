import styles from "./Title.module.sass";

const Title = ({ title }) => {
  return <h1 className={styles.catalogTitle}>{title}</h1>;
};

export default Title;
