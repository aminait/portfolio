// import '../styles/globals.css';
import Head from 'next/head';
import 'react-perfect-scrollbar/dist/css/styles.css';
import '../styles/nprogess.css';
import { motion } from 'framer-motion';

import ThemeProvider from '../theme';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import NProgress from 'nprogress';
import { Box } from '@mui/material';
import useEventListener from '@use-it/event-listener';
const ESCAPE_KEYS = ['27', 'Escape'];

const variants = {
  hidden: { opacity: 1, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

function MyApp({ Component, pageProps, router }) {
  // function handler({ key }) {
  //   if (ESCAPE_KEYS.includes(String(key))) {
  //     console.log('Escape key pressed!');
  //   }
  //   return;
  // }
  // useEventListener('keydown', handler);

  useEffect(() => {
    router.events.on('routeChangeStart', () => NProgress.start());

    router.events.on('routeChangeComplete', () => NProgress.done());
    router.events.on('routeChangeError', () => NProgress.done());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      <ThemeProvider>{getLayout(<Component {...pageProps} />)}</ThemeProvider>
    </>
  );
}

export default MyApp;
