import Document, { Html, Head, Main, NextScript } from 'next/document';
import { getElementorCssLinksData } from '../utils/elementor';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const id = ctx.query.id || ctx.req?.__NEXT_DATA__?.props?.id || null;

    return { ...initialProps, id };
  }

  render() {
    const { id } = this.props.__NEXT_DATA__.props;
    const elementorCssLinks = getElementorCssLinksData(parseInt(id));

    return (
      <Html>
        <Head>
          {elementorCssLinks?.map((link) => (
            <link key={link.id} rel="stylesheet" href={link.link} />
          ))}
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