import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SectionServices.css';
import { motion } from 'framer-motion';

// Importando as imagens
import marketingImg from '../assets/marketing.png';
import criacaoSitesImg from '../assets/criacao-site.png';
import desenvolvimentoSistemasImg from '../assets/developer.png';
import droneImg from '../assets/gravacao-drone.png';
import bancoDadosImg from '../assets/banco-de-dados.png';

const services = [
    {
        title: 'Marketing Digital',
        description: 'Abarca a divulgação e criação de conteúdos para promoção da marca na internet.',
        imageUrl: marketingImg,
    },
    {
        title: 'Criação de Sites',
        description: 'Desenvolvimento de sites personalizados de acordo com a cultura de cada empresa',
        imageUrl: criacaoSitesImg,
    },
    {
        title: 'Desenvolvimento de Sistemas',
        description: 'Criação de sistemas web e mobile usando as principais ferramentas de desenvolvimento.',
        imageUrl: desenvolvimentoSistemasImg,
    },
    {
        title: 'Gravação de Vídeos com Drone',
        description: 'Produção de vídeos com drone para divulgação de marketing empresarial.',
        imageUrl: droneImg,
    },
    {
        title: 'Gerenciamento de Banco de Dados',
        description: 'Administração e manutenção de bancos de dados para garantir desempenho e segurança.',
        imageUrl: bancoDadosImg,
    }
];

const SectionServices = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="services">
            <div className="container">
                <motion.div 
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2>Conheça nossos principais serviços</h2>
                    <div className="separator"></div>
                </motion.div>
                
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <Slider {...settings}>
                        {services.map((service, index) => (
                            <motion.div 
                                key={index}
                                variants={itemVariants}
                                whileHover={{ 
                                    scale: 1.02,
                                    transition: { duration: 0.2 }
                                }}
                            >
                                <div className="service-card">
                                    <img 
                                        src={service.imageUrl} 
                                        alt={service.title} 
                                        className="service-image" 
                                    />
                                    <div className="service-content">
                                        <h3>{service.title}</h3>
                                        <p>{service.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </Slider>
                </motion.div>
            </div>
        </section>
    );
}

export default SectionServices;
