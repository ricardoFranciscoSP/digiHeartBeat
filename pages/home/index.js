import Head from 'next/head'; 
import { gql } from '@apollo/client';
import { client } from '../../lib/apollo';
import Header from '../../components/Header';
import BannersHome from '../../components/Banners';
import styles from './home.module.css';
import ScrollDownIcon from '../../components/ScrollDownIcon';

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
         <div dangerouslySetInnerHTML={{ __html: page.content }} />
       </div>
    </div>
    </>
  )
}

export async function getStaticProps() {
  const GET_HOME_PAGE = gql`
    query GetHomePage {
      page(id: "home", idType: URI) {
        id
        pageId
        title
        content
        slug
        date
        uri
      }
    }
  `;

  const response = await client.query({
    query: GET_HOME_PAGE,
  });

  const page = response?.data?.page;

  return {
    props: {
      page,
    },
  };
}