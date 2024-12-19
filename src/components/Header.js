"use client";
import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import Logo from "./Logo";

const Header = ({ onNavigate, children }) => {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuVisible, setIsMenuVisible] = useState(false); // حالت برای نمایش منو

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const additionalMenu = [
    { name: "Dashboard", url: "/dashboard" },
    { name: "Reports", url: "/reports" },
    { name: "Help", url: "/help" },
  ];

  return (
    <header className={`${styles.metaHeader} ${isHidden ? styles.hidden : ""}`}>
      {/* ساختار سه‌بخشی هدر */}
      <div className={styles.headerContainer}>
        <div className={styles.header}>
          {/* بخش سمت چپ */}
          <div className={styles.headerLeft}>
            <Logo />
            {children.left} {/* محتوای سمت چپ */}
          </div>
          {/* بخش سمت راست */}
          <div className={styles.headerRight}>
            {children.right} {/* محتوای سمت راست */}
          </div>
        </div>
          <div className={styles.headerBottom}>
            {children.right} {/* محتوای سمت راست */}
          </div>
      </div>
    </header>
  );
};

export default Header;
