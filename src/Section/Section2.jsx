import React from 'react';
import "./SectionHome.css";
import logo1 from '../assets/logo1.png';

const Section2 = () => {
  return (
    <div className="section2">
      <img className="img-banner" src={logo1} alt="Banner 1" />
      <div className="section2-content">

        <h3>My Idea</h3>
        <p>Soluções em tecnologia web.</p>
      </div>
    </div>

  );
}

export default Section2;
