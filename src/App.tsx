import React from 'react';
import './styles/index.css';
import { Element } from 'react-scroll';

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

      <Element name='featured'>
        <Featured />
      </Element>

      <Element name='venuenfo'>
        <VenueInfo />
      </Element>

      <Element name='highlights'>
        <HighLights />
      </Element>

      <Element name='pricing'>
        <Pricing />
      </Element>

      <Element name='location'>
        <Location />
      </Element>

      <Footer />
    </div>
  );
};

export default App;
