import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { client } from "../../lib/apollo";
import { GET_MENU } from "../../lib/queries";
import styles from "./header.module.css";

import SubMenuHowWeDoIt from "../SubMenuHowWeDoIt";
import SubMenuWhatWeDo from "../SubMenuWhatWeDo";
import SubMenuWhoWeAre from "../SubMenuWhoWeAre";

const Header = () => {
  const [menus, setMenus] = useState([]);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [language, setLanguage] = useState("EN");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false); // Novo estado para controlar a animação
  const languageMenuRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        console.log("Fetching menu data...");
        const response = await client.query({
          query: GET_MENU,
        });
        console.log("Response received:", response);

        const menuItems = response?.data?.menu?.menuItems?.edges.map(
          (edge) => ({
            label: edge.node.label,
            url: edge.node.url,
          })
        );
        console.log("Menu items extracted:", menuItems);
        setMenus(menuItems || []);
        setIsLoaded(true);
      } catch (error) {
        console.error("Error fetching menu data:", error);
        setMenus([]);
        setIsLoaded(true); // Define como true mesmo em caso de erro
      }
    };

    fetchMenuData();
  }, []);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setShowLanguageMenu(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguageMenu = () => {
    setShowLanguageMenu(!showLanguageMenu);
  };

  const handleMenuClick = (menuLabel, e) => {
    if (
      menuLabel.toUpperCase() === "WHAT WE DO" ||
      menuLabel.toUpperCase() === "WHO WE ARE" ||
      menuLabel.toUpperCase() === "HOW WE DO IT"
    ) {
      if (e) {
        e.preventDefault();
      }
      setActiveSubmenu(menuLabel);
    }
  };

  const handleMenuLeave = () => {
    setActiveSubmenu(null);
  };

  return (
    <header className={`${styles.header} ${isLoaded ? styles.loaded : ""}`}>
      {/* Menu para desktop */}
      <div className={styles.desktopHeader}>
        <Link
          href="/"
          className={`${styles.logo} ${isLoaded ? styles.fadeIn : ""}`}
        >
          <img src="/assets/logo.png" alt="Logo" className={styles.logoImage} />
        </Link>
        <div className={styles.headerContent}>
          <div
            className={`${styles.headerMenu} ${isLoaded ? styles.fadeIn : ""}`}
          >
            <nav className={styles.nav}>
              {menus &&
                menus.map((menu, index) => (
                  <Link
                    key={index}
                    className={`${styles.headerLink} ${
                      router.pathname === menu.url ? styles.active : ""
                    } ${
                      menu.label.toUpperCase() === "GET IN TOUCH"
                        ? styles.getInTouch
                        : ""
                    } ${activeSubmenu === menu.label ? styles.active : ""}`}
                    href={menu.url}
                    onMouseEnter={() => handleMenuClick(menu.label)}
                    onMouseLeave={handleMenuLeave}
                    onClick={(e) => handleMenuClick(menu.label, e)}
                  >
                    {menu.label}
                  </Link>
                ))}
            </nav>
            <span className={styles.separator}>|</span>
            <div className={`${styles.icons} ${isLoaded ? styles.fadeIn : ""}`}>
              <i className={styles.searchIcon}>
                <img
                  src="/assets/search.png"
                  alt="lupa"
                  className={styles.lupa}
                />
              </i>

              <div
                className={styles.languageIcon}
                onClick={toggleLanguageMenu}
                ref={languageMenuRef}
              >
                {language}
                {showLanguageMenu && (
                  <div className={styles.languageMenu}>
                    <div onClick={() => handleLanguageChange("EN")}>
                      English
                    </div>
                    <div onClick={() => handleLanguageChange("PT")}>
                      Português
                    </div>
                    <hr className={styles.languageSeparator} />
                    <div onClick={() => handleLanguageChange("ES")}>
                      Español
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Menu para mobile */}
      <div className={styles.mobileHeader}>
        <div className={styles.headerContent}>
          <div className={styles.menuIcon} onClick={toggleMenu}>
            <FontAwesomeIcon
              icon={isMenuOpen ? faTimes : faBars}
              className={`${styles.hamburgerIcon} ${
                isMenuOpen ? styles.iconOpen : ""
              }`}
            />
          </div>
          <Link
            href="/"
            className={`${styles.logo} ${isLoaded ? styles.fadeIn : ""}`}
          >
            <img
              src="/assets/logo.png"
              alt="Logo"
              className={styles.logoImageMobile}
            />
          </Link>
          <div className={`${styles.icons} ${isLoaded ? styles.fadeIn : ""}`}>
            <i className={styles.searchIcon}>
              <img
                src="/assets/search.png"
                alt="lupa"
                className={styles.lupa}
              />
            </i>
            <div
              className={styles.languageIcon}
              onClick={toggleLanguageMenu}
              ref={languageMenuRef}
            >
              {language}
              {showLanguageMenu && (
                <div className={styles.languageMenu}>
                  <div onClick={() => handleLanguageChange("EN")}>English</div>
                  <div onClick={() => handleLanguageChange("PT")}>
                    Português
                  </div>
                  <hr className={styles.languageSeparator} />
                  <div onClick={() => handleLanguageChange("ES")}>Español</div>
                </div>
              )}
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <nav className={styles.mobileNav}>
            <div className={styles.mobileNavContent}>
              {menus &&
                menus.map((menu, index) => (
                  <Link
                    key={index}
                    className={`${styles.headerLink} ${
                      router.pathname === menu.url ? styles.active : ""
                    }`}
                    href={menu.url}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {menu.label}
                  </Link>
                ))}
            </div>
          </nav>
        )}
      </div>
      {activeSubmenu &&
        (activeSubmenu.toUpperCase() === "WHAT WE DO" ? (
          <SubMenuWhatWeDo
            onClose={() => setActiveSubmenu(null)}
            isOpen={activeSubmenu.toUpperCase() === "WHAT WE DO"}
          />
        ) : activeSubmenu.toUpperCase() === "WHO WE ARE" ? (
          <SubMenuWhoWeAre
            onClose={() => setActiveSubmenu(null)}
            isOpen={activeSubmenu.toUpperCase() === "WHO WE ARE"}
          />
        ) : (
          <SubMenuHowWeDoIt
            onClose={() => setActiveSubmenu(null)}
            isOpen={activeSubmenu.toUpperCase() === "HOW WE DO IT"}
          />
        ))}
    </header>
  );
};

export default Header;
