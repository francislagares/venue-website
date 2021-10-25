import React from 'react';
import './styles/index.css';

import Featured from 'components/featured/';
import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';
import HighLights from 'components/highlights';
import Location from 'components/location';
import Pricing from 'components/pricing';
import VenueInfo from 'components/venueInfo';

const App = () => {
  return (
    <div className='app'>
      <Header />

      <>
        <Featured />
      </>

      <>
        <VenueInfo />
      </>

      <>
        <HighLights />
      </>

      <>
        <Pricing />
      </>

      <>
        <Location />
      </>

      <Footer />
    </div>
  );
};

export default App;
