import React, { useState } from 'react';
import Head from 'next/head';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { CodeBlock, anOldHope } from 'react-code-blocks';

import { Box, Grid, Typography } from '@mui/material';
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

const TabPanel = styled(TabPanelUnstyled)(({ theme }) => ({
  width: '100%',
  fontSize: '0.875rem',
  padding: '1rem',
}));
const About = () => {
  const { isMobile } = useResponsive();
  const defaultTab = tabPanels.find((panel) => panel.name === 'README');
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
  return (
    <>
      <Head>
        <title>Amina Ait | About</title>
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
          <PerfectScrollbar>
            <AboutSideNav handleClickFile={handleClickFile} />
          </PerfectScrollbar>
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
                  <Box
                    sx={{
                      padding: '2rem',
                      width: 'calc(100% - 2rem)',
                    }}
                  >
                    {openTabs.map((tab, i) => {
                      const matched = tabPanels.find(
                        (panel) => panel.name === tab
                      );
                      const content = matched.content.split('\n');
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
                height: '47rem',
                display: { xs: 'none', md: 'block' },
              }}
            >
              <PerfectScrollbar>
                <Typography
                  sx={{
                    color: (theme) => theme.palette.secondary.main,
                    margin: '10px 10px 0 10px',
                  }}
                >
                  {'// Code Snippet Showcase:'}
                </Typography>
                <CodeSnippetList codeSnippets={codeSnippets} />
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
