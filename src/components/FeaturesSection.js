// components/Features.jsx
import styles from "./features-section.module.css";

const Features = () => {
  const features = [
    { icon: "🔒", title: "High Security", description: "We use modern authentication protocols like OAuth2 to keep your data safe." },
    { icon: "⚙️", title: "Easy Integration", description: "Our simple, well-documented APIs make system integration a breeze." },
    { icon: "🌍", title: "Global Reach", description: "Our infrastructure scales with you, ensuring optimal performance for users worldwide." },
    { icon: "📊", title: "Data Management", description: "Store and manage user data securely, complying with top standards." }
  ];

  return (
    <section className={styles.featuresSection}>
      <div className={styles.featuresContainer}>
        {features.map((feature, index) => (
          <div key={index} className={styles.featureCard}>
            <div className={styles.icon}>{feature.icon}</div>
            <h3 className={styles.featureTitle}>{feature.title}</h3>
            <p className={styles.featureDescription}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
