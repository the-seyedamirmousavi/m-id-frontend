import styles from "./HeaderButton.module.css";

const HeaderButton = ({ title, onClick }) => {
  return (
    <button className={styles.headerButton}>
      {title}
    </button>
  );
};

export default HeaderButton;
