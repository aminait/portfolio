import * as React from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import CustomIcon from '../../common/CustomIcon';
import { Grid } from '@mui/material';
import { Box, Typography } from '@mui/material';

const TabsList = styled(TabsListUnstyled)(({ theme }) => ({
  backgroundColor: theme.palette.primary.lighter,
  display: 'inline-flex',
  alignItems: 'center',
  borderBottom: '2px solid #1E2D3D',
  width: '100%',
}));

const Tab = styled(TabUnstyled)(({ theme }) => ({
  color: '#607b96',
  minWidth: '120px',
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

const TabPanel = styled(TabPanelUnstyled)(({ theme }) => ({
  width: '100%',
  fontSize: '0.875rem',
  padding: '1rem',
}));

const Tabs = styled(TabsUnstyled)(({ theme }) => ({
  // backgroundColor: theme.palette.primary.lighter,
  // display: 'inline-flex',
  // alignItems: 'center',
  // borderBottom: '2px solid #1E2D3D',
}));

export default function FileTabs({
  tabs = [],
  activeTab = 0,
  setActiveTab,
  closeTab,
}) {
  return (
    <>
      <Tabs defaultValue={activeTab} value={activeTab}>
        <TabsList>
          {tabs.map((tab, i) => (
            <Tab key={i} onClick={() => setActiveTab(i)}>
              <Grid container display="flex" justifyContent="space-between">
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
              </Grid>
            </Tab>
          ))}
        </TabsList>
        {tabs.map((tab, i) => (
          <TabPanel key={i} value={i}>{`smt${i}`}</TabPanel>
        ))}
      </Tabs>
    </>
  );
}
