import React from 'react';
import './styles/index.css';

import Header from './components/header/Header';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <div style={{ backgroundColor: 'red', height: '800px' }}></div>
      <div style={{ backgroundColor: 'blue', height: '800px' }}></div>
      <div style={{ backgroundColor: 'green', height: '800px' }}></div>
      <div style={{ backgroundColor: 'yellow', height: '800px' }}></div>
    </div>
  );
};

export default App;
