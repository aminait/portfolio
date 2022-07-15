import React, { useState } from 'react';
import Dropdown from '../common/Dropdown';

const dummyProjects = [
  {
    stack: 'React',
    checked: true,
  },
];

const ProjectsSideNav = ({ projects = dummyProjects, handleCheck }) => {
  return (
    <>
      <Dropdown text="projects"></Dropdown>
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
