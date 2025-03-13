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

          {/* Estilos customizados do Swiper */}
          <link rel="stylesheet" href="/styles/swiper-styles.css" />

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

          {/* Script de configuração do Swiper */}
          <script src="/scripts/swiper-config.js" defer />

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
