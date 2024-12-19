import React from "react";

const Logo = () => {
  return (
    <div style={styles.container}>
      <span style={styles.text}>MUTec</span>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "'Arial', sans-serif",
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#0070f3",
    margin: "0px 20px",
  },
};

export default Logo;
