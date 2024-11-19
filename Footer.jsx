import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-back-to-top">
        <a href="#top">Back to top</a>
      </div>
      <div className="footer-content">
        <div className="footer-column">
          <h4>Get to Know Us</h4>
          <ul>
            <li><a href="#">About Amazon</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Amazon Science</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Shop with Us</h4>
          <ul>
            <li><a href="#">Your Account</a></li>
            <li><a href="#">Your Orders</a></li>
            <li><a href="#">Your Addresses</a></li>
            <li><a href="#">Your Lists</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Make Money with Us</h4>
          <ul>
            <li><a href="#">Sell on Amazon</a></li>
            <li><a href="#">Advertise Your Products</a></li>
            <li><a href="#">Fulfillment by Amazon</a></li>
            <li><a href="#">Supply to Amazon</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Let Us Help You</h4>
          <ul>
            <li><a href="#">Help</a></li>
            <li><a href="#">Shipping & Delivery</a></li>
            <li><a href="#">Returns & Replacements</a></li>
            <li><a href="#">Amazon App Download</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-country">
          <span>English</span>
          <span> | </span>
          <span>Egypt</span>
        </div>
        <div className="footer-copyright">
          <p>Conditions of Use & Sale | Privacy Notice | Interest-Based Ads</p>
          <p>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
