import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./SectionHome.css";
import Section1 from './Section1';

const SectionHome = () => {
    return (
        <div className="home-section">
            <video autoPlay loop muted className="video-background">
                <source src={require('../assets/video-home.mp4')} type="video/mp4" />
            </video>
            <div className="content">
                <Carousel 
                    showArrows={true} 
                    showThumbs={false} 
                    autoPlay={true} 
                    interval={5000}
                    showStatus={false} // This will hide the "1 of 1" text
                >
                    <div>
                        <Section1 />
                    </div>
                </Carousel>
            </div>
        </div>
    );
}

export default SectionHome;
