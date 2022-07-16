// import '../styles/globals.css';
import Head from 'next/head';

import ThemeProvider from '../theme';

function MyApp({ Component, pageProps }) {
  console.log(
    '%c What is the most common programming language? ',
    'background: #222; color: #bada55'
  );
  console.log('%c Profanity', 'background: #222; color: white');

  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      <ThemeProvider>{getLayout(<Component {...pageProps} />)}</ThemeProvider>
    </>
  );
}

export default MyApp;
