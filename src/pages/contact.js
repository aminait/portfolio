import React, { useState, useCallback } from 'react';

import MainLayout from '../layouts/MainLayout';
import BindInput from '../components/contact/BindInput';
import ContactForm from '../components/contact/ContactForm';

import { Grid } from '@mui/material';

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
    <div>
      <Grid container direction="row">
        <Grid item>
          <ContactForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />{' '}
        </Grid>
        <Grid item sx={{ display: { xs: 'none', md: 'block' } }}>
          <BindInput values={values} />
        </Grid>
      </Grid>
    </div>
  );
};

ContactMe.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
export default ContactMe;
