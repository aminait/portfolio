import React, { useState } from 'react';
import CustomIcon from '../../common/CustomIcon';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';
import { motion } from 'framer-motion';

export default function ProjectCard({ project, sx }) {
  const [isHovered, setIsHovered] = useState(false);

  const { index, image, tags, title, description, liveLink, repoLink } = project;

  const variants = {
    visible: { opacity: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, transition: { duration: 0.5 } },
  };

  return (
    <Box
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        // cursor: 'pointer',
        backgroundColor: (theme) => theme.palette.primary.light,
        marginBottom: '1rem',
      }}
    >
      <Box sx={{ textDecoration: 'none' }}>
        <Card
          sx={{
            // marginTop: '1rem',
            paddingBottom: '1rem',
            // width: { xs: '100%', md: '20vw' },
            backgroundColor: (theme) => theme.palette.primary.light,
            color: (theme) => theme.palette.secondary.main,
            // borderColor: (theme) => theme.palette.lines.light,
            // borderRadius: '0.5rem',
            // borderStyle: 'solid',
            // borderWidth: '2px',
            transition: 'transform 0.3s ease-in-out',
            width: '380px', // The fixed width of each card
            height: '280px', // The fixed height of each card
            // paddingBo.: '1rem',

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

            {/* Image */}
            <CardMedia
              component="img"
              height="140"
              image={image}
              alt={title}
              // sx={{
              //   // opacity: isHovered ? 0 : 1,
              //   transition: 'opacity 0.5s ease-in-out', // Smooth transition for the image
              //   position: 'absolute',
              //   width: '100%',
              //   height: '100%',
              //   objectFit: 'cover',
              // }}
            />

            {/* Video */}
            {isHovered && project.previewLink && (
              <Box
                preload="metadata"
                component="video"
                autoPlay
                loop
                muted
                sx={{
                  display: isHovered ? 'block' : 'none', // Only display video when hovered
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  top: 0,
                  left: 0,
                  transition: 'opacity 0.5s ease-in-out', // Smooth transition for the video
                }}
              >
                <source src={project.previewLink} type="video/mp4" />
              </Box>
            )}

            {/* {isHovered && project.previewLink ? (
              <video
                preload="metadata"
                autoPlay
                loop
                muted
                style={{ width: '100%', height: '140px', objectFit: 'cover' }}
              >
                <source src={project.previewLink} type="video/mp4" />
              </video>
            ) : (
              <CardMedia component="img" height="140" image={image} />
            )} */}
          </CardActionArea>

          <CardContent
            sx={{
              height: '8rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              ...(isHovered && {
                transform: 'scale3d(1.02, 1.02, 1)',
                transition: 'opacity 0.5s ease-in-out',
                // boxShadow: '0 14px 28px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.1)',
              }),
              // '&:hover': {
              //   transform: 'scale3d(1.02, 1.02, 1)',
              //   boxShadow: '0 14px 28px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.1)',
              // },
            }}
          >
            <Box
              component="div"
              sx={{
                color: 'white',
                display: 'inline',
                marginBottom: '1rem',
                // fontWeight: 800,
              }}
            >
              {`Project ${index} `}
              <Typography
                component="div"
                sx={{
                  color: (theme) => theme.palette.accent.green,
                  display: 'inline',
                }}
              >
                {`// _${title}`}
              </Typography>
            </Box>
            <Typography variant="body2">{description}</Typography>
            <CardActions>
              {liveLink && (
                <Button
                  size="small"
                  sx={{
                    backgroundColor: (theme) => theme.palette.lines.light,
                    color: 'white',
                    textTransform: 'none',
                    // paddingX: '10px',
                  }}
                  href={liveLink}
                  target="_blank"
                >
                  view-project
                </Button>
              )}
              {repoLink && (
                <Button
                  size="small"
                  sx={{
                    backgroundColor: (theme) => theme.palette.lines.light,
                    color: 'white',
                    // textTransform: 'none',
                    margin: 0,
                  }}
                  href={repoLink}
                  target="_blank"
                >
                  <CustomIcon icon="ant-design:github-outlined" height={20} width={20} />
                </Button>
              )}
            </CardActions>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
