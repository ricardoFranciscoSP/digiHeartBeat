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
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
