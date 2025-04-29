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
        <style jsx global>{`
          :root {
            --base-url: ${process.env.NEXT_PUBLIC_BASE_URL};
          }

          #section-customer::before {
            background-image: url(${process.env
              .NEXT_PUBLIC_BASE_URL}/wp-content/uploads/2024/10/imagem2.png);
            background-position: 100px 275px;
            background-repeat: no-repeat;
            background-size: 112% auto;
            content: "";
            position: absolute;
            top: -130px;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: -1;
          }

          @media (max-width: 1200px) {
            #section-customer::before {
              background-position: 1300% 65%;
            }
          }
        `}</style>

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
