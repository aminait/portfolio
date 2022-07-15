import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function ProjectCard({ project }) {
  const { index, image, tags, title, description, repoLink } = project;

  return (
    <>
      <Typography gutterBottom variant="h6" component="div">
        Project {`${index} // ${title}`}
      </Typography>
      <Card
        sx={{
          maxWidth: 300,
          backgroundColor: (theme) => theme.palette.primary.light,
          color: (theme) => theme.palette.secondary.main,
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography variant="body2">{description}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="secondary">
            Share
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
