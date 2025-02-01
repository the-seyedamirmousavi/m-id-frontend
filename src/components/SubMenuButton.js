"use client";

import Link from 'next/link';
import styles from './styles/SubMenuButton.module.css';

const SubMenuButton = ({ name, url, needAuth, isAuthenticated, onClick , closeMenu }) => {
    const handleLinkClick = (e) => {
        onClick(); 
        closeMenu();
      };
  return (
    <div className={styles.subMenuItem}>
        
      {!needAuth ? (
        <Link
          href={url}
          onClick={handleLinkClick}
          className={`${styles.headerLink} ${styles.activeLink}`}
        >
          {name}
        </Link>
      ) : isAuthenticated ? (
        <Link
          href={url}
          onClick={handleLinkClick}
          className={`${styles.headerLink} ${styles.activeLink}`}
        >
          {name}
        </Link>
      ) : (
        <span className={`${styles.headerLinkDisabled}`}>{name}</span>
      )}
    </div>
  );
};

export default SubMenuButton;
