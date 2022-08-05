// import '../styles/globals.css';
import Head from 'next/head';
import 'react-perfect-scrollbar/dist/css/styles.css';

import ThemeProvider from '../theme';

const variants = {
  hidden: { opacity: 1, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

function MyApp({ Component, pageProps, router }) {
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
