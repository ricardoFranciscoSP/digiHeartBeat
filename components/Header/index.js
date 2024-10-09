import React, { useEffect, useState } from 'react';
import Link from "next/link";
import styles from './header.module.css';
import { GET_MENU } from '../../lib/queries';
import { client } from '../../lib/apollo';

const Header = () => {
    const [menus, setMenus] = useState([]);

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

    return (
        <header className={styles.header}>
            <Link href="/" className={styles.logo}>
                <img src="/assets/logo.png" alt="Logo" className={styles.logoImage} />
            </Link>
            <nav className={styles.nav}>
                {menus && menus.map((menu, index) => (
                    <Link key={index} className={styles.headerLink} href={menu.url}>
                        {menu.label}
                    </Link>
                ))}
            </nav>
            <div className={styles.icons}>
                <i className={styles.searchIcon}>🔍</i>
                <i className={styles.languageIcon}>EN</i>
            </div>
        </header>
    );
};

export default Header;