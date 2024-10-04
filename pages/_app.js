import '../styles/index.css';
import { ApolloProvider } from '@apollo/client';
import { client } from '../lib/apollo';
import { gql } from '@apollo/client';
import { IdProvider } from '../context/idContext';
import React, { useState, useEffect } from 'react';
import LoadingComponent from '../components/Loading';

function MyApp({ Component, pageProps, id }) {
  const [animationEnded, setAnimationEnded] = useState(false);

  const handleAnimationEnd = () => {
    setAnimationEnded(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationEnded(true);
    }, 5000); // Duração da animação de carregamento em milissegundos

    return () => clearTimeout(timer);
  }, []);

  return (
    <ApolloProvider client={client}>
      <IdProvider value={id}>
        {animationEnded ? (
          <Component {...pageProps} />
        ) : (
          <LoadingComponent onAnimationEnd={handleAnimationEnd} />
        )}
      </IdProvider>
    </ApolloProvider>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
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
};

export default MyApp;