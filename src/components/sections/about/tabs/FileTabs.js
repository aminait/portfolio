import * as React from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import CustomIcon from '../../../common/CustomIcon';
import { Stack } from '@mui/material';
import { Box, Typography } from '@mui/material';
import ScrollBar from 'react-perfect-scrollbar';
import { useResponsive } from '../../../../hooks/useResponsive';

const TabsList = styled(TabsListUnstyled)(({ theme }) => ({
  backgroundColor: theme.palette.primary.lighter,
  display: 'inline-flex',
  alignItems: 'center',
  borderBottom: '2px solid #1E2D3D',
  width: '100%',
  minHeight: '48px',
}));

const Tab = styled(TabUnstyled)(({ theme }) => ({
  color: '#607b96',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  padding: '12px 16px',
  border: 'none',
  display: 'flex',
  borderRight: '2px solid #1E2D3D',
  height: 'inherit',
  whiteSpace: 'nowrap',
  '&:hover': {
    backgroundColor: '#1e2d3d',
  },
  [`&.${tabUnstyledClasses.selected}`]: {
    color: 'white',
  },
}));

const Tabs = styled(TabsUnstyled)(({ theme }) => ({
  // backgroundColor: theme.palette.primary.lighter,
  // display: 'flex',
  // flexDirection: 'column',
  // justifyContent: 'flex-start',
  // alignItems: 'flex-start',
  // // alignItems: 'center',
  // // borderBottom: '2px solid #1E2D3D',
  // height: '100%',
}));

export default function FileTabs({
  tabs = [],
  activeTab = 0,
  setActiveTab,
  closeTab,
  children,
}) {
  const { isDesktop } = useResponsive();
  console.log('tabs', tabs);
  return (
    <>
      <Tabs defaultValue={activeTab} value={activeTab} sx={{ width: 'revert' }}>
        {isDesktop && (
          <ScrollBar>
            <TabsList>
              {tabs.map((tab, i) => (
                <Tab key={i} onClick={() => setActiveTab(i)}>
                  <Stack
                    display="flex"
                    direction="row"
                    justifyContent={'space-between'}
                  >
                    <Typography sx={{ marginRight: '10px' }}>{tab}</Typography>
                    <CustomIcon
                      icon="ri:close-circle-fill"
                      onClick={() => closeTab(tab)}
                      sx={{
                        margin: 'auto',
                        '&:hover': {
                          color: 'white',
                        },
                      }}
                    />
                  </Stack>
                </Tab>
              ))}
            </TabsList>
          </ScrollBar>
        )}
        {children}
      </Tabs>
    </>
  );
}
