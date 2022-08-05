import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import CustomIcon from './CustomIcon';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <CustomIcon
        icon="dashicons:arrow-right"
        color="#607B96"
        sx={{
          fontSize: '1.2rem',
        }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  borderBottom: `2px solid ${theme.palette.lines.light}`,
  color: theme.palette.secondary.main,
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '&:hover': {
    color: 'white',
  },
  [theme.breakpoints.down('md')]: {
    backgroundColor: '#1E2D3D',
    color: 'white',
    margin: '-0.5rem',
    borderBottom: `1px solid #011627`,
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: 0,
  // padding: theme.spacing(2),
  //   borderTop: `1px solid ${theme.palette.lines.main}`,
  borderBottom: `2px solid ${theme.palette.lines.light}`,
  color: theme.palette.secondary.main,
  '& .MuiAccordionDetails-root': {
    padding: '0',
    marginLeft: '20px',
  },
}));

export default function Dropdown({
  text = 'professional-info',
  children = 'wee',
  sx,
  isOpen = false,
}) {
  const [expanded, setExpanded] = React.useState(isOpen);

  const handleChange = () => {
    setExpanded((prevState) => !prevState);
  };

  return (
    <div>
      <Accordion
        expanded={expanded}
        onChange={handleChange}
        sx={{
          backgroundColor: 'inherit',
          ...sx,
        }}
        TransitionProps={{
          timeout: 0,
        }}
      >
        <AccordionSummary>
          <Typography>{text}</Typography>
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
    </div>
  );
}
