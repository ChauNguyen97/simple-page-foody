import React from 'react';
import PropTypes from 'prop-types';

function Banner(props) {
  return (
    <div className="banner" id="banner">
      <div className="content">
        <h2>Always Choose Good</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <a href="#" className="btn">
          Our Menu
        </a>
      </div>
    </div>
  );
}

Banner.propTypes = {};

export default Banner;
