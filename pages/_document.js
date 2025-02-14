import Document, { Head, Html, Main, NextScript } from "next/document";
import { getElementorCssLinksData } from "../utils/elementor";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const id = ctx.query.id || ctx.req?.__NEXT_DATA__?.props?.id || null;

    return { ...initialProps, id };
  }

  render() {
    const { id } = this.props.__NEXT_DATA__.props;
    const elementorCssLinks = getElementorCssLinksData(parseInt(id));

    const WP_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

    return (
      <Html>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1"
          />
          <link
            rel="stylesheet"
            href={`${WP_URL}/wp-content/plugins/elementor/assets/css/frontend.min.css?ver=3.25.4`}
          />

          {elementorCssLinks?.map((link) => (
            <link key={link.id} rel="stylesheet" href={link.link} />
          ))}

          {/* Estilos do Elementor e ElementsKit */}
          <link
            rel="stylesheet"
            href={`${WP_URL}/wp-content/plugins/elementskit-lite/modules/elementskit-icon-pack/assets/css/ekiticons.css?ver=3.3.7`}
          />

          <link
            rel="stylesheet"
            href={`${WP_URL}/wp-content/plugins/elementskit-lite/modules/elementskit-icon-pack/assets/css/ekiticons.css`}
          />

          <link
            rel="stylesheet"
            href={`${WP_URL}/wp-content/plugins/elementor/assets/css/frontend.min.css?ver=3.25.4`}
          />
          <link
            rel="stylesheet"
            href={`${WP_URL}/wp-content/plugins/elementor/assets/css/frontend-lite.min.css?ver=3.25.4`}
          />
          <link
            rel="stylesheet"
            href={`${WP_URL}/wp-content/plugins/elementor/assets/css/common.min.css?ver=3.25.4`}
          />

          {/* CSS Responsivo do Elementor */}
          <link
            rel="stylesheet"
            href={`${WP_URL}/wp-content/plugins/elementor/assets/css/responsive.min.css?ver=3.25.4`}
          />

          <link
            rel="stylesheet"
            href={`${WP_URL}/wp-content/plugins/elementskit-lite/widgets/init/assets/css/widget-styles.css?ver=3.3.7`}
          />

          {/* Swiper CSS e JS */}
          <link
            rel="stylesheet"
            href="https://unpkg.com/swiper@8/swiper-bundle.min.css"
          />
          <script src="https://unpkg.com/swiper@8/swiper-bundle.min.js" defer />

          {/* TESTESSSSSSSS */}
          {/* <script src="/scripts/carouselScripts-jqeury-3.7.1.js" defer></script>

          <script
            src="/scripts/carouselScripts-jquery-core-1.13.3.js"
            defer
          ></script>

          <script
            dangerouslySetInnerHTML={{
              __html: `
      var elementorFrontendConfig = ${JSON.stringify(elementorFrontendConfig)};
      window.elementorFrontendConfig = elementorFrontendConfig;
    `,
            }}
          />

          <script
            src="/scripts/carouselScripts-frontend-modules.min-3.25.4.js"
            defer
          ></script>

          <script
            src="/scripts/carouselScripts-frontend.min-3.25.4.js"
            defer
          ></script>

          <script
            src="/scripts/carouselScripts-image-carousel.4455c6362492d9067512.js"
            defer
          ></script>

          <script
            src="/scripts/carouselScripts-webpack-3.25.4.js"
            defer
          ></script> */}
          {/* TESTESSSSSSSS FIM */}

          {/* jQuery (necessário para o ElementsKit) */}
          <script src="https://code.jquery.com/jquery-3.6.0.min.js" defer />

          {/* Scripts do Elementor */}
          <script
            src={`${WP_URL}/wp-content/plugins/elementor/assets/js/frontend-modules.min.js?ver=3.25.4`}
            defer
          />
          <script
            src={`${WP_URL}/wp-content/plugins/elementor/assets/js/frontend.min.js?ver=3.25.4`}
            defer
          />

          {/* Scripts do ElementsKit */}
          <script
            src={`${WP_URL}/wp-content/plugins/elementskit-lite/widgets/init/assets/js/widget-scripts.js?ver=3.3.7`}
            defer
          />
          <script
            src={`${WP_URL}/wp-content/plugins/elementskit-lite/widgets/init/assets/js/animate-circle.min.js?ver=3.3.7`}
            defer
          />
          <script
            src={`${WP_URL}/wp-content/plugins/elementskit-lite/widgets/init/assets/js/elementor.js?ver=3.3.7`}
            defer
          />

          {/* Estilos do Swiper e Elementor */}
          <link
            rel="stylesheet"
            href="https://digi.maneiraweb.com.br/wp-content/plugins/elementor/assets/lib/swiper/v8/css/swiper.min.css"
          />
          <link
            rel="stylesheet"
            href="https://digi.maneiraweb.com.br/wp-content/plugins/elementor/assets/css/widget-image-carousel.min.css"
          />

          {/* Estilos inline necessários */}
          <style
            dangerouslySetInnerHTML={{
              __html: `
      .elementor-image-carousel-wrapper.swiper {
        overflow: hidden;
      }
      
      .elementor-image-carousel.swiper-wrapper {
        display: flex;
        transition: transform 0.3s ease;
      }
      
      .elementor-image-carousel .swiper-slide {
        flex-shrink: 0;
        width: calc((100% - 100px) / 6) !important;
        margin-right: 20px;
      }
      
      @media (max-width: 1024px) {
        .elementor-image-carousel .swiper-slide {
          width: calc((100% - 60px) / 4) !important;
        }
      }
      
      @media (max-width: 767px) {
        .elementor-image-carousel .swiper-slide {
          width: calc((100% - 20px) / 2) !important;
        }
      }
    `,
            }}
          />

          {/* Scripts necessários na ordem correta */}
          <script
            src="https://digi.maneiraweb.com.br/wp-includes/js/jquery/jquery.min.js"
            defer
          />
          <script
            src="https://digi.maneiraweb.com.br/wp-content/plugins/elementor/assets/lib/swiper/v8/swiper.min.js"
            defer
          />
          <script
            src="https://digi.maneiraweb.com.br/wp-content/plugins/elementor/assets/js/frontend-modules.min.js"
            defer
          />
          <script
            src="https://digi.maneiraweb.com.br/wp-content/plugins/elementor/assets/js/frontend.min.js"
            defer
          />

          {/* Script de inicialização do Swiper */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
        window.addEventListener('load', function() {
          setTimeout(function() {
            const swiperElement = document.querySelector('.elementor-image-carousel-wrapper');
            if (swiperElement && typeof Swiper !== 'undefined') {
              const swiper = new Swiper(swiperElement, {
                slidesPerView: 6,
                spaceBetween: 20,
                loop: true,
                autoplay: {
                  delay: 3000,
                  disableOnInteraction: false,
                },
                navigation: {
                  nextEl: '.elementor-swiper-button-next',
                  prevEl: '.elementor-swiper-button-prev',
                },
                pagination: {
                  el: '.swiper-pagination',
                  clickable: true,
                },
                breakpoints: {
                  320: {
                    slidesPerView: 2,
                    spaceBetween: 10
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 15
                  },
                  1024: {
                    slidesPerView: 6,
                    spaceBetween: 20
                  }
                },
                on: {
                  init: function() {
                    console.log('Swiper initialized');
                  },
                  slideChange: function() {
                    console.log('Slide changed');
                  }
                }
              });
            } else {
              console.log('Swiper element not found or Swiper not loaded');
            }
          }, 1000); // Aguarda 1 segundo após o carregamento da página
        });
      `,
            }}
          />

          {/* SCRIPT-----------------> */}
          <link
            rel="stylesheet"
            id="widget-image-carousel-css"
            href="https://digi.maneiraweb.com.br/wp-content/plugins/elementor/assets/css/widget-image-carousel.min.css?ver=3.25.4"
            media="all"
          />
          <link
            rel="stylesheet"
            id="elementor-post-8-css"
            href="https://digi.maneiraweb.com.br/wp-content/uploads/elementor/css/post-8.css?ver=1739318880"
            media="all"
          />

          <link
            rel="stylesheet"
            id="elementor-frontend-css"
            href="https://digi.maneiraweb.com.br/wp-content/plugins/elementor/assets/css/frontend.min.css?ver=3.25.4"
            media="all"
          />
          <link
            rel="stylesheet"
            id="swiper-css"
            href="https://digi.maneiraweb.com.br/wp-content/plugins/elementor/assets/lib/swiper/v8/css/swiper.min.css?ver=8.4.5"
            media="all"
          />

          <link
            rel="stylesheet"
            id="e-swiper-css"
            href="https://digi.maneiraweb.com.br/wp-content/plugins/elementor/assets/css/conditionals/e-swiper.min.css?ver=3.25.4"
            media="all"
          />
          <meta name="generator" content="WordPress 6.7.2" />

          <meta
            name="generator"
            content="Elementor 3.25.4; features: e_font_icon_svg, additional_custom_breakpoints, e_optimized_control_loading, e_element_cache; settings: css_print_method-external, google_font-enabled, font_display-swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />

          <script src="/scripts/cardAnimations.js" defer></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
