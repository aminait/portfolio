import Head from 'next/head';
import React, { useState, useCallback } from 'react';

import MainLayout from '../layouts/MainLayout';
import BindInput from '../components/contact/BindInput';
import ContactForm from '../components/contact/ContactForm';

import { Grid } from '@mui/material';
import Dropdown from '../components/common/Dropdown';
const ContactMe = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    message: '',
    date: new Date(Date.now()).toLocaleString(),
  });
  console.log('ContactMe -> values', values);

  const [submitted, setSubmitted] = useState(false);

  const handleChange = useCallback((e) => {
    const eventName = e.target.name;
    const eventValue = e.target.value;
    setValues((prevState) => {
      return { ...prevState, [eventName]: eventValue };
    });
  }, []);

  const handleSubmit = {};
  return (
    <>
      <Head>
        <title>Amina Ait | Contact</title>
      </Head>

      <Grid
        container
        direction="row"
        spacing={4}
        // justifyContent="center"
        sx={{
          height: '100%',
        }}
      >
        <Grid
          item
          sx={{
            width: {
              xs: '75%',
              md: '12%',
            },
            borderRight: `2px solid #1E2D3D`,
          }}
        >
          <Dropdown text="contacts"></Dropdown>
        </Grid>
        <Grid item sx={{ borderRight: `2px solid #1E2D3D` }}>
          <ContactForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />{' '}
        </Grid>
        <Grid item sx={{ display: { xs: 'none', md: 'block' } }}>
          <BindInput values={values} />
        </Grid>
      </Grid>
    </>
  );
};

ContactMe.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
export default ContactMe;
