import Head from 'next/head';
import React, { useState, useCallback } from 'react';

import MainLayout from '../layouts/MainLayout';
import BindInput from '../components/contact/BindInput';
import ContactForm from '../components/contact/ContactForm';

import { Grid, Typography } from '@mui/material';
import Dropdown from '../components/common/Dropdown';
import CustomIcon from '../components/common/CustomIcon';
import SuccessState from '../components/contact/SuccessState';

const contacts = [
  {
    name: 'aminait@outlook.com',
    icon: 'ri:mail-fill',
  },
];

const ContactMe = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    message: '',
    date: new Date(Date.now()).toLocaleString(),
  });
  const [submitted, setSubmitted] = useState(false);
  console.log('ContactMe -> values', values);

  const handleChange = useCallback((e) => {
    const eventName = e.target.name;
    const eventValue = e.target.value;
    setValues((prevState) => {
      return { ...prevState, [eventName]: eventValue };
    });
  }, []);

  const handleSubmit = () => {
    console.log('submiiiiit');
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    setValues({
      name: '',
      email: '',
      message: '',
      date: new Date(Date.now()).toLocaleString(),
    });
  };
  return (
    <>
      <Head>
        <title>Amina Ait | Contact</title>
      </Head>

      <Grid
        // direction="row"
        // spacing={4}
        container
        justifyContent="start"
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
          <Dropdown text="contacts">
            {contacts.map((contact, i) => (
              <div key={i}>
                <Typography variant="p">
                  <CustomIcon icon={contact.icon} />
                  {contact.name}
                </Typography>
              </div>
            ))}
          </Dropdown>
        </Grid>
        <Grid
          item
          sx={{
            width: {
              xs: '75%',
              md: '44%',
            },
            borderRight: `2px solid #1E2D3D`,
            paddingTop: submitted ? '20rem' : '5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
            alignItems: 'center',
          }}
        >
          {submitted ? (
            <SuccessState resetForm={resetForm} />
          ) : (
            <ContactForm
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          )}
        </Grid>
        <Grid
          item
          sx={{
            display: { xs: 'none', md: 'block' },
            paddingTop: '5rem',
            paddingLeft: '2rem',
          }}
        >
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
