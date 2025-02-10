import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './styles/ImageWithTitles.module.css';

const ImageWithTitles = ({ imageSrc, altText, titles, reverse , child }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${styles.container} ${reverse ? styles.reverse : ''}`}>
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
      <div className={styles.child2} style={{ flex: '6' }}>
        <h1>{titles?.heading }</h1>
          {titles?.description ||
            'Welcome to FitSho, the all-in-one app designed to help you stay healthy, track your workouts, manage your nutrition, and reduce stress. Whether you are starting your fitness journey or looking to maintain a balanced lifestyle, FitSho provides personalized tools and insights to achieve your wellness goals. Join a community of health enthusiasts and make every step count!'}
        <div>{child}</div>
      </div>
    </div>
  );
};

export default ImageWithTitles;
