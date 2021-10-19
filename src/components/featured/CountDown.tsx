import React, { useState, useEffect, useCallback } from 'react';
import { Slide } from 'react-awesome-reveal';

const CountDown = () => {
  const settings = {
    left: true,
    delay: 1000,
  };

  const renderItem = (time: number, value: string) => (
    <div className='countdown_item'>
      <div className='countdown_time'>{time}</div>
      <div className='countdown_tag'>{value}</div>
    </div>
  );

  const getTimeUntil = (deadline: string) => {
    const time = Date.parse(deadline) - Date.parse(new Date().toLocaleString());

    if (time < 0) {
      console.log('Date passed');
    } else {
      console.log('Still going');
    }
  };

  useEffect(() => {
    setInterval(() => getTimeUntil('Nov, 20, 2021, 01:20:00'), 1000);
  }, [getTimeUntil]);

  return (
    <Slide {...settings}>
      <div className='countdown_wrapper'>
        <div className='countdown_top'>Event starts in</div>
        <div className='countdown_bottom'>
          {renderItem(27, 'Days')}
          {renderItem(4, 'HS')}
          {renderItem(10, 'Min')}
          {renderItem(50, 'Sec')}
        </div>
      </div>
    </Slide>
  );
};

export default CountDown;
