// components/TextParagraph.js
import styles from './styles/TextParagraph.module.css';

const TextParagraph = ({ title, paragraph, htmlContent, marginBottom, marginTop,marginLeft,marginRight }) => {
  return (
    <div className={styles.container} style={{ marginBottom, marginTop,marginLeft,marginRight }}>
      <h1 className="text-[2.5rem] font-bold text-gray-800 leading-[1.4] mb-4 text-left" style={{
        width : '80%',
        margin: '0 auto'
      }}>{title}</h1>
      <p className={`${styles.textParagraph}`} style={{ whiteSpace: 'pre-line' }}>
        {paragraph}
      </p>
      {htmlContent && <div style={{ marginTop: '40px' }}> {htmlContent}</div>}
    </div>
  );
};

export default TextParagraph;
