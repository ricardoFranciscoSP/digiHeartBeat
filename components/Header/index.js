import React, { useEffect, useState, useRef } from 'react';
import Link from "next/link";
import styles from './header.module.css';
import { GET_MENU } from '../../lib/queries';
import { client } from '../../lib/apollo';

const Header = () => {
    const [menus, setMenus] = useState([]);
    const [showLanguageMenu, setShowLanguageMenu] = useState(false);
    const [language, setLanguage] = useState('EN');
    const languageMenuRef = useRef(null);

    useEffect(() => {
        const fetchMenuData = async () => {
            try {
                console.log("Fetching menu data...");
                const response = await client.query({
                    query: GET_MENU
                });
                console.log("Response received:", response);

                const menuItems = response?.data?.menu?.menuItems?.edges.map(edge => ({
                    label: edge.node.label,
                    url: edge.node.url
                }));
                console.log("Menu items extracted:", menuItems);
                setMenus(menuItems || []);
            } catch (error) {
                console.error("Error fetching menu data:", error);
                setMenus([]);
            }
        };

        fetchMenuData();
    }, []);

    const handleMouseEnter = () => {
        setShowLanguageMenu(true);
    };

    const handleMouseLeave = () => {
        setShowLanguageMenu(false);
    };

    const handleLanguageChange = (lang) => {
        setLanguage(lang);
        setShowLanguageMenu(false);
    };

    return (
        <header className={styles.header}>
            <Link href="/" className={styles.logo}>
                <img src="/assets/logo.png" alt="Logo" className={styles.logoImage} />
            </Link>
            <div className={styles.headerMenu}>
                <nav className={styles.nav}>
                    {menus && menus.map((menu, index) => (
                        <Link key={index} className={styles.headerLink} href={menu.url}>
                            {menu.label}
                        </Link>
                    ))}
                </nav>
                <span className={styles.separator}>|</span>
                <div className={styles.icons}>
                    <i className={styles.searchIcon}><img src='/assets/search.png' alt='lupa' className={styles.lupa} /></i>
                    <div 
                        className={styles.languageIcon} 
                        onMouseEnter={handleMouseEnter} 
                        onMouseLeave={handleMouseLeave}
                        ref={languageMenuRef}
                    >
                        {language}
                        {showLanguageMenu && (
                            <div className={styles.languageMenu}>
                                <div onClick={() => handleLanguageChange('EN')}>English</div>
                                <div onClick={() => handleLanguageChange('PT')}>Português</div>
                                <hr className={styles.languageSeparator} />
                                <div onClick={() => handleLanguageChange('ES')}>Español</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;