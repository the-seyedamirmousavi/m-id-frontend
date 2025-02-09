'use client';

import { useState, useEffect, useRef } from 'react';
import styles from '../components/fullScreenSlider.module.css';
import Image from 'next/image';

export default function FullScreenSlider() {
  const slides = [
    { 
      id: 1, 
      image: '/images/img1.avif', 
      title: 'Image 1',
      description: 'Discover new ways to improve your lifestyle.',
    },
    { 
      id: 2, 
      image: '/images/img2.jpg', 
      title: "We create tech for people's well-being",
      description: 'Our technology is designed to enhance your life.',
    },
    { 
      id: 3, 
      image: '/images/img4.webp', 
      title: "We develop technology to enhance people's well-being",
      description: 'Your wellness is our priority.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  // استفاده از useRef برای ذخیره interval به جای useState
  const intervalRef = useRef(null);

  // تابع تغییر اسلاید به صورت خودکار
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  // تابع برای تنظیم مجدد interval در رویدادهای دستی
  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(nextSlide, 3000);
  };

  // تنظیم interval یک بار در ابتدای لود کامپوننت
  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 3000);
    return () => clearInterval(intervalRef.current);
  }, []);

  // اگر می‌خواهید با کلیک دکمه‌ها تایمر ریست شود
  const handleNext = () => {
    nextSlide();
    resetInterval();
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    resetInterval();
  };

  return (
    <div className={styles.container}>
      <div className={styles.child} style={{ flex: '4' }}>
        <div className={styles.img}>
          <Image
            src={slides[currentIndex].image} 
            alt={slides[currentIndex].title} 
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
      <div className={styles.child2} style={{ flex: '6' }}>
        <h1>{slides[currentIndex]?.title}</h1>
        <p>{slides[currentIndex]?.description}</p>
        <div>
          {/* دکمه‌های کنترلی برای تغییر دستی اسلاید */}
          
        </div>
      </div>
    </div>
  );
}
