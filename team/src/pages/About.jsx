import React from 'react';
import '../Styles/about.css';
const About = () => {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      <p>Welcome to our ExploreXP!</p>
      <div className="mission">
        <h2>Our Mission</h2>
        <p>We strive to provide amazing suggestion to travel around "India".</p>
      </div>
      <div className="team">
        <h2>Our Team</h2>
        <ul>
          <li>TARUUN PRASATH</li>
          <li>VISWANTH</li>
          <li>DARSHANA</li>
          <li>SABARI</li>
        </ul>
      </div>
      <div className="contact">
        <h2>Contact Us</h2>
        <p>Email: contact@example.com</p>
        <p>Phone: +123-456-7890</p>
      </div>
    </div>
  );
};

export default About;
