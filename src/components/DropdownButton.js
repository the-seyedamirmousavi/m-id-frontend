import React, { useState } from "react";
import styles from "./DropdownButton.module.css";

const DropdownButton = ({ title, menuItems }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={`${styles.dropdownButtonContainer} ${
        isActive ? "active" : ""
      }`}
    >
      <button className={styles.dropdownButton} onClick={toggleMenu}>
        {title}
      </button>
      <div className={styles.dropdownMenu}>
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={styles.dropdownItem}
            onClick={() => setIsActive(false)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownButton;
