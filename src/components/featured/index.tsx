import React from 'react';
import Carrousel from './Carrousel';
import CountDown from './CountDown';

const Featured = () => {
  return (
    <div className='featured_container'>
      <Carrousel />
      <div className='artist_name'>
        <div className='wrapper'>Ariana Grande</div>
      </div>
      <CountDown />
    </div>
  );
};

export default Featured;
