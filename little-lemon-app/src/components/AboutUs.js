import React from 'react';
import chicagoImgg from '../images/restaurant.jpg'
import chicagoImg from '../images/chef.jpg'

const AboutUs = () => {
  return (
    <section className = 'header'>
      <section>
        <div className = 'banner'>
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>We are family owned Mediterranean restaurant where contemporary elements merge with warm earthy tones, mirroring the natural beauty of the Mediterranean. Each detail is intentionally chosen to create an atmosphere of awe and exploration, harmoniously uniting the iconic with the timeless.</p>
        </div>
        <div className = 'chicago'>
          <img src={chicagoImg} alt='' className = 'chicago1'/>
          <img src={chicagoImgg} alt='' className = 'chicago2'/>


        </div>
      </section>

    </section>
  );
};

export default AboutUs;