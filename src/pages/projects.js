import React, { useState } from 'react';
import Head from 'next/head';

import MainLayout from '../layouts/MainLayout';
import ProjectsSideNav from '../components/sections/projects/ProjectsSideNav';
import { Grid } from '@mui/material';
import EmptyState from '../components/common/EmptyState';
import ProjectCard from '../components/sections/projects/ProjectCard';
import { projects } from '../content/projects';

const Projects = () => {
  const [projectsData, setProjectsData] = useState(projects);
  const emptyState = ['/**', '* No projects found', '*/'];

  const handleCheck = (checkedItems) => {
    const filteredProjects = projects.filter((project) =>
      checkedItems.every((item) =>
        project.tags.includes(item.name.toLowerCase())
      )
    );

    setProjectsData(filteredProjects);
  };
  return (
    <>
      <Head>
        <title>Amina Ait | Projects</title>
      </Head>
      <Grid
        container
        justifyContent="start"
        sx={{ height: { xs: 'auto', md: '100%' } }}
      >
        <Grid
          item
          sx={{
            width: {
              xs: 'inherit',
              md: '12%',
            },
            borderRight: '2px solid #1E2D3D',
          }}
        >
          <ProjectsSideNav handleCheck={handleCheck} />
        </Grid>
        <Grid item sx={{ padding: '3rem' }}>
          {projectsData.length ? (
            <Grid
              container
              direction="row"
              display="flex"
              // sx={{ padding: '3rem', marginLeft: '5rem' }}
              // alignItems="flex-start"
              // justifyContent="space-between"
              // spacing={2}
            >
              {projectsData.map((project, id) => (
                <Grid
                  item
                  key={id}
                  xs={12}
                  md={4}
                  lg={4}
                  sx={{ marginBottom: '3rem' }}
                >
                  <ProjectCard project={project} />
                </Grid>
              ))}
            </Grid>
          ) : (
            <EmptyState lines={emptyState} />
          )}
          {/* <EmptyState /> */}
        </Grid>
      </Grid>
    </>
  );
};

Projects.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default Projects;
