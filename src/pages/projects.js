import React from 'react';
import Head from 'next/head';

import MainLayout from '../layouts/MainLayout';
import ProjectsSideNav from '../components/projects/ProjectsSideNav';
import { Grid } from '@mui/material';
import EmptyState from '../components/common/EmptyState';
import ProjectCard from '../components/projects/ProjectCard';

const projects = [
  {
    index: 1,
    image: '#',
    tags: ['react', 'firebase'],
    title: 'Chat App',
    description: 'This app was made as so loooooooooong text',
    repoLink: 'github.com/aminait',
  },
  {
    index: 2,
    image: '#',
    tags: ['mongodb', 'nodejs'],
    title: 'Recruiter App',
    description: 'This app was made as so',
    repoLink: 'github.com/aminait',
  },
];
const Projects = () => {
  return (
    <>
      <Head>
        <title>Amina Ait | Projects</title>
      </Head>
      <Grid
        container
        justifyContent="start"
        sx={{
          height: '100%',
          // '&>:nth-child(n)': {
          //   borderRight: `2px solid #1E2D3D`,
          //   height: 'inherit',
          // },
        }}
      >
        <Grid
          item
          sx={{
            width: {
              xs: '75%',
              md: '12%',
            },
            borderRight: `2px solid #1E2D3D`,
          }}
        >
          <ProjectsSideNav />
        </Grid>
        <Grid item>
          <Grid container direction="row" spacing={2}>
            {/* <EmptyState /> */}
            {projects.map((project, id) => (
              <Grid item key={id}>
                <ProjectCard project={project} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

Projects.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default Projects;
