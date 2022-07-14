// import '../styles/globals.css';
import Head from 'next/head';

import ThemeProvider from '../theme';

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      <ThemeProvider>{getLayout(<Component {...pageProps} />)}</ThemeProvider>
    </>
  );
}

export default MyApp;
