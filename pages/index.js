// index.js
import Head from 'next/head'; 
import Header from '../components/Header';
import BannersHome from '../components/Banners';
import styles from './home.module.css';
import ScrollDownIcon from '../components/ScrollDownIcon';
import PromoSection from '../components/PromoSection';
import { getPageData } from '../lib/dataFetch';
import Footer from '../components/Footer';
import CardsSection from '../components/CardsSection';

export default function Home({ page }) {
  return (
    <>
      <Head>
        <title key="pagetitle">What We Do</title>
      </Head>
      <div className={styles.container}>
        <Header />
        <div className={styles.bannerContainer}>
          <BannersHome />
          <ScrollDownIcon />
        </div>
        <ContentSection page={page} />
        <CardsSection />
        <PromoSection />
        <Footer />
      </div>
    </>
  );
}

function ContentSection({ page }) {
  return (
    <div id="conteudo" className={styles.conteudo}>
      {page ? (
        <div dangerouslySetInnerHTML={{ __html: page.content }} />
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
}

function LoadingSpinner() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingSpinner}></div>
    </div>
  );
}

export async function getServerSideProps() {
  const page = await getPageData("home");
  return {
    props: {
      page: page || null,
    },
  };
}