import styles from "./tagline.module.css"; // Importing the CSS module

const Tagline = () => {
  return (
    <section className={styles.taglineSection}>
      <div className={styles.container}>
        
        {/* Your new slogan */}
        <h1 className={styles.taglineText}>We Care About Your Health</h1>
        
        {/* Slogan explanation */}
        <p className={styles.taglineSubtext}>
          Our app helps you manage your health and live a healthier life.
        </p>
      </div>
    </section>
  );
};

export default Tagline;
