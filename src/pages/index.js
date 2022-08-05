import React, { useEffect, useState, useRef } from 'react';

import Head from 'next/head';
import { Grid, Typography, Box, Slide } from '@mui/material';
import MainLayout from '../layouts/MainLayout';
import Game from '../components/sections/home/snake-game/game';
import { useResponsive } from '../hooks/useResponsive';

export default function Home() {
  const { isDesktop } = useResponsive();
  const [fade, setFade] = useState(false);
  const [title, setTitle] = useState('Software Developer');
  const containerRef = useRef(null);
  const boxRef = useRef(null);

  const titles = ['Software Developer', 'Computer Engineer'];

  useEffect(() => {
    setFade(true);
  }, []);

  // TODO - make font smaller
  return (
    <>
      <Head>
        <title>Amina Ait | Software Dev & Computer Engineer</title>
      </Head>

      <Grid
        container
        display="flex"
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{
          height: 'inherit',
        }}
        spacing={2}
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
              <Box
                sx={{
                  position: 'absolute',
                  left: '1rem',
                  top: '15rem',
                  width: '11rem',
                  height: '12rem',
                  background: '#43D9AD',
                  opacity: '0.6',
                  filter: 'blur(90px)',
                  // transform: 'rotate(13.51deg)',
                }}
              ></Box>
              <Box
                sx={{
                  position: 'absolute',
                  bottom: '15rem',
                  right: '1rem',
                  width: '11rem',
                  height: '12rem',
                  background: ' #4D5BCE',
                  opacity: '0.6',
                  filter: 'blur(90px)',
                  // transform: 'rotate(-94.3deg)',
                }}
              ></Box>
            </Grid>
            <Grid item>
              <Typography sx={{ fontSize: '1rem', lineHeight: '1rem' }}>
                Hi all, I am
              </Typography>
              <Typography variant="h2">Amina Ait</Typography>

              <Box ref={boxRef}>
                <Slide in={fade} direction="up" container={boxRef.current}>
                  <Typography
                    variant="h5"
                    sx={{ color: (theme) => theme.palette.accent.green }}
                  >{`> ${title}`}</Typography>
                </Slide>
              </Box>
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
              {isDesktop ? (
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
              ) : (
                <Typography
                  sx={{ color: (theme) => theme.palette.secondary.main }}
                  // variant="body2"
                >
                  {'// find my profile on Github:'}
                </Typography>
              )}

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
        <Grid item sx={{ display: { xs: 'none', md: 'block' } }}>
          {' '}
          {/* DESKTOP */}
          <Box
            sx={{
              position: 'absolute',
              right: '26rem',
              left: 'unset',
              top: '15rem',
              width: '20rem',
              height: '12rem',

              background: '#43D9AD',
              opacity: '0.6',
              filter: 'blur(140px)',
              transform: 'rotate(-94.3deg)',
            }}
          ></Box>
          <Box
            sx={{
              position: 'absolute',
              bottom: '10rem',
              right: '15rem',
              width: '20rem',
              height: '12rem',

              background: ' #4D5BCE',
              opacity: '0.6',
              filter: 'blur(140px)',
              transform: 'rotate(13.51deg)',
            }}
          ></Box>
          {/* <Game /> */}
        </Grid>
      </Grid>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
