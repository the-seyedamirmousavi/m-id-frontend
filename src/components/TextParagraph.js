// components/Footer.js
import styles from './styles/TextParagraph.module.css';
import TextTitle from './TextTitle';

const TextParagraph = ({ title, paragraph, htmlContent }) => {
  return (
    <div className={styles.container}>
        <h1 style={{ marginBottom: '30px' }} className='m txt'>{title}</h1>
        <p className={`${styles.textParagraph} txt`}>
            {paragraph}
        </p>
        {htmlContent && <div style={{marginTop: '30px'}} className='m'> {htmlContent}</div>}
    </div>
  );
};


export default TextParagraph;
