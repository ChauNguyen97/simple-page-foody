import React from 'react';
import PropTypes from 'prop-types';

function Testimonials(props) {
  return (
    <section className="testimonials" id="testimonials">
      <div className="title white">
        <h2 className="titleText">
          They <span>S</span>aid About Us
        </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="content">
        <div className="box">
          <div className="imgBx">
            <img src="./image/testi1.jpg" />
          </div>
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              ultrices turpis ut erat eleifend, vel viverra nisl eleifend.
              Aenean vehicula nisl quis suscipit rutrum. Cras scelerisque sit
              amet ante ac commodo. Maecenas iaculis et diam vitae bibendum.
              Phasellus nec euismod ante.
            </p>
            <h3>Someone Famous</h3>
          </div>
        </div>
        <div className="box">
          <div className="imgBx">
            <img src="./image/testi2.jpg" />
          </div>
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              ultrices turpis ut erat eleifend, vel viverra nisl eleifend.
              Aenean vehicula nisl quis suscipit rutrum. Cras scelerisque sit
              amet ante ac commodo. Maecenas iaculis et diam vitae bibendum.
              Phasellus nec euismod ante.
            </p>
            <h3>Someone Famous</h3>
          </div>
        </div>
        <div className="box">
          <div className="imgBx">
            <img src="./image/testi3.jpg" />
          </div>
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              ultrices turpis ut erat eleifend, vel viverra nisl eleifend.
              Aenean vehicula nisl quis suscipit rutrum. Cras scelerisque sit
              amet ante ac commodo. Maecenas iaculis et diam vitae bibendum.
              Phasellus nec euismod ante.
            </p>
            <h3>Someone Famous</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

Testimonials.propTypes = {};

export default Testimonials;
