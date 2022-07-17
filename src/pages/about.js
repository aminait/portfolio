import React from 'react';
import Head from 'next/head';
import { Grid } from '@mui/material';
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
      </Grid>
    </>
  );
};

About.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default About;
