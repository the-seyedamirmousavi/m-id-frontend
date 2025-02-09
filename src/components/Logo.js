import styles from "./Logo.module.css"

const Logo = ({ children }) => {
  return (
    <div className={styles.logoContainer}>
      <span className={styles.logoText}>M-ID</span>
      {children && <div className={styles.logoChildren}>{children}</div>}
    </div>
  );
};

export default Logo;