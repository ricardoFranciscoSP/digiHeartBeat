import '../styles/index.css';
import { ApolloProvider } from '@apollo/client';
import { client } from '../lib/apollo';
import { gql } from '@apollo/client';
import { IdProvider } from '../context/idContext';
import React, { useState } from 'react';
import LoadingComponent from '../components/Loading';
import { GET_PAGE_ID_BY_SLUG } from '../lib/queries';

function MyApp({ Component, pageProps, id }) {
  const [animationEnded, setAnimationEnded] = useState(false);

  const handleAnimationEnd = () => {
    setAnimationEnded(true);
  };

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