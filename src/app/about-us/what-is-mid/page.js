// pages/what-is-m-id.js
import styles from './WhatIsMID.module.css';

export default function WhatIsMID() {
  return (
    <div className={styles.container}>
      <div className={styles.heroSection}>
        <h1 className={styles.title}>What is M-ID?</h1>
        <p className={styles.description}>
          M-ID (Modern Identity) is a secure, scalable, and easy-to-use digital identity platform that helps businesses and individuals manage their identities online. With M-ID, users can authenticate, authorize, and securely manage their digital presence across multiple services.
        </p>
      </div>

      <div className={styles.features}>
        <h2 className={styles.featuresTitle}>Why M-ID?</h2>
        <ul className={styles.featuresList}>
          <li className={styles.featureItem}>
            <h3>Secure Authentication</h3>
            <p>Ensure your identity is protected with advanced security protocols such as OAuth2 and OpenID Connect.</p>
          </li>
          <li className={styles.featureItem}>
            <h3>Easy Integration</h3>
            <p>Seamlessly integrate M-ID with your applications and services to enhance user experience.</p>
          </li>
          <li className={styles.featureItem}>
            <h3>Scalable</h3>
            <p>M-ID is designed to scale with your business, handling thousands to millions of users efficiently.</p>
          </li>
          <li className={styles.featureItem}>
            <h3>User-Centric</h3>
            <p>Give users control over their digital identity while maintaining privacy and security.</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
