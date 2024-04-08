import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { CodeBlock, anOldHope } from 'react-code-blocks';

import { Box, Button, Grid, Typography, IconButton } from '@mui/material';
import MainLayout from '../layouts/MainLayout';
import AboutSideNav from '../components/sections/about/AboutSideNav';
import FileTabs from '../components/sections/about/tabs/FileTabs';
// import FileTabPanel from '../components/about/FileTabPanel';
import EmptyState from '../components/common/EmptyState';
import CodeSnippetList from '../components/sections/about/showcase/CodeSnippetList';
import { codeSnippets } from '../content/codeSnippets';
import { tabPanels } from '../content/tabPanels';
import { styled } from '@mui/system';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { useResponsive } from '../hooks/useResponsive';
import { useRouter } from 'next/router';
import ReactMarkdown from 'react-markdown';
import { getAboutData } from '../utils/data';
import remarkGfm from 'remark-gfm';
import { useSnackbar } from 'notistack';
import DownloadIcon from '@mui/icons-material/Download';
import CloseIcon from '@mui/icons-material/Close';

const TabPanel = styled(TabPanelUnstyled)(({ theme }) => ({
  width: '100%',
  fontSize: '0.875rem',
  padding: '1rem',
}));
const About = (props) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const defaultTab = tabPanels.find((panel) => panel.name === 'README');
  const { isMobile } = useResponsive();

  const [openTabs, setOpenTabs] = useState([defaultTab.name]);
  const [activeTab, setActiveTab] = useState(0);
  const [content, setContent] = useState('');
  const tabs = [{ name: 'one' }, { name: 'two' }];
  const handleClickFile = (name) => {
    if (!openTabs.includes(name)) {
      setOpenTabs((prev) => [...prev, name]);
      setActiveTab(openTabs.length);
    } else {
      setActiveTab(openTabs.indexOf(name));
    }
    const content = tabPanels.find((panel) => panel.name === name);
    setContent(content);
  };

  const closeTab = (tabName) => {
    const remainingTabs = openTabs.filter((tab) => tab !== tabName);
    setOpenTabs(remainingTabs);
    // if (openTabs.indexOf(tabName) === openTabs.length) {
    //   setActiveTab(openTabs.length - 1);
    // }
  };

  // const handleScroll = (e) => {
  //   if (e.deltaY < 0) {
  //     router.push('/');
  //   } else if (e.deltaY > 0) {
  //     router.push('/projects');
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener('wheel', handleScroll);

  //   // Clean up the event listener
  //   return () => {
  //     window.removeEventListener('wheel', handleScroll);
  //   };
  // }, []);

  const action = (key) => (
    <>
      <IconButton
        sx={{ color: 'white' }}
        onClick={() => {
          const link = document.createElement('a');
          link.href = '/cv-amina-ait.pdf';
          link.download = 'cv-amina-ait.pdf';

          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }}
      >
        <DownloadIcon />
      </IconButton>
      <IconButton
        onClick={() => {
          closeSnackbar(key);
        }}
      >
        <CloseIcon />
      </IconButton>
    </>
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      enqueueSnackbar('Download CV', { action, variant: 'info' });
    }, 2000);

    return () => clearTimeout(timer); // Clear the timeout on component unmount
  }, [enqueueSnackbar]);
  return (
    <>
      <Head>
        <title>Amina Ait | About</title>
      </Head>
      <Grid container justifyContent="start" sx={{ height: { xs: 'auto', md: '100%' } }}>
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
          <PerfectScrollbar>
            <AboutSideNav handleClickFile={handleClickFile} />
          </PerfectScrollbar>
        </Grid>
        <Grid
          item
          sx={{
            width: {
              md: '86.5%',
            },
          }}
        >
          <Grid
            container
            display="flex"
            flexDirection="row"
            // sx={{ height: '100%' }}
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
                  <Box
                    sx={{
                      padding: '2rem',
                      width: 'calc(100% - 2rem)',
                    }}
                  >
                    {openTabs.map((tab, i) => {
                      const matched = tabPanels.find((panel) => panel.name === tab);
                      const unsplitContent = matched.content;
                      const content = matched.type === 'js' && matched.content.split('\n');
                      const length = content.length + 2;
                      return (
                        <TabPanel
                          key={i}
                          value={i}
                          sx={{
                            color: '#607B96',
                          }}
                        >
                          {isMobile && (
                            <Typography
                              sx={{
                                color: 'white',
                                marginBottom: '2rem',
                                marginTop: 0,
                              }}
                            >
                              {matched.title}
                            </Typography>
                          )}
                          {/* {matched.type === 'js' ? ( */}
                          <CodeBlock
                            text={matched.content}
                            language={'json'}
                            showLineNumbers={true}
                            theme={anOldHope}
                            wrapLongLines
                            codeBlock
                            customStyle={{
                              background: 'none',
                              overflowWrap: 'break-word',
                            }}
                            codeBlockStyle={{
                              color: 'green',
                            }}
                          />
                          {/* ) : (
                            <Box sx={{ color: (theme) => theme.palette.text.secondary }}>
                              <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                components={customComponents}
                              >
                                {`
## About Me

I have **4+ years** of experience in **full stack web development**

Open any file from the file explorer to learn more about me\


## Technologies

Proficient

##### - JS / TS / React / Next.js / Express.js (RESTful + GraphQL)

##### - MongoDB

##### - Firebase (Realtime Database + Firestore)

##### - Docker

##### - Google Cloud Platform

Intermediate

##### - Angular

##### - .NET Core

##### - MySQL

##### - Python
`}
                              </ReactMarkdown>
                            </Box>
                          )} */}
                        </TabPanel>
                      );
                    })}
                  </Box>
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
                height: '80vh',
                display: { xs: 'none', md: 'block' },
              }}
            >
              <PerfectScrollbar>
                {/* {openTabs.map((tab, i) => (
                    <FileTabPanel value={i} key={i} content={`mm${i}`} />
                  ))} */}
                <Box
                  sx={{
                    padding: '2rem',
                    width: 'calc(100% - 2rem)',
                  }}
                >
                  {isMobile && (
                    <Typography
                      sx={{
                        color: 'white',
                        marginBottom: '2rem',
                        marginTop: 0,
                      }}
                    >
                      {matched.title}
                    </Typography>
                  )}

                  <Typography
                    sx={{
                      color: (theme) => theme.palette.secondary.main,
                      margin: '10px 10px 0 10px',
                    }}
                  >
                    {'// Code Snippets Showcase:'}
                  </Typography>
                  <CodeSnippetList codeSnippets={codeSnippets} />
                </Box>
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

export function getStaticProps(context) {
  const about = getAboutData();

  return {
    props: {
      about: about,
    },
    revalidate: 600,
  };
}

export default About;
