import 'react-perfect-scrollbar/dist/css/styles.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/nprogess.css';

import ThemeProvider from '../theme';
import { useEffect, useState, useRef } from 'react';
import NProgress from 'nprogress';
import { SnackbarProvider } from 'notistack';
import { Box, GlobalStyles, Collapse } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';

// import { useRouter } from 'next/router';

function MyApp({ Component, pageProps, router }) {
  const notistackRef = useRef(null);

  const [allowScroll, setAllowScroll] = useState(true); // Flag to control scroll actions

  const onClose = (key) => () => {
    notistackRef.current.closeSnackbar(key);
  };
  useEffect(() => {
    const handleScroll = (e) => {
      if (!allowScroll) return;

      // Immediately handle scroll
      if (router.pathname === '/') {
        if (e.deltaY > 0) router.push('/about');
      }
      // else if (router.pathname === '/about') {
      //   if (e.deltaY < 0) {
      //     router.push('/');
      //   }
      //   // else if (e.deltaY > 0) {
      //   //   router.push('/projects');
      //   // }
      // }
      // Add more conditions for other pages as needed

      // Disable further scrolls
      setAllowScroll(false);

      // Re-enable scrolling after a delay
      setTimeout(() => {
        setAllowScroll(true);
      }, 100); // Adjust the delay as needed
    };

    // Only add the event listener if the current route needs custom scroll behavior
    if (['/', '/about'].includes(router.pathname)) {
      window.addEventListener('wheel', handleScroll);
    }

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [allowScroll, router.pathname]);

  useEffect(() => {
    router.events.on('routeChangeStart', () => NProgress.start());

    router.events.on('routeChangeComplete', () => NProgress.done());
    router.events.on('routeChangeError', () => NProgress.done());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getLayout = Component.getLayout ?? ((page) => page);
  const SnackbarWrapper = ({ children, ...rest }) => (
    <Box style={{ marginBottom: '10px', marginRight: '10px' }} {...rest}>
      {children}
    </Box>
  );
  return (
    <>
      <ThemeProvider>
        {/* <SnackbarStyles /> */}

        <SnackbarProvider
          ref={notistackRef}
          dense
          autoHideDuration={1000000}
          maxSnack={3}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          TransitionComponent={Collapse}
          // components={{ Snackbar: SnackbarWrapper }}
          style={{
            marginBottom: '20px',
            marginRight: '40px',
            // padding: '10px',
          }}
          // action={(key) => <CloseIcon />}
        >
          {getLayout(<Component {...pageProps} />)}
        </SnackbarProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;

// function SnackbarStyles() {
//   const theme = useTheme();
//   const isLight = theme.palette.mode === 'light';

//   return (
//     <GlobalStyles
//       styles={{
//         '#__next': {
//           '& .SnackbarContent-root': {
//             width: '100%',
//             padding: theme.spacing(1),
//             margin: theme.spacing(0.25, 0),
//             marginBottom: '100px',
//             // boxShadow: theme.customShadows.z8,
//             borderRadius: theme.shape.borderRadius,
//             color: theme.palette.grey[isLight ? 0 : 800],
//             backgroundColor: theme.palette.grey[isLight ? 900 : 0],
//             '&.SnackbarItem-variantSuccess, &.SnackbarItem-variantError, &.SnackbarItem-variantWarning, &.SnackbarItem-variantInfo':
//               {
//                 color: theme.palette.text.primary,
//                 backgroundColor: theme.palette.background.paper,
//               },
//             [theme.breakpoints.up('md')]: {
//               minWidth: 240,
//             },
//           },
//           '& .SnackbarItem-message': {
//             padding: '0 !important',
//             fontWeight: theme.typography.fontWeightMedium,
//           },
//           '& .SnackbarItem-action': {
//             marginRight: 0,
//             color: theme.palette.action.active,
//             '& svg': { width: 20, height: 20 },
//           },
//         },
//       }}
//     />
//   );
// }
