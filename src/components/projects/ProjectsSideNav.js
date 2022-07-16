import React, { useState } from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox, { checkboxClasses } from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import Dropdown from '../common/Dropdown';
import CustomIcon from '../common/CustomIcon';

const dummyProjects = [
  {
    stack: ['react'],
    checked: true,
    icon: 'ri:reactjs-fill',
  },
];

const selectStack = [
  {
    name: 'React',
    icon: 'ri:reactjs-fill',
  },
  {
    name: 'Angular',
    icon: 'ri:angularjs-fill',
  },
  {
    name: 'Node.js',
    icon: 'akar-icons:node-fill',
  },
  {
    name: 'Firebase',
    icon: 'bxl:firebase',
  },
  {
    name: 'Mongodb',
    icon: 'bxl:mongodb',
  },
  {
    name: '.NET',
    icon: 'simple-icons:dotnet',
  },
];

const ProjectsSideNav = ({ projects = dummyProjects, handleCheck }) => {
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  return (
    <>
      <Dropdown text="projects">
        <List>
          {selectStack.map((stack, i) => {
            const labelId = `checkbox-list-label-${stack}`;
            return (
              <ListItem key={stack.name} disablePadding>
                <ListItemButton
                  role={undefined}
                  onClick={handleToggle(stack)}
                  disableRipple
                >
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={checked.indexOf(stack) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ 'aria-labelledby': labelId }}
                      sx={{
                        [`&, &.${checkboxClasses.checked}`]: {
                          color: (theme) => theme.palette.secondary.main,
                        },
                        overflow: 'hidden',
                      }}
                    />
                  </ListItemIcon>
                  <CustomIcon
                    icon={stack.icon}
                    sx={{ marginRight: '5px', marginLeft: '-25px' }}
                    height={25}
                    width={25}
                  />
                  <ListItemText
                    id={labelId}
                    primary={stack.name}
                    sx={{
                      '&.active .MuiTypography-root': {
                        fontWeight: 'bold',
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Dropdown>
      {/* <nav className="text-sm min-w-full lg:min-w-[13rem] min-h-fit lg:min-h-full lg:border-r-2 lg:border-r-lines flex flex-col">
        <DropDown name="projects">
          <div className="w-full space-y-3 ml-4 flex-col items-center">
            {stack.map((proj, id) => (
              <ProjectStack
                key={id}
                name={proj.stack}
                checked={proj.checked}
                id={id}
                handleCheck={handleCheck}
              />
            ))}
          </div>
        </DropDown>
      </nav> */}
    </>
  );
};

export default ProjectsSideNav;
