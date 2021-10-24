import React, { useState, useEffect } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import MyButton from '../button';

const Discount = () => {
  const settings = {
    right: true,
  };
  const end = 30;
  const [start, setStart] = useState(0);

  const porcentage = () => {
    if (start < end) {
      setStart(prevCount => prevCount + 1);
    }
  };

  useEffect(() => {
    if (start > 0 && start < 30) {
      setTimeout(() => {
        setStart(prevCount => prevCount + 1);
      }, 30);
    }
  }, [start]);

  return (
    <div className='center_wrapper'>
      <div className='discount_wrapper'>
        <Fade
          onVisibilityChange={inView => {
            if (inView) {
              porcentage();
            }
          }}
        >
          <div className='discount_porcentage'>
            <span>{start}%</span>
            <span>OFF</span>
          </div>
        </Fade>

        <Slide {...settings}>
          <div className='discount_description'>
            <h3>Purchase ticket before 20th June</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <MyButton
              link='http://google.com'
              size='small'
              style={{
                background: '#ffa800',
                color: '#ffffff',
              }}
              iconTicket={true}
            >
              Purchase Tickets
            </MyButton>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Discount;
