import React from 'react';
import styles from './last-news.module.css';

const LastNews = () => {
  // اخبار نمونه (می‌توانید این را از یک API بارگذاری کنید)
  const news = [
    {
      id: 1,
      title: "Breaking News: New Technology Innovations in 2024",
      description: "In 2024, technology is advancing at an unprecedented rate...",
      link: "/news/2024-tech-innovations",
      date: "December 25, 2024",
      image: "/images/FitSho.png", // مسیر عکس
    },
    {
      id: 2,
      title: "Global Market Trends: What to Expect in 2025",
      description: "Experts predict a shift in global market trends by 2025...",
      link: "/news/2025-market-trends",
      date: "December 24, 2024",
      image: "/images/FitSho.png", // مسیر عکس
    },
    {
      id: 3,
      title: "Climate Change: Global Efforts and Challenges",
      description: "Climate change is one of the most pressing issues of our time...",
      link: "/news/climate-change-efforts",
      date: "December 20, 2024",
      image: "/images/FitSho.png", // مسیر عکس
    },
    {
      id: 4,
      title: "Global Market Trends: What to Expect in 2025",
      description: "Experts predict a shift in global market trends by 2025...",
      link: "/news/2025-market-trends",
      date: "December 24, 2024",
      image: "/images/FitSho.png", // مسیر عکس
    },
  ];

  return (
    <div className={styles.lastNews}>
      <h2 className='txt'>Latest News</h2>
      <ul className={styles.newsList}>
        {news.map((item) => (
          <li key={item.id} className={styles.newsItem}>
            <a href={item.link} className={styles.newsLink}>
              <div className={styles.newsImageContainer}>
                <img src={item.image} alt={item.title} className={styles.newsImage} />
              </div>
              <div className={styles.textContent}>
                <h3 className='txt'>{item.title}</h3>
                <p className='txt'>{item.description}</p>
                <span className={styles.newsDate}>{item.date}</span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LastNews;
