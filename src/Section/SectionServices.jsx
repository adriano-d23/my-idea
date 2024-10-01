import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SectionServices.css';

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
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section className="services">
            <div className="container">
                <div className="section-header">
                    <h2>Conheça nossos principais serviços</h2>
                    <div className="separator"></div>
                </div>
                <Slider {...settings}>
                    {services.map((service, index) => (
                        <div className="service-card" key={index}>
                            <img src={service.imageUrl} alt={service.title} className="service-image" />
                            <div className="service-content">
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}

export default SectionServices;
