import Head from 'next/head';
import { Grid, Typography } from '@mui/material';
import MainLayout from '../layouts/MainLayout';

export default function Home() {
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
        spacing={2}
      >
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Grid container direction="column" spacing={4}>
            <Grid item>
              <Typography sx={{ fontSize: '1rem', lineHeight: '1rem' }}>
                Hi all, I am
              </Typography>
              <Typography variant="h2" sx={{ fontWeight: 400 }}>
                Amina Ait
              </Typography>
              <Typography variant="h5">{'> Software Developer'}</Typography>
            </Grid>

            <Grid item>
              <Typography
                sx={{ color: (theme) => theme.palette.secondary.main }}
              >
                {'// complete the game to continue'}
              </Typography>
              <Typography
                sx={{ color: (theme) => theme.palette.secondary.main }}
              >
                {'// you can also see it on my Github page'}
              </Typography>
              <Typography>
                {'const githubLink = "https://github.com/aminait"'}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>snake game</Grid>
      </Grid>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
