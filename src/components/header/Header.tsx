import React, { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Toolbar, IconButton } from '@mui/material';

import SideDrawer from './SideDrawer';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [headerShow, setHeaderShow] = useState(false);

  const toggleDrawer = (value: boolean) => {
    setDrawerOpen(value);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setHeaderShow(true);
    } else {
      setHeaderShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <AppBar
      position='fixed'
      style={{
        backgroundColor: headerShow ? '#2f2f2f' : 'transparent',
        boxShadow: 'none',
        padding: '10px 0',
      }}
    >
      <Toolbar>
        <div className='header_logo'>
          <div className='font_righteous header_logo_venue'>The Venue</div>
          <div className='header_logo_title'>Musical Events</div>
        </div>

        <IconButton
          aria-label='Menu'
          color='inherit'
          onClick={() => toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <SideDrawer
          isOpen={drawerOpen}
          onClose={value => toggleDrawer(value)}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
