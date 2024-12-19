'use client';

import { useState, useEffect } from 'react';
import slider_styles from '../components/fullScreenSlider.module.css';

export default function FullScreenSlider() {
  const slides = [
    { 
      id: 1, 
      image: '/images/img1.avif', 
      title: 'image 1',
    },
    { 
      id: 2, 
      image: '/images/img2.jpg', 
      title: "We create tech for people's well-being"
    },
    { 
      id: 3, 
      image: '/images/img4.webp', 
      title: "We develop technology to enhance people's well-being"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={slider_styles.slider}>
      <button onClick={prevSlide} className={slider_styles.navButton}>
        {'<'}
      </button>
      <div className={slider_styles.slideContent}>
        <div className={slider_styles.imageContainer}>
          <img src={slides[currentIndex].image} alt={slides[currentIndex].title} />
        </div>
        <div className={slider_styles.textContent}>
          <h3>{slides[currentIndex].title}</h3>
        </div>
      </div>
      <button onClick={nextSlide} className={slider_styles.navButton}>
        {'>'}
      </button>
    </div>
  );
  
}
