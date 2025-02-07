// components/TextParagraph.js
import styles from './styles/TextParagraph.module.css';

const TextParagraph = ({ title, paragraph, htmlContent, marginBottom, marginTop,marginLeft,marginRight }) => {
  return (
    <div className={styles.container} style={{ marginBottom, marginTop,marginLeft,marginRight }}>
      <h1 className="m mb-4">{title}</h1>
      <p className={`${styles.textParagraph}`} style={{ whiteSpace: 'pre-line' }}>
        {paragraph}
      </p>
      {htmlContent && <div style={{ marginTop: '30px' }}> {htmlContent}</div>}
    </div>
  );
};

export default TextParagraph;
