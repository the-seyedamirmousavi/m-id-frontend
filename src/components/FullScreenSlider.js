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
  <div className='h-screen justify-center flex top-0 w-full px-3 py-3 flex-col md:flex-row'>
    <div className='h-1/2 items-center justify-center flex md:w-2/4 md:h-full'>
      <div className={`${styles.img} w-full h-full md:h-4/5`}>
            <Image
              src={slides[currentIndex].image} 
              alt={slides[currentIndex].title} 
              fill
              style={{ objectFit: 'cover' }}
            />
        </div>
    </div>
    <div className='h-1/4  flex flex-col md:h-full md:w-3/4 md:my-0 md:items-center md:justify-center'>
      <h1 className="font-bold text-gray-800 leading-[1.4] mb-5 text-left">{slides[currentIndex]?.title}</h1>
      <p className="text-lg text-gray-600">{slides[currentIndex]?.description}</p>
    </div>
  </div>
  );
}
