import React, { useState } from 'react';
import Head from 'next/head';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';

import { Box, Grid, Typography } from '@mui/material';
import MainLayout from '../layouts/MainLayout';
import AboutSideNav from '../components/about/AboutSideNav';
import FileTabs from '../components/about/FileTabs';
import FileTabPanel from '../components/about/FileTabPanel';
import EmptyState from '../components/common/EmptyState';
import CodeSnippetList from '../components/about/showcase/CodeSnippetList';
const About = () => {
  const [openTabs, setOpenTabs] = useState([]);
  const [activeTab, setActiveTab] = useState(null);
  console.log('About -> activeTab', activeTab);
  const tabs = [{ name: 'one' }, { name: 'two' }];
  const handleClickFile = (name) => {
    console.log('000000000000000000000000', name);
    if (!openTabs.includes(name)) {
      setOpenTabs((prev) => [...prev, name]);
      setActiveTab(openTabs.length);
    } else {
      console.log(
        'handleClickFile -> openTabs.indexOf(name)',
        openTabs.indexOf(name)
      );
      setActiveTab(openTabs.indexOf(name));
    }
  };

  const closeTab = (tabName) => {
    const remainingTabs = openTabs.filter((tab) => tab !== tabName);
    setOpenTabs(remainingTabs);
    // if (openTabs.indexOf(tabName) === openTabs.length) {
    //   setActiveTab(openTabs.length - 1);
    // }
  };
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
          <AboutSideNav handleClickFile={handleClickFile} />
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
                  md: '50%',
                },
                borderRight: '2px solid #1E2D3D',
              }}
            >
              {openTabs.length ? (
                <FileTabs
                  tabs={openTabs}
                  closeTab={closeTab}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                >
                  {/* {openTabs.map((tab, i) => (
                    <FileTabPanel value={i} key={i} content={`mm${i}`} />
                  ))} */}
                </FileTabs>
              ) : (
                <Box sx={{ padding: '2rem' }}>
                  <EmptyState />
                </Box>
              )}
            </Grid>
            <Grid
              item
              lg={6}
              sx={{
                height: '47rem',
                display: { xs: 'none', md: 'block' },
              }}
            >
              <Box
                sx={{
                  borderBottom: '2px solid #1E2D3D',
                  height: '51px',
                }}
              ></Box>
              <PerfectScrollbar>
                <Typography
                  sx={{ color: (theme) => theme.palette.secondary.main }}
                >
                  {'// Code Snippet Showcase;'}
                </Typography>
                <CodeSnippetList />
              </PerfectScrollbar>
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
