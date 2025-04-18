import "../styles/index.css";
import "../styles/responsible.css";
import "../styles/section-business-pulse.css";
import "../styles/section-connecting-dots.css";

// import "../styles/swiper.css";
import { ApolloProvider } from "@apollo/client";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import LoadingComponent from "../components/Loading";
import { IdProvider } from "../context/idContext";
import { client } from "../lib/apollo";
import { GET_PAGE_ID_BY_SLUG } from "../lib/queries";

import "../styles/dpr-styles.css";
import "../styles/section-cards.css";
import "../styles/wp-testimonial.css";

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
  const slug = ctx.query.slug || "home"; // Default para 'home' se não houver slug

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
