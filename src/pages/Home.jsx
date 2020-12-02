import React from 'react';
import { Helmet } from 'react-helmet';

import { HeaderContainer, FooterContainer } from '../containers';

function Home() {
  return (
    <>
      <Helmet title="Home" />
      <h1>Home</h1>
    </>
  );
}

export default Home;
