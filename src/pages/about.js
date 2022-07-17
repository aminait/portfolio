import React from 'react';
import Head from 'next/head';
import { Box, Grid } from '@mui/material';
import MainLayout from '../layouts/MainLayout';
import AboutSideNav from '../components/about/AboutSideNav';
const About = () => {
  return (
    <>
      <Head>
        <title>Amina Ait | About</title>
      </Head>
      <Grid container justifyContent="start" sx={{ height: '100%' }}>
        <Grid
          item
          sx={{
            width: {
              xs: '75%',
              md: '12%',
            },
            borderRight: '2px solid #1E2D3D',
          }}
        >
          <AboutSideNav />
        </Grid>
        <Grid
          item
          sx={{
            width: {
              md: '88%',
            },
          }}
        >
          <Grid
            container
            display="flex"
            flexDirection="row"
            sx={{ height: '100%' }}
          >
            <Grid
              item
              sx={{
                width: {
                  xs: '100%',
                  md: '44%',
                },
                borderRight: '2px solid #1E2D3D',
              }}
            >
              <Box
                sx={{
                  borderBottom: '2px solid #1E2D3D',
                  height: '51px',
                }}
              >
                tabs
              </Box>
            </Grid>
            <Grid item lg={6}>
              <Box
                sx={{
                  borderBottom: '2px solid #1E2D3D',
                  height: '51px',
                }}
              >
                empty line
              </Box>
              code snippet showcase
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

About.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default About;
