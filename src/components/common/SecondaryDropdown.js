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
  color: theme.palette.secondary.main,
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '&:hover': {
    color: 'white',
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  //   borderTop: `1px solid ${theme.palette.lines.main}`,
  color: theme.palette.secondary.main,
}));

export default function SecondaryDropdown({
  text = 'professional-info',
  children = 'wee',
  isFirst,
  sx,
  isOpen,
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
        <AccordionSummary
          sx={{
            '&:hover': {
              color: 'white',
            },
          }}
        >
          <Typography>{text}</Typography>
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
    </div>
  );
}
