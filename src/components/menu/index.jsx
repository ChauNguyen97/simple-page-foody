import React from 'react';
import PropTypes from 'prop-types';

function Menu(props) {
  return (
    <section className="menu" id="menu">
      <div className="title">
        <h2 className="titleText">
          Our <span>M</span>enu
        </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="content">
        <div className="box">
          <div className="imgBx">
            <img src="./image/menu1.jpg" />
          </div>
          <div className="text">
            <h3>Special Salads</h3>
          </div>
        </div>
        <div className="box">
          <div className="imgBx">
            <img src="./image/menu2.jpg" />
          </div>
          <div className="text">
            <h3>Special Soup</h3>
          </div>
        </div>
        <div className="box">
          <div className="imgBx">
            <img src="./image/menu3.jpg" />
          </div>
          <div className="text">
            <h3>Special Pasta</h3>
          </div>
        </div>
        <div className="box">
          <div className="imgBx">
            <img src="./image/menu4.jpg" />
          </div>
          <div className="text">
            <h3>Salads</h3>
          </div>
        </div>
        <div className="box">
          <div className="imgBx">
            <img src="./image/menu5.jpg" />
          </div>
          <div className="text">
            <h3>Special Soup</h3>
          </div>
        </div>
        <div className="box">
          <div className="imgBx">
            <img src="./image/menu6.jpg" />
          </div>
          <div className="text">
            <h3>Special Noodles</h3>
          </div>
        </div>
      </div>
      <div className="title">
        <a href="#" className="btn">
          View all
        </a>
      </div>
    </section>
  );
}

Menu.propTypes = {};

export default Menu;
