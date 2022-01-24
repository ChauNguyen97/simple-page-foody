import React from 'react';
import './header.css';

function Header(props) {
  return (
    <header>
      <a href="#" className="logo">
        Food <span> . </span>  
      </a>
      
      <div className="menuToggle" onclick="toggleMenu();">
      </div>
      <ul className="navigation">
        <li>
          <a href="#banner"> Home </a>
        </li>
        <li>
          <a href="#about"> About </a>
        </li>
        <li>
          <a href="#menu"> Menu </a>
        </li>
        <li>
          <a href="#expert"> Expert </a>
        </li>
        <li>
          <a href="#testimonials"> Testimonials </a>
        </li>
        <li>
          <a href="#contact"> Contact </a>
        </li>
      </ul> 
    </header>
  );
}

Header.propTypes = {};

export default Header;
