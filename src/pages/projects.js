import React, { useState } from 'react';
import Head from 'next/head';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';

import MainLayout from '../layouts/MainLayout';
import ProjectsSideNav from '../components/sections/projects/ProjectsSideNav';
import { Grid } from '@mui/material';
import EmptyState from '../components/common/EmptyState';
import ProjectCard from '../components/sections/projects/ProjectCard';
import { projects } from '../content/projects';

const Projects = () => {
  const [projectsData, setProjectsData] = useState(projects);
  const [loading, setLoading] = useState(false);
  const emptyState = ['/**', '* No projects found', '*/'];

  const handleCheck = (checkedItems) => {
    setLoading(true);
    const filteredProjects = projects.filter((project) =>
      checkedItems.every((item) =>
        project.tags.includes(item.name.toLowerCase())
      )
    );
    setTimeout(() => {
      setProjectsData(filteredProjects);
      setLoading(false);
    }, 20);
  };
  return (
    <>
      <Head>
        <title>Amina Ait | Projects</title>
      </Head>
      <Grid
        container
        display="flex"
        direction="row"
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
          <AnimatePresence key="projects-list">
            {!loading ? (
              projectsData.length ? (
                // <LayoutGroup>
                <Grid
                  container
                  direction="row"
                  display="flex"
                  // sx={{ padding: '3rem', marginLeft: '5rem' }}
                  // alignItems="flex-start"
                  justifyContent="space-between"
                  spacing={2}
                  component={motion.ul}
                  sx={{ listStyle: 'none' }}
                  variants={{
                    hidden: { opacity: 1 },
                    visible: {
                      opacity: 1,
                      transition: {
                        delay: 1,
                        staggerChildren: 0.05,
                      },
                    },
                  }}
                  initial="hidden"
                  animate="visible"
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
                      {/* <motion.li layout initial="initial" whileHover="hover"> */}
                      <motion.li
                        key={id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        variants={{
                          hidden: { opacity: 0, y: 50 },
                          visible: { opacity: 1, y: 0 },
                        }}
                      >
                        <ProjectCard project={project} />
                      </motion.li>
                      {/* </motion.li> */}
                    </Grid>
                  ))}
                </Grid>
              ) : (
                // </LayoutGroup>
                <EmptyState lines={emptyState} />
              )
            ) : (
              <p></p>
            )}
          </AnimatePresence>
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
