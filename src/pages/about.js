import React from 'react';
import Head from 'next/head';

import MainLayout from '../layouts/MainLayout';
import Dropdown from '../components/common/Dropdown';
const About = () => {
  return (
    <div>
      <Head>
        <title>Amina Ait | About</title>
      </Head>
      <Dropdown key={1} text="professional-info" />
      <Dropdown key={2} text="contacts" />
    </div>
  );
};

About.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default About;
