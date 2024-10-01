import { gql } from '@apollo/client';
import { client } from '../../lib/apollo';
import Header from '../../components/Header';
import BannersHome from '../../components/Banners';
import styles from './home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
       <Header />
       <BannersHome />
    </div>
  )
}

export async function getStaticProps(){

  const GET_POSTS = gql`
   query GET_POSTS_ALL {
      posts {
        nodes {
          title
          content
          uri
          date
        }
      }
    }
  `;

  const response = await client.query({
    query: GET_POSTS
  });

  const posts = response?.data?.posts?.nodes
  return {
    props: {
      posts
    }
  }
}
