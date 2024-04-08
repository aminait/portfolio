import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Head from 'next/head';
import { Grid, Typography, Box, Slide } from '@mui/material';
import MainLayout from '../layouts/MainLayout';
import { useResponsive } from '../hooks/useResponsive';
import RolodexCard from '../components/sections/home/rolodex/RolodexCard';
import Rolodex from '../components/sections/home/rolodex/RolodexContainer';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';

const titles = ['Software Engineer', 'Full Stack Web Developer'];
export default function Home() {
  const router = useRouter();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const cards = [
    { title: 'About Me', content: 'hi' },
    {
      title: '_about-me',
      content:
        'I am a full stack web developer specializing in building web apps and SaaS products. My stack:',
    },
    // { title: 'Proficiencies', content: 'Techs' },
    { title: 'Latest Project', content: 'Realtime Dashboard' },
    { title: 'Featured Project', content: 'hi' },
    { title: 'Education', content: 'hi' },
    { title: 'About Me', content: 'hi' },
    { title: 'About Me', content: 'hi' },
    // ... Add as many card contents as you want
  ];

  const { isDesktop } = useResponsive();
  const [fade, setFade] = useState(false);
  const [transition, setTransition] = useState(true);
  // const [title, setTitle] = useState(titles[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const boxRef = useRef(null);

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.07,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const action = (snackbarId) => (
    <>
      <button
        onClick={() => {
          alert(`I belong to snackbar with id ${snackbarId}`);
        }}
      >
        Undo
      </button>
      <button
        onClick={() => {
          closeSnackbar(snackbarId);
        }}
      >
        Dismiss
      </button>
    </>
  );

  useEffect(() => {
    setFade(true);
    // enqueueSnackbar('New theme available', { action });
  }, []);

  const line1 = 'Hi all, I am';
  const line2 = 'Amina Ait';

  const onComplete = () => {
    setFade(false);
    setTimeout(() => {
      if (currentIndex === titles.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex((prev) => prev + 1);
      }
      setFade(true);
    }, 1000);
  };

  // const handleScroll = (e) => {
  //   //  if (e.deltaY < 0) {

  //   //  } else
  //   if (e.deltaY > 0) {
  //     router.push('/about');
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener('wheel', handleScroll);

  //   // Clean up the event listener
  //   return () => {
  //     window.removeEventListener('wheel', handleScroll);
  //   };
  // }, []);

  // TODO - make font smaller
  return (
    <>
      <Head>
        <title>Amina Ait | Software & Computer Engineer</title>
      </Head>

      <Grid
        container
        display="flex"
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{
          height: 'inherit',
          paddingX: 25,
        }}
        // spacing={2}
      >
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Grid
            container
            direction="column"
            justify="space-around"
            spacing={8}
            ref={containerRef}
            sx={{ padding: '2rem' }}
          >
            {/* COLOR BG */}
            <Grid item sx={{ display: { xs: 'block', md: 'none' } }}>
              <AnimatePresence key={'grid-color-bg-mobile'}>
                <motion.div
                  key={1}
                  initial={{ opacity: 0.6, x: 100, y: 20 }}
                  animate={{ opacity: 0.4, x: 0, y: 100 }}
                  exit={{ opacity: 0, x: 20, y: 0 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                  style={{
                    position: 'absolute',
                    // left: '1rem',
                    // top: '15rem',
                    width: '11rem',
                    height: '12rem',
                    background: '#43D9AD',
                    opacity: '0.6',
                    filter: 'blur(90px)',
                  }}
                />
                <motion.div
                  key={2}
                  initial={{ opacity: 0.6 }}
                  animate={{ opacity: 0.4 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                  style={{
                    position: 'absolute',
                    bottom: '15rem',
                    right: '1rem',
                    width: '11rem',
                    height: '12rem',
                    background: ' #4D5BCE',
                    opacity: '0.6',
                    filter: 'blur(90px)',
                  }}
                />
              </AnimatePresence>
            </Grid>
            <Grid item>
              {/* <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 1 }}
              > */}
              <Typography>Hi all, I am</Typography>
              {/* </motion.div> */}
              <AnimatePresence key="second-title">
                <motion.h2 variants={sentence} initial="hidden" animate="visible">
                  <Typography variant="h2">
                    {line2.split('').map((char, index) => {
                      return (
                        <motion.span key={char + '-' + index} variants={letter}>
                          {char}
                        </motion.span>
                      );
                    })}
                  </Typography>
                </motion.h2>
              </AnimatePresence>
              <AnimatePresence key="job-title">
                <Typography variant="h5" sx={{ color: (theme) => theme.palette.accent.green }}>
                  {/* {fade ? ( */}
                  <motion.div
                    // variants={sentence}
                    key={titles[0]}
                    onAnimationComplete={onComplete}
                    initial={{ y: 10, opacity: 0.1 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                  >
                    {titles[0]}
                  </motion.div>
                  {/* ) : (
                    titles[currentIndex]
                  )} */}
                </Typography>
              </AnimatePresence>

              {/* {transition && (
                <Box ref={boxRef}>
                  <Slide in={fade} direction="up" container={boxRef.current}>
                    <Typography
                      variant="h5"
                      sx={{ color: (theme) => theme.palette.accent.green }}
                    >{`> ${title}`}</Typography>
                  </Slide>
                </Box>
              )} */}
            </Grid>

            <Grid
              item
              sx={
                {
                  // width: '500px',
                  // height: '475px',
                  // backgroundImage: `linear-gradient(to bottom right, ${(theme) =>
                  //   theme.palette.gradient.main}, ${(theme) =>
                  //   theme.palette.gradient.secondary})`,
                }
              }
            >
              {/* {isDesktop ? (
                <>
                  <Typography
                    sx={{ color: (theme) => theme.palette.secondary.main }}
                    // variant="body2"
                  >
                    {'// complete the game to continue'}
                  </Typography>
                  <Typography
                    sx={{ color: (theme) => theme.palette.secondary.main }}
                    // variant="body2"
                  >
                    {'// you can also see it on my Github page'}
                  </Typography>
                </>
              ) : ( */}
              <Typography
                sx={{ color: (theme) => theme.palette.secondary.main }}
                // variant="body2"
              >
                {'// find my profile on Github:'}
              </Typography>
              {/* )} */}

              <Box
                component="div"
                display="inline"
                sx={{ color: (theme) => theme.palette.secondary.purple }}
              >
                {'const '}
              </Box>
              <Box
                component="div"
                display="inline"
                sx={{ color: (theme) => theme.palette.accent.green }}
              >
                {'githubLink '}
              </Box>
              <Box
                component="div"
                display="inline"
                sx={{ color: (theme) => theme.palette.common.white }}
              >
                {'= '}
              </Box>
              <a href="https://github.com/aminait">
                <Box
                  component="a"
                  display="inline"
                  sx={{
                    color: (theme) => theme.palette.accent.orange,
                    textDecoration: 'none',
                  }}
                >
                  {'"https://github.com/aminait"'}
                </Box>
              </a>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6} sx={{ display: { xs: 'none', md: 'block' } }}>
          {/* <Rolodex cards={cards} /> */}
          {/* DESKTOP */}
          <AnimatePresence key="grid-color-bg-desktop">
            <motion.div
              key={3}
              initial={{ opacity: 0.5, x: 20, y: 100 }}
              animate={{ opacity: 0.3, x: -90, y: 30 }}
              exit={{ opacity: 0, x: 20, y: 0 }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              style={{
                position: 'absolute',
                right: '26rem',
                left: 'unset',
                top: '2rem',
                width: '30rem',
                height: '25rem',
                background: '#43D9AD',
                filter: 'blur(140px)',
                transform: 'rotate(-94.3deg)',
              }}
            />
            <motion.div
              key={4}
              initial={{ opacity: 0.3, x: -20, y: -100 }}
              animate={{ opacity: 0.6, x: 90, y: -30 }}
              exit={{ opacity: 0, x: 20, y: 0 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              style={{
                position: 'absolute',
                bottom: '2rem',
                right: '15rem',
                width: '20rem',
                height: '32rem',

                background: ' #4D5BCE',
                opacity: '0.6',
                filter: 'blur(140px)',
                transform: 'rotate(13.51deg)',
              }}
            />
          </AnimatePresence>
          {/* <Game /> */}
        </Grid>
      </Grid>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
