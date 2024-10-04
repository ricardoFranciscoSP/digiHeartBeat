import '../styles/index.css';
import App from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { client } from '../lib/apollo';
import { gql } from '@apollo/client';
import { IdProvider } from '../context/idContext';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    let id = null;
    
    // Pega o slug da URL
    const slug = ctx.query.slug || 'home'; // Default para 'home' se não houver slug

    // Query GraphQL para buscar o ID da página com base no slug
    const GET_PAGE_ID_BY_SLUG = gql`
      query GetPageID($slug: String!) {
        pageBy(uri: $slug) {
          id
          pageId
        }
      }
    `;

    try {
      const { data } = await client.query({
        query: GET_PAGE_ID_BY_SLUG,
        variables: { slug },
      });

      // Se encontrou a página, pega o ID
      if (data?.pageBy?.pageId) {
        id = data.pageBy.pageId;
      }
    } catch (error) {
      console.error("Erro ao buscar o ID da página", error);
    }

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps, id };
  }

  render() {
    const { Component, pageProps, id } = this.props;
    return (
      <ApolloProvider client={client}>
        <IdProvider value={id}>
          <Component {...pageProps} />
        </IdProvider>
      </ApolloProvider>
    );
  }
}

export default MyApp;