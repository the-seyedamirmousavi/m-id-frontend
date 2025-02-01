// components/MIDInfo.jsx
import styles from './styles/MIDInfo.module.css';

const MIDInfo = () => {
  return (
    <section className={styles.fullScreenSection}>
      <div className={styles.content}>
        <h1 className={styles.title}>What is MID?</h1>
        <p className={styles.text}>
          MID (Merchant Identification Number) is a unique identifier that is assigned to a merchant by a payment processor or financial institution.
        </p>
        <p className={styles.text}>
          It is used to identify and track transactions related to a specific merchant within payment systems. The MID is essential for processing card payments, allowing businesses to accept electronic payments securely.
        </p>
        <h2 className={styles.subTitle}>How is MID Used?</h2>
        <p className={styles.text}>
          Every time a customer makes a payment, the MID is used to route the transaction to the correct merchant account for settlement. This ensures the payment is correctly attributed to the merchant who provided the product or service.
        </p>
        <h2 className={styles.subTitle}>Why is MID Important?</h2>
        <p className={styles.text}>
          The MID plays a crucial role in maintaining the integrity and security of payment systems, ensuring that funds are transferred to the correct business and preventing fraud.
        </p>
      </div>
    </section>
  );
};

export default MIDInfo;
