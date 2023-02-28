import "../styles/globals.css";
import Head from "next/head";
import SEO from "../next-seo.config";
import { DefaultSeo } from "next-seo";
import { Helmet } from "react-helmet";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Helmet htmlAttributes={{ lang: "en" }} />
      <Head className="scroll-smooth">
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      {/* <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-P2NGFKF');
      `}
      </Script> */}
      <body className="scroll-smooth bg-background">
        <DefaultSeo {...SEO} />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P2NGFKF" height="0" width="0" style="display: none; visibility: hidden;" />`,
          }}
        />
        <Component {...pageProps} />
      </body>
    </>
  );
}
