import React from 'react';
import Link from "next/link"
import styles from './header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
             <Link href="/" className={styles.logo}>Logo</Link>
             <nav className={styles.nav}>
                <Link className={styles.headerLink} href="#what-we-do">What we Do</Link>
                <Link className={styles.headerLink} href="#how-we-do-it">How we do it</Link>
                <Link className={styles.headerLink} href="#who-we-are">Who we are</Link>
                <Link className={styles.headerA }  href="#get-in-touch">Get in Touch</Link>
             </nav>
             <div className={styles.icons}>
                <i className={styles.searchIcon}>🔍</i>
                <i className={styles.languageIcon}>EN</i>
            </div>
        </header>
    );
};

export default Header;