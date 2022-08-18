import Head from 'next/head';
import React, { useState, useCallback } from 'react';

import MainLayout from '../layouts/MainLayout';
import BindInput from '../components/sections/contact/BindInput';
import ContactForm from '../components/sections/contact/ContactForm';

import { Grid, Typography, List, ListItem } from '@mui/material';
import Dropdown from '../components/common/Dropdown';
import CustomIcon from '../components/common/CustomIcon';
import SuccessState from '../components/sections/contact/SuccessState';

const contacts = [
  {
    name: 'aminait@outlook.com',
    icon: 'ri:mail-fill',
    link: 'mailto:aminait@outlook.com',
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

  const handleChange = useCallback((e) => {
    const eventName = e.target.name;
    const eventValue = e.target.value;
    setValues((prevState) => {
      return { ...prevState, [eventName]: eventValue };
    });
  }, []);

  const handleSubmit = () => {
    const { name, email, message, date } = values;
    const data = {
      name,
      email,
      message,
      date,
    };

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        setSubmitted(true);
        setValues({
          name: '',
          email: '',
          message: '',
          date: new Date(Date.now()).toLocaleString(),
        });
      }
    });
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
        container
        justifyContent="start"
        sx={{ height: { xs: 'auto', md: '100%' } }}
      >
        <Grid
          item
          sx={{
            width: {
              xs: 'inherit',
              md: '12%',
            },
            borderRight: `2px solid #1E2D3D`,
          }}
        >
          <Dropdown text="contacts">
            <List>
              {contacts.map((contact, i) => (
                // <div key={i}>
                <ListItem key={i} sx={{ cursor: 'pointer' }}>
                  <a
                    href={contact.link}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <Typography variant="p">
                      <CustomIcon
                        icon={contact.icon}
                        sx={{ marginRight: '10px' }}
                      />
                      {contact.name}
                    </Typography>
                  </a>
                </ListItem>
                // </div>
              ))}
            </List>
          </Dropdown>
        </Grid>
        <Grid
          item
          sx={{
            width: {
              xs: 'inherit',
              md: '44%',
            },
            borderRight: {
              xs: '',
              md: `2px solid #1E2D3D`,
            },
            paddingTop: {
              xs: '5rem',
              md: submitted ? '20rem' : '5rem',
            },

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
