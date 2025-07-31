import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./SectionHome.css";
import Section1 from './Section1';
import { motion } from 'framer-motion';

const SectionHome = () => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        // Criar partículas flutuantes
        const createParticles = () => {
            const newParticles = [];
            for (let i = 0; i < 20; i++) {
                newParticles.push({
                    id: i,
                    left: Math.random() * 100,
                    animationDelay: Math.random() * 6,
                    size: Math.random() * 3 + 2
                });
            }
            setParticles(newParticles);
        };

        createParticles();
    }, []);

    return (
        <div className="home-section">
            <video 
                autoPlay 
                loop 
                muted 
                className="video-background"
                preload="auto"
                playsInline
            >
                <source src={require('../assets/video-home.mp4')} type="video/mp4" />
            </video>
            
            {/* Partículas flutuantes */}
            <div className="floating-particles">
                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        className="particle"
                        style={{
                            left: `${particle.left}%`,
                            width: `${particle.size}px`,
                            height: `${particle.size}px`,
                            animationDelay: `${particle.animationDelay}s`
                        }}
                        animate={{
                            y: [-100, window.innerHeight + 100],
                            rotate: [0, 360]
                        }}
                        transition={{
                            duration: 6 + particle.animationDelay,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                ))}
            </div>

            <div className="content">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <Carousel 
                        showArrows={true} 
                        showThumbs={false} 
                        autoPlay={true} 
                        interval={5000}
                        showStatus={false}
                        infiniteLoop={true}
                        stopOnHover={false}
                    >
                        <div>
                            <Section1 />
                        </div>
                    </Carousel>
                </motion.div>
            </div>
        </div>
    );
}

export default SectionHome;
