// components/Layout.js
import Head from 'next/head';
import Footer from '../Footer';
import styles from './Layout.module.css';
import Header from '../Header';

export default function Layout({ children, title = "Default Title" }) {
  return (
    <>
      <Head>
        <title key="pagetitle">{title}</title>
      </Head>
      <div className={styles.container}>
        <Header />
        <main className={styles.mainContent}>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}