import React, { useState, useRef } from 'react';
import { CodeBlock, anOldHope } from 'react-code-blocks';
import {
  Card,
  Grid,
  Stack,
  Typography,
  Box,
  Slide,
  Divider,
} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import CustomIcon from '../../common/CustomIcon';

const CodeSnippet = ({ codeSnippet }) => {
  const { code, timestamp, starCount, details } = codeSnippet;
  const boxRef = useRef();
  const [detailsView, setDetailsView] = useState(false);
  const toggleDetailsView = () => {
    setDetailsView((prev) => !prev);
  };

  return (
    <Box component="div" sx={{ padding: '1.5rem' }}>
      <Grid container display="flex" justifyContent="space-between">
        <Stack direction="row" spacing={2}>
          <Avatar alt="Amina Ait" src="/static/avatar.jpeg" />
          <Stack direction="column">
            <Typography
              sx={{ color: (theme) => theme.palette.secondary.purple }}
            >
              {'@aminait'}
            </Typography>
            <Typography
              sx={{ color: (theme) => theme.palette.secondary.main }}
              variant="caption"
            >
              {`Created ${timestamp} ago`}
            </Typography>
          </Stack>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Box
            component={'span'}
            onClick={toggleDetailsView}
            sx={{ cursor: 'pointer' }}
            direction="row"
            display="flex"
          >
            <CustomIcon
              icon="fa6-solid:comment-dots"
              color="#607B96"
              sx={{
                fontSize: '1.2rem',
                marginRight: '10px',
              }}
            />
            <Typography sx={{ color: (theme) => theme.palette.secondary.main }}>
              {'details'}
            </Typography>
          </Box>
          <Box component={'span'} direction="row" display="flex">
            <CustomIcon
              icon="ri:star-fill"
              color="#607B96"
              sx={{
                fontSize: '1.2rem',
                marginRight: '10px',
              }}
            />
            <Typography sx={{ color: (theme) => theme.palette.secondary.main }}>
              {`${starCount} stars`}
            </Typography>
          </Box>
        </Stack>
      </Grid>

      <Card
        sx={{
          marginTop: '1rem',
          backgroundColor: (theme) => theme.palette.primary.light,
          color: (theme) => theme.palette.secondary.main,
          borderColor: (theme) => theme.palette.lines.light,
          borderRadius: '0.5rem',
          borderStyle: 'solid',
          borderWidth: '2px',
          // display: 'flex',
          // flexDirection: 'column',
          // justifyContent: 'space-between',
          // display: 'inline-block',/
        }}
      >
        <CodeBlock
          text={code}
          language={'javascript'}
          showLineNumbers={false}
          theme={anOldHope}
          wrapLines
          codeBlock
          customStyle={{
            background: 'none',
          }}
        />
      </Card>
      {detailsView && (
        <>
          <Divider
            sx={{
              width: '100%',
              backgroundColor: (theme) => theme.palette.lines.light,
              marginY: '1rem',
            }}
          />
          <Box
            ref={boxRef}
            component="div"
            display="flex"
            justifyContent="space-between"
          >
            {/* <Slide in={detailsView} direction="down" container={boxRef.current}> */}
            <Typography
              variant="p"
              sx={{
                color: (theme) => theme.palette.secondary.main,
                marginBottom: '8px',
              }}
            >
              {details}
            </Typography>
            <CustomIcon
              icon="ri:close-fill"
              sx={{
                color: (theme) => theme.palette.secondary.main,
                cursor: 'pointer',
                margin: '8px',
                fontSize: '1.2rem',
              }}
              onClick={toggleDetailsView}
            />
            {/* </Slide> */}
          </Box>
        </>
      )}
    </Box>
  );
};

export default CodeSnippet;
