import React, { useState } from "react";
import style from "./DropdownButton.module.css";

const DropdownButton = () => {
  // تعریف داده‌های استاتیک
  const title = "Main Menu";
  const items = [
    { name: "Dashboard", url: "/dashboard" },
    { name: "Reports", url: "/reports" },
    { name: "Help", url: "/help" },
  ];

  const [isMenuVisible, setIsMenuVisible] = useState(false); // حالت برای نمایش منو

  const handleMouseEnter = () => setIsMenuVisible(true);
  const handleMouseLeave = () => setIsMenuVisible(false);

  return (
    <div
      className={style.dropdownMenuContainer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* دکمه اصلی */}
      <button
        className={`${style.dropdownToggle} btn btn-secondary`}
        type="button"
        id="dropdownMenuButton"
        aria-expanded={isMenuVisible}
      >
        {title}
      </button>
    </div>
  );
};

export default DropdownButton;
