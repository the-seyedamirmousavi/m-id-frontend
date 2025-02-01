import React from "react";

const Logo = ({ children }) => {
  return (
    <div style={styles.container}>
      <span style={styles.text}>M-ID</span>
      {children && <div style={styles.childrenContainer}>{children}</div>}
    </div>
  );
};

const styles = {
  container: {
    display: "inline-flex", // فقط به اندازه محتوا
  },
  text: {
    fontFamily: "'Arial', sans-serif",
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#2e3644",
    margin: "0px 20px",
    whiteSpace: "nowrap", // جلوگیری از شکستن متن
    width: "100px", // سایز ثابت برای span
    height: "50px", // سایز ثابت ارتفاع برای span
    textAlign: "center", // تراز کردن متن
    lineHeight: "50px", // مرکز کردن متن عمودی
  },
  childrenContainer: {
    display: "flex", // نمایش فرزندان به صورت افقی
  },
};

export default Logo;
