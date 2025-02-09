"use client";
import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import Logo from "./Logo";
import { useAuth } from "../app/context/AuthContext";
import SubMenuButton from "./SubMenuButton";
import { usePathname } from "next/navigation";
import { faBars , faXmark} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Header = ({ menuItems }) => {
  const [isHidden, setIsHidden] = useState(false);
  const { isAuthenticated, loading } = useAuth();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsHidden(currentScrollY > lastScrollY && currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleMouseEnter = (itemName) => {
    setIsSubMenuVisible(true);
    setActiveMenuItem(itemName);
  };

  const handleMouseLeave = () => {
    setIsSubMenuVisible(false);
    setActiveMenuItem(null);
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu((prev) => !prev);
  };

  return (
    <>
      {activeMenuItem && (
        <div className={styles.overlay} onClick={handleMouseLeave}></div>
      )}

      {/* ********************************* Header ********************************* */}
      <header className={`bg-light ${styles.metaHeader} ${isHidden ? styles.hidden : ""}`}>
        {/* ********************************* (برای لپ تاپ) ********************************* */}
        <div className={`${styles.header} ${styles.metaHeaderLarg}`}>
          
          <div className={styles.headerLeft}>
            <Logo className={styles.headerLeftLogo} />
            <div className={styles.menuContainer} onMouseLeave={handleMouseLeave}>
              <div className={styles.menu}>
                {pathname !== "/" && (
                  <SubMenuButton url="/" name={" , Back To Home"} />
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
                          <div
                            key={subItem.id || `${subItem.name}-${subItem.url}`}
                            className={styles.subMenuItem}
                          >
                            {<SubMenuButton
                              name={subItem.name}
                              url={subItem.url}
                              needAuth={subItem.needAuth}
                              isAuthenticated={isAuthenticated}
                              onClick={'toggleMobileMenu'}
                              closeMenu={'handleMouseLeave'}
                            />}
                          </div>
                        ))}
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>

          <div className={styles.headerRight}>
            
          {!showMobileMenu && isAuthenticated && !loading && (
            <SubMenuButton
              name="Representation panel"
              closeMenu={{}}
              onClick={{}}
              url="/representation-panel"
            />            )}

            {!showMobileMenu && !isAuthenticated && !loading && (
              <SubMenuButton
                name="Login"
                closeMenu={{}}
                onClick={{}}
                url="http://localhost:9000/oauth2/authorize?response_type=code&client_id=oidc-web-m-id&scope=profile&redirect_uri=http://localhost:3000/auth/callback/code&state=someState"
              />
            )}
          </div>
        </div>

        {/* ********************************* (برای موبایل) ********************************* */}
        <div className={`bg-light ${styles.header} ${styles.metaHeaderMobile}`}>
        {/* دکمه منوی همبرگری (برای موبایل) */}
        <div className={styles.headerLeft}>
          <div className={`${styles.menuToggle}`} onClick={toggleMobileMenu}>
            {!showMobileMenu && <FontAwesomeIcon className="px-3" icon={faBars} size="lg" />}
          </div>
        </div>

        {/* لوگو در وسط */}
        <div className={`${styles.logoContainer}`}>
          <Logo /> 
          
          {pathname !== "/" && (
                  <SubMenuButton url="/" name={" , Back To Home"} />
                )}
        </div>

        {/* دکمه بستن هدر (برای موبایل) */}
        <div className={styles.headerRight}>
          { showMobileMenu && (
            <div className={`${styles.menuToggle}`} onClick={toggleMobileMenu}>
              <FontAwesomeIcon className="px-3" icon={faXmark} size="lg" />
            </div>
          )}
        </div>
      </div>
        
      </header>

      {/* ********************************* Layout ********************************* */}
      {showMobileMenu && (
        <div
          className={`position-fixed top-0 start-0 w-100 h-100 bg-light ${styles.layoutOverlay}`}
          style={{ zIndex: 1010 }}
        >
          <div className="container pt-4">
            <div className="mt-5">
              <ul className="nav flex-column bg-light">
                {menuItems.map((item,index) => (

                  <MenuItem key={index} title={item.name} >
                     {item.subMenu.map((sub,index) => (
                                      <SubMenuButton
                                      key={index}
                                      name={sub.name}
                                      url={sub.url}
                                      needAuth={sub.needAuth}
                                      isAuthenticated={isAuthenticated}
                                      onClick={toggleMobileMenu}
                                      closeMenu={handleMouseLeave}
                                    />
                                    ))}
                  </MenuItem>

                ))}


                {isAuthenticated && !loading && (
                  <Link 
                    className="w-100 px-3 text-start py-2 btn btn-light"
                    href="/representation-panel"
                    onClick={() => {
                      setShowMobileMenu(false);
                      handleMouseLeave();
                    }}
                  >
                    Access Representation Panel
                  </Link>
                )}

                {!isAuthenticated && !loading && (
                  <Link
                    className="w-100 px-3 py-2 text-start btn btn-light"
                    onClick={() => {
                      setShowMobileMenu(false);
                      handleMouseLeave();
                    }}
                    href="http://localhost:9000/oauth2/authorize?response_type=code&client_id=oidc-web-m-id&scope=profile&redirect_uri=http://localhost:3000/auth/callback/code&state=someState"
                  >
                    Sign in to Your Account
                  </Link>
                )}


              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;


const MenuItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-bottom">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-100 text-start px-3 py-2 btn btn-light d-flex justify-content-between align-items-center"
      >
        <span>{title}</span>
        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} size="lg" />
      </button>
      {isOpen && <div className="ps-4 pb-2">{children}</div>}
    </div>
  );
};



