import React from 'react';
import './styles/index.css';

import Featured from 'components/featured/';
import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';
import HighLights from 'components/highlights';
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

      <div style={{ backgroundColor: 'red', height: '800px' }}></div>
      <div style={{ backgroundColor: 'blue', height: '800px' }}></div>
      <div style={{ backgroundColor: 'green', height: '800px' }}></div>
      <div style={{ backgroundColor: 'yellow', height: '800px' }}></div>

      <Footer />
    </div>
  );
};

export default App;
