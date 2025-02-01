'use client';

import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <div className={styles.heroSection}>
      {/* پس‌زمینه ویدیو */}
      <video autoPlay loop muted className={styles.backgroundVideo}>
        <source src="/videos/hero.webm" type="video/mp4" />
      </video>

      {/* لایه تاریک روی پس‌زمینه */}
      <div className={styles.overlay}></div>

      {/* محتوای اصلی */}
      <div className={styles.heroContent}>
        <h1 className={styles.title}>Welcome to MUTec</h1>
        <p className={styles.subtitle}>
          Transforming technology into tools for a healthier, smarter lifestyle.
        </p>
        <div className={styles.ctaButtons}>
          <button className={styles.primaryButton}>Learn More</button>
          <button className={styles.secondaryButton}>Get Started</button>
        </div>
      </div>
    </div>
  );
}
