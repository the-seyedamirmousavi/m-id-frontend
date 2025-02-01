// components/Footer.js
import styles from './styles/textTitle.module.css';

const TextTitle = ({title}) => {
  return (
    <div className={`${styles.container}`}>
        <h1 className={styles.textTitle}>
            {title}
        </h1>
    </div>
  );
};

export default TextTitle;
