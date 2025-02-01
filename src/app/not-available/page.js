'use client';

const PageNotAvailable = () => {
  return (
    <div style={styles.container}>
      <logo style={styles.logo} />
      <h1 style={styles.heading}>This Page is Currently Unavailable</h1>
      <p style={styles.message}>
        We're working on it! This page will be added to the site soon. Please check back later.
      </p>

    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    color: "#333",
    textAlign: "center",
    fontFamily: "'Roboto', sans-serif",
    flexDirection: "column",
    padding: "20px",
    boxSizing: "border-box",
    overflow: "hidden",
    backgroundImage: "url('/path/to/your/background-image.jpg')", // Optional: Add a subtle background image
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  logo: {
    marginBottom: "30px",
  },
  heading: {
    fontSize: "36px",
    fontWeight: "700",
    marginBottom: "20px",
    color: "#4a4a4a",
    textTransform: "uppercase",
    letterSpacing: "1px",
    animation: "fadeIn 1s ease-in-out",
    textShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)", // Add a subtle shadow for depth
  },
  message: {
    fontSize: "18px",
    marginTop: "15px",
    color: "#666",
    maxWidth: "600px",
    margin: "0 auto",
    animation: "fadeIn 1.5s ease-in-out",
    lineHeight: "1.6",
  },
  button: {
    marginTop: "30px",
    padding: "12px 25px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    boxShadow: "0 4px 10px rgba(0, 123, 255, 0.2)", // Add a subtle shadow to the button
  },
};

// Add an animation keyframe to fadeIn
const globalStyle = `
  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
`;

export default PageNotAvailable;
