import React from 'react';
import "./SectionHome.css";
import logo1 from '../assets/logo1.png';
const Section1 = () => {
    const handleContactClick = () => {
        const whatsappUrl = 'https://api.whatsapp.com/send?phone=5562995664176&text=Ol%C3%A1!%20Tenho%20interesse%20em%20saber%20mais%20sobre%20as%20oportunidades%20na%20My%20Idea.';
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="section1">
            <img className="img-banner" src={logo1} alt="Banner 1" />
            <div className="section1-content">
                <h3>My Idea</h3>
                <p>Soluções em tecnologia web.</p>
                <button className="contact-button" onClick={handleContactClick}>Saiba Mais</button>
            </div>
        </div>
    );
}


export default Section1;
