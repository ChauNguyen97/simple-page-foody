import React from 'react';
import PropTypes from 'prop-types';

function Expert(props) {
  return (
    <section className="expert" id="expert">
      <div className="title">
        <h2 className="titleText">
          Our Kitchen <span>E</span>xpert
        </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="content">
        <div className="box">
          <div className="imgBx">
            <img src="./image/expert1.jpg" />
          </div>
          <div className="text">
            <h3>Someone Famous</h3>
          </div>
        </div>
        <div className="box">
          <div className="imgBx">
            <img src="./image/expert2.jpg" />
          </div>
          <div className="text">
            <h3>Someone Famous</h3>
          </div>
        </div>
        <div className="box">
          <div className="imgBx">
            <img src="./image/expert3.jpg" />
          </div>
          <div className="text">
            <h3>Someone Famous</h3>
          </div>
        </div>
        <div className="box">
          <div className="imgBx">
            <img src="./image/expert4.jpg" />
          </div>
          <div className="text">
            <h3>Someone Famous</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

Expert.propTypes = {};

export default Expert;
