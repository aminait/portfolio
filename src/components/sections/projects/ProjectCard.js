import * as React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';

export default function ProjectCard({ project, sx }) {
  const { index, image, tags, title, description, liveLink, repoLink } =
    project;

  return (
    <>
      <Box
        component="div"
        display="inline"
        sx={{
          color: (theme) => theme.palette.secondary.purple,
        }}
      >
        {`Project ${index} `}
      </Box>
      <Box
        component="div"
        display="inline"
        sx={{
          color: (theme) => theme.palette.secondary.main,
        }}
      >
        {`// _${title}`}
      </Box>

      <Card
        sx={{
          marginTop: '1rem',
          width: { xs: 250, md: 350 },
          backgroundColor: (theme) => theme.palette.primary.light,
          color: (theme) => theme.palette.secondary.main,
          borderColor: (theme) => theme.palette.lines.light,
          borderRadius: '0.5rem',
          borderStyle: 'solid',
          borderWidth: '2px',
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'scale3d(1.05, 1.05, 1)',
            boxShadow:
              '0 14px 28px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.1)',
          },
          // ...sx,
        }}
      >
        <CardActionArea>
          {/* <Box
            src={image}
            sx={{
              width: '100%',
              height: '8rem',
              objectFit: 'cover',
              // height: '100%',
            }}
          /> */}
          <CardMedia component="img" height="140" image={image} />
        </CardActionArea>
        <CardContent
          sx={{
            height: '8rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="body2">{description}</Typography>
          <CardActions>
            <Button
              size="small"
              sx={{
                backgroundColor: (theme) => theme.palette.lines.light,
                color: 'white',
                textTransform: 'none',
              }}
              href={liveLink}
              target="_blank"
            >
              view-project
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </>
  );
}
