import Image from 'next/image';
import styles from './styles/ImageWithTitles.module.css';

const ImageWithTitles = ({ imageSrc, altText, titles, reverse , child }) => {

  return (
    <div className={`bg-transparent ${styles.container} ${reverse ? styles.reverse : ''}`}>
      <div className={styles.child} style={{ flex: '4' }}>
        <div className={styles.img}>
          <Image
            src={imageSrc}
            alt={altText}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
      <div className={`${styles.child2} m-3`} style={{ flex: '6' }}>
        <h1>{titles?.heading }</h1>
          <p>{titles?.description}</p>{child}
      </div>
    </div>
  );
};

export default ImageWithTitles;
