// index.js
import Layout from '../components/Layout';
import BannersHome from '../components/Banners';
import ScrollDownIcon from '../components/ScrollDownIcon';
import PromoSection from '../components/PromoSection';
import { getPageData } from '../lib/dataFetch';
import styles from './home.module.css';

export default function Home({ page }) {
  return (
    <Layout title="What We Do">
      <div className={styles.bannerContainer}>
        <BannersHome />
        <ScrollDownIcon />
      </div>
      <ContentSection page={page} />
      <PromoSection />
    </Layout>
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