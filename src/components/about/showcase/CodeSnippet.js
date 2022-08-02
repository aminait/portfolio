import React from 'react';
import { CodeBlock, anOldHope } from 'react-code-blocks';
import { Card, Grid, Stack, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import CustomIcon from '../../common/CustomIcon';

const CodeSnippet = () => {
  const code = `const button = document.querySelector('#sendBtn');
const message = {
name: "",
email: "",
message: "",
date: ""
}

button.addEventListener('click', () => {
  form.send(message);
})
  `;
  return (
    <>
      <Grid container display="flex" justifyContent="space-between">
        <Stack direction="row">
          <Avatar alt="Amina Ait" src="/static/avatar.jpeg" />
          <Stack direction="column">
            <Typography
              sx={{ color: (theme) => theme.palette.secondary.purple }}
            >
              {'@aminait'}
            </Typography>
            <Typography sx={{ color: (theme) => theme.palette.secondary.main }}>
              {'Created 5 months ago'}
            </Typography>
          </Stack>
        </Stack>
        <Stack direction="row">
          <CustomIcon icon="fa6-solid:comment-dots" />
          <CustomIcon icon="ri:star-fill" />
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
    </>
  );
};

export default CodeSnippet;
