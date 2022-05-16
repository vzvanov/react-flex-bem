import React from "react";

const Footer = ({ text }) => {
  return (
    <footer className="footer">
      <div className='container'>
        <div className="footer__row">
          <div className="footer__text">{text}</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;