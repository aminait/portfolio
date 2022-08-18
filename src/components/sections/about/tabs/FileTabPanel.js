import React from 'react';
import { styled } from '@mui/system';

import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
`;
const FileTabPanel = ({ value = 0, content = 'smt' }) => {
  return <TabPanel value={value}>{content}</TabPanel>;
};

export default FileTabPanel;
