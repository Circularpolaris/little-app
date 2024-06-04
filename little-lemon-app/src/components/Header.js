import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../images/restauranfood.jpg'

const Header = () => {
  return (
    <header className = 'header'>
      <section>
        <div className = 'banner'>
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>Dive into a dining experience that takes you on a journey to a world of sunlit coasts, sparkling waters, and vibrant culture</p>
          <Link to="/booking"><button aria-label='On Click' data-testid="button">Reserve Table</button></Link>
        </div>
        <div className='banner-img'>
          <img src={bannerImg} alt='' />
        </div>
      </section>

    </header>
  );
};

export default Header;