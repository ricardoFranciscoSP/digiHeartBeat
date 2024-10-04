import Head from 'next/head'; 
import { client } from '../lib/apollo';
import Header from '../components/Header';
import BannersHome from '../components/Banners';
import styles from './home.module.css';
import ScrollDownIcon from '../components/ScrollDownIcon';
import { GET_PAGE_BY_ID } from '../lib/queries';

export default function Home({ page }) {
  return (
    <>
    <Head>
      <title key="pagetitle">Home</title>
    </Head>
    <div className={styles.container}>
       <Header />
       <div className={styles.bannerContainer}>
         <BannersHome />
         <ScrollDownIcon />
       </div>
       <div id="conteudo" className={styles.conteudo}>
         {page ? (
           <div dangerouslySetInnerHTML={{ __html: page.content }} />
         ) : (
           <p>Carregando...</p>
         )}
       </div>
    </div>
    </>
  )
}

export async function getServerSideProps() {
  
  const response = await client.query({
    query: GET_PAGE_BY_ID,
    variables: { id: "home" },
  });

  const page = response?.data?.page;

  return {
    props: {
      page: page || null,
    },
  };
}