import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />

        {/* Local SEO Meta */}
        <meta name="geo.region" content="MA-TNG" />
        <meta name="geo.placename" content="Tanger" />
        <meta name="geo.position" content="35.7608711;-5.8518966" />
        <meta name="ICBM" content="35.7608711, -5.8518966" />

        {/* Canonical URLs are set per page with next/head. */}
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
