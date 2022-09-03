import '@styles/tailwind.css';

import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{`Erick's Project Portfolio`}</title>
        <meta name="description" content="Portafolio para demostrar mis habilidades" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet"></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
