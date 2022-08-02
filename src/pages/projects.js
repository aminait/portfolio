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
    image:
      'https://i.pinimg.com/736x/29/24/ee/2924eecb49699968ee9b818f20ff22ff.jpg',
    tags: ['react', 'firebase'],
    title: 'chat-app',
    description: 'This app was made as so loooooooooong text',
    repoLink: 'github.com/aminait',
  },
  {
    index: 2,
    image: 'https://cdn-icons-png.flaticon.com/512/1257/1257370.png?w=360',
    tags: ['mongodb', 'nodejs'],
    title: 'recruiter-app',
    description: 'This app was made as so',
    repoLink: 'github.com/aminait',
  },
  {
    index: 3,
    image:
      'https://img.freepik.com/premium-vector/business-card-design-vertical-style-with-image-placeholder_22994-289.jpg?w=2000',
    tags: ['mongodb', 'nodejs'],
    title: 'recruiter-app',
    description: 'This app was made as so',
    repoLink: 'github.com/aminait',
  },
  {
    index: 4,
    image:
      'https://cdn.dribbble.com/users/463734/screenshots/2016799/generic-error_shot.png?compress=1&resize=400x300&vertical=top',
    tags: ['mongodb', 'nodejs'],
    title: 'recruiter-app',
    description: 'This app was made as so',
    repoLink: 'github.com/aminait',
  },
];
const Projects = () => {
  // function applySortFilter({ projectData, filterTags }) {
  //   if (filterTags.length) {
  //     // projectData = projectData.filter((item) =>
  //     //   filterTags.filter((filterTag) => item.tags.includes(filterTag))
  //     // );
  //     projectData = filterTags.forEach((filterTag) =>
  //       projectData.filter((item) => item.tags.includes(filterTag))
  //     );
  //   }
  //   console.log('applySortFilter -> projectData', projectData);

  //   return projectData;
  // }

  // const res = applySortFilter({
  //   projectData: projects,
  //   filterTags: ['nodejs'],
  // });
  // console.log('Projects -> res', res);
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
          <Grid
            container
            direction="row"
            sx={{ padding: '3rem', marginLeft: '5rem' }}
            alignItems="center"
          >
            {/* <EmptyState /> */}
            {projects.map((project, id) => (
              <Grid
                item
                key={id}
                xs={12}
                md={6}
                lg={4}
                sx={{ marginBottom: '3rem' }}
              >
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
