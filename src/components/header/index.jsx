import './header.css';

import React from 'react';


window.addEventListener("scroll", function() {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

function toggleMenu() {
  const menuToggle = document.querySelector(".menuToggle");
  const navigation = document.querySelector(".navigation");
  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
  }

function Header(props) {
  return (
    <header>
      <a href="#" className="logo">
        Food <span> . </span>  
      </a>
      
      <div className="menuToggle" onClick={toggleMenu}>
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
