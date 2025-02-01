"use client";
import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import Logo from "./Logo";
import { useAuth } from "../app/context/AuthContext";
import SubMenuButton from "./SubMenuButton";

const Header = ({ menuItems }) => {
  const [isHidden, setIsHidden] = useState(false);
  const { isAuthenticated, loading } = useAuth();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const [showHome, setShowHome] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsHidden(currentScrollY > lastScrollY && currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleCurrentPage = () => {
    setShowHome(true);
    setIsSubMenuVisible(false);
  };

  const handleMouseEnter = (itemName) => {
    setIsSubMenuVisible(true);
    setActiveMenuItem(itemName);
  };

  const handleMouseLeave = () => {
    setIsSubMenuVisible(false);
    setActiveMenuItem(null);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      {activeMenuItem && (
        <div className={styles.overlay} onClick={handleMouseLeave}></div>
      )}

      <header className={`${styles.metaHeader} ${isHidden ? styles.hidden : ""}`}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <Logo className={styles.headerLeftLogo} />
            <div className={styles.menuToggle} onClick={toggleMenu}></div>
            <div className={styles.menuContainer} onMouseLeave={handleMouseLeave}>
              <div className={styles.menu}>
                {showHome && (
                  <SubMenuButton
                    url="/"
                    name={"Back To Home"}
                    onClick={(e) => {
                      setShowHome(false);
                    }}
                    closeMenu={null}
                  />
                )}
                
                {menuItems.map((item) => (
                  
                  <div
                    key={item.name}
                    className={`${styles.iconButton} txt`}
                    onMouseEnter={() => handleMouseEnter(item.name)}
                  >
                    {item.name}
                  </div>
                  
                ))}
              </div>
              {isSubMenuVisible && activeMenuItem && (
                <div className={styles.subMenu}>
                  {menuItems
                    .filter((item) => item.subMenu && item.name === activeMenuItem)
                    .map((item) => (
                      <div key={item.name}>
                        {item.subMenu.map((subItem) => (
                          <div key={subItem.id || `${subItem.name}-${subItem.url}`} className={styles.subMenuItem}>
                            <SubMenuButton
                              name={subItem.name}
                              url={subItem.url}
                              needAuth={subItem.needAuth}
                              isAuthenticated={isAuthenticated}
                              onClick={handleCurrentPage}
                              closeMenu={handleMouseLeave}
                            />
                          </div>
                        ))}
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>

          <div className={styles.headerRight}>
            {!isAuthenticated && !loading && (
              <div className={styles.iconButton}>
                <SubMenuButton
                  name="Login"
                  closeMenu={{}}
                  onClick={{}}
                  url="http://192.168.1.5:9000/oauth2/authorize?response_type=code&client_id=oidc-web-m-id&scope=profile&redirect_uri=http://localhost:3000/auth/callback/code&state=someState"
                />
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
