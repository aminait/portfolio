import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';

import MainLayout from '../layouts/MainLayout';
import ProjectsSideNav from '../components/sections/projects/ProjectsSideNav';
import { Grid, Typography } from '@mui/material';
import EmptyState from '../components/common/EmptyState';
import ProjectCard from '../components/sections/projects/ProjectCard';
import { projects } from '../content/projects';
import PerfectScrollbar from 'react-perfect-scrollbar';
import DraggableProjectCard from '../components/sections/projects/DraggableProjectCard';
import { useSnackbar } from 'notistack';

const Projects = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const cardWidth = 380; // The fixed width of each card
  const cardHeight = 280; // The fixed height of each card
  const margin = 20; // Spacing around each card
  const gap = 40; // Additional space between each card

  const initialGridPositions = [
    { x: 0, y: 0 },
    { x: cardWidth + margin * 2 + gap, y: 0 }, // Add 'gap' to the x position
    { x: 2 * (cardWidth + margin * 2) + 2 * gap, y: 0 }, // Double the 'gap' for the second column
    { x: 0, y: cardHeight + margin * 2 + gap }, // Add 'gap' to the y position for the next row
    { x: cardWidth + margin * 2 + gap, y: cardHeight + margin * 2 + gap }, // Add 'gap' for both x and y positions
    { x: 2 * (cardWidth + margin * 2) + 2 * gap, y: cardHeight + margin * 2 + gap }, // Double the 'gap' for the second column and add for y
    // Continue for more cards...
  ];
  const [gridPositions, setGridPositions] = useState(initialGridPositions);

  const [projectsData, setProjectsData] = useState(projects);
  console.log('Projects -> projects:', projects);
  const [loading, setLoading] = useState(false);
  const [snack, setSnack] = useState('');

  const initialItems = projects.reduce((obj, project) => {
    obj[project.index] = 0; // Assign the entire project object to the id key
    return obj;
  }, {});
  const [items, setItems] = useState(initialItems);
  console.log('Projects -> items:', items);

  const emptyState = ['/**', '* No projects found', '*/'];

  const handleCheck = (checkedItems) => {
    setLoading(true);
    const filteredProjects = projects.filter((project) =>
      checkedItems.every((item) => project.tags.includes(item.name.toLowerCase()))
    );
    setTimeout(() => {
      setProjectsData(filteredProjects);
      setLoading(false);
    }, 20);
  };

  const bringToFront = (index) => {
    setItems((prevItems) => {
      const maxZIndex = Math.max(...Object.values(prevItems)); // Find the highest zIndex in the current state
      let newItems = { ...prevItems };

      // Increment the zIndex of the selected item
      newItems[index] = maxZIndex + 1;

      return newItems;
    });
  };

  const updatePosition = (index, newPosition) => {
    const updated = gridPositions;
    updated[index].x = newPosition.x;
    updated[index].y = newPosition.y;
    setGridPositions(updated);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const id = enqueueSnackbar('Wrong order? Move the projects around!', { variant: 'info' });
      setSnack(id);
    }, 2000);

    const timer2 = setTimeout(() => {
      closeSnackbar(snack);
    }, 4000);
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    }; // Clear the timeout on component unmount
  }, [enqueueSnackbar]);
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
              md: '13.5%',
            },
            borderRight: '2px solid #1E2D3D',
          }}
        >
          <ProjectsSideNav handleCheck={handleCheck} />
        </Grid>
        <Grid
          item
          sx={{
            paddingTop: { xs: 0, md: '2rem' },
            paddingLeft: { xs: 0, md: '3rem' },
            // paddingTop: { xs: '3rem' },
            width: '86.5%',
            height: '80vh',
          }}
        >
          <PerfectScrollbar>
            <AnimatePresence key="projects-list">
              {!loading ? (
                projectsData.length ? (
                  // <LayoutGroup>
                  // <Grid
                  //   container
                  //   direction="row"
                  //   display="flex"
                  //   // sx={{ padding: '3rem', marginLeft: '5rem' }}
                  //   // alignItems="flex-start"
                  //   justifyContent="space-between"
                  //   spacing={2}
                  //   component={motion.ul}
                  //   sx={{ listStyle: 'none' }}
                  //   variants={{
                  //     hidden: { opacity: 1 },
                  //     visible: {
                  //       opacity: 1,
                  //       transition: {
                  //         delay: 1,
                  //         staggerChildren: 0.05,
                  //       },
                  //     },
                  //   }}
                  //   initial="hidden"
                  //   animate="visible"
                  // >
                  projectsData.map((project, index) => (
                    <DraggableProjectCard
                      key={index}
                      zIndex={items[project.index]}
                      bringToFront={() => bringToFront(project.index)}
                      gridPosition={gridPositions[index]}
                      // updatePosition={updatePosition}
                      index={index}
                    >
                      <ProjectCard project={project} />
                    </DraggableProjectCard>
                  ))
                ) : (
                  // </Grid>
                  // </LayoutGroup>
                  emptyState.map((line, index) => (
                    <Typography key={index} sx={{ color: (theme) => theme.palette.secondary.main }}>
                      <span>{`${index + 1}.`}</span> {line}
                    </Typography>
                  ))
                )
              ) : (
                <p></p>
              )}
            </AnimatePresence>
          </PerfectScrollbar>
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
