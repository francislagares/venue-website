import React from 'react';

const Location = () => {
  return (
    <div className='location_wrapper'>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.33747820096!2d-96.8072804848178!3d32.783309880970045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e993d0ea3c1ff%3A0x1859d2cc74f588e2!2sThe%20Dallas%20World%20Aquarium!5e0!3m2!1sen!2ses!4v1635183765841!5m2!1sen!2ses'
        width='100%'
        height='500'
        allowFullScreen
        loading='lazy'
      ></iframe>
      <div className='location_tag'>
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
