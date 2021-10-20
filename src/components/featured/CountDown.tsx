import React, { useState, useEffect, useCallback } from 'react';
import { Slide } from 'react-awesome-reveal';

interface ITime {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

const CountDown = () => {
  const [time, setTime] = useState<ITime>({
    days: '0',
    hours: '0',
    minutes: '0',
    seconds: '0',
  });

  const settings = {
    left: true,
    delay: 1000,
  };

  const renderItem = (time: string, value: string) => (
    <div className='countdown_item'>
      <div className='countdown_time'>{time}</div>
      <div className='countdown_tag'>{value}</div>
    </div>
  );

  const getTimeUntil = useCallback((deadline: string) => {
    const time = Date.parse(deadline) - Date.parse(new Date().toLocaleString());

    if (time < 0) {
      console.log('Date passed');
    } else {
      const seconds = Math.floor((time / 1000) % 60).toString();
      const minutes = Math.floor((time / 1000 / 60) % 60).toString();
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24).toString();
      const days = Math.floor(time / (1000 * 60 * 60 * 24)).toString();

      setTime({
        days,
        hours,
        minutes,
        seconds,
      });
    }
  }, []);

  useEffect(() => {
    setInterval(() => getTimeUntil('Dec, 20, 2021, 01:20:00'), 1000);
  }, [getTimeUntil]);

  return (
    <Slide {...settings}>
      <div className='countdown_wrapper'>
        <div className='countdown_top'>Event starts in</div>
        <div className='countdown_bottom'>
          {renderItem(time.days, 'Days')}
          {renderItem(time.hours, 'HS')}
          {renderItem(time.minutes, 'Min')}
          {renderItem(time.seconds, 'Sec')}
        </div>
      </div>
    </Slide>
  );
};

export default CountDown;
