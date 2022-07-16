import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Dropdown from '../components/common/Dropdown';
const About = () => {
  return (
    <div>
      <Dropdown key={1} text="professional-info" />
      <Dropdown key={2} text="contacts" />
    </div>
  );
};

About.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default About;
