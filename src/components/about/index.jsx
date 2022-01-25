import React from 'react';
import PropTypes from 'prop-types';

function About(props) {
  return (
    <section className="about" id="about">
      <div className="row">
        <div className="col50">
          <h2 className="titleText">
            <span>A</span>bout Us
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            ultrices turpis ut erat eleifend, vel viverra nisl eleifend. Aenean
            vehicula nisl quis suscipit rutrum. Cras scelerisque sit amet ante
            ac commodo. Maecenas iaculis et diam vitae bibendum. Phasellus nec
            euismod ante, vitae finibus ipsum. Aliquam erat volutpat.
            <br />
            <br />
            Quisque fermentum feugiat dictum. Suspendisse consequat, metus
            ultricies mollis iaculis, velit elit lobortis eros, eget gravida
            urna metus vitae augue. Aenean fringilla eleifend risus, ut
            convallis quam rhoncus sit amet.
          </p>
        </div>
        <div className="col50">
          <div className="imgBx">
            <img src="./image/img1.jpg" />
          </div>
        </div>
      </div>
    </section>
  );
}

About.propTypes = {};

export default About;
