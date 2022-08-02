import * as React from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import CustomIcon from '../common/CustomIcon';

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-size: 0.875rem;
`;

// const Tab = styled(TabUnstyled)`
//   color: #607b96;
//   cursor: pointer;
//   font-size: 0.875rem;
//   background-color: transparent;
//   width: 100%;
//   padding: 12px 16px;
//   margin: 6px 6px;
//   border: none;
//   display: flex;
//   justify-content: center;

//   &:hover {
//     background-color: #1e2d3d;
//   }
//   &.${tabUnstyledClasses.selected} {
//     color: white;
//   }
// `;

const Tab = styled(TabUnstyled)(({ theme }) => ({
  color: '#607b96',
  minWidth: '275px',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  padding: '12px 16px',
  margin: '6px 6px',
  border: 'none',
  display: 'flex',
  whiteSpace: 'nowrap',
  '&:hover': {
    backgroundColor: '#1e2d3d',
  },
  [`&.${tabUnstyledClasses.selected}`]: {
    color: 'white',
  },
}));

const TabsList = styled(TabsListUnstyled)(({ theme }) => ({
  backgroundColor: theme.palette.primary.lighter,
  display: 'inline-flex',
  alignItems: 'center',
  borderBottom: '2px solid #1E2D3D',
}));

export default function FileTabs({
  tabs = [],
  activeTab = 0,
  setActiveTab,
  closeTab,
}) {
  return (
    <>
      <TabsUnstyled defaultValue={activeTab} value={activeTab}>
        <TabsList>
          {tabs.map((tab, i) => (
            <Tab key={i}>
              {tab}
              <CustomIcon
                icon="ri:close-circle-fill"
                onClick={() => closeTab(tab)}
              />
            </Tab>
          ))}
        </TabsList>
        {tabs.map((tab, i) => (
          <TabPanel key={i} value={i}>{`smt${i}`}</TabPanel>
        ))}
      </TabsUnstyled>
    </>
  );
}
