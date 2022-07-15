import React from 'react';

import MainLayout from '../layouts/MainLayout';

const ContactMe = () => {
  return <div>ContactMe</div>;
};

ContactMe.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
export default ContactMe;
