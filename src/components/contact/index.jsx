import React from 'react';
import PropTypes from 'prop-types';

function Contact(props) {
  return (
    <section className="contact" id="contact">
      <div className="title">
        <h2 className="titleText">
          <span>C</span>ontract Us
        </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="contactForm">
        <h3>Send message</h3>
        <div className="inputBox">
          <input type="text" placeholder="Name" />
        </div>
        <div className="inputBox">
          <input type="text" placeholder="Email" />
        </div>
        <div className="inputBox">
          <textarea placeholder="Message" defaultValue={""} />
        </div>
        <div className="inputBox">
          <input type="submit" defaultValue="Send" />
        </div>
      </div>
    </section>
  );
}

Contact.propTypes = {};

export default Contact;
